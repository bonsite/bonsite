# Use a imagem oficial do PostgreSQL como base
FROM postgres:latest

# Copie o arquivo SQL para dentro do container
COPY init.sql /docker-entrypoint-initdb.d/

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432
