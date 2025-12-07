# Docker Networking & Registry Cheat Sheet

## Dockerfile & Docker Compose Blueprint

**Dockerfile (example)**

```
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npm", "start"]
```

**Docker Compose (example)**

```
services:
  frontend:
    build: ./frontend   # or use image: <registry>/<image>:<tag>
    ports:
      - '3000:80'
    volumes:
      - ./frontend:/app
    depends_on:
      - backend

  backend:
    build: ./backend    # or use image: <registry>/<image>:<tag>
    ports:
      - '5000:5000'
    volumes:
      - ./backend:/app
    environment:
      - PORT=5000
```

## Essential Commands

**Docker Basics**

```
docker build -t <username>/<image>:<tag> <path>
docker run -p <host_port>:<container_port> <image>:<tag>
docker images
docker ps -a
docker stop <container_id>
docker rm <container_id>
```

**Docker Compose**

```
docker compose up -d --build
docker compose up -d
docker compose down
docker compose logs -f
```

## Pushing to a Registry

**Docker Hub**

```
docker login
docker tag <image>:<tag> <username>/<image>:<tag>
docker push <username>/<image>:<tag>
docker pull <username>/<image>:<tag>
```

**AWS ECR**

```
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
docker tag <image>:<tag> <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repo>:<tag>
docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repo>:<tag>
docker pull <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<repo>:<tag>
```

## Docker Networks

```
docker network create <network_name>
docker run --network <network_name> -p <host_port>:<container_port> <image>
docker network inspect <network_name>
docker network rm <network_name>
```

- Docker Compose automatically handles networks; containers can communicate via service names.

## Using Registry Images in Docker Compose

```
frontend: image: <username>/<image>:<tag>, ports: 3000:80, depends_on: backend
backend: image: <username>/<image>:<tag>, ports: 5000:5000
```

- Pull images directly from registry; no local build required
- Ensure depends_on and service names match your app configuration
