# 🚀 START HERE - Employee Management System

## Welcome! Follow these simple steps to get started.

---

## ⚡ QUICK START (5 Minutes)

### 1️⃣ Prerequisites Check

Before starting, make sure you have:

✅ **Node.js** installed (v16+)
   - Check: Open terminal and type `node --version`
   - Download: https://nodejs.org/

✅ **MongoDB** installed (v5+)
   - Check: Open terminal and type `mongod --version`
   - Download: https://www.mongodb.com/try/download/community

✅ **VS Code** installed (recommended)
   - Download: https://code.visualstudio.com/

---

### 2️⃣ Start MongoDB

**Windows:**
```bash
net start MongoDB
```

**Mac/Linux:**
```bash
sudo systemctl start mongod
```

---

### 3️⃣ Open Project in VS Code

1. Right-click on `employee-management-system` folder
2. Select "Open with Code"

---

### 4️⃣ Open Terminal in VS Code

Press: **Ctrl + `** (backtick key)

---

### 5️⃣ Setup Backend

In the terminal, run these commands:

```bash
cd backend
npm install
npm run seed
npm start
```

✅ You should see: **"Server running on port 5000"**

---

### 6️⃣ Setup Frontend

Open a **NEW terminal** (click the + icon), then run:

```bash
cd frontend
npm install
npm run dev
```

✅ You should see: **"Local: http://localhost:3000/"**

---

### 7️⃣ Open in Browser

Go to: **http://localhost:3000/login**

**Login with:**
- Email: `admin@example.com`
- Password: `admin123`

---

## 🎉 SUCCESS!

You should now see the dashboard with employee statistics!

---

## 📁 What's Included?

✅ **Backend** - Node.js + Express + MongoDB API
✅ **Frontend** - React + Vite + TailwindCSS
✅ **Authentication** - JWT-based secure login
✅ **CRUD Operations** - Create, Read, Update, Delete employees
✅ **Search & Filter** - Find employees easily
✅ **Modern UI** - Beautiful glassmorphism design
✅ **Sample Data** - 8 employees + 1 admin account

---

## 📚 Documentation Files

- **VSCODE-SETUP.md** - Detailed VS Code setup guide
- **README.md** - Complete documentation
- **QUICKSTART.md** - Quick setup guide
- **FEATURES.md** - All features explained
- **DEPLOYMENT.md** - Production deployment guide

---

## 🆘 Having Issues?

### MongoDB not starting?
- Windows: Run Command Prompt as Administrator
- Mac/Linux: Check if MongoDB service is installed

### Port already in use?
```bash
npx kill-port 5000
npx kill-port 3000
```

### Module not found?
```bash
cd backend
npm install

cd ../frontend
npm install
```

---

## 🎯 Next Steps

1. ✅ Explore the Dashboard
2. ✅ View Employee List (8 sample employees)
3. ✅ Add a New Employee
4. ✅ Edit an Employee
5. ✅ Delete an Employee
6. ✅ Try Search & Filter features

---

## 💡 Pro Tips

- Keep both terminals running (backend + frontend)
- Use **Ctrl + C** to stop servers
- Check browser console (F12) for errors
- Backend logs appear in Terminal 1
- Frontend logs appear in Terminal 2

---

## 🔐 Login Credentials

**Admin Account:**
- Email: admin@example.com
- Password: admin123

**Sample Employees:**
- John Doe - Engineering
- Jane Smith - Marketing
- Michael Johnson - Sales
- Emily Davis - HR
- Robert Brown - Finance
- Sarah Wilson - IT
- David Martinez - Operations
- Lisa Anderson - Customer Support

---

## 📊 Technology Stack

**Frontend:**
- React 18
- Vite
- TailwindCSS
- React Router
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] Can access login page
- [ ] Can login successfully
- [ ] Dashboard shows statistics
- [ ] Can view 8 employees
- [ ] Can add new employee
- [ ] Can edit employee
- [ ] Can delete employee
- [ ] Search works
- [ ] Filter works

---

## 🎓 Features to Explore

### Dashboard
- Total Employees count
- Active Employees count
- Department statistics
- Visual data cards

### Employee Management
- View all employees in a table
- Search by name, email, or ID
- Filter by department
- View employee details in modal
- Add new employees with form validation
- Edit existing employees
- Delete employees with confirmation

### UI/UX
- Modern glassmorphism design
- Smooth animations
- Responsive on all devices
- Toast notifications
- Loading states
- Beautiful gradients

---

## 🚀 Ready to Start?

Follow the **QUICK START** steps above!

---

## 📞 Need More Help?

1. Check **VSCODE-SETUP.md** for detailed VS Code guide
2. Check **README.md** for complete documentation
3. Check **FEATURES.md** for feature details
4. Check **DEPLOYMENT.md** for production deployment

---

## 🎉 Enjoy Your Employee Management System!

**Built with ❤️ using React, Node.js, Express, and MongoDB**

---

**Questions? Check the documentation files included in this package!**
