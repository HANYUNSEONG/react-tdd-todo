import { memo, useCallback } from "react";
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
      <p
        onClick={onToggleAction}
        style={{ textDecoration: done ? "line-through" : "" }}
      >
        {content}
      </p>
      <button onClick={onRemoveAction}>삭제</button>
    </li>
  );
}

export default memo(TodoItem);
