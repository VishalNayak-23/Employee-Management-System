@echo off
echo ========================================
echo RESTARTING EMPLOYEE MANAGEMENT SYSTEM
echo ========================================
echo.

echo Step 1: Killing existing node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 >nul

echo Step 2: Starting MongoDB...
net start MongoDB
timeout /t 2 >nul

echo Step 3: Starting Backend...
cd /d "%~dp0backend"
start "Backend Server" cmd /k "npm start"
timeout /t 5 >nul

echo Step 4: Starting Frontend...
cd /d "%~dp0frontend"
start "Frontend Server" cmd /k "npm run dev"
timeout /t 3 >nul

echo.
echo ========================================
echo SERVERS STARTED!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Two new windows should have opened:
echo 1. Backend Server (port 5000)
echo 2. Frontend Server (port 3000)
echo.
echo Wait 10 seconds, then open your browser to:
echo http://localhost:3000/login
echo.
echo Login with:
echo Email: 4mh23is122@gmail.com
echo Password: Vishal@12345
echo.
echo Press any key to open browser...
pause >nul

start http://localhost:3000/login

echo.
echo Done! Check the browser.
echo.
pause
