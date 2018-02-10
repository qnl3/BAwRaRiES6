FROM node:9.5.0

EXPOSE 3000
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
ENV NODE_ENV=production

USER node

VOLUME ["../", "/home/node/app"]

CMD ["mpm", "start"]
