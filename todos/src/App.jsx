import "./App.css";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    let newtodo = prompt("enter a todo");
    {
      if (newtodo) {
        setTodos([...todos, newtodo]);
      }
    }
  };
  const handleDelete = (itemtodel) => {
    setTodos(todos.filter((item) => item != itemtodel));
  };

  const handleEdit = (item) => {
    let editedTodo = prompt("enter the changed value");
    let indexOfItem = todos.indexOf(item);
    let newtodos = [...todos];
    newtodos[indexOfItem] = editedTodo;
    setTodos(newtodos);
  };

  return (
    <>
      <h1>Todo list</h1>
      <div className="todo-section">
        {todos ? (
          todos.map((item, index) => {
            return (
              <div key={index}>
                <p>
                  {item} <button onClick={() => handleEdit(item)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(item)}>delete</button>
                </p>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <hr />
      <button onClick={handleClick}>Add a new todo</button>
    </>
  );
};

export default App;
