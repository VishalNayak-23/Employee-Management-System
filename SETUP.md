# 🚀 SETUP INSTRUCTIONS

## Welcome to Employee Management System!

Follow these steps to get the application running on your machine.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v16 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **MongoDB** (v5 or higher)
   - Download: https://www.mongodb.com/try/download/community
   - Verify: `mongod --version`

3. **npm** (comes with Node.js)
   - Verify: `npm --version`

4. **Code Editor** (VS Code recommended)
   - Download: https://code.visualstudio.com/

---

## 🔧 Installation Steps

### Step 1: Extract the ZIP File

Extract the `employee-management-system.zip` file to your desired location.

```
Example: C:\Projects\employee-management-system
```

---

### Step 2: Start MongoDB

**Windows:**
```bash
net start MongoDB
```

**Mac/Linux:**
```bash
sudo systemctl start mongod
```

**Alternative:** Use MongoDB Compass or MongoDB Atlas (cloud)

---

### Step 3: Backend Setup

Open a terminal and navigate to the backend folder:

```bash
cd employee-management-system/backend
```

#### Install Dependencies
```bash
npm install
```

This will install:
- express
- mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- express-validator
- multer

#### Configure Environment Variables

The `.env` file is already configured. If needed, you can modify:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_management
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

#### Seed the Database

Create admin account and sample employees:

```bash
npm run seed
```

**Output:**
```
MongoDB Connected
Admin created: admin@example.com
8 employees created

=== Seed Data Complete ===
Admin Login:
Email: admin@example.com
Password: admin123
========================
```

#### Start Backend Server

```bash
npm start
```

**Expected Output:**
```
Server running on port 5000
MongoDB Connected: localhost
```

**Backend is now running at:** http://localhost:5000

---

### Step 4: Frontend Setup

Open a **NEW terminal** (keep backend running) and navigate to frontend:

```bash
cd employee-management-system/frontend
```

#### Install Dependencies
```bash
npm install
```

This will install:
- react
- react-dom
- react-router-dom
- axios
- lucide-react
- react-hot-toast
- tailwindcss
- vite

#### Start Frontend Server

```bash
npm run dev
```

**Expected Output:**
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

**Frontend is now running at:** http://localhost:3000

---

## 🎉 Access the Application

### Open Your Browser

Navigate to: **http://localhost:3000/login**

### Login Credentials

**Admin Account:**
- **Email:** `admin@example.com`
- **Password:** `admin123`

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 3000
- [ ] MongoDB connected successfully
- [ ] Can access login page
- [ ] Can login with admin credentials
- [ ] Dashboard displays statistics
- [ ] Can view employee list (8 sample employees)
- [ ] Can add new employee
- [ ] Can edit employee
- [ ] Can delete employee
- [ ] Search functionality works
- [ ] Filter by department works

---

## 📁 Project Structure

```
employee-management-system/
│
├── backend/                    # Node.js + Express API
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── employeeController.js # Employee CRUD
│   ├── middleware/
│   │   ├── auth.js            # JWT verification
│   │   └── errorHandler.js    # Error handling
│   ├── models/
│   │   ├── Admin.js           # Admin schema
│   │   └── Employee.js        # Employee schema
│   ├── routes/
│   │   ├── authRoutes.js      # Auth endpoints
│   │   └── employeeRoutes.js  # Employee endpoints
│   ├── utils/
│   │   └── seed.js            # Database seeding
│   ├── .env                   # Environment variables
│   ├── .env.example           # Environment template
│   ├── package.json           # Dependencies
│   └── server.js              # Entry point
│
├── frontend/                   # React + Vite application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── contexts/          # Global state
│   │   ├── hooks/             # Custom hooks
│   │   ├── layouts/           # Layout wrappers
│   │   ├── pages/             # Route pages
│   │   ├── services/          # API services
│   │   ├── utils/             # Helper functions
│   │   ├── App.jsx            # Main component
│   │   ├── index.css          # Global styles
│   │   └── main.jsx           # Entry point
│   ├── index.html
│   ├── package.json           # Dependencies
│   ├── tailwind.config.js     # Tailwind config
│   └── vite.config.js         # Vite config
│
├── README.md                   # Main documentation
├── QUICKSTART.md              # Quick start guide
├── FEATURES.md                # Features list
├── DEPLOYMENT.md              # Deployment guide
├── INSTALL.md                 # Installation commands
└── PROJECT-SUMMARY.md         # Project overview
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/login          # Admin login
GET    /api/auth/profile        # Get admin profile (Protected)
```

