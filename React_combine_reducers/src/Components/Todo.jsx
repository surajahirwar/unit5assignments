import React, { useReducer, useState } from "react";
import "./Style.css";
let initialState = { todos: [], todocount: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        todos: [...state.todos,
               { text: action.text, completed: false }],
      };
    case "toggle":
      return {
        todos: state.todos.map((e, id) =>
          id === action.id ? { ...e, completed: !e.completed } : e
        ),
      };
    case "delete":
      return {
        todos: state.todos.filter((e, id) => id !== action.id),
      };
    default:
      return state;
  }
};

const Todo = () => {
  const [{ todos, todocount }, dispatch] = useReducer(reducer, initialState);

  const [text, setText] = useState();

  const handelsubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", text });
    setText("");
  };
  const handelUpdate = (id) => {
    dispatch({ type: "toggle", id });
  };

  const handeldelete = (id) => {
    dispatch({ type: "delete", id });
  };
  return (
    <div className="main">
      <form onSubmit={handelsubmit}>
        <input className="input_div"
          type="text"
          placeholder="Enter your todo here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>+</button>
      </form>
      {todos.map((e, id) => (
        <div className="list_div"
          key={e.id}
          style={{ textDecoration: e.completed ? "line-through" : "" }}
        >
          <li>{e.text}</li>
          <div className="">
          <button onClick={() => handeldelete(id)}>Delete</button>
          <button onClick={() => handelUpdate(id)}>
            {e.completed ? "done" : "not done"}
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
