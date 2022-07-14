import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../TodoApp";

function renderTodoApp() {
  render(<TodoApp />);

  const todoFormButton = () => {
    return screen.getByText("추가");
  };

  const todoList = () => {
    return screen.getByTestId("TodoList");
  };

  const getTodo = (text: string) => {
    return screen.getByText(text);
  };

  const todoFormInput = () => {
    return screen.getByPlaceholderText("할 일을 입력하세요");
  };

  const todoFormInputChange = (value: string) => {
    return userEvent.type(todoFormInput(), value);
  };

  return {
    todoFormButton,
    todoList,
    getTodo,
    todoFormInput,
    todoFormInputChange,
  };
}

describe("<TodoApp />", () => {
  it("TodoForm과 TodoList 컴포넌트를 렌더링한다.", () => {
    const { todoFormButton, todoList } = renderTodoApp();

    expect(todoFormButton()).toBeVisible();
    expect(todoList()).toBeInTheDocument();
  });

  it("할 일 목록에 할 일을 2개를 렌더링한다.", () => {
    const { getTodo } = renderTodoApp();

    expect(getTodo("운동하기")).toBeInTheDocument();
    expect(getTodo("개발 공부하기")).toBeInTheDocument();
  });

  it("새로운 할 일을 등록한다.", async () => {
    const { todoFormInputChange, todoFormButton, getTodo } = renderTodoApp();

    const value = "명상하기";
    todoFormInputChange(value);

    await waitFor(() => {
      todoFormButton().click();
    });

    expect(getTodo(value)).toBeInTheDocument();
  });
});
