# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./ 
RUN npm install

# Copy all other files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port for Next.js server
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
