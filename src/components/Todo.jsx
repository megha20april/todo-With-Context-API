import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";

function Todo({ item }) {
  const [eachTodoVal, setEachTodoVal] = useState(item.value);
  const [editMode, setEditMode] = useState(false);

  const { deleteItem, toggleDone, editItem } = useTodoContext();
  return (
    <>
      <div className="flex gap-4 items-center">
        <input onClick={() => toggleDone(item.id)} type="checkbox" />
        
          <input
            type="text"
            className={`bg-lightGreen ${item.done ? "line-through" : ""}`}
            value={eachTodoVal}
            onChange={(e) => {
              setEachTodoVal(e.target.value);
            }}
            readOnly={!editMode}
          />
       
      </div>
      <div>
        <IconButton
          aria-label="done"
          onClick={() => {
            if (editMode) {
              setEditMode((prev) => !prev);
              editItem(item.id, eachTodoVal);
            } else setEditMode((prev) => !prev);
          }}
          disabled={item.done}
          size="small"
        >
          {editMode ? (
            <CheckCircleIcon className="text-darkGreen" />
          ) : (
            <EditNoteIcon className="text-darkGreen" />
          )}
        </IconButton>

        <IconButton
          aria-label="delete"
          onClick={() => deleteItem(item.id)}
          size="small"
        >
          <DeleteRoundedIcon className="text-darkGreen" />
        </IconButton>
      </div>
    </>
  );
}

export default Todo;
