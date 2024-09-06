## HOW TO RUN // COMO RODAR

## create image // criar imagem
## docker image build -t bonsite-nextjs:latest .

## run image // rodar imagem
## docker container run -p 3000:3000 bonsite-nextjs:latest

## you can also run it from docker desktop // também dá pra rodar pelo Docker Desktop

## ill write the docker-compose soon // vou fazer o docker-compose em breve


FROM node:22.8-alpine as base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir -p .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["next", "start", "-p", "3000"]