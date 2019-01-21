FROM node:9.5.0-alpine

ENV WORKDIR /smpp-server-simulator

WORKDIR ${WORKDIR}

COPY package.json ${WORKDIR}
COPY package-lock.json ${WORKDIR}

RUN npm install --no-cache --production

COPY . ${WORKDIR}

CMD npm start

EXPOSE 2775
