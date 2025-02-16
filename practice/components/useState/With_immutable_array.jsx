import React, { useState } from "react";

export default function With_immutable_array() {
  const [list, setList] = useState([]);
  const [item, setItems] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div className="flex justify-center items-center mt-7">
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((item, index) => {
              return (
                <tr>
                  <td>{item}</td>
                  <td>
                    <button
                      onClick={() => {
                        RemoveItem(index);
                      }}
                      className="p-3"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <p className="p-5">{list.length}</p>
      <input
        onChange={(e) => setItems(e.target.value)}
        placeholder="Item"
        className="border-2 rounded"
      />
      <button onClick={AddToList}>Add</button>
    </div>
  );
}
