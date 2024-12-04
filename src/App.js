import React from "react";
// import Counter from "../src/components/Counter/Counter.js";
import TodoApp from "../src/components/TODOapp/TODOAPP";

const App = () => {
  return (
    <div className="todoDiv">
      <h1 style={{ textAlign: "center" }}>your personal #TODO list ♡</h1>
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
};

export default App;


