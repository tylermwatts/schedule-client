import React, { useEffect, useState } from 'react';
import { singleEmployee } from '../../initial_state/';
import employeeRepository from '../../repositories/employeeRepository';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import ScheduleTable from '../ScheduleTable/ScheduleTable';

const ScheduleContainer = () => {
  const [employees, setEmployees] = useState([]);
  const newEmployee = singleEmployee;

  useEffect(() => {
    const getData = () => {
      employeeRepository.getAllEmployees().then(data => setEmployees(data));
    };
    getData();
  }, []);

  const addEmployee = newEmployee => {
    employeeRepository.addEmployee(newEmployee);
  };

  return (
    <>
      <ScheduleTable employees={employees} />
      <AddEmployeeForm addEmployee={addEmployee} newEmployee={newEmployee} />
    </>
  );
};

export default ScheduleContainer;
