# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire server project to the container
COPY . .

# Expose port 5000 (or whatever your server runs on)
EXPOSE 5000

# Start the server
CMD ["npm", "run", "dev"]
