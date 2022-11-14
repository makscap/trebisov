# Build application
FROM node:16.15-alpine AS builder

ARG API_URL=https://strapi.becep.sk/api

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . ./

RUN npm install id-sk-frontend-2.9.0.tar.gz 


ENV PATH="./node_modules/.bin:$PATH"

RUN npm run build

# Serve with nginx
FROM nginx:1.17-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/becep.conf

CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]
