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
	}, [employees]);

	const addEmployee = newEmployee => {
		employeeRepository
			.addEmployee(newEmployee)
			.then(response => console.log(response))
			.catch(err => console.log(err));
	};

	const deleteEmployee = id => {
		employeeRepository
			.deleteEmployee(id)
			.then(response => alert(response.success))
			.catch(err => console.log(err));
	};

	return (
		<>
			<ScheduleTable employees={employees} deleteEmployee={deleteEmployee} />
			<AddEmployeeForm addEmployee={addEmployee} newEmployee={newEmployee} />
		</>
	);
};

export default ScheduleContainer;
