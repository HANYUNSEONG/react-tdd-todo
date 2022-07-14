import { render, screen } from "@testing-library/react";
import TodoApp from "../TodoApp";

function renderTodoApp() {
  render(<TodoApp />);

  const todoFormButton = () => {
    return screen.getByText("추가");
  };

  const todoList = () => {
    return screen.getByTestId("TodoList");
  };

  return { todoFormButton, todoList };
}

describe("<TodoApp />", () => {
  it("TodoForm과 TodoList 컴포넌트를 렌더링한다.", () => {
    const { todoFormButton, todoList } = renderTodoApp();

    expect(todoFormButton()).toBeVisible();
    expect(todoList()).toBeInTheDocument();
  });
});
