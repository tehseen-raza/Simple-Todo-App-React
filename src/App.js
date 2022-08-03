import React, { useState } from 'react';
import Lists from './Lists';
import './style.css';

export default function App() {
  const [val, setVal] = useState('');
  const [list, setList] = useState([]);

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };

  const addItem = () => {
    setList([...list, { currentValue: val, key: Math.random() * 10 }]);
    setVal('');
  };

  return (
    <div>
      <div>
        <h1>Simple Todo List</h1>
        <div className="wrapper">
          <input type="text" value={val} onChange={onChangeHandler} />
          <button className="Add__ItemBtn" type="submit" onClick={addItem}>
            +
          </button>
        </div>
        <Lists singleList={list} />
      </div>
    </div>
  );
}
