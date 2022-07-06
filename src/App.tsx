import React from "react";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div>
      <TodoForm onSubmit={(data) => console.log(data)} />
    </div>
  );
}

export default App;
