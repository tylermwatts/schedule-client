import React, { useEffect, useState } from 'react';
import { singleEmployee } from '../../initial_state/';
import employeeRepository from '../../repositories/employeeRepository';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import ScheduleTable from '../ScheduleTable/ScheduleTable';

const ScheduleContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    employeeRepository.getAllEmployees().then(employeeData => {
      setEmployees(employeeData);
      setLoading(false);
    });
  }, []);

  const addEmployee = newEmployee => {
    setLoading(true);
    employeeRepository
      .addEmployee(newEmployee)
      .then(response => {
        setEmployees([...employees, newEmployee]);
        setLoading(false);
        response.json();
      })
      .catch(err => console.log(err));
  };

  const deleteEmployee = id => {
    setLoading(true);
    employeeRepository
      .deleteEmployee(id)
      .then(response => {
        setEmployees(employees.filter(e => e._id !== id));
        setLoading(false);
        alert(response.success);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <h3>Updating...</h3>
        </div>
      ) : (
        <ScheduleTable employees={employees} deleteEmployee={deleteEmployee} />
      )}
      <AddEmployeeForm addEmployee={addEmployee} newEmployee={singleEmployee} />
    </div>
  );
};

export default ScheduleContainer;
