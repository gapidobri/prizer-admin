FROM node:22.6 AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

ENV ADMIN_API_URL=""

COPY . .
RUN pnpm run build

RUN pnpm prune --prod


FROM node:alpine

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/build /app

EXPOSE 3000

CMD [ "node", "/app" ]