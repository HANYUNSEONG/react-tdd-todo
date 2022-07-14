import TodoForm from "components/TodoForm";
import TodoList from "components/TodoList";
import { useCallback, useRef, useState } from "react";
import { Todo } from "types/todo";

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      content: "운동하기",
      done: false,
    },
    {
      id: 2,
      content: "개발 공부하기",
      done: false,
    },
  ]);
  const nextId = useRef<number>(3);

  const onTodoFormSubmit = useCallback((content: string) => {
    setTodos((prevTodos) => {
      const newTodo = {
        id: nextId.current,
        content,
        done: false,
      };

      return prevTodos.concat(newTodo);
    });

    nextId.current += 1;
  }, []);

  return (
    <>
      <TodoForm data-testId="helloworld" onSubmit={onTodoFormSubmit} />
      <TodoList todos={todos} onToggle={() => {}} onRemove={() => {}} />
    </>
  );
}

export default TodoApp;
