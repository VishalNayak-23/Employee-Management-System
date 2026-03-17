# 🚀 TERMINAL COMMANDS - Copy & Paste These

## ✅ ALL CODE IS ATTACHED AND READY!

Your VS Code now has the complete Employee Management System with all files.

---

## 📋 STEP-BY-STEP TERMINAL COMMANDS

### ⚠️ BEFORE YOU START

**1. Start MongoDB First!**

Open **Command Prompt as Administrator** (separate window) and run:

```bash
net start MongoDB
```

Keep it running in the background.

---

## 🔧 TERMINAL 1 - BACKEND SETUP

### Step 1: Open Terminal in VS Code

Press: **Ctrl + `** (backtick key)

### Step 2: Navigate to Backend

Copy and paste this command:

```bash
cd backend
```

Press Enter.

### Step 3: Install Backend Dependencies

Copy and paste this command:

```bash
npm install
```

Press Enter and wait 2-3 minutes...

You should see:
```
added 100+ packages
```

### Step 4: Seed the Database

Copy and paste this command:

```bash
npm run seed
```

Press Enter.

You should see:
```
MongoDB Connected: localhost
Admin created: admin@example.com
8 employees created

=== Seed Data Complete ===
Admin Login:
Email: admin@example.com
Password: admin123
========================
```

### Step 5: Start Backend Server

Copy and paste this command:

```bash
npm start
```

Press Enter.

You should see:
```
Server running on port 5000
MongoDB Connected: localhost
```

✅ **BACKEND IS RUNNING!** 

**DO NOT CLOSE THIS TERMINAL!**

---

## 🎨 TERMINAL 2 - FRONTEND SETUP

### Step 6: Open New Terminal

Click the **+** icon in the terminal panel (top right corner)

Or press: **Ctrl + Shift + `**

### Step 7: Navigate to Frontend

Copy and paste this command:

```bash
cd frontend
```

Press Enter.

### Step 8: Install Frontend Dependencies

Copy and paste this command:

```bash
npm install
```

Press Enter and wait 2-3 minutes...

You should see:
```
added 200+ packages
```

### Step 9: Start Frontend Server

Copy and paste this command:

```bash
npm run dev
```

Press Enter.

You should see:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

✅ **FRONTEND IS RUNNING!**

**DO NOT CLOSE THIS TERMINAL!**

---

## 🌐 OPEN IN BROWSER

### Step 10: Access the Application

**Option 1:** Hold **Ctrl** and **Click** on `http://localhost:3000/` in the terminal

**Option 2:** Open your browser manually and go to:
```
http://localhost:3000/login
```

---

## 🔐 LOGIN

Use these credentials:

**Email:** `admin@example.com`  
**Password:** `admin123`

Click **Sign In**

---

## 🎉 SUCCESS!

You should now see:

✅ Beautiful dashboard with glassmorphism design  
✅ Statistics cards showing:
   - Total Employees: 8
   - Active Employees: 7
   - Departments: 8
✅ Department distribution

---

## 📊 WHAT TO DO NEXT

### Explore Features:

1. **View Employees**
   - Click "Employees" in sidebar
   - See 8 sample employees in a table

2. **Search Employee**
   - Type "John" in search box
   - See John Doe appear

3. **Filter by Department**
   - Select "Engineering" from dropdown
   - See filtered results

4. **Add New Employee**
   - Click "Add Employee" button
   - Fill the form
   - Click "Add Employee"

5. **Edit Employee**
   - Click the green edit icon on any employee
   - Modify details
   - Click "Update Employee"

6. **Delete Employee**
   - Click the red delete icon
   - Confirm deletion

7. **View Details**
   - Click the blue eye icon
   - See full employee details in modal

---

## 🔄 IF YOU NEED TO RESTART

### Restart Backend:
1. Go to Terminal 1
2. Press **Ctrl + C**
3. Run: `npm start`

### Restart Frontend:
1. Go to Terminal 2
2. Press **Ctrl + C**
3. Run: `npm run dev`

---

## 🐛 TROUBLESHOOTING

### Error: "MongoDB connection failed"

**Solution:**
```bash
# In Command Prompt as Administrator
net start MongoDB
```

### Error: "Port 5000 already in use"

**Solution:**
```bash
npx kill-port 5000
```

### Error: "Port 3000 already in use"

**Solution:**
```bash
npx kill-port 3000
```

### Error: "Cannot find module"

**Solution:**
```bash
# In backend terminal
cd backend
rm -rf node_modules package-lock.json
npm install

# In frontend terminal
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### MongoDB not installed?

**Download:** https://www.mongodb.com/try/download/community

---

## 📂 PROJECT STRUCTURE IN VS CODE

You should see this in the left sidebar:

```
employee-management-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── Documentation files (.md)
```

---

## ✅ VERIFICATION CHECKLIST

After running all commands, verify:

- [ ] MongoDB is running
- [ ] Terminal 1 shows "Server running on port 5000"
- [ ] Terminal 2 shows "Local: http://localhost:3000/"
- [ ] Browser opens to login page
- [ ] Can login with admin@example.com / admin123
- [ ] Dashboard shows statistics
- [ ] Can view 8 employees
- [ ] Can add new employee
- [ ] Can edit employee
- [ ] Can delete employee
- [ ] Search works
- [ ] Filter works

---

## 💡 VS CODE TIPS

### Useful Shortcuts:
- **Ctrl + `** - Toggle terminal
- **Ctrl + Shift + `** - New terminal
- **Ctrl + B** - Toggle sidebar
- **Ctrl + P** - Quick file open
- **Ctrl + Shift + F** - Search in files
- **Ctrl + /** - Comment/uncomment line

### Terminal Tips:
- Click split icon to view both terminals side by side
- Use up/down arrows to navigate command history
- **Ctrl + C** to stop a running process
- **Ctrl + L** to clear terminal

---

## 📚 DOCUMENTATION FILES

All documentation is in the project root:

- **START-HERE.md** - Quick start guide
- **VSCODE-SETUP.md** - Detailed VS Code setup
- **README.md** - Complete documentation
- **FEATURES.md** - All features explained
- **DEPLOYMENT.md** - Production deployment
- **QUICKSTART.md** - Quick commands

---

## 🎯 QUICK COMMAND SUMMARY

```bash
# Terminal 1 - Backend
cd backend
npm install
npm run seed
npm start

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev
```

Then open: http://localhost:3000/login

Login: admin@example.com / admin123

---

## 🎉 YOU'RE ALL SET!

**Your complete Employee Management System is ready to run!**

**Start with Terminal 1 commands above! 🚀**

---

## 📞 NEED HELP?

Check these files in VS Code:
- START-HERE.md
- VSCODE-SETUP.md
- README.md

---

**Happy Coding! 🎉**
