import API from './api';

export const employeeService = {
  getAll: async (params = {}) => {
    const { data } = await API.get('/employees', { params });
    return data;
  },

  getById: async (id) => {
    const { data } = await API.get(`/employees/${id}`);
    return data;
  },

  create: async (employeeData) => {
    const { data } = await API.post('/employees', employeeData);
    return data;
  },

  update: async (id, employeeData) => {
    const { data } = await API.put(`/employees/${id}`, employeeData);
    return data;
  },

  delete: async (id) => {
    const { data } = await API.delete(`/employees/${id}`);
    return data;
  },

  getStats: async () => {
    const { data } = await API.get('/employees/stats/dashboard');
    return data;
  }
};
