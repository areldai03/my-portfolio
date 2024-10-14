FROM node:22-bookworm-slim

WORKDIR /app

COPY /app/package*.json ./
RUN npm install
COPY app .

