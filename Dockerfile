FROM node:14
WORKDIR /workspace
COPY . .
COPY /prisma ./prisma/
RUN npm install
EXPOSE 3333

CMD [  "npm", "run", "start:migrate:dev" ]