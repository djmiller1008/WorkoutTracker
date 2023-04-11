FROM node:10.13.0 as build

WORKDIR /usr/src/app

ARG NODE_ENV=production

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install --silent

COPY . /usr/src/app 

RUN npm run postinstall


FROM ruby:2.5.1-alpine

RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata

ARG DATABASE_URL="postgres://postgres@db"
ARG RAILS_ENV=production


WORKDIR /myapp

COPY Gemfile /myapp/Gemfile


RUN bundle install

COPY . /myapp

COPY --from=build /usr/src/app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

COPY entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
