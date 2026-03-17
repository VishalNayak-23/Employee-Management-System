const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');
const Employee = require('../models/Employee');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Admin.deleteMany();
    await Employee.deleteMany();

    // Create admin users
    const admin1 = await Admin.create({
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123'
    });

    const admin2 = await Admin.create({
      username: 'Vishal',
      email: '4mh23is122@gmail.com',
      password: 'Vishal@12345'
    });

    console.log('Admin 1 created:', admin1.email);
    console.log('Admin 2 created:', admin2.email);

    // Create sample employees
    const employees = [
      {
        employeeId: 'EMP001',
        name: 'John Doe',
        email: 'john.doe@company.com',
        phone: '+1-555-0101',
        department: 'Engineering',
        jobTitle: 'Senior Software Engineer',
        salary: 95000,
        status: 'Active',
        dateJoined: new Date('2022-01-15'),
        profileImage: 'https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff&size=200',
        address: '123 Main St, San Francisco, CA 94102'
      },
      {
        employeeId: 'EMP002',
        name: 'Jane Smith',
        email: 'jane.smith@company.com',
        phone: '+1-555-0102',
        department: 'Marketing',
        jobTitle: 'Marketing Manager',
        salary: 85000,
        status: 'Active',
        dateJoined: new Date('2021-06-20'),
        profileImage: 'https://ui-avatars.com/api/?name=Jane+Smith&background=ec4899&color=fff&size=200',
        address: '456 Oak Ave, San Francisco, CA 94103'
      },
      {
        employeeId: 'EMP003',
        name: 'Michael Johnson',
        email: 'michael.j@company.com',
        phone: '+1-555-0103',
        department: 'Sales',
        jobTitle: 'Sales Representative',
        salary: 65000,
        status: 'Active',
        dateJoined: new Date('2023-03-10'),
        profileImage: 'https://ui-avatars.com/api/?name=Michael+Johnson&background=10b981&color=fff&size=200',
        address: '789 Pine Rd, San Francisco, CA 94104'
      },
      {
        employeeId: 'EMP004',
        name: 'Emily Davis',
        email: 'emily.davis@company.com',
        phone: '+1-555-0104',
        department: 'HR',
        jobTitle: 'HR Specialist',
        salary: 70000,
        status: 'Active',
        dateJoined: new Date('2022-08-05'),
        profileImage: 'https://ui-avatars.com/api/?name=Emily+Davis&background=f59e0b&color=fff&size=200',
        address: '321 Elm St, San Francisco, CA 94105'
      },
      {
        employeeId: 'EMP005',
        name: 'Robert Brown',
        email: 'robert.brown@company.com',
        phone: '+1-555-0105',
        department: 'Finance',
        jobTitle: 'Financial Analyst',
        salary: 80000,
        status: 'Active',
        dateJoined: new Date('2021-11-12'),
        profileImage: 'https://ui-avatars.com/api/?name=Robert+Brown&background=8b5cf6&color=fff&size=200',
        address: '654 Maple Dr, San Francisco, CA 94106'
      },
      {
        employeeId: 'EMP006',
        name: 'Sarah Wilson',
        email: 'sarah.wilson@company.com',
        phone: '+1-555-0106',
        department: 'IT',
        jobTitle: 'System Administrator',
        salary: 75000,
        status: 'Inactive',
        dateJoined: new Date('2020-04-18'),
        profileImage: 'https://ui-avatars.com/api/?name=Sarah+Wilson&background=ef4444&color=fff&size=200',
        address: '987 Cedar Ln, San Francisco, CA 94107'
      },
      {
        employeeId: 'EMP007',
        name: 'David Martinez',
        email: 'david.martinez@company.com',
        phone: '+1-555-0107',
        department: 'Operations',
        jobTitle: 'Operations Manager',
        salary: 90000,
        status: 'Active',
        dateJoined: new Date('2022-02-28'),
        profileImage: 'https://ui-avatars.com/api/?name=David+Martinez&background=06b6d4&color=fff&size=200',
        address: '147 Birch Ct, San Francisco, CA 94108'
      },
      {
        employeeId: 'EMP008',
        name: 'Lisa Anderson',
        email: 'lisa.anderson@company.com',
        phone: '+1-555-0108',
        department: 'Customer Support',
        jobTitle: 'Support Specialist',
        salary: 55000,
        status: 'Active',
        dateJoined: new Date('2023-07-01'),
        profileImage: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=14b8a6&color=fff&size=200',
        address: '258 Spruce Way, San Francisco, CA 94109'
      }
    ];

    await Employee.insertMany(employees);
    console.log(`${employees.length} employees created`);

    console.log('\n=== Seed Data Complete ===');
    console.log('Admin Login Options:');
    console.log('1. Email: admin@example.com | Password: admin123');
    console.log('2. Email: 4mh23is122@gmail.com | Password: Vishal@12345');
    console.log('========================\n');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
