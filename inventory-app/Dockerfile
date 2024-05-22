# Use Debian-based Node.js image
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY wait-for-it.sh /app/wait-for-it.sh

EXPOSE 8080
CMD ["./wait-for-it.sh", "inventory-db:5432", "--", "node", "src/server.js"]
