import React from 'react';
import { AddEmployeeShift } from '../AddEmployeeShift/AddEmployeeShift';
import * as styles from './AddEmployeeForm.module.css';

export const AddEmployeeForm = () => {
  return (
    <div className={styles.formBorder}>
      <h3>Add a new employee</h3>
      <form className={styles.formContainer}>
        <label>{'Employee Name: '}</label>
        <input type="text" />
        <br />
        <AddEmployeeShift />
      </form>
    </div>
  );
};
