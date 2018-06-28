FROM node:8.9.1-alpine

WORKDIR work
COPY ./package.json /work/package.json
COPY ./package-lock.json /work/package-lock.json
RUN npm install
COPY . /work
RUN mv /work/.env /work/.env

# ENTRYPOINT ./docker-entrypoint.sh

# CMD ["sleep", "2000"]

# CMD sleep 3000 ; npm run start

# CMD ["npm", "run", "start"]
