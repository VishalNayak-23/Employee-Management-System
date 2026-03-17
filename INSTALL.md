# 🚀 INSTALLATION COMMANDS

Copy and paste these commands to get started quickly!

---

## Step 1: Navigate to Project
```bash
cd Desktop
cd employee-management-system
```

---

## Step 2: Backend Setup

### Install Dependencies
```bash
cd backend
npm install
```

### Seed Database (Creates admin + sample employees)
```bash
npm run seed
```

### Start Backend Server
```bash
npm start
```

**Backend running on:** http://localhost:5000

---

## Step 3: Frontend Setup (New Terminal)

### Install Dependencies
```bash
cd frontend
npm install
```

### Start Frontend Server
```bash
npm run dev
```

**Frontend running on:** http://localhost:3000

---

## Step 4: Login

Navigate to: http://localhost:3000/login

**Credentials:**
- Email: `admin@example.com`
- Password: `admin123`

---

## 🎉 That's It!

Your Employee Management System is now running!

---

## Quick Commands Reference

### Backend
```bash
cd backend
npm install          # Install dependencies
npm run seed         # Seed database
npm start            # Start server
npm run dev          # Start with nodemon (auto-reload)
```

### Frontend
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## MongoDB Commands

### Windows
```bash
net start MongoDB    # Start MongoDB
net stop MongoDB     # Stop MongoDB
```

### Mac/Linux
```bash
sudo systemctl start mongod    # Start MongoDB
sudo systemctl stop mongod     # Stop MongoDB
sudo systemctl status mongod   # Check status
```

---

## Troubleshooting Commands

### Check if ports are in use
```bash
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :5000
lsof -i :3000
```

### Kill process on port
```bash
# Windows
npx kill-port 5000
npx kill-port 3000

# Mac/Linux
kill -9 $(lsof -t -i:5000)
kill -9 $(lsof -t -i:3000)
```

### Clear npm cache
```bash
npm cache clean --force
```

### Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Environment Variables

Backend `.env` file (already created):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_management
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

---

## Sample Data Created by Seed Script

### Admin Account
- Username: admin
- Email: admin@example.com
- Password: admin123

### Sample Employees (8 total)
1. John Doe - Engineering
2. Jane Smith - Marketing
3. Michael Johnson - Sales
4. Emily Davis - HR
5. Robert Brown - Finance
6. Sarah Wilson - IT (Inactive)
7. David Martinez - Operations
8. Lisa Anderson - Customer Support

---

## Verification Checklist

After installation, verify:

- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 3000
- [ ] MongoDB connected successfully
- [ ] Can login with admin credentials
- [ ] Dashboard shows statistics
- [ ] Can view employee list
- [ ] Can add new employee
- [ ] Can edit employee
- [ ] Can delete employee
- [ ] Search functionality works
- [ ] Filter by department works

---

## Next Steps

1. ✅ Explore the dashboard
2. ✅ View employee list
3. ✅ Add a new employee
4. ✅ Edit an employee
5. ✅ Delete an employee
6. ✅ Test search functionality
7. ✅ Test filter functionality
8. ✅ Check responsive design on mobile

---

## Need Help?

- Check README.md for detailed documentation
- Check QUICKSTART.md for quick setup guide
- Check FEATURES.md for feature details
- Check DEPLOYMENT.md for production deployment

---

**Happy Coding! 🎉**
