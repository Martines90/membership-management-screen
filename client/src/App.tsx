import React from 'react';
import './App.css';
import SelectBox, { Option } from './components/selectBox/SelectBox';

const mockOptiond: Array<Option> = [
  {
    value: 10,
    text: 'Ten',
  },
  {
    value: 20,
    text: 'Twenty',
  },
  {
    value: 30,
    text: 'Thirty',
  },
];

function App() {
  return (
    <div className='App'>
      <SelectBox options={mockOptiond} />
    </div>
  );
}

export default App;
