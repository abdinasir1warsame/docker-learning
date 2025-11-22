# Docker & Docker Compose Cheat Sheet

## 1. Docker Basics

### Images

* Build an image from Dockerfile:

```
docker build -t <image_name>:<tag> .
```

* List local images:

```
docker images
```

* Remove an image:

```
docker rmi <image_name_or_id>
```

### Containers

* Run a container:

```
docker run -p <host_port>:<container_port> <image_name>
```

* Run container in detached mode:

```
docker run -d -p <host_port>:<container_port> <image_name>
```

* List running containers:

```
docker ps
```

* List all containers:

```
docker ps -a
```

* Stop a container:

```
docker stop <container_id_or_name>
```

* Remove a container:

```
docker rm <container_id_or_name>
```

* View container logs:

```
docker logs <container_id_or_name>
```

* Execute a shell inside container:

```
docker exec -it <container_id_or_name> sh
# or bash if available
docker exec -it <container_id_or_name> bash
```

### Dockerfile Essentials

* **Basic Node backend**

```
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
```

* **React frontend with Nginx**

```
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 2. Docker Compose Basics

### docker-compose.yml Example

```
version: '3.9'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
    environment:
      - PORT=5000
```

### Common Commands

* Build and start all services:

```
docker-compose up --build
```

* Start in detached mode:

```
docker-compose up -d
```

* Stop all services:

```
docker-compose down
```

* Rebuild a service:

```
docker-compose build <service_name>
```

* View logs:

```
docker-compose logs
```

* Follow logs:

```
docker-compose logs -f
```

* Run a one-time command in a service:

```
docker-compose run <service_name> <command>
```

* Execute shell inside a service container:

```
docker-compose exec <service_name> sh
```

### Tips

* Expose only necessary ports.
* Use **volumes** to sync code during development.
* Use **multi-stage builds** for frontends to keep images small.
* `depends_on` ensures order but doesn’t guarantee readiness; consider wait scripts for databases or APIs.
