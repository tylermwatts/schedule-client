const employeeService = require('./services/employeeService');

module.exports = app => {
  app.route('/api/employees').get(employeeService.getAllEmployees);

  app
    .route('/api/employee/:id')
    .get(employeeService.getEmployeeById)
    .post(employeeService.addEmployee)
    .put(employeeService.editEmployee)
    .delete(employeeService.deleteEmployee);
};
