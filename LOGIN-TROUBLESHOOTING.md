# 🔧 LOGIN ISSUE - TROUBLESHOOTING GUIDE

## ❌ Problem: "Login Failed" Error

---

## ✅ SOLUTION - Follow These Steps:

### Step 1: Check Backend is Running

**In your backend terminal, you should see:**
```
Server running on port 5000
MongoDB Connected: localhost
```

**If NOT running:**
```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
npm start
```

---

### Step 2: Re-seed the Database

**Stop the backend** (Ctrl + C), then run:

```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
node utils/seed.js
```

**You should see:**
```
MongoDB Connected
Admin created: admin@example.com
8 employees created
```

**Then restart backend:**
```powershell
npm start
```

---

### Step 3: Test Backend API Directly

Open a **NEW PowerShell window** and run:

```powershell
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{\"email\":\"admin@example.com\",\"password\":\"admin123\"}'
```

**Expected Response:**
```json
{
  "_id": "...",
  "username": "admin",
  "email": "admin@example.com",
  "role": "admin",
  "token": "eyJhbGc..."
}
```

**If you get an error**, the backend is not working correctly.

---

### Step 4: Check MongoDB is Running

```powershell
# Run as Administrator
net start MongoDB
```

**Expected:** "The MongoDB service was started successfully."

---

### Step 5: Clear Browser Cache

1. Open browser DevTools (F12)
2. Go to **Application** tab
3. Click **Clear storage**
4. Click **Clear site data**
5. Refresh page (Ctrl + R)

---

### Step 6: Check Browser Console

1. Open browser (F12)
2. Go to **Console** tab
3. Try to login
4. Look for errors

**Common errors:**
- `Network Error` - Backend not running
- `404 Not Found` - Wrong API URL
- `401 Unauthorized` - Wrong credentials
- `CORS Error` - CORS not configured

---

### Step 7: Verify Credentials

**Email:** `admin@example.com` (all lowercase)  
**Password:** `admin123` (exactly as shown)

**Important:** 
- No spaces before or after
- Case sensitive
- Copy-paste to be sure

---

### Step 8: Check Frontend API URL

Open: `frontend/src/services/api.js`

Should be:
```javascript
baseURL: 'http://localhost:5000/api',
```

---

### Step 9: Restart Everything

**Stop both servers** (Ctrl + C in both terminals)

**Terminal 1 - Backend:**
```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\backend
npm start
```

**Terminal 2 - Frontend:**
```powershell
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
npm run dev
```

**Refresh browser** (Ctrl + R)

---

## 🔍 DETAILED DEBUGGING

### Check Backend Logs

When you try to login, check the backend terminal for:

**Success:**
```
POST /api/auth/login 200
```

**Failure:**
```
POST /api/auth/login 401
```

### Check Network Tab

1. Open DevTools (F12)
2. Go to **Network** tab
3. Try to login
4. Click on the `login` request
5. Check:
   - **Request URL:** Should be `http://localhost:5000/api/auth/login`
   - **Status:** Should be `200 OK`
   - **Response:** Should contain token

---

## 🎯 QUICK FIX COMMANDS

Run these commands in order:

```powershell
# Stop everything (Ctrl + C in both terminals)

# Terminal 1 - Backend
cd C:\Users\Rakes\Desktop\employee-management-system\backend
node utils/seed.js
npm start

# Terminal 2 - Frontend
cd C:\Users\Rakes\Desktop\employee-management-system\frontend
npm run dev
```

Then:
1. Open browser: http://localhost:3000/login
2. Clear cache (Ctrl + Shift + Delete)
3. Login with: admin@example.com / admin123

---

## 🆘 STILL NOT WORKING?

### Test with curl:

```powershell
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{\"email\":\"admin@example.com\",\"password\":\"admin123\"}'
```

**If this works but browser doesn't:**
- Clear browser cache completely
- Try a different browser
- Check browser console for errors

**If curl doesn't work:**
- Backend is not running correctly
- MongoDB is not connected
- Check backend terminal for errors

---

## ✅ CHECKLIST

- [ ] MongoDB is running (net start MongoDB)
- [ ] Backend is running (npm start in backend folder)
- [ ] Backend shows "Server running on port 5000"
- [ ] Backend shows "MongoDB Connected"
- [ ] Database is seeded (node utils/seed.js)
- [ ] Frontend is running (npm run dev in frontend folder)
- [ ] Frontend shows "Local: http://localhost:3000/"
- [ ] Browser is at http://localhost:3000/login
- [ ] Using correct credentials: admin@example.com / admin123
- [ ] Browser cache is cleared
- [ ] No errors in browser console
- [ ] No errors in backend terminal

---

## 🎉 AFTER SUCCESSFUL LOGIN

You should see:
- ✅ Redirect to dashboard
- ✅ Statistics cards
- ✅ Sidebar navigation
- ✅ Welcome message

---

**Need more help? Check the browser console (F12) and backend terminal for specific error messages!**
