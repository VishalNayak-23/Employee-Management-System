import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Edit, Trash2, Eye, Plus } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import { employeeService } from '../services/employeeService';
import toast from 'react-hot-toast';
import EmployeeModal from '../components/EmployeeModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const navigate = useNavigate();

  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'IT', 'Customer Support'];

  useEffect(() => {
    fetchEmployees();
  }, [search, department]);

  const fetchEmployees = async () => {
    try {
      const params = {};
      if (search) params.search = search;
      if (department) params.department = department;
      const data = await employeeService.getAll(params);
      setEmployees(data);
    } catch (error) {
      toast.error('Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  };

  const handleView = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    navigate(`/employees/edit/${id}`);
  };

  const handleDeleteClick = (employee) => {
    setEmployeeToDelete(employee);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await employeeService.delete(employeeToDelete._id);
      toast.success('Employee deleted successfully');
      fetchEmployees();
      setDeleteModal(false);
    } catch (error) {
      toast.error('Failed to delete employee');
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
            <p className="text-gray-600 mt-2">Manage your employee records</p>
          </div>
          <button
            onClick={() => navigate('/employees/add')}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            Add Employee
          </button>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, email, or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="input-field pl-10 pr-8"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : employees.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No employees found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Employee</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Email</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Department</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Job Title</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={employee.profileImage}
                            alt={employee.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{employee.name}</p>
                            <p className="text-sm text-gray-500">{employee.employeeId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-700">{employee.email}</td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                          {employee.department}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700">{employee.jobTitle}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          employee.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {employee.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleView(employee)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => handleEdit(employee._id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(employee)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <EmployeeModal
          employee={selectedEmployee}
          onClose={() => setShowModal(false)}
        />
      )}

      {deleteModal && (
        <DeleteConfirmModal
          employee={employeeToDelete}
          onConfirm={handleDelete}
          onCancel={() => setDeleteModal(false)}
        />
      )}
    </DashboardLayout>
  );
};

export default EmployeeList;
