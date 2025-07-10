# Stage 1: Build the app
FROM node:22-alpine AS builder

RUN corepack enable

WORKDIR /app

ARG NEXT_PUBLIC_HOSTING_DOMIAN
ARG NEXT_PUBLIC_AUTH_URL

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN echo "NEXT_PUBLIC_HOSTING_DOMAIN=${NEXT_PUBLIC_HOSTING_DOMAIN}" >./.env
RUN echo "NEXT_PUBLIC_AUTH_URL=${NEXT_PUBLIC_AUTH_URL}" >>./.env

RUN pnpm dlx prisma generate
RUN pnpm run build

# Stage 2: Run the app
FROM node:22-alpine AS runner

RUN corepack enable

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENTRYPOINT ["pnpm", "start"]
