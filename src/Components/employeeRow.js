import React from './node_modules/react';

export const EmployeeRow = ({ employee }) => {
	return (
		<tr>
			<td>{employee.name}</td>
			<td>{employee.monday}</td>
			<td>{employee.tuesday}</td>
			<td>{employee.wednesday}</td>
			<td>{employee.thursday}</td>
			<td>{employee.friday}</td>
			<td>{employee.saturday}</td>
			<td>{employee.sunday}</td>
		</tr>
	);
};
