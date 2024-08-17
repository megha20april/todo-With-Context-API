import { useState } from "react";
import { TodoContextProvider } from "./context/TodoContext";
import Todo from "./components/Todo";
import AddField from "./components/AddField";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addItem = (value) => {
    setTodoList((prev) => [{ id: Date.now(), value, done: false }, ...prev]);
  };

  const deleteItem = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setTodoList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const editItem = (id, value) => {
    setTodoList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-yellow">
        <TodoContextProvider
          value={{ todoList, addItem, deleteItem, editItem, toggleDone }}
        >
          <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-darkGreen rounded-xl">
            <h1 className="text-center font-bold text-white text-2xl">
              My TODO List ✏
            </h1>
            <AddField />

            {todoList.map((item) => (
              <div
                className="flex gap-2 bg-lightGreen rounded-xl p-2 justify-between"
                key={item.id}
              >
                <Todo item={item} />
              </div>
            ))}
          </div>
        </TodoContextProvider>
      </div>
    </>
  );
}

export default App;
