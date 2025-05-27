FROM node:14-alpine

RUN mkdir -p /home/app && chown -R node:node /home/app
WORKDIR /home/app

COPY --chown=node:node . .

USER node

RUN yarn install --frozen-lockfile --production && \
    yarn cache clean

EXPOSE 3000
CMD ["yarn", "build", "&&", "yarn", "start"]
