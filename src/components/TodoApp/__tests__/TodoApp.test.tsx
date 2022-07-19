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

  const todoRemoveButton = () => {
    return screen.getAllByText("삭제");
  };

  return {
    todoFormButton,
    todoList,
    getTodo,
    todoFormInput,
    todoFormInputChange,
    todoRemoveButton,
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

  it("할 일 토글 기능 동작을 확인한다.", async () => {
    const { getTodo } = renderTodoApp();
    const todo = getTodo("운동하기");

    expect(todo).toBeInTheDocument();

    await waitFor(() => {
      todo.click();
    });

    expect(todo).toHaveStyle("text-decoration: line-through;");

    await waitFor(() => {
      todo.click();
    });

    expect(todo).not.toHaveStyle("text-decoration: line-through;");
  });

  it("할 일 삭제 기능을 확인한다.", async () => {
    const { todoRemoveButton, getTodo } = renderTodoApp();
    const todo = getTodo("운동하기");

    await waitFor(() => {
      todoRemoveButton()[0].click();
    });

    expect(todo).not.toBeInTheDocument();
  });
});
