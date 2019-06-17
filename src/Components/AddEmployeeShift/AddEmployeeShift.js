import React, { useState } from 'react';
import { assignments, days, shifts } from '../../data/';
import * as styles from './AddEmployeeShift.module.css';

const AddEmployeeShift = ({ schedule, scheduleChange }) => {
  const [newSchedule, setNewSchedule] = useState({ ...schedule });
  const [assignment1Disabled, setAssignment1Disabled] = useState(false);
  const [assignment2Disabled, setAssignment2Disabled] = useState(false);

  const handleSubmit = () => {
    scheduleChange(newSchedule);
  };

  const checkIfShiftIsOff = (key, shift) => {
    if (key === 'shift1') {
      if (shift === 'OFF') {
        setAssignment1Disabled(true);
      } else {
        setAssignment1Disabled(false);
      }
    }
    if (key === 'shift2') {
      if (shift === 'OFF') {
        setAssignment2Disabled(true);
      } else {
        setAssignment2Disabled(false);
      }
    }
  };

  const handleChange = (e, day, key) => {
    checkIfShiftIsOff(key, e.target.value);
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
          <label key={`${d}-1`}>{`${days[d]} Shift One: `}</label>
          <select
            name="shift1"
            required
            defaultValue=""
            onChange={e => handleChange(e, d, 'shift1')}
          >
            <option value="" disabled>
              -- Choose a shift --
            </option>
            {shifts.map(t => (
              <option key={`${t}-shift-one`} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            name="assignment1"
            required={!assignment1Disabled}
            disabled={assignment1Disabled}
            defaultValue=""
            onChange={e => handleChange(e, d, 'assignment1')}
          >
            <option value="" disabled>
              -- Choose a task --
            </option>
            {assignments.map(a => (
              <option key={`${a}-1`} value={a}>
                {a}
              </option>
            ))}
          </select>
          <br />
          <label key={`${d}-2`}>{`${days[d]} Shift Two: `}</label>
          <select
            name="shift2"
            defaultValue=""
            onChange={e => handleChange(e, d, 'shift2')}
          >
            <option value="" disabled>
              -- Choose a shift --
            </option>
            {shifts.map(t => (
              <option key={`${t}-shift-two`} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            name="assignment2"
            required={!assignment2Disabled}
            disabled={assignment2Disabled}
            defaultValue=""
            onChange={e => handleChange(e, d, 'assignment2')}
          >
            <option value="" disabled>
              -- Choose a task --
            </option>
            {assignments.map(a => (
              <option key={`${a}-2`} value={a}>
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
