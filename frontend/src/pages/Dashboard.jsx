import { useEffect, useState } from 'react';
import { Users, UserCheck, Building2, TrendingUp } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import { employeeService } from '../services/employeeService';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    totalDepartments: 0,
    departmentStats: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await employeeService.getStats();
      setStats(data);
    } catch (error) {
      toast.error('Failed to fetch statistics');
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Employees',
      value: stats.totalEmployees,
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Employees',
      value: stats.activeEmployees,
      icon: UserCheck,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Departments',
      value: stats.totalDepartments,
      icon: Building2,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Growth Rate',
      value: '+12%',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to Employee Management System</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="glass-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                  </div>
                  <div className={`p-4 rounded-xl ${card.bgColor}`}>
                    <Icon className={`bg-gradient-to-r ${card.color} bg-clip-text text-transparent`} size={32} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-card rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Department Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.departmentStats.map((dept, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">{dept._id}</p>
                <p className="text-2xl font-bold text-indigo-600 mt-1">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
