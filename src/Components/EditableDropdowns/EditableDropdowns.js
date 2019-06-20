// This is an experimental component that I am using to work out how I want to handle
// being able to edit an employee's schedule with inline dropdown selects

import React from 'react';
import * as styles from './EditableDropdowns.module.css';

const EditableDropdowns = () => {
  return (
    <tr>
      <td>Name</td>
      <td>
        <div>
          <span>
            <select className={styles.select}>
              <option>8:30 - 5</option>
              <option>9 - 5:30</option>
              <option>10 - 6:30</option>
              <option>11 - 7:30</option>
              <option>12 - 8:30</option>
            </select>
          </span>
          <span>
            <select className={styles.select}>
              <option>Book Desk</option>
              <option>Project</option>
              <option>Register</option>
            </select>
          </span>
        </div>
        <div>
          <span>
            <select className={styles.select}>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </span>
          <span>
            <select className={styles.select}>
              <option>Four</option>
              <option>Five</option>
              <option>Six</option>
            </select>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default EditableDropdowns;
