FROM node:14.18

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app

# for product ver
COPY --chown=node:node . .

USER node

# for product ver
RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
CMD [ "yarn" , "run"]