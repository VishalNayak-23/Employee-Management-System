# 🎯 QUICK REFERENCE - Run in VS Code

## ✅ VS Code is Now Open!

You should see the project structure in the left sidebar.

---

## 🚀 FOLLOW THESE STEPS NOW

### Step 1: Open Integrated Terminal
Press: **Ctrl + `** (backtick key)

Or: Click `Terminal` → `New Terminal` from the menu

---

### Step 2: Start MongoDB (Important!)

In a separate Command Prompt (Run as Administrator):

```bash
net start MongoDB
```

---

### Step 3: Setup Backend

In the VS Code terminal, run:

```bash
cd backend
npm install
```

Wait for installation (2-3 minutes)...

Then seed the database:

```bash
npm run seed
```

You should see:
```
Admin created: admin@example.com
8 employees created
```

Then start the backend:

```bash
npm start
```

You should see:
```
Server running on port 5000
MongoDB Connected: localhost
```

✅ **Backend is running!** Keep this terminal open.

---

### Step 4: Setup Frontend

Click the **+** icon in the terminal panel to open a NEW terminal.

In the NEW terminal, run:

```bash
cd frontend
npm install
```

Wait for installation (2-3 minutes)...

Then start the frontend:

```bash
npm run dev
```

You should see:
```
Local: http://localhost:3000/
```

✅ **Frontend is running!** Keep this terminal open too.

---

### Step 5: Open in Browser

**Ctrl + Click** on `http://localhost:3000/` in the terminal

Or manually open your browser and go to:
```
http://localhost:3000/login
```

---

### Step 6: Login

**Email:** admin@example.com  
**Password:** admin123

---

## 🎉 SUCCESS!

You should now see the dashboard with employee statistics!

---

## 📂 VS Code Layout

You should have:

- **Left Sidebar:** File explorer
- **Center:** Code editor
- **Bottom:** 2 terminals running
  - Terminal 1: Backend (port 5000)
  - Terminal 2: Frontend (port 3000)

---

## 🎯 What to Explore

1. ✅ Dashboard - View statistics
2. ✅ Employees - See 8 sample employees
3. ✅ Add Employee - Create new employee
4. ✅ Edit Employee - Modify details
5. ✅ Delete Employee - Remove employee
6. ✅ Search - Find employees
7. ✅ Filter - By department

---

## 🐛 Troubleshooting

### MongoDB Connection Error?
```bash
# Run in Command Prompt as Administrator
net start MongoDB
```

### Port Already in Use?
```bash
npx kill-port 5000
npx kill-port 3000
```

### Module Not Found?
```bash
# In backend terminal
cd backend
npm install

# In frontend terminal
cd frontend
npm install
```

---

## 📚 Documentation

All guides are in the project root:

- **START-HERE.md** - Complete guide
- **VSCODE-SETUP.md** - Detailed VS Code setup
- **README.md** - Full documentation
- **FEATURES.md** - All features explained

---

## 💡 VS Code Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Terminal | Ctrl + ` |
| New Terminal | Ctrl + Shift + ` |
| Toggle Sidebar | Ctrl + B |
| Quick Open | Ctrl + P |
| Search Files | Ctrl + Shift + F |
| Format Code | Shift + Alt + F |

---

## 🔄 To Restart Servers

### Backend:
1. In Terminal 1, press **Ctrl + C**
2. Run `npm start` again

### Frontend:
1. In Terminal 2, press **Ctrl + C**
2. Run `npm run dev` again

---

## ✅ Current Status

- ✅ VS Code opened
- ⏳ Waiting for you to run commands
- ⏳ Backend not started yet
- ⏳ Frontend not started yet

---

## 🎯 YOUR NEXT ACTION

1. Open terminal in VS Code (Ctrl + `)
2. Run the commands from Step 3 above
3. Follow the steps in order

---

**You're all set! Follow the steps above to start the application! 🚀**
