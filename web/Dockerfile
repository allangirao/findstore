FROM node:15.0

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

# COPY entrypoint.sh /usr/bin/
# RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["yarn", "start"]


