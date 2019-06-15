import React, { Component } from 'react';
import AddEmployeeShift from '../AddEmployeeShift/AddEmployeeShift';
import * as styles from './AddEmployeeForm.module.css';

class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleScheduleChange = newSchedule => {
    this.props.addEmployee({ name: this.state.name, schedule: newSchedule });
  };

  render() {
    return (
      <div className={styles.formBorder}>
        <h3>Add a new employee</h3>
        <form>
          <label>{'Employee Name: '}</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <br />
          <AddEmployeeShift
            schedule={this.state.schedule}
            scheduleChange={this.handleScheduleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddEmployeeForm;
