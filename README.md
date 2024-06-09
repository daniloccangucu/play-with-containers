Here's the revised `README.md` tailored to your specific project:

```markdown
# Play with Containers

This project demonstrates the deployment of a microservices architecture using Docker Compose. It includes services such as `inventory-database`, `billing-database`, `inventory-app`, `billing-app`, `rabbitmq`, and `api-gateway`.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuration

1. **Clone the Repository**
   ```bash
   git clone https://01.gritlab.ax/git/danr0x/play-with-containers
   cd play-with-containers
   ```

2. **Environment Variables**
   - Create a `.env` file in the root directory.
   - Define necessary environment variables:
     ```dotenv
            NODE_USER=node
            PGUSER=postgres
            PGPASSWORD=xxxxxxx
            PGDATABASE=movies
            PGHOST=inventory-database
            PG_2_HOST=billing-database
            PGPORT=5432
            PG_2_USER=postgres
            PG_2_PASSWORD=xxxxxxx
            PG_2_DATABASE=orders
            PG_2_PORT=5432
            RABBITMQ_URL=amqp://danilo:dan1234@rabbitmq:5672
            RABBITMQ_QUEUE=billing_queue
            RABBITMQ_USER=danilo
            RABBITMQ_USER_PWD=dan1234
            GATEWAY_PORT=3000
            GATEWAY_HOST=::
            INVENTORY_API_URL=http://inventory-app:8080/movies
            INVENTORY_PORT=8080
            BILLING_PORT=8080
     ```

## Setup

**Start Containers**
   ```bash
   docker-compose up
   ```

## Usage

### Access Services

- **API Gateway**: [http://localhost:3000](http://localhost:3000)
- **Inventory App**: Internal communication through Docker network
- **Billing App**: Internal communication through Docker network

### Stopping Services

- **Stop and Remove Containers**:
  ```bash
  docker-compose down
  ```

### Troubleshooting

- **Check Container Logs**:
  ```bash
  docker logs <container_name>
  ```

- **Restart a Container**:
  ```bash
  docker restart <container_name>
  ```

## License

This project is licensed under the MIT License.
```