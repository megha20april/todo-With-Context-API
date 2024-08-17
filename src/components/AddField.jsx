import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

function AddField() {
  const [value, setValue] = useState("")
  const { addItem } = useTodoContext() 

  return (
    <div className="flex gap-2">
      <input
        className="bg-darkGreen border- border-2 rounded-xl p-2"
        placeholder="Enter a task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter'){
            addItem(value)
            setValue("")
          }
        }}
      />
      <button
        className="bg-midGreen p-2 rounded-xl text-lime-900 font-bold text-green"
        onClick={() => {
          if(!value) return
          setValue("")
          addItem(value)
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default AddField
