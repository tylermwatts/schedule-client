// This is an experimental component that I am using to work out how I want to handle
// being able to edit an employee's schedule with inline dropdown selects

import React from 'react';
import * as styles from './EditableDropdowns.module.css';

const EditableDropdowns = () => {
  // TODO: Update changes in state onChange
  return (
    <tr>
      <td>Name</td>
      <td>
        <div>
          <span>
            <select className={styles.select}>
              <option>OFF</option>
              <option>8:30 - 5</option>
              <option>9 - 5:30</option>
              <option>10 - 6:30</option>
              <option>11 - 7:30</option>
              <option>12 - 8:30</option>
            </select>
          </span>
          <span>
            <select className={styles.select}>
              <option>--</option>
              <option>Manager</option>
              <option>Book Desk</option>
              <option>Project</option>
              <option>Large Order</option>
              <option>Register</option>
              <option>Greeter</option>
              <option>Register/Greeter</option>
              <option>Sorter</option>
            </select>
          </span>
        </div>
        <div>
          <span>
            <select className={styles.select}>
              <option>--</option>
              <option>8:30 - 5</option>
              <option>9 - 5:30</option>
              <option>10 - 6:30</option>
              <option>11 - 7:30</option>
              <option>12 - 8:30</option>
            </select>
          </span>
          <span>
            <select className={styles.select}>
              <option>--</option>
              <option>Manager</option>
              <option>Book Desk</option>
              <option>Project</option>
              <option>Large Order</option>
              <option>Register</option>
              <option>Greeter</option>
              <option>Register/Greeter</option>
              <option>Sorter</option>
            </select>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default EditableDropdowns;
