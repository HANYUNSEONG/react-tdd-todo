import TodoItem from "components/TodoItem";
import { Todo } from "types/todo";

type Props = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: Props) {
  return (
    <ul data-testId="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
