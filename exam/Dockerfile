FROM node:24-alpine AS base
WORKDIR /app

FROM base AS installer
COPY package*.json ./
RUN npm ci

# FROM base AS dev
# EXPOSE 3000
# CMD sh -c '[ -f "./db/schema.ts" ] && npx drizzle-kit push; npm run dev'
FROM base AS builder
WORKDIR /app

COPY --from=installer /app/node_modules ./node_modules
COPY . .
RUN npm run build


FROM base AS prod
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
# CMD sh -c '[ -f "./db/schema.ts" ] && npx drizzle-kit push; npm run start'
CMD ["node", "./server.js"]
