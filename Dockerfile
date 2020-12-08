FROM node:alpine

WORKDIR /app

# apkはalpineのパッケージマネージャ
RUN apk update && \
    apk add --no-cache git curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

EXPOSE 3000

CMD ["/bin/sh"]