# 🚀 HOW TO RUN IN VS CODE

## ✅ Setup Complete!

All dependencies are installed and database is seeded with sample data.

---

## 🎯 Method 1: Using VS Code Tasks (EASIEST)

1. **Open Command Palette**: Press `Ctrl + Shift + P` (Windows) or `Cmd + Shift + P` (Mac)
2. **Type**: `Tasks: Run Task`
3. **Select**: `Start All Servers`
4. **Done!** Both servers will start automatically

---

## 🎯 Method 2: Using VS Code Terminal (RECOMMENDED)

### Step 1: Open Terminal
Press `Ctrl + ` (backtick) or go to **Terminal → New Terminal**

### Step 2: Split Terminal
Click the **Split Terminal** icon (or press `Ctrl + Shift + 5`)

### Step 3: Start Backend (First Terminal)
```bash
cd backend
npm start
```

### Step 4: Start Frontend (Second Terminal)
```bash
cd frontend
npm run dev
```

---

## 🎯 Method 3: Using Batch Files (WINDOWS ONLY)

Simply double-click: **`START.bat`** in the project folder

---

## 🌐 Access the Application

Once both servers are running:

**Frontend (React App):**
- URL: http://localhost:3000
- This is where you'll use the application

**Backend (API Server):**
- URL: http://localhost:5000
- This handles all data operations

---

## 🔐 Login Credentials

```
Email:    admin@company.com
Password: admin123
```

---

## 📊 What You'll See

### Terminal Output:

**Backend Terminal:**
```
MongoDB Connected Successfully
Server running on port 5000
```

**Frontend Terminal:**
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

---

## 🎨 Application Features

Once logged in, you can:

1. **Dashboard** - View statistics and overview
2. **Employees** - See all employees with search/filter
3. **Add Employee** - Create new employee records
4. **Edit Employee** - Update employee information
5. **Delete Employee** - Remove employees (with confirmation)
6. **View Details** - See complete employee profile

---

## 🛑 How to Stop Servers

### In VS Code Terminal:
Press `Ctrl + C` in each terminal window

### If using START.bat:
Press any key in the command window

---

## 🔧 Troubleshooting

### Port Already in Use

**Backend (Port 5000):**
1. Open `backend/.env`
2. Change `PORT=5000` to `PORT=5001`

**Frontend (Port 3000):**
1. Open `frontend/vite.config.js`
2. Change `port: 3000` to `port: 3001`

### MongoDB Connection Error

Make sure MongoDB is running:

**Windows:**
```bash
net start MongoDB
```

**Mac/Linux:**
```bash
sudo systemctl start mongod
```

### Cannot Access Application

1. Check both terminals are running without errors
2. Wait 5-10 seconds for servers to fully start
3. Try refreshing the browser
4. Clear browser cache

---

## 📁 Project Structure in VS Code

```
employee-management-system/
├── 📁 backend/          ← Node.js + Express + MongoDB
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js       ← Backend entry point
│
├── 📁 frontend/         ← React + Vite + TailwindCSS
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx     ← Frontend entry point
│   └── index.html
│
└── 📁 .vscode/          ← VS Code configurations
    ├── tasks.json       ← Run tasks
    └── launch.json      ← Debug config
```

---

## 🎓 VS Code Tips

### Useful Shortcuts:
- `Ctrl + `` - Toggle terminal
- `Ctrl + Shift + P` - Command palette
- `Ctrl + P` - Quick file open
- `Ctrl + B` - Toggle sidebar
- `F5` - Start debugging

### Recommended Extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- MongoDB for VS Code

---

## ✅ Quick Checklist

- [x] Dependencies installed
- [x] Database seeded
- [x] VS Code tasks configured
- [ ] Backend server running (port 5000)
- [ ] Frontend server running (port 3000)
- [ ] Browser open at http://localhost:3000
- [ ] Logged in successfully

---

## 🎉 You're Ready!

Everything is set up. Just start the servers and begin managing employees!

**Need help?** Check the main README.md for detailed documentation.
