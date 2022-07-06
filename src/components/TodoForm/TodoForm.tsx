import { useCallback, useState } from "react";

type Props = {
  onSubmit: (value: string) => void;
};

function TodoForm({ onSubmit }: Props) {
  const [todoValue, setTodoValue] = useState<string>("");
  const onTodoInputChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = target;
      setTodoValue(() => value);
    },
    []
  );

  const onTodoFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onSubmit(todoValue);
      setTodoValue(() => "");
    },
    [onSubmit, todoValue]
  );

  return (
    <form onSubmit={onTodoFormSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={todoValue}
        onChange={onTodoInputChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