### Employees
```
GET    /api/employees            # Get all employees (Protected)
GET    /api/employees/:id        # Get single employee (Protected)
POST   /api/employees            # Create employee (Protected)
PUT    /api/employees/:id        # Update employee (Protected)
DELETE /api/employees/:id        # Delete employee (Protected)
GET    /api/employees/stats/dashboard # Get statistics (Protected)
```

---

## 🎨 Features

### Authentication
- ✅ Secure JWT-based login
- ✅ Password hashing with bcrypt
- ✅ Protected routes
- ✅ Session persistence
- ✅ Logout functionality

### Employee Management
- ✅ **Create:** Add new employees
- ✅ **Read:** View employee list with search & filters
- ✅ **Update:** Edit employee information
- ✅ **Delete:** Remove employees with confirmation

### Dashboard
- ✅ Total employees count
- ✅ Active employees count
- ✅ Department statistics
- ✅ Visual data representation

### UI/UX
- ✅ Modern glassmorphism design
- ✅ Gradient backgrounds
- ✅ Smooth animations
- ✅ Fully responsive
- ✅ Toast notifications
- ✅ Loading states
- ✅ Modal dialogs

---

## 🛠️ Technology Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router v6
- Axios
- Lucide Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- CORS

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
# Windows: net start MongoDB
# Mac/Linux: sudo systemctl start mongod
```

### Port Already in Use
```bash
# Kill process on port 5000
npx kill-port 5000

# Kill process on port 3000
npx kill-port 3000
```

### Module Not Found
```bash
# Reinstall dependencies
cd backend
rm -rf node_modules package-lock.json
npm install

cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

### Cannot Connect to Backend
- Verify backend is running on port 5000
- Check `.env` file configuration
- Verify MongoDB is running
- Check firewall settings

---

## 📝 Sample Data

The seed script creates:

### Admin Account
- Username: admin
- Email: admin@example.com
- Password: admin123

### 8 Sample Employees
1. John Doe - Engineering - Active
2. Jane Smith - Marketing - Active
3. Michael Johnson - Sales - Active
4. Emily Davis - HR - Active
5. Robert Brown - Finance - Active
6. Sarah Wilson - IT - Inactive
7. David Martinez - Operations - Active
8. Lisa Anderson - Customer Support - Active

---

## 🚀 Development Commands

### Backend
```bash
npm start          # Start server
npm run dev        # Start with nodemon (auto-reload)
npm run seed       # Seed database
```

### Frontend
```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## 📚 Documentation

- **README.md** - Complete documentation
- **QUICKSTART.md** - Quick setup guide
- **FEATURES.md** - Detailed features list
- **DEPLOYMENT.md** - Production deployment guide
- **INSTALL.md** - Installation commands
- **PROJECT-SUMMARY.md** - Project overview

---

## 🔒 Security

- JWT token authentication
- Password hashing (bcrypt, 10 rounds)
- Protected API routes
- Input validation
- CORS configuration
- Environment variables
- XSS protection

---

## 📞 Support

If you encounter any issues:

1. Check MongoDB is running
2. Verify all dependencies are installed
3. Check port availability (5000, 3000)
4. Review error logs in terminal
5. Check `.env` configuration

---

## 🎓 Next Steps

1. ✅ Explore the dashboard
2. ✅ View employee list
3. ✅ Add a new employee
4. ✅ Edit employee details
5. ✅ Delete an employee
6. ✅ Test search functionality
7. ✅ Test filter by department
8. ✅ Check responsive design

---

## 🎉 Congratulations!

Your Employee Management System is now running!

**Enjoy managing your employees!**

---

**Built with ❤️ using React, Node.js, Express, and MongoDB**
