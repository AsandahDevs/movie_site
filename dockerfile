# Development Dockerfile
FROM node:18-bullseye-slim

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .