FROM node:latest

## Set Workdir to /ovrracing
WORKDIR /ovrracing/

## Copy all Files from repo into Workdir
ADD . .

EXPOSE 8080

ENTRYPOINT ["node","node_server.js"]
CMD []