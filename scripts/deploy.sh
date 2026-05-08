#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 2. Build the project
echo "🏗️ Building the project..."
npm run build

# 3. Prisma Migrations
echo "🗄️ Running Prisma migrations..."
npx prisma generate
# Uncomment the following line if you want to run migrations during deployment
# npx prisma migrate deploy

# 4. Restart the application (PM2 case)
if command -v pm2 &> /dev/null
then
    echo "🔄 Restarting application with PM2..."
    pm2 restart penniyam || pm2 start server.js --name penniyam
else
    echo "⚠️ PM2 not found. Please start the application manually: node .next/standalone/server.js"
fi

echo "✅ Deployment complete!"
