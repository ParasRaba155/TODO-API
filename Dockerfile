FROM node:14.17-alpine
RUN mkdir -p /app
ADD . /app
WORKDIR /app
RUN npm
CMD ["npm","start"]
EXPOSE 9080