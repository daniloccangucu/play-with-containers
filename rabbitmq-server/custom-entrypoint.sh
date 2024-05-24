#!/bin/sh

# Start RabbitMQ server in the background
rabbitmq-server &

# Wait for RabbitMQ to start
while ! rabbitmqctl status; do
  sleep 1
done

# Add a new user and set permissions
rabbitmqctl add_user danilo dan1234
rabbitmqctl set_user_tags danilo administrator
rabbitmqctl set_permissions -p / danilo ".*" ".*" ".*"

# Wait for RabbitMQ server to exit
wait