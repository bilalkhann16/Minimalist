FROM node:14
WORKDIR /workspace
COPY . .
COPY /prisma ./prisma/
RUN yarn install
EXPOSE 3333

CMD [  "yarn", "run", "start:migrate:serve" ]