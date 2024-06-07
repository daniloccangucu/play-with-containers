# Based on Debian (postgres:13 image).
FROM postgres:13
ENV POSTGRES_USER=${PGUSER}
ENV POSTGRES_PASSWORD=${PGPASSWORD}
COPY ./scripts/db-inventory /docker-entrypoint-initdb.d
RUN chmod +x /docker-entrypoint-initdb.d/1-configure-postgres.sh
