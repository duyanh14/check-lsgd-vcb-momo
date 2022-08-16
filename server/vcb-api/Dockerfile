FROM node:12.22
WORKDIR /app
COPY ./vcb/package*.json ./
RUN npm install
COPY ./vcb .
EXPOSE 9898
CMD [ "node", "main.js"]
