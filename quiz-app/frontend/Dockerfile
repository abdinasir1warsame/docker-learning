# Stage 1: Build the React app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

