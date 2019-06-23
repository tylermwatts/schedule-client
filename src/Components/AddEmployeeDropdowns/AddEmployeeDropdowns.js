import React, { useState } from 'react';
import { assignments, days, shifts } from '../../data/';
import * as styles from './AddEmployeeDropdowns.module.css';

const AddEmployeeDropdowns = ({ addEmployee, newEmployee }) => {
  const [name, setName] = useState(newEmployee.name);
  const [schedule, setSchedule] = useState({ ...newEmployee.schedule });

  const handleScheduleChange = (e, day, key) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [key]: { value: e.target.value }
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addEmployee({ name, schedule });
    initializeState();
    document.getElementById('add-employee-form').reset();
  };

  const initializeState = () => {
    setName('');
    setSchedule({ ...newEmployee.schedule });
  };

  return (
    <form
      className={styles.formContainer}
      id="add-employee-form"
      onSubmit={handleSubmit}
    >
      <div className={styles.formBody}>
        <div className={styles.gridCell}>
          <h3 className={styles.addEmployeeText}>Add a new employee</h3>
          <input
            className={styles.nameInput}
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
            size="14"
            required
          />
        </div>
        {Object.keys(days).map(d => {
          return (
            <div className={styles.gridCell} key={d}>
              <h3 className={styles.dayMarker}>{days[d]}</h3>
              <div className={styles.gridTop}>
                <select
                  name={`${d} shift1`}
                  onChange={e => handleScheduleChange(e, d, 'shift1')}
                  className={styles.select}
                  defaultValue={shifts[0]}
                  required
                >
                  {shifts.map(s1 => {
                    return (
                      <option key={`1 ${d} ${s1}`} value={s1}>
                        {s1}
                      </option>
                    );
                  })}
                </select>
                <select
                  name={`${d} assignment1`}
                  onChange={e => handleScheduleChange(e, d, 'assignment1')}
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="">--</option>
                  {assignments.map(a1 => {
                    return (
                      <option key={`1 ${d} ${a1}`} value={a1}>
                        {a1}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles.gridBottom}>
                <select
                  name={`${d} shift2`}
                  onChange={e => handleScheduleChange(e, d, 'shift2')}
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="">--</option>
                  {shifts.map(s2 => {
                    return (
                      <option key={`2 ${d} ${s2}`} value={s2}>
                        {s2}
                      </option>
                    );
                  })}
                </select>
                <select
                  name={`${d} assignment2`}
                  onChange={e => handleScheduleChange(e, d, 'assignment2')}
                  className={styles.select}
                  defaultValue=""
                >
                  <option value="">--</option>
                  {assignments.map(a2 => {
                    return (
                      <option key={`2 ${d} ${a2}`} value={a2}>
                        {a2}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          );
        })}
        <input className={styles.submitButton} type="submit" value="Save" />
      </div>
    </form>
  );
};

export default AddEmployeeDropdowns;
