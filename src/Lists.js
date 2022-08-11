import React, { useState } from 'react';

const Lists = ({ singleList, setList }) => {
  const deletItem = (key) => {
    const updatedList = singleList.filter((items) => {
      return items.key !== key;
    });
    setList(updatedList);
  };

  return (
    <div>
      {singleList.map((items) => {
        return (
          <>
            <div key={items.key} className="list__Wrapper">
              <p>{items.currentValue}</p>
              <button
                className="Del__ItemBtn"
                onClick={() => deletItem(items.key)}
              >
                X
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Lists;
