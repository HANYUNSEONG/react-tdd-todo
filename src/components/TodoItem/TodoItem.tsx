import { Todo } from "types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo: { id, content, done }, onToggle, onRemove }: Props) {
  return (
    <li onClick={() => onToggle(id)}>
      <input type="checkbox" defaultChecked={done} />
      <p>{content}</p>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
