FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Собираем Vue проект
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "preview"]
