import { render, screen } from "@testing-library/react";
import { Todo } from "types/todo";
import TodoList from "../TodoList";

const mockTodos = [
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
] as Array<Todo>;

function renderTodoList() {
  const onToggle = jest.fn();
  const onRemove = jest.fn();

  render(
    <TodoList todos={mockTodos} onToggle={onToggle} onRemove={onRemove} />
  );

  const checkTodo = () => {
    return screen.getByText(mockTodos[0].content);
  };

  return {
    checkTodo,
  };
}

describe("<TodoList />", () => {
  it("할 일 리스트가 렌더링 되는지 확인한다.", () => {
    const { checkTodo } = renderTodoList();

    expect(checkTodo()).toBeInTheDocument();
  });
});
