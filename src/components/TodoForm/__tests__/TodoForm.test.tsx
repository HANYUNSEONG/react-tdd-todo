import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../TodoForm";

function renderTodoForm() {
  render(<TodoForm />);

  const confirmInput = () => {
    return screen.getByPlaceholderText("할 일을 입력하세요");
  };

  const confirmSubmitButton = () => {
    return screen.getByText("추가");
  };

  const confirmInputChangeEvent = (value: string) => {
    return userEvent.type(confirmInput(), value);
  };

  return {
    confirmInput,
    confirmSubmitButton,
    confirmInputChangeEvent,
  };
}

describe("<TodoForm />", () => {
  it("할 일을 입력하는 폼에 input과 button이 있는지 확인한다.", () => {
    const { confirmInput, confirmSubmitButton } = renderTodoForm();

    expect(confirmInput()).toBeInTheDocument();
    expect(confirmSubmitButton()).toBeInTheDocument();
  });

  it("input이 변경되는지 확인한다.", () => {
    const { confirmInput, confirmInputChangeEvent } = renderTodoForm();

    const value = "TDD 배우기";
    confirmInputChangeEvent(value);

    expect(confirmInput()).toHaveAttribute("value", value);
  });
});
