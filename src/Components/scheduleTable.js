import React from './node_modules/react';

export const ScheduleTable = ({ employees }) => {
	return (
		<table>
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
		</table>
	);
};
