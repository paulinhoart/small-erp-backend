FROM node:latest

WORKDIR /app

COPY . /app

#RUN npm install
RUN rm -rf node_modules && npm install

EXPOSE 8080

CMD ["npm","start"]