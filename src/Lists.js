import React, { useState } from 'react';

const Lists = ({ singleList, setList }) => {
  const [edit, setEdit] = useState(false);

  const editItem = () => {
    setEdit(!edit);
  };

  const deltItem = (key) => {
    const updatedList = singleList.filter((items) => {
      return items.key !== key;
    });
    setList(updatedList);
  };

  const cancelEditing = () => {
    setEdit(!edit);
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
  };

  if (edit == true) {
    return (
      <li>
        <form onSubmit={editSubmitHandler}>
          <input type="text" />
          <button type="submit">Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </form>
      </li>
    );
  } else {
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
                    onClick={() => deltItem(items.key)}
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
  }
};

export default Lists;
