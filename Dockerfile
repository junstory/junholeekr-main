FROM node:24.1.0-alpine3.22 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24.1.0-alpine3.22
ENV NODE_ENV=production
COPY --from=builder /app .  
EXPOSE 8000
CMD ["npm","start"]