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
    employeeRepository
      .addEmployee(newEmployee)
      .then(response => {
        setEmployees([...employees, newEmployee]);
        response.json();
      })
      .catch(err => console.log(err));
  };

  const deleteEmployee = id => {
    employeeRepository
      .deleteEmployee(id)
      .then(response => alert(response.success))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <ScheduleTable employees={employees} deleteEmployee={deleteEmployee} />
      {loading && <div>Loading...</div>}
      <AddEmployeeForm addEmployee={addEmployee} newEmployee={singleEmployee} />
    </div>
  );
};

export default ScheduleContainer;
