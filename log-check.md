# Step 1: List running containers
docker ps

# Example output
CONTAINER ID   IMAGE                          COMMAND                  CREATED         STATUS         PORTS                    NAMES
abc123def456   pwc-inventory-app-api-gateway  "docker-entrypoint.s…"   5 minutes ago   Up 5 minutes   0.0.0.0:3000->3000/tcp   pwc-inventory-app-api-gateway-1

# Step 2: Access the container
docker exec -it pwc-inventory-app-api-gateway-1 sh

# Step 3: Navigate to the log directory
cd /var/log/api-gateway
ls -la

# Step 4: Inspect log file
cat gateway.log
