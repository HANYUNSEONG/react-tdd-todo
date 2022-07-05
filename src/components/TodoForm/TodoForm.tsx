import { useCallback, useState } from "react";

function TodoForm() {
  const [todoValue, setTodoValue] = useState<string>("");
  const onTodoInputChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = target;
      setTodoValue(() => value);
    },
    []
  );

  return (
    <form>
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
