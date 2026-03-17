# Employee Management System

A modern, full-stack web application for managing employee records with secure authentication, built with React, Node.js, Express, and MongoDB.

![Employee Management System](https://img.shields.io/badge/Status-Production%20Ready-success)

## 🚀 Features

### Authentication
- ✅ Secure JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Protected routes
- ✅ Session persistence
- ✅ Logout functionality

### Employee Management (CRUD)
- ✅ **Create**: Add new employees with complete information
- ✅ **Read**: View employee list with search and filters
- ✅ **Update**: Edit employee information
- ✅ **Delete**: Remove employee records with confirmation

### Advanced Features
- ✅ Real-time search functionality
- ✅ Department-based filtering
- ✅ Dashboard with statistics
- ✅ Beautiful glassmorphism UI
- ✅ Toast notifications
- ✅ Loading states
- ✅ Form validation (frontend & backend)
- ✅ Responsive design
- ✅ Image preview for profile pictures

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **TailwindCSS** - Styling
- **Lucide Icons** - Icon library
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin support

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16 or higher)
- **MongoDB** (v5 or higher)
- **npm** or **yarn**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
cd Desktop
cd employee-management-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

The `.env` file is already created in the backend folder with:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_management
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
net start MongoDB
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
```

Or use MongoDB Compass/Atlas.

### 5. Seed Database (Optional but Recommended)

Populate the database with sample data including an admin user:

```bash
npm run seed
```

This creates:
- **Admin Account**: 
  - Email: `admin@example.com`
  - Password: `admin123`
- **8 Sample Employees**

### 6. Start Backend Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

Backend will run on: `http://localhost:5000`

### 7. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

### 8. Start Frontend Development Server

```bash
npm run dev
```

Frontend will run on: `http://localhost:3000`

## 🎯 Usage

### 1. Login

Navigate to `http://localhost:3000/login`

**Demo Credentials:**
- Email: `admin@example.com`
- Password: `admin123`

### 2. Dashboard

After login, you'll see:
- Total Employees count
- Active Employees count
- Total Departments
- Department distribution

### 3. Employee Management

**View Employees:**
- Navigate to "Employees" from sidebar
- Search by name, email, or ID
- Filter by department
- View employee details in modal

**Add Employee:**
- Click "Add Employee" button
- Fill in all required fields
- Submit form

**Edit Employee:**
- Click edit icon on employee row
- Update information
- Save changes

**Delete Employee:**
- Click delete icon
- Confirm deletion in modal

## 📁 Project Structure

```
employee-management-system/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── employeeController.js # Employee CRUD operations
│   ├── middleware/
│   │   ├── auth.js              # JWT verification
│   │   └── errorHandler.js      # Error handling
│   ├── models/
│   │   ├── Admin.js             # Admin schema
│   │   └── Employee.js          # Employee schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── employeeRoutes.js    # Employee endpoints
│   ├── utils/
│   │   └── seed.js              # Database seeding
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DeleteConfirmModal.jsx
│   │   │   ├── EmployeeModal.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx  # Global auth state
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx
│   │   ├── pages/
│   │   │   ├── AddEmployee.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EditEmployee.jsx
│   │   │   ├── EmployeeList.jsx
│   │   │   └── Login.jsx
│   │   ├── services/
│   │   │   ├── api.js           # Axios configuration
│   │   │   ├── authService.js   # Auth API calls
│   │   │   └── employeeService.js # Employee API calls
│   │   ├── App.jsx              # Main component
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/login          # Admin login
GET    /api/auth/profile        # Get admin profile (Protected)
```

### Employees
```
GET    /api/employees            # Get all employees (Protected)
GET    /api/employees/:id        # Get single employee (Protected)
POST   /api/employees            # Create employee (Protected)
PUT    /api/employees/:id        # Update employee (Protected)
DELETE /api/employees/:id        # Delete employee (Protected)
GET    /api/employees/stats/dashboard # Get statistics (Protected)
```

### Query Parameters
```
GET /api/employees?search=john           # Search employees
GET /api/employees?department=Engineering # Filter by department
GET /api/employees?status=Active         # Filter by status
```

## 🎨 UI Features

- **Glassmorphism Design**: Modern frosted glass effect
- **Gradient Backgrounds**: Soft, appealing color schemes
- **Smooth Animations**: Transitions and hover effects
- **Responsive Layout**: Works on all screen sizes
- **Toast Notifications**: Real-time feedback
- **Loading States**: Skeleton screens and spinners
- **Modal Dialogs**: Employee details and confirmations

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt (10 salt rounds)
- Protected API routes
- Input validation (frontend & backend)
- Email uniqueness validation
- Employee ID uniqueness validation
- XSS protection
- CORS enabled

## 📊 Employee Schema

```javascript
{
  employeeId: String (unique, required)
  name: String (required)
  email: String (unique, required, validated)
  phone: String (required)
  department: String (enum, required)
  jobTitle: String (required)
  salary: Number (required, min: 0)
  status: String (Active/Inactive)
  dateJoined: Date
  profileImage: String (URL)
  address: String (required)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
# Windows: net start MongoDB
# Mac/Linux: sudo systemctl start mongod
```

### Port Already in Use
```bash
# Backend (5000)
# Kill process: npx kill-port 5000

# Frontend (3000)
# Kill process: npx kill-port 3000
```

### Module Not Found
```bash
# Reinstall dependencies
cd backend && npm install
cd ../frontend && npm install
```

## 🚀 Production Deployment

### Backend
1. Set `NODE_ENV=production` in `.env`
2. Use a strong `JWT_SECRET`
3. Use MongoDB Atlas for database
4. Deploy to Heroku, Railway, or AWS

### Frontend
```bash
npm run build
# Deploy dist folder to Vercel, Netlify, or AWS S3
```

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👨‍💻 Author

Built with ❤️ by a Senior Full-Stack Engineer

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Enjoy managing your employees! 🎉**
