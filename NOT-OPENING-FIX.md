# 🔧 APPLICATION NOT OPENING - TROUBLESHOOTING

## 🚨 ISSUE: Page Not Loading

Let me help you fix this step by step.

---

## ✅ STEP 1: CHECK WHAT'S RUNNING

### Check Backend:
Look at your backend terminal. You should see:
```
Server running on port 5000
MongoDB Connected: localhost
```

### Check Frontend:
Look at your frontend terminal. You should see:
```
VITE v5.0.8  ready in 500 ms
➜  Local:   http://localhost:3000/
```

**If you DON'T see these messages, the servers are not running properly!**

---

## 🔄 STEP 2: COMPLETE RESTART

Let's restart everything from scratch:

### A. Stop Everything

1. **Backend terminal:** Press `Ctrl + C`
2. **Frontend terminal:** Press `Ctrl + C`
3. **Close all browser tabs** with localhost:3000

### B. Start Backend

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
npm start
```

**Wait until you see:**
```
Server running on port 5000
MongoDB Connected: localhost
```

### C. Start Frontend

**Open NEW PowerShell terminal:**

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
npm run dev
```

**Wait until you see:**
```
VITE v5.0.8  ready in 500 ms
➜  Local:   http://localhost:3000/
```

### D. Open Browser

1. Open a **NEW browser window** (or incognito mode)
2. Go to: **http://localhost:3000/login**
3. Press **F12** to open DevTools
4. Check **Console** tab for errors

---

## 🐛 STEP 3: CHECK FOR ERRORS

### In Browser Console (F12):

**Look for these errors:**

**Error: "Failed to fetch"**
- Backend is not running
- Fix: Start backend with `npm start`

**Error: "Cannot GET /"**
- Frontend is not running
- Fix: Start frontend with `npm run dev`

**Error: "Module not found"**
- Dependencies not installed
- Fix: Run `npm install` in both folders

**Blank white page:**
- JavaScript error
- Check Console tab for red errors

---

## 🔍 STEP 4: DETAILED CHECKS

### Check 1: Is MongoDB Running?

```powershell
# Run as Administrator
net start MongoDB
```

Should say: "The MongoDB service was started successfully"

### Check 2: Are Ports Available?

```powershell
netstat -ano | findstr :5000
netstat -ano | findstr :3000
```

Should show LISTENING on both ports.

### Check 3: Can You Access Backend Directly?

Open browser and go to:
```
http://localhost:5000
```

Should show:
```json
{"message":"Employee Management System API"}
```

If you see this, backend is working!

### Check 4: Frontend Files Exist?

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
dir src\App.jsx
```

Should show the file exists.

---

## 🎯 STEP 5: NUCLEAR OPTION (If nothing works)

### Complete Clean Restart:

```powershell
# 1. Kill all node processes
taskkill /F /IM node.exe

# 2. Start MongoDB
net start MongoDB

# 3. Backend
cd C:\Users\Rakes\Desktop\employee-management-system\backend
npm install
node utils/seed.js
npm start

# 4. Frontend (NEW terminal)
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
npm install
npm run dev
```

---

## 📋 STEP 6: WHAT SHOULD YOU SEE?

### Backend Terminal:
```
> employee-management-backend@1.0.0 start
> node server.js

Server running on port 5000
MongoDB Connected: localhost
```

### Frontend Terminal:
```
> employee-management-frontend@1.0.0 dev
> vite

  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Browser:
- Beautiful login page
- Email and password fields
- "Sign In" button
- Your credentials shown: 4mh23is122@gmail.com

---

## 🆘 COMMON ISSUES & FIXES

### Issue: "Port 5000 already in use"
```powershell
npx kill-port 5000
```

### Issue: "Port 3000 already in use"
```powershell
npx kill-port 3000
```

### Issue: "MongoDB connection failed"
```powershell
# Run as Administrator
net start MongoDB
```

### Issue: "Cannot find module"
```powershell
# In backend
cd backend
npm install

# In frontend
cd frontend
npm install
```

### Issue: Blank white page
1. Open DevTools (F12)
2. Go to Console tab
3. Look for red errors
4. Share the error message

---

## 📞 TELL ME WHAT YOU SEE

Please check:

1. **Backend terminal** - Copy the last 10 lines
2. **Frontend terminal** - Copy the last 10 lines
3. **Browser** - What do you see? (blank page, error, loading?)
4. **Browser Console (F12)** - Any red errors?

Share this information so I can help you fix it!

---

## 🎯 QUICK TEST

Run these commands and tell me what happens:

```powershell
# Test 1: Backend
curl http://localhost:5000

# Test 2: Frontend
curl http://localhost:3000
```

What do you see?

---

**Follow the steps above and let me know what happens! 🚀**
