import React, { useState } from 'react';

const Lists = ({ singleList, setList }) => {
  const deletItem = (key) => {
    const updatedList = singleList.filter((items) => {
      return items.key !== key;
    });
    setList(updatedList);
  };
  const editItem = () => {};

  return (
    <div>
      {singleList.map((items) => {
        return (
          <>
            <div key={items.key} className="list__Wrapper">
              <p>{items.currentValue}</p>
              <div>
                <button
                  className="Del__ItemBtn"
                  onClick={() => deletItem(items.key)}
                >
                  X
                </button>
                <button
                  className="Edit__ItemBtn"
                  onClick={() => editItem(items.key)}
                >
                  Edit
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Lists;
