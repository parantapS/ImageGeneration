# Use the official Node.js image as the base image
FROM node:24.12.0-alpine3.22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies if package.json is present
RUN if [ -f package.json ]; then npm install; fi

# Copy the rest of the application code to the working directory
COPY . .

# Expose the application port (change 3000 to your app's port if different)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]

