import React, { useState } from 'react';
import * as styles from './AddEmployeeShift.module.css';

const AddEmployeeShift = ({ schedule, scheduleChange }) => {
  const [newSchedule, setNewSchedule] = useState({ ...schedule });

  const handleSubmit = e => {
    scheduleChange(newSchedule);
  };

  const handleChange = (e, day, key) => {
    setNewSchedule({
      ...newSchedule,
      [day]: {
        ...newSchedule[day],
        [key]: { value: e.target.value }
      }
    });
  };

  return (
    <>
      {Object.keys(days).map((d, i) => (
        <div key={i} className={styles.shiftRow}>
          <label key={d}>{`${days[d]}: `}</label>
          <select
            name="start"
            required
            defaultValue=""
            onChange={e => handleChange(e, d, 'start')}
          >
            <option value="" disabled>
              -- Choose a start time --
            </option>
            {times.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            name="end"
            required
            defaultValue=""
            onChange={e => handleChange(e, d, 'end')}
          >
            <option value="" disabled>
              -- Choose an end time --
            </option>
            {times.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            name="assignment"
            required
            defaultValue=""
            onChange={e => handleChange(e, d, 'assignment')}
          >
            <option value="" disabled>
              -- Choose a task --
            </option>
            {assignments.map(a => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <br />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default AddEmployeeShift;

const days = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday'
};

const times = [
  'OFF',
  '7',
  '7:30',
  '8',
  '8:30',
  '8:45',
  '9',
  '9:30',
  '10',
  '10:30',
  '11',
  '11:30',
  '12',
  '12:30',
  '1',
  '1:30',
  '2',
  '2:30',
  '3',
  '3:30',
  '4',
  '4:30',
  '5',
  '5:30',
  '6',
  '6:30'
];

const assignments = [
  'OFF',
  'Manager',
  'Book Desk',
  'Project',
  'Large Order',
  'Register',
  'Greeter',
  'Register/Greeter',
  'Sorter'
];
