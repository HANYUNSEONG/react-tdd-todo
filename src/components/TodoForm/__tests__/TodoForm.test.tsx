import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../TodoForm";

function renderTodoForm() {
  const onSubmit = jest.fn();

  render(<TodoForm onSubmit={onSubmit} />);

  const todoInput = () => {
    return screen.getByPlaceholderText("할 일을 입력하세요");
  };

  const todoFormSubmitButton = () => {
    return screen.getByText("추가");
  };

  const todoInputChangeEvent = (value: string) => {
    return userEvent.type(todoInput(), value);
  };

  return {
    onSubmit,
    todoInput,
    todoFormSubmitButton,
    todoInputChangeEvent,
  };
}

describe("<TodoForm />", () => {
  it("할 일을 입력하는 폼에 input과 button이 있는지 확인한다.", () => {
    const { todoInput, todoFormSubmitButton } = renderTodoForm();

    expect(todoInput()).toBeVisible();
    expect(todoFormSubmitButton()).toBeVisible();
  });

  it("input이 변경되는지 확인한다.", () => {
    const { todoInput, todoInputChangeEvent } = renderTodoForm();

    const value = "TDD 배우기";
    todoInputChangeEvent(value);

    expect(todoInput()).toHaveAttribute("value", value);
  });

  it("onSubmit을 실행한 후 input 값을 비워준다.", async () => {
    const { onSubmit, todoInput, todoFormSubmitButton, todoInputChangeEvent } =
      renderTodoForm();

    const value = "TDD 배우기";
    todoInputChangeEvent(value);

    await waitFor(() => {
      todoFormSubmitButton().click();
    });

    expect(onSubmit).toHaveBeenCalledWith(value);
    expect(todoInput()).toHaveAttribute("value", "");
  });
});
