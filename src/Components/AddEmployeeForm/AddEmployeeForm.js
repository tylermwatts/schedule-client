import React, { useState } from 'react';
import { days } from '../../data/';
import ShiftSelection from '../ShiftSelection/ShiftSelection';
import * as styles from './AddEmployeeForm.module.css';

const AddEmployeeForm = ({ addEmployee, newEmployee }) => {
  const [name, setName] = useState(newEmployee.name);
  const [schedule, setSchedule] = useState({ ...newEmployee.schedule });

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleScheduleChange = (e, day, key) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [key]: { value: e.target.value }
      }
    });
  };

  const handleSubmit = () => {
    addEmployee({ name, schedule });
    initializeState();
    document.getElementById('add-employee-form').reset();
  };

  const initializeState = () => {
    setName('');
    setSchedule({ ...newEmployee.schedule });
  };

  return (
    <div className={styles.container}>
      <h3>Add a new employee</h3>
      <form
        className={styles.formContainer}
        id="add-employee-form"
        onSubmit={handleSubmit}
      >
        <label>{'Employee Name: '}</label>
        <input type="text" value={name} onChange={handleNameChange} required />
        <br />
        <>
          {Object.keys(days).map(d => {
            return (
              <ShiftSelection
                key={d}
                day={d}
                handleScheduleChange={handleScheduleChange}
              />
            );
          })}
        </>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddEmployeeForm;
