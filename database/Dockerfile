FROM postgres:16-alpine

ENV POSTGRES_DB=bonsite_db
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=yourpassword

COPY init.sql /docker-entrypoint-initdb.d/