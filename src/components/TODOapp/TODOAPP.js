import React, { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.text, completed: false },
        ],
      };
    case "toggle":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "clear":
      return {
        todos: [],
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const TodoApp = () => {
  // Використовуємо useReducer для керування станом
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  // Локальний стан для введення тексту нового завдання
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim()) {
      dispatch({ type: "add", text: inputText });
      setInputText("");
    }
  };

  const handleToggle = (id) => {
    dispatch({ type: "toggle", id });
  };

  const handleRemove = (id) => {
    dispatch({ type: "remove", id });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div className="itemDiv" style={{ textAlign: "center" }}>
      <u>
        {" "}
        <h2>your tasks</h2>
      </u>

      <div className="inputDiv">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder=""
        />
        <label for="input">your task</label>
        <button className="addTaskButton" onClick={handleAdd}>
          ✛
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginBottom: "10px",
            }}
          >
            <span>{todo.text}</span>
            <div className="buttonYNdiv">
              <button
                className="buttonsYN"
                onClick={() => handleToggle(todo.id)}
              >
                ✓
              </button>
              <button
                className="buttonsYN"
                onClick={() => handleRemove(todo.id)}
              >
                ✗
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="cleanBTN"  onClick={handleClear} style={{ marginTop: "20px" }}>
        clean the list ⌫
      </button>
    </div>
  );
};

export default TodoApp;
