import TodoForm from "components/TodoForm";
import TodoList from "components/TodoList";

function TodoApp() {
  return (
    <>
      <TodoForm data-testId="helloworld" onSubmit={() => {}} />
      <TodoList todos={[]} onToggle={() => {}} onRemove={() => {}} />
    </>
  );
}

export default TodoApp;
