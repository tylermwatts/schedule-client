import React, { useState } from 'react';
import { days } from '../../data';
import ShiftSelection from '../ShiftSelection/ShiftSelection';

const AddEmployeeShifts = ({ schedule, scheduleChange }) => {
  const [newSchedule, setNewSchedule] = useState({ ...schedule });

  const handleSubmit = () => {
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
      {Object.keys(days).map(d => {
        return <ShiftSelection key={d} day={d} handleChange={handleChange} />;
      })}

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default AddEmployeeShifts;
