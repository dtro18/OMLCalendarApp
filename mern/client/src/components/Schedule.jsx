// WIP
import React, { useState } from 'react';
import './Schedule.css';
const Schedule = () => {
  const [instructors, setInstructors] = useState([
    'Harits',
    'Kristina',
    'Josh',
    'Jon',
    'Dylan',
    'Ethan',
    'Julie',
    'Jane',
    'Sarah',
  ]);

  const [timeIntervals, setTimeIntervals] = useState([
    '8AM',
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
    '6PM',
    '7PM',
    '8PM',
])

  return (
    <table>
      <thead>
        <tr>
            <th className="h-12 w-24 px-4 text-middle align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                Timeslot
            </th>
          {instructors.map((instructor, index) => (
            <th key={index} className="h-12 px-4 text-middle align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              {instructor}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {timeIntervals.map((interval, index) => (
        <tr key={index} className="h-6">
          <td className="timeslot-cell w-24 px-4 text-center align-middle">
            {interval} {/* Display the timeslot here */}
          </td>
          {instructors.map((instructor, index) => (
            <td key={index} className="px-4 align-middle">
              {/* Here you can add any data related to the instructor for that timeslot */}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
    </table>
  );
};

export default Schedule;