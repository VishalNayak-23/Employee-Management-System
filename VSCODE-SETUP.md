# 🎯 VS CODE SETUP GUIDE

## Complete Guide to Run Employee Management System in VS Code

---

## 📦 Step 1: Extract the ZIP File

1. Extract `employee-management-system.zip` to your desired location
2. Example: `C:\Projects\employee-management-system`

---

## 🚀 Step 2: Open in VS Code

### Method 1: From VS Code
1. Open VS Code
2. Click `File` → `Open Folder`
3. Navigate to `employee-management-system` folder
4. Click `Select Folder`

### Method 2: From File Explorer
1. Right-click on `employee-management-system` folder
2. Select `Open with Code`

---

## ✅ Step 3: Verify Project Structure

You should see this structure in VS Code Explorer:

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
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🔧 Step 4: Install VS Code Extensions (Recommended)

Install these extensions for better development experience:

1. **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
2. **ESLint** (dbaeumer.vscode-eslint)
3. **Prettier - Code formatter** (esbenp.prettier-vscode)
4. **MongoDB for VS Code** (mongodb.mongodb-vscode)
5. **Thunder Client** (rangav.vscode-thunder-client) - For API testing

---

## 💾 Step 5: Start MongoDB

Before running the application, ensure MongoDB is running:

### Windows:
```bash
net start MongoDB
```

### Mac/Linux:
```bash
sudo systemctl start mongod
```

### Verify MongoDB is Running:
Open a terminal and run:
```bash
mongosh
```

If connected successfully, you'll see MongoDB shell.

---

## 🖥️ Step 6: Open Integrated Terminal in VS Code

1. Press `` Ctrl + ` `` (backtick) or
2. Click `Terminal` → `New Terminal` from menu

---

## 📦 Step 7: Backend Setup

### In the terminal, run:

```bash
cd backend
npm install
```

**Wait for installation to complete** (this may take 2-3 minutes)

### Seed the Database:

```bash
npm run seed
```

**Expected Output:**
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

### Start Backend Server:

```bash
npm start
```

**Expected Output:**
```
Server running on port 5000
MongoDB Connected: localhost
```

✅ **Backend is now running!**

---

## 🎨 Step 8: Frontend Setup

### Open a NEW Terminal:

1. Click the `+` icon in terminal panel, or
2. Press `` Ctrl + Shift + ` ``

### In the NEW terminal, run:

```bash
cd frontend
npm install
```

**Wait for installation to complete** (this may take 2-3 minutes)

### Start Frontend Server:

```bash
npm run dev
```

**Expected Output:**
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

✅ **Frontend is now running!**

---

## 🌐 Step 9: Access the Application

### Open Your Browser:

1. **Ctrl + Click** on `http://localhost:3000/` in the terminal, or
2. Manually open browser and go to: `http://localhost:3000/login`

### Login:

- **Email:** `admin@example.com`
- **Password:** `admin123`

---

## 🎯 Step 10: Verify Everything Works

After login, test these features:

- [ ] Dashboard displays statistics
- [ ] Click "Employees" - see 8 sample employees
- [ ] Search for "John" - should find John Doe
- [ ] Filter by "Engineering" department
- [ ] Click "Add Employee" - add a new employee
- [ ] Click edit icon - edit an employee
- [ ] Click delete icon - delete an employee
- [ ] Logout and login again

---

## 📂 VS Code Terminal Layout

You should have **2 terminals running**:

```
Terminal 1: Backend
C:\...\employee-management-system\backend> npm start
Server running on port 5000

Terminal 2: Frontend
C:\...\employee-management-system\frontend> npm run dev
Local: http://localhost:3000/
```

---

## 🔍 Debugging in VS Code

### View Backend Logs:
- Check Terminal 1 for API requests and errors

### View Frontend Logs:
- Check Terminal 2 for build errors
- Open Browser DevTools (F12) for runtime errors

### MongoDB Data:
- Install "MongoDB for VS Code" extension
- Connect to: `mongodb://localhost:27017`
- Browse `employee_management` database

---

