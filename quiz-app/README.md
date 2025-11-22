# Quiz App - DevOps / Deployment

This section is for running and deploying the Quiz App in containerized environments using Docker and Docker Compose.

## Prerequisites

* **Docker** installed: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
* **Docker Compose** installed: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Running the Application with Docker Compose

1. **Build and start all containers**:

```bash
docker-compose up --build
```

2. **Access services**:

   * Frontend: [http://localhost:3000](http://localhost:3000)
   * Backend API: [http://localhost:5000/api/questions](http://localhost:5000/api/questions)

3. **Stop containers**:

```bash
docker-compose down
```

## Notes

* Backend returns **2 randomized questions per topic**.
* Frontend fetches questions directly from the backend.
* Docker Compose volumes allow **live code updates** during development.

## Project Structure (Containerized)

```
quiz-app/
├─ frontend/          # React frontend
├─ backend/           # Node.js + Express backend
├─ docker-compose.yml # Orchestrates frontend & backend containers
```
