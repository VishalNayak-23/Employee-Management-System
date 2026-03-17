# 🚀 QUICK FIX - NOT OPENING

## ⚡ EASIEST WAY TO FIX:

### Option 1: Use the Batch Script (EASIEST!)

**Double-click this file:**
```
START-ALL.bat
```

This will:
1. ✅ Stop all running servers
2. ✅ Start MongoDB
3. ✅ Start Backend
4. ✅ Start Frontend
5. ✅ Open browser automatically

**Just wait 10 seconds and the browser will open!**

---

### Option 2: Manual Restart

**If batch script doesn't work, do this:**

#### Step 1: Stop Everything
- Close all PowerShell terminals
- Close browser tabs with localhost:3000

#### Step 2: Start Backend
```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
npm start
```

Wait for: "Server running on port 5000"

#### Step 3: Start Frontend (NEW terminal)
```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
npm run dev
```

Wait for: "Local: http://localhost:3000/"

#### Step 4: Open Browser
Go to: **http://localhost:3000/login**

---

## 🔍 WHAT TO CHECK:

### Backend Terminal Should Show:
```
Server running on port 5000
MongoDB Connected: localhost
```

### Frontend Terminal Should Show:
```
VITE v5.0.8  ready in 500 ms
➜  Local:   http://localhost:3000/
```

### Browser Should Show:
- Login page with email/password fields
- Your credentials: 4mh23is122@gmail.com

---

## 🐛 IF STILL NOT WORKING:

### Check Browser Console:
1. Press **F12**
2. Go to **Console** tab
3. Look for red errors
4. Tell me what errors you see

### Check Terminals:
- Are both terminals showing the messages above?
- Any red errors in the terminals?

---

## 📞 TELL ME:

1. Did you run START-ALL.bat?
2. What do you see in the browser?
3. Any errors in browser console (F12)?
4. What do the terminals show?

---

**Try START-ALL.bat first - it's the easiest! 🚀**
