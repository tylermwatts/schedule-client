module.exports = {
  getAllEmployees() {
    return fetch(
      'https://warpfox-schedule-server.herokuapp.com/api/employees',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
    ).then(response => response.json());
  },
  addEmployee(employee) {
    return fetch('https://warpfox-schedule-server.herokuapp.com/api/employee', {
      method: 'POST',
      body: JSON.stringify({
        name: employee.name,
        schedule: employee.schedule
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  },
  editEmployee(employee) {
    return fetch(
      'https://warpfox-schedule-server.herokuapp.com/api/employee/' +
        employee._id,
      {
        method: 'PUT',
        body: JSON.stringify({
          name: employee.name,
          schedule: employee.schedule
        }),
        headers: { 'Content-Type': 'application/json' }
      }
    ).then(response => response.json());
  },
  deleteEmployee(id) {
    return fetch(
      'https://warpfox-schedule-server.herokuapp.com/api/employee/' + id,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }
    ).then(response => response.json());
  }
};
