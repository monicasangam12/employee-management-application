    # Stage 1: Build the Angular application
    FROM node:alpine AS build
    WORKDIR /app
    COPY package.json package-lock.json ./
    RUN npm install
    COPY . .
    RUN ng build --configuration production

    # Stage 2: Serve the application with Nginx
    FROM nginx:alpine
    COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]


