import { useCallback } from "react";
import { Todo } from "types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo: { id, content, done }, onToggle, onRemove }: Props) {
  const onToggleAction = useCallback(() => {
    onToggle(id);
  }, [id, onToggle]);

  const onRemoveAction = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  return (
    <li>
      <input type="checkbox" defaultChecked={done} />
      <p onClick={onToggleAction}>{content}</p>
      <button onClick={onRemoveAction}>삭제</button>
    </li>
  );
}

export default TodoItem;
