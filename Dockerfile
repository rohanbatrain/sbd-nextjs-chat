# --- Dockerfile (use Next.js standalone output + bun runtime)

# 1. Builder (node + pnpm)
FROM node:20-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app

# install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package manifests only to leverage cache
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
# Copy all package.jsons from apps/packages (if needed for fetch)
COPY apps/*/package.json ./apps/
# COPY packages/*/package.json ./packages/

RUN pnpm fetch --production

# Copy everything
COPY . .

# Ensure submodules are present in CI (they should be checked out by actions).
# Install and build
RUN pnpm install --frozen-lockfile
# Build step. Assume script "build" exists in package.json that emits standalone output.
RUN pnpm build

# 2. Create tar of standalone for artifact
FROM builder AS pack
# For monorepo, the standalone output is inside the app directory
RUN mkdir -p /out && cp -R apps/web/.next/standalone /out/standalone && cp -R apps/web/public /out/public

# 3. Runtime with bun
FROM oven/bun:edge AS runner
ENV NODE_ENV=production
WORKDIR /app

# Copy standalone
COPY --from=pack /out/standalone ./
COPY --from=pack /out/public ./apps/web/public

# If you have environment files, copy them in build step via build args (do not bake secrets)
EXPOSE 3000

# The standalone/server.js path may vary. Adjust if your standalone output produces different entry script.
# For monorepo structure in standalone:
CMD ["node", "apps/web/server.js"]
