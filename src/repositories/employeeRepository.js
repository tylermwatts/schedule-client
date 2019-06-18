module.exports = {
	addEmployee(employee) {
		fetch('/api/employee', {
			method: 'POST',
			body: JSON.stringify({ employee }),
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json());
	},
};
