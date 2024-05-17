
FROM node:20.12.2

WORKDIR /usr/src/app

COPY package.json ./package.json

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3000



CMD ["pnpm", "dev"]