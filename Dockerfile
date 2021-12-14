FROM node:16 AS build-env
COPY . /app
WORKDIR /app

RUN npm install
RUN npx tsc
#RUN npm ci --only=production

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app/build /app
WORKDIR /app
EXPOSE 3000
CMD [ "server.js" ]