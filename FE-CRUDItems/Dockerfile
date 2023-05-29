FROM node:18-alpine3.16 AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build 


FROM nginx:latest AS ngi
COPY --from=build /usr/local/app/dist/fe-cruditems /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/dedfault.conf
EXPOSE 80