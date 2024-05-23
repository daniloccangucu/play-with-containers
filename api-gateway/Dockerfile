# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN mkdir -p /var/log/api-gateway && chown -R node:node /var/log/api-gateway

USER node

# Expose the port that the API Gateway will run on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
