FROM public.ecr.aws/docker/library/node:current-alpine3.15
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "hello.js"]
