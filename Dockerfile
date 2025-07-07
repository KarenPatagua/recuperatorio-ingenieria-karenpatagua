# Imagen base de Node
FROM node:18

# Crear directorio de la app
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código de la app
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
