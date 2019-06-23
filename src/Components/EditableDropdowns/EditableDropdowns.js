// This is an experimental component that I am using to work out how I want to handle
// being able to edit an employee's schedule with inline dropdown selects

import React, { useState } from 'react';
import { assignments, days, shifts } from '../../data/';
import { singleEmployee } from '../../initial_state';
import * as styles from './EditableDropdowns.module.css';

const EditableDropdowns = ({
  employee = singleEmployee,
  editEmployee,
  setIsBeingEdited
}) => {
  const [name, setName] = useState(employee.name);
  const [schedule, setSchedule] = useState(employee.schedule);

  const handleScheduleChange = (e, day, key) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [key]: { value: e.target.value }
      }
    });
  };

  const handleSave = () => {
    const errors = checkForErrors();
    if (errors.length > 0) {
      return alert(errors.join('\n'));
    } else {
      const updatedEmployee = {
        _id: employee._id,
        name: name,
        schedule: schedule
      };
      editEmployee(updatedEmployee);
      setIsBeingEdited(false);
    }
  };

  const handleCancel = () => {
    setName(employee.name);
    setSchedule(employee.schedule);
    setIsBeingEdited(false);
  };

  const checkForErrors = () => {
    const errors = [];
    Object.keys(days).forEach(d => {
      if (
        schedule[d].shift1.value !== 'OFF' &&
        schedule[d].assignment1.value === null
      ) {
        errors.push(
          `${d} has hours assigned to Shift One but no task assignment.`
        );
      }
      if (
        schedule[d].shift2.value !== null &&
        schedule[d].assignment2.value === null
      ) {
        errors.push(
          `${d} has hours assigned to Shift Two but no task assignment.`
        );
      }
    });
    return errors;
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
          size="10"
        />
      </td>
      {Object.keys(days).map(d => {
        return (
          <td key={d}>
            <div>
              <span>
                <select
                  name={`${d} shift1`}
                  onChange={e => handleScheduleChange(e, d, 'shift1')}
                  className={styles.select}
                  defaultValue={schedule[d].shift1.value || ''}
                >
                  {shifts.map(s1 => {
                    return (
                      <option key={`1 ${d} ${s1}`} value={s1}>
                        {s1}
                      </option>
                    );
                  })}
                </select>
              </span>
              <span>
                <select
                  name={`${d} assignment1`}
                  onChange={e => handleScheduleChange(e, d, 'assignment1')}
                  className={styles.select}
                  defaultValue={schedule[d].assignment1.value || ''}
                >
                  <option>--</option>
                  {assignments.map(a1 => {
                    return (
                      <option key={`1 ${d} ${a1}`} value={a1}>
                        {a1}
                      </option>
                    );
                  })}
                </select>
              </span>
            </div>
            <div>
              <span>
                <select
                  name={`${d} shift2`}
                  onChange={e => handleScheduleChange(e, d, 'shift2')}
                  className={styles.select}
                  defaultValue={schedule[d].shift2.value || ''}
                >
                  <option value="">{'--'}</option>
                  {shifts.map(s2 => {
                    return (
                      <option key={`2 ${d} ${s2}`} value={s2}>
                        {s2}
                      </option>
                    );
                  })}
                </select>
              </span>
              <span>
                <select
                  name={`${d} assignment2`}
                  onChange={e => handleScheduleChange(e, d, 'assignment2')}
                  className={styles.select}
                  defaultValue={schedule[d].assignment2.value || ''}
                >
                  <option>--</option>
                  {assignments.map(a2 => {
                    return (
                      <option key={`2 ${d} ${a2}`} value={a2}>
                        {a2}
                      </option>
                    );
                  })}
                </select>
              </span>
            </div>
          </td>
        );
      })}
      <td>
        <button onClick={handleSave}>Save</button>
      </td>
      <td>
        <button onClick={handleCancel}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableDropdowns;
