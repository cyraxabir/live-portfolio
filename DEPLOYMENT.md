# Deployment Guide

## Quick Deploy with Docker

### Option 1: Docker Compose (Recommended)
```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Option 2: Docker Only
```bash
# Build
docker build -t nafiul-portfolio .

# Run
docker run -d -p 80:80 --name nafiul-portfolio nafiul-portfolio

# View logs
docker logs -f nafiul-portfolio

# Stop
docker stop nafiul-portfolio
docker rm nafiul-portfolio
```

## Deploy to Cloud Platforms

### Deploy to DigitalOcean
```bash
# Install doctl and authenticate
doctl auth init

# Create droplet
doctl compute droplet create nafiul-portfolio \
  --image docker-20-04 \
  --size s-1vcpu-1gb \
  --region nyc1

# SSH into droplet
ssh root@YOUR_DROPLET_IP

# Clone repo and deploy
git clone YOUR_REPO_URL
cd YOUR_REPO_NAME
docker-compose up -d
```

### Deploy to AWS EC2
```bash
# Launch EC2 instance with Docker
# SSH into instance
ssh -i your-key.pem ec2-user@YOUR_EC2_IP

# Install Docker and Docker Compose
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# Clone and deploy
git clone YOUR_REPO_URL
cd YOUR_REPO_NAME
docker-compose up -d
```

### Deploy to Vercel (Static)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify (Static)
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## Custom Domain Setup

### With Nginx Reverse Proxy
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL with Let's Encrypt
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Environment Variables (if needed)
Create a `.env` file:
```env
PORT=80
NODE_ENV=production
```

Update docker-compose.yml:
```yaml
services:
  portfolio:
    env_file:
      - .env
```

## Monitoring

### Check container status
```bash
docker ps
docker stats nafiul-portfolio
```

### View logs
```bash
docker logs -f nafiul-portfolio
```

## Updates

### Rebuild and redeploy
```bash
git pull
docker-compose down
docker-compose up -d --build
```

## Troubleshooting

### Port already in use
```bash
# Find process using port 80
sudo lsof -i :80
# Kill process or change port in docker-compose.yml
```

### Container won't start
```bash
# Check logs
docker logs nafiul-portfolio

# Rebuild from scratch
docker-compose down
docker system prune -a
docker-compose up -d --build
```
