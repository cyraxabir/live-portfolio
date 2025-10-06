# Multi-stage Dockerfile
# 1) Build the app with Node
FROM node:lts AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy rest of the sources and build
COPY . .
RUN npm run build

# 2) Serve the built files with nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx config and use the built-in static file serving
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
