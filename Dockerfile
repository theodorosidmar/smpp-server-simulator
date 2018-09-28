FROM node:9.5.0-alpine
RUN mkdir -p /smpp-server-simulator
WORKDIR /smpp-server-simulator
EXPOSE 2775
COPY . /smpp-server-simulator
RUN npm install --no-cache --production
CMD ["node", "."]
