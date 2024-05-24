### Audit Questions with Answers Batch #1

**1. What are containers and what are their advantages?**

Containers are lightweight, standalone, and executable software packages that include everything needed to run a piece of software, including the code, runtime, libraries, and system tools. Advantages include consistency across multiple development and release cycles, efficiency due to less overhead than virtual machines, and scalability.

**2. What is the difference between containers and virtual machines?**

Containers share the host OS kernel and isolate the application processes, making them lightweight and faster to start. Virtual machines include a full OS with dedicated resources, making them heavier and slower to start but providing full isolation.

**3. What is Docker and what is it used for?**

Docker is a platform and tool for developing, shipping, and running applications in containers. It automates the deployment of applications inside lightweight, portable containers, improving efficiency and consistency in development workflows.

### Additional Audit Questions with Answers Batch #2

**1. What is a microservices' architecture?**

Microservices architecture is a design approach where an application is composed of small, independent services that communicate over APIs. Each service is focused on a specific business function and can be developed, deployed, and scaled independently.

**2. Why do we use microservices architecture?**

Microservices architecture is used for its scalability, flexibility, and ability to improve development speed by allowing different teams to work on separate services simultaneously. It enhances fault isolation and enables easier maintenance and updates.

**3. What is a queue and what is it used for?**

A queue is a data structure that stores messages in a FIFO (First In, First Out) order. It is used for decoupling components, load balancing, and ensuring reliable communication between distributed systems.

**4. What is RabbitMQ?**

RabbitMQ is an open-source message broker that implements the Advanced Message Queuing Protocol (AMQP). It facilitates communication between distributed applications by allowing them to send and receive messages through queues.

### Audit Questions with Answers Batch #3

**1. What is a Dockerfile?**

A Dockerfile is a script composed of a series of instructions on how to build a Docker image. It automates the process of creating Docker images by specifying the base image, copying files, running commands, setting environment variables, and more.

**2. Explain the instructions used in the Dockerfile.**

- **FROM**: Specifies the base image to use.
- **WORKDIR**: Sets the working directory inside the container.
- **COPY**: Copies files from the host to the container.
- **RUN**: Executes commands in the container.
- **ENV**: Sets environment variables.
- **USER**: Specifies the user to run commands as.
- **EXPOSE**: Documents the port on which the container listens.
- **CMD**: Specifies the default command to run when the container starts.