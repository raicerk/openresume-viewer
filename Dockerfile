# Etapa 1: Construcción
FROM node:23-slim AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install --force

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Etapa 2: Producción
FROM node:23-slim AS runner

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para producción desde la etapa de construcción
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Establecer la variable de entorno para producción
ENV NODE_ENV=production

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]