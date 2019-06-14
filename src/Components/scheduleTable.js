import React from 'react';
import { EmployeeRow } from './EmployeeRow';

export const ScheduleTable = ({ employees }) => {
	return (
		<table>
			<tbody>
				<tr>
					<th>{'Employee'}</th>
					<th>{'Monday'}</th>
					<th>{'Tuesday'}</th>
					<th>{'Wednesday'}</th>
					<th>{'Thursday'}</th>
					<th>{'Friday'}</th>
					<th>{'Saturday'}</th>
					<th>{'Sunday'}</th>
				</tr>
				{employees.map(e => {
					return <EmployeeRow key={e.name} employee={e} />;
				})}
			</tbody>
		</table>
	);
};
