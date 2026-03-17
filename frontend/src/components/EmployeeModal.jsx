import { X, Mail, Phone, MapPin, Briefcase, DollarSign, Calendar } from 'lucide-react';

const EmployeeModal = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Employee Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <img
              src={employee.profileImage}
              alt={employee.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{employee.name}</h3>
              <p className="text-gray-600">{employee.jobTitle}</p>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                employee.status === 'Active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {employee.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{employee.email}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{employee.phone}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Briefcase className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Department</p>
                  <p className="font-medium text-gray-900">{employee.department}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <DollarSign className="text-orange-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Salary</p>
                  <p className="font-medium text-gray-900">${employee.salary.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Calendar className="text-cyan-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date Joined</p>
                  <p className="font-medium text-gray-900">
                    {new Date(employee.dateJoined).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <MapPin className="text-red-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employee ID</p>
                  <p className="font-medium text-gray-900">{employee.employeeId}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <MapPin className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium text-gray-900">{employee.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
