import React from 'react';

export const EmployeeRow = ({ employee }) => {
	return (
		console.log(employee) || (
			<tr>
				<td>{employee.name}</td>
				{Object.keys(employee.schedule).map(k => (
					<td key={k}>{`${employee.schedule[k].hours}, ${
						employee.schedule[k].assignment
					}`}</td>
				))}
			</tr>
		)
	);
};
