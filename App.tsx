import * as React from 'react';
import { useState } from 'react';
import CustomFieldAutocomplete from './CustomFieldAutocomplete';
import './style.css';

const users = [
  {
    id: 1,
    name: 'A',
  },
  {
    id: 2,
    name: 'B',
  },
  {
    id: 3,
    name: 'C',
  },
];

const months = [...Array.from({ length: 12 }, (_, i) => i + 1)];
export default function App() {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);

  const handleEvent = (e, value) => {
    setSelectedUserId(value.id);
  };

  return (
    <div>
      <h2>Select User</h2>
      <CustomFieldAutocomplete
        options={users}
        selected={selectedUserId}
        bindKey="id"
        bindLabel="name"
        placeHolder="Select User"
        inputLabel="User"
        disableClearable
        onEvent={handleEvent}
      />
      <p>Current User: {users.find((e) => e.id == selectedUserId)?.name}</p>

      <h2>Select Month</h2>
      <CustomFieldAutocomplete
        options={months}
        selected={selectedMonth}
        onlyKey
        placeHolder="Select Month"
        inputLabel="Month"
        disableClearable
        onEvent={(e, v) => setSelectedMonth(v)}
      />
      <p>Current Month: {selectedMonth}</p>
    </div>
  );
}
