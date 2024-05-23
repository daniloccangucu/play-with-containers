import path from "path";
import fs from "fs";
import http from "http";
import https from "https";
import url from "url";

const logDir = "/var/log/api-gateway";
const logFilePath = path.join(logDir, "gateway.log");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logStream = fs.createWriteStream(logFilePath, { flags: "a" });

function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}_${hour}-${minute}-${second}`;
}

function logMessage(message) {
  const timestampedMessage = `${getTimestamp()} ${message}\n`;
  console.log(timestampedMessage.trim());
  logStream.write(timestampedMessage);
}

function customProxy(req, res) {
  const targetUrl = process.env.INVENTORY_API_URL;
  const parsedUrl = url.parse(targetUrl);

  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.pathname + req.url.replace("/api/movies", ""),
    method: req.method,
    headers: {
      ...req.headers,
      host: parsedUrl.hostname,
    },
  };

  logMessage(
    `Proxying ${req.method} request to: ${options.hostname}:${options.port}${options.path}`
  );

  const proxy = (parsedUrl.protocol === "https:" ? https : http).request(
    options,
    function (proxyRes) {
      logMessage(`Response from target: ${proxyRes.statusCode}`);
      proxyRes.pipe(res, { end: true });
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
    }
  );

  proxy.on("error", function (err) {
    logMessage(`Proxy error: ${err}`);
    res.status(500).send("Proxy error");
  });

  if (req.method === "POST" || req.method === "PUT") {
    const bodyData = JSON.stringify(req.body);
    logMessage(`Forwarding body: ${bodyData}`);
    proxy.setHeader(
      "Content-Type",
      req.headers["content-type"] || "application/json"
    );
    proxy.setHeader("Content-Length", Buffer.byteLength(bodyData));
    proxy.write(bodyData);
    proxy.end();
  } else {
    req.pipe(proxy, { end: true });
  }
}

export default customProxy;
