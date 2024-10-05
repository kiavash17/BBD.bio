
# Use official Node.js image as a base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app/
RUN npm install

# Copy the rest of the application
COPY . /app/

# Build the app
RUN npm run build

# Use a web server to serve the built files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
