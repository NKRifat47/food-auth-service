FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install  --fetch-timeout=600000

COPY . .

RUN npx prisma generate

EXPOSE 5001

CMD ["npm", "run", "dev"]