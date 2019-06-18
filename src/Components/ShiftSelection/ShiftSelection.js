import React, { useState } from 'react';
import { assignments, days, shifts } from '../../data';
import * as styles from './ShiftSelection.module.css';

const ShiftSelection = ({ day, handleScheduleChange }) => {
  const [shift2Disabled, setShift2Disabled] = useState(true);
  const [assignment1Disabled, setAssignment1Disabled] = useState(true);
  const [assignment2Disabled, setAssignment2Disabled] = useState(true);

  const handleShiftChange = (e, day, key) => {
    if (key === 'shift1') {
      if (e.target.value === 'OFF') {
        setAssignment1Disabled(true);
        setAssignment2Disabled(true);
        setShift2Disabled(true);
      } else {
        setAssignment1Disabled(false);
        setShift2Disabled(false);
        setAssignment2Disabled(false);
      }
    }
    handleScheduleChange(e, day, key);
  };

  return (
    <div className={styles.shiftRow}>
      <label>{`${days[day]} Shift One: `}</label>
      <select
        name="shift1"
        required
        defaultValue=""
        onChange={e => handleShiftChange(e, day, 'shift1')}
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
        defaultValue=""
        disabled={assignment1Disabled}
        required={!assignment1Disabled}
        onChange={e => handleShiftChange(e, day, 'assignment1')}
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
      <label>{`${days[day]} Shift Two: `}</label>
      <select
        name="shift2"
        defaultValue=""
        disabled={shift2Disabled}
        onChange={e => handleShiftChange(e, day, 'shift2')}
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
        defaultValue=""
        disabled={assignment2Disabled}
        onChange={e => handleShiftChange(e, day, 'assignment2')}
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
  );
};

export default ShiftSelection;
