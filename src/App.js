import React from 'react';
import './App.css';
import { ScheduleTable } from './Components/ScheduleTable/ScheduleTable';
import * as data from './mock_data/employee_schedule';

function App() {
  return <ScheduleTable employees={data.employees} />;
}

export default App;
