# 🚨 LOGIN NOT WORKING - IMMEDIATE FIX

## ⚡ QUICK FIX - DO THIS NOW:

### Step 1: Make Sure Backend is Running

**Check your backend terminal.** It should show:
```
Server running on port 5000
MongoDB Connected: localhost
```

**If NOT showing this:**

1. **Stop the backend** (press Ctrl + C)
2. **Run these commands:**

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
node utils/seed.js
npm start
```

---

### Step 2: Test Backend Directly

**Open a NEW PowerShell window** and run:

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
powershell -ExecutionPolicy Bypass -File test-login.ps1
```

**This will tell you if the backend is working!**

---

### Step 3: Check Browser Console

1. Open your browser
2. Press **F12** to open DevTools
3. Go to **Console** tab
4. Try to login
5. **Look for error messages**

**Common errors and fixes:**

**Error: "Network Error"**
- Backend is not running
- Fix: Run `npm start` in backend folder

**Error: "401 Unauthorized"**
- Wrong credentials OR admin doesn't exist
- Fix: Run `node utils/seed.js` in backend folder

**Error: "CORS"**
- CORS issue
- Fix: Restart backend server

---

### Step 4: Clear Browser Data

1. Press **Ctrl + Shift + Delete**
2. Select "All time"
3. Check "Cookies" and "Cached images"
4. Click "Clear data"
5. Close and reopen browser
6. Go to http://localhost:3000/login

---

### Step 5: Verify Exact Credentials

**Copy and paste these exactly:**

**Email:** `admin@example.com`  
**Password:** `admin123`

**Important:**
- All lowercase
- No spaces
- Exactly as shown

---

## 🔍 DETAILED CHECKS

### Is MongoDB Running?

```powershell
# Run as Administrator
net start MongoDB
```

### Is Backend Running?

Check backend terminal for:
```
Server running on port 5000
MongoDB Connected: localhost
```

### Is Frontend Running?

Check frontend terminal for:
```
Local: http://localhost:3000/
```

### Is Database Seeded?

Run:
```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
node utils/seed.js
```

Should show:
```
Admin created: admin@example.com
8 employees created
```

---

## 🎯 COMPLETE RESTART PROCEDURE

**If nothing works, do a complete restart:**

### 1. Stop Everything

- Press **Ctrl + C** in backend terminal
- Press **Ctrl + C** in frontend terminal
- Close browser

### 2. Start MongoDB

```powershell
# Run as Administrator
net start MongoDB
```

### 3. Seed Database

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
node utils/seed.js
```

### 4. Start Backend

```powershell
npm start
```

**Wait for:** "Server running on port 5000"

### 5. Start Frontend

**Open NEW terminal:**

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
npm run dev
```

**Wait for:** "Local: http://localhost:3000/"

### 6. Open Browser

- Go to: http://localhost:3000/login
- Press **F12** (open DevTools)
- Go to **Application** tab
- Click "Clear storage"
- Click "Clear site data"
- Refresh page (Ctrl + R)

### 7. Login

- Email: `admin@example.com`
- Password: `admin123`
- Click "Sign In"

---

## 🐛 DEBUGGING

### Check Backend Response

When you click "Sign In", check the backend terminal.

**You should see:**
```
POST /api/auth/login 200
```

**If you see:**
```
POST /api/auth/login 401
```

This means wrong credentials or admin doesn't exist.

**Fix:** Run `node utils/seed.js`

---

### Check Browser Network Tab

1. Open DevTools (F12)
2. Go to **Network** tab
3. Click "Sign In"
4. Look for "login" request
5. Click on it
6. Check **Response** tab

**Should see:**
```json
{
  "_id": "...",
  "username": "admin",
  "email": "admin@example.com",
  "token": "eyJ..."
}
```

**If you see error:**
```json
{
  "message": "Invalid email or password"
}
```

**Fix:** Run `node utils/seed.js` to recreate admin

---

## ✅ SUCCESS INDICATORS

After successful login, you should:

1. ✅ See dashboard page
2. ✅ See statistics cards
3. ✅ See sidebar with navigation
4. ✅ URL changes to `/dashboard`
5. ✅ No errors in console

---

## 🆘 STILL NOT WORKING?

### Send me this information:

1. **Backend terminal output** (copy the last 20 lines)
2. **Frontend terminal output** (copy the last 20 lines)
3. **Browser console errors** (F12 → Console tab)
4. **Network tab response** (F12 → Network → click "login" → Response tab)

---

## 📞 QUICK COMMANDS REFERENCE

```powershell
# Start MongoDB
net start MongoDB

# Seed database
cd C:\Users\Rakes\Desktop\employee-management-system\backend
node utils/seed.js

# Start backend
npm start

# Start frontend (new terminal)
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
npm run dev

# Test backend
cd C:\Users\Rakes\Desktop\employee-management-system\backend
powershell -ExecutionPolicy Bypass -File test-login.ps1
```

---

**Follow these steps carefully and login should work! 🚀**
