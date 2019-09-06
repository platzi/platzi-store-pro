FROM node:12 as node

WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/platzi-store-pro /usr/share/nginx/html