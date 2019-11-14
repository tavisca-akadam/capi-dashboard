FROM node:alpine AS builder

WORKDIR /app

COPY . /app

FROM nginx:alpine

COPY --from=builder /app/dist/ui/* /usr/share/nginx/html/