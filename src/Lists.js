import React, { useState } from 'react';

const Lists = (props) => {
  const full_List = props.singleList;
  return (
    <div>
      {full_List.map((items) => {
        return <p key={items.key}>{items.currentValue}</p>;
      })}
    </div>
  );
};  

export default Lists;
