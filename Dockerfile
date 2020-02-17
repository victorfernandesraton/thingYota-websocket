FROM node:12
WORKDIR /websocket
COPY package.json /websocket
RUN npm install
COPY . /websocket
CMD npm run dev
EXPOSE 4000
