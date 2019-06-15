import React from 'react';
import * as styles from './AddEmployeeShift.module.css';

export const AddEmployeeShift = () => {
  return (
    <>
      {Object.keys(days).map((d, i) => (
        <div key={i} className={styles.shiftRow}>
          <label key={d}>{`${days[d]}: `}</label>
          <select name="start">
            <option value={null}>-- Choose a start time --</option>
            {times.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select name="end">
            <option value={null}>-- Choose an end time --</option>
            {times.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select name="assignment">
            <option value={null}>-- Choose a task --</option>
            {assignments.map(a => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <br />
        </div>
      ))}
    </>
  );
};

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
  'Manager',
  'Book Desk',
  'Project',
  'Large Order',
  'Register',
  'Greeter',
  'Register/Greeter',
  'Sorter'
];
