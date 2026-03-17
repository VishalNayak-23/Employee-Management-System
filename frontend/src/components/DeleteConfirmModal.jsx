import { AlertTriangle } from 'lucide-react';

const DeleteConfirmModal = ({ employee, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-red-100 rounded-full">
            <AlertTriangle className="text-red-600" size={24} />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Confirm Delete</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <strong>{employee?.name}</strong>? This action cannot be undone.
        </p>

        <div className="flex gap-4">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-all duration-200"
          >
            Delete
          </button>
          <button
            onClick={onCancel}
            className="flex-1 btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