## 🛠️ Useful VS Code Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Terminal | `` Ctrl + ` `` |
| New Terminal | `` Ctrl + Shift + ` `` |
| Toggle Sidebar | `Ctrl + B` |
| Quick Open File | `Ctrl + P` |
| Search in Files | `Ctrl + Shift + F` |
| Format Document | `Shift + Alt + F` |
| Go to Definition | `F12` |
| Find References | `Shift + F12` |

---

## 🐛 Troubleshooting in VS Code

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: "MongoDB connection failed"
**Solution:** 
1. Check if MongoDB is running: `net start MongoDB`
2. Verify connection string in `backend/.env`

### Issue: "Port 5000 already in use"
**Solution:**
```bash
npx kill-port 5000
```

### Issue: "Port 3000 already in use"
**Solution:**
```bash
npx kill-port 3000
```

### Issue: "Module not found"
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

---

## 📝 VS Code Settings (Optional)

Create `.vscode/settings.json` in project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true
  }
}
```

---

## 🧪 Testing API Endpoints in VS Code

### Using Thunder Client Extension:

1. Install Thunder Client extension
2. Create new request
3. Test endpoints:

**Login:**
```
POST http://localhost:5000/api/auth/login
Body (JSON):
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

**Get Employees:**
```
GET http://localhost:5000/api/employees
Headers:
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 📊 Project Files Overview

### Backend Key Files:
- `server.js` - Main entry point
- `config/database.js` - MongoDB connection
- `models/Employee.js` - Employee schema
- `controllers/employeeController.js` - Business logic
- `routes/employeeRoutes.js` - API routes
- `middleware/auth.js` - JWT authentication

### Frontend Key Files:
- `src/main.jsx` - Entry point
- `src/App.jsx` - Main component with routes
- `src/pages/Login.jsx` - Login page
- `src/pages/Dashboard.jsx` - Dashboard
- `src/pages/EmployeeList.jsx` - Employee list
- `src/services/api.js` - Axios configuration

---

## 🎨 Customization

### Change Port Numbers:

**Backend:** Edit `backend/.env`
```env
PORT=5000  # Change to your preferred port
```

**Frontend:** Edit `frontend/vite.config.js`
```javascript
server: {
  port: 3000,  // Change to your preferred port
}
```

### Change Database Name:

Edit `backend/.env`
```env
MONGODB_URI=mongodb://localhost:27017/your_database_name
```

---

## 🔄 Restart Servers

### To restart backend:
1. In Terminal 1, press `Ctrl + C`
2. Run `npm start` again

### To restart frontend:
1. In Terminal 2, press `Ctrl + C`
2. Run `npm run dev` again

---

## 📚 Additional Resources

- **React Docs:** https://react.dev/
- **Express Docs:** https://expressjs.com/
- **MongoDB Docs:** https://docs.mongodb.com/
- **Vite Docs:** https://vitejs.dev/
- **TailwindCSS Docs:** https://tailwindcss.com/

---

## ✅ Success Checklist

- [ ] VS Code opened with project folder
- [ ] MongoDB is running
- [ ] Backend dependencies installed (`npm install` in backend)
- [ ] Database seeded (`npm run seed`)
- [ ] Backend server running (Terminal 1)
- [ ] Frontend dependencies installed (`npm install` in frontend)
- [ ] Frontend server running (Terminal 2)
- [ ] Can access http://localhost:3000
- [ ] Can login with admin credentials
- [ ] Dashboard shows statistics
- [ ] Can view, add, edit, delete employees

---

## 🎉 You're All Set!

Your Employee Management System is now running in VS Code!

**Happy Coding! 🚀**

---

## 💡 Pro Tips

1. **Split Terminal:** Click split icon in terminal to view both terminals side by side
2. **Auto Save:** Enable `File` → `Auto Save` for automatic file saving
3. **Zen Mode:** Press `Ctrl + K Z` for distraction-free coding
4. **Multi-cursor:** Hold `Alt` and click to add multiple cursors
5. **Duplicate Line:** `Shift + Alt + Down` to duplicate current line

---

**Need Help?** Check README.md for detailed documentation!
