# Stage 1: Build Vite app
FROM node:16-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the Vite application
RUN npm run build

# Stage 2: Serve Vite app with NGINX
FROM nginx:stable-alpine

# Copy the build output from the previous stage (Vite outputs to /dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that NGINX will run on
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
