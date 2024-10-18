FROM node:22-bookworm-slim

WORKDIR /app

COPY /docs/package*.json ./
RUN npm install
COPY docs .

