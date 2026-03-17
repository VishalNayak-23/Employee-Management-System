# 🚀 DEPLOYMENT GUIDE

## Production Deployment Instructions

---

## Backend Deployment

### Option 1: Heroku

#### 1. Install Heroku CLI
```bash
npm install -g heroku
```

#### 2. Login to Heroku
```bash
heroku login
```

#### 3. Create Heroku App
```bash
cd backend
heroku create your-app-name-backend
```

#### 4. Set Environment Variables
```bash
heroku config:set MONGODB_URI="your_mongodb_atlas_uri"
heroku config:set JWT_SECRET="your_super_secret_key"
heroku config:set JWT_EXPIRE="7d"
heroku config:set NODE_ENV="production"
```

#### 5. Deploy
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

#### 6. Seed Database
```bash
heroku run npm run seed
```

---

### Option 2: Railway

#### 1. Install Railway CLI
```bash
npm install -g @railway/cli
```

#### 2. Login
```bash
railway login
```

#### 3. Initialize Project
```bash
cd backend
railway init
```

#### 4. Add Environment Variables
Go to Railway dashboard and add:
- MONGODB_URI
- JWT_SECRET
- JWT_EXPIRE
- NODE_ENV=production

#### 5. Deploy
```bash
railway up
```

---

### Option 3: AWS EC2

#### 1. Launch EC2 Instance
- Choose Ubuntu Server
- Configure security groups (ports 22, 80, 443, 5000)

#### 2. Connect to Instance
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

#### 3. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 4. Install MongoDB
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

#### 5. Clone and Setup
```bash
git clone your-repo-url
cd backend
npm install
```

#### 6. Configure Environment
```bash
nano .env
# Add your production variables
```

#### 7. Install PM2
```bash
sudo npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

---

## Frontend Deployment

### Option 1: Vercel (Recommended)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login
```bash
vercel login
```

#### 3. Update API URL
Edit `frontend/src/services/api.js`:
```javascript
const API = axios.create({
  baseURL: 'https://your-backend-url.com/api',
});
```

#### 4. Deploy
```bash
cd frontend
vercel
```

#### 5. Follow Prompts
- Set up and deploy
- Choose project name
- Confirm settings

---

### Option 2: Netlify

#### 1. Build Project
```bash
cd frontend
npm run build
```

#### 2. Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 3. Login
```bash
netlify login
```

#### 4. Deploy
```bash
netlify deploy --prod --dir=dist
```

---

### Option 3: AWS S3 + CloudFront

#### 1. Build Project
```bash
cd frontend
npm run build
```

#### 2. Create S3 Bucket
- Go to AWS S3 Console
- Create new bucket
- Enable static website hosting

#### 3. Upload Files
```bash
aws s3 sync dist/ s3://your-bucket-name
```

#### 4. Configure CloudFront
- Create CloudFront distribution
- Point to S3 bucket
- Configure SSL certificate

---

## MongoDB Atlas Setup

### 1. Create Account
Go to https://www.mongodb.com/cloud/atlas

### 2. Create Cluster
- Choose free tier (M0)
- Select region
- Create cluster

### 3. Create Database User
- Database Access → Add New User
- Set username and password
- Grant read/write permissions

### 4. Whitelist IP
- Network Access → Add IP Address
- Add 0.0.0.0/0 (allow from anywhere)
- Or add specific IPs

### 5. Get Connection String
- Clusters → Connect
- Choose "Connect your application"
- Copy connection string
- Replace <password> with your password

Example:
```
mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/employee_management?retryWrites=true&w=majority
```

---

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/employee_management
JWT_SECRET=your_super_secret_production_key_min_32_chars
JWT_EXPIRE=7d
NODE_ENV=production
```

### Frontend
Update API base URL in `src/services/api.js`:
```javascript
baseURL: process.env.VITE_API_URL || 'https://your-backend.com/api'
```

---

## SSL/HTTPS Setup

### Using Let's Encrypt (Free)

#### 1. Install Certbot
```bash
sudo apt-get install certbot python3-certbot-nginx
```

#### 2. Get Certificate
```bash
sudo certbot --nginx -d yourdomain.com
```

#### 3. Auto-Renewal
```bash
sudo certbot renew --dry-run
```

---

## Domain Configuration

### 1. Purchase Domain
- Namecheap, GoDaddy, or Google Domains

### 2. Configure DNS
Add A records:
```
Type: A
Host: @
Value: your-server-ip

Type: A
Host: www
Value: your-server-ip
```

### 3. Configure CNAME (for Vercel/Netlify)
```
Type: CNAME
Host: www
Value: your-app.vercel.app
```

---

## Post-Deployment Checklist

### Backend
- [ ] Environment variables set
- [ ] MongoDB connection working
- [ ] API endpoints accessible
- [ ] CORS configured for frontend domain
- [ ] SSL certificate installed
- [ ] Database seeded
- [ ] Error logging configured

### Frontend
- [ ] API URL updated
- [ ] Build successful
- [ ] All routes working
- [ ] Authentication flow working
- [ ] Images loading
- [ ] Responsive on all devices
- [ ] SSL certificate installed

---

## Monitoring & Maintenance

### Backend Monitoring
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs

# Restart app
pm2 restart server
```

### Database Backup
```bash
# MongoDB backup
mongodump --uri="your-mongodb-uri" --out=/backup/path

# Restore
mongorestore --uri="your-mongodb-uri" /backup/path
```

---

## Performance Optimization

### Backend
- Enable compression
- Use Redis for caching
- Optimize database queries
- Add rate limiting
- Enable GZIP

### Frontend
- Enable lazy loading
- Optimize images
- Use CDN for assets
- Enable caching
- Minify code

---

## Security Checklist

- [ ] Use HTTPS everywhere
- [ ] Strong JWT secret (min 32 chars)
- [ ] Environment variables secured
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] Regular security updates
- [ ] Database backups automated

---

## Troubleshooting

### Backend Not Starting
```bash
# Check logs
pm2 logs

# Check MongoDB connection
mongo your-connection-string

# Check port availability
netstat -tulpn | grep 5000
```

### Frontend Not Loading
- Check browser console for errors
- Verify API URL is correct
- Check CORS configuration
- Verify build was successful

### Database Connection Issues
- Verify connection string
- Check IP whitelist
- Verify database user credentials
- Check network connectivity

---

## Cost Estimation

### Free Tier Options
- **Backend**: Railway/Heroku free tier
- **Frontend**: Vercel/Netlify free tier
- **Database**: MongoDB Atlas M0 (free)
- **Total**: $0/month

### Paid Options
- **Backend**: Railway ($5-10/month)
- **Frontend**: Vercel Pro ($20/month)
- **Database**: MongoDB Atlas M10 ($57/month)
- **Domain**: $10-15/year
- **Total**: ~$85-95/month

---

## Support

For deployment issues:
1. Check logs first
2. Verify environment variables
3. Test API endpoints
4. Check database connection
5. Review security groups/firewall

---

## 🎉 Congratulations!

Your Employee Management System is now live in production!

**Next Steps:**
- Monitor application performance
- Set up automated backups
- Configure error tracking (Sentry)
- Set up analytics (Google Analytics)
- Plan for scaling
