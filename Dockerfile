# Fase de construcción
FROM node:16-alpine AS build

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Fase de producción
FROM nginx:alpine

# Copiar el build de la fase anterior
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto en el que Nginx servirá la aplicación
EXPOSE 80

# Comando para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
