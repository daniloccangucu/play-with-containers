# Dockerfile for DinD with RabbitMQ using Debian
FROM debian:bullseye-slim

# Install necessary packages
RUN apt-get update && apt-get install -y \
    wget \
    tar \
    curl \
    jq \
    ca-certificates \
    openssl \
    erlang-base \
    erlang-asn1 \
    erlang-crypto \
    erlang-public-key \
    erlang-ssl \
    erlang-tools \
    erlang-xmerl \
    erlang-os-mon \
    erlang-inets \
    erlang-eldap \
    gosu \
    logrotate \
    rsyslog \
    xz-utils \
    && rm -rf /var/lib/apt/lists/*

# Download and install RabbitMQ
RUN mkdir -p /opt/rabbitmq \
    && wget https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.9/rabbitmq-server-generic-unix-3.8.9.tar.xz \
    && tar -xvf rabbitmq-server-generic-unix-3.8.9.tar.xz -C /opt/rabbitmq --strip-components=1 \
    && rm rabbitmq-server-generic-unix-3.8.9.tar.xz

# Add RabbitMQ to PATH
ENV PATH $PATH:/opt/rabbitmq/sbin

# Copy the custom entrypoint script
COPY custom-entrypoint.sh /usr/local/bin/custom-entrypoint.sh

RUN chmod +x /usr/local/bin/custom-entrypoint.sh

# Expose RabbitMQ port
EXPOSE 5672

ENTRYPOINT ["/usr/local/bin/custom-entrypoint.sh"]
