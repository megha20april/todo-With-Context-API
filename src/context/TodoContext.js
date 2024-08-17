import { createContext, useContext } from "react";

const TodoContext = createContext({
    todoList : [
        {
            id: 1,
            value: "msg",
            done: false
        }
    ],
    addItem: (value) => {},
    deleteItem: (id) => {},
    toggleDone: (id) => {},
    editItem: (id, value) => {}
})

export const TodoContextProvider = TodoContext.Provider
export const useTodoContext = () => useContext(TodoContext)