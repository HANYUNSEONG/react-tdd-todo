import { render, screen } from "@testing-library/react";
import { Todo } from "types/todo";
import TodoItem from "../TodoItem";

const mockTodo: Todo = {
  id: 1,
  content: "TDD 배우기",
  done: false,
};

const renderTodoItem = (todo?: Todo) => {
  const todoProps = todo ?? mockTodo;

  const onToggle = jest.fn();
  const onRemove = jest.fn();

  render(<TodoItem todo={todoProps} onToggle={onToggle} onRemove={onRemove} />);

  const hasContent = () => {
    return screen.getByText(todoProps.content);
  };

  const hasRemoveButton = () => {
    return screen.getByText("삭제");
  };

  const hasDoneCheckbox = () => {
    return screen.getByRole("checkbox");
  };

  return {
    hasContent,
    hasRemoveButton,
    hasDoneCheckbox,
  };
};

describe("<TodoItem />", () => {
  it("컴포넌트 구성이 올바른지 확인한다.", () => {
    const { hasContent, hasRemoveButton, hasDoneCheckbox } = renderTodoItem();

    expect(hasContent()).toBeVisible();
    expect(hasRemoveButton()).toBeVisible();
    expect(hasDoneCheckbox()).not.toBeChecked();
  });

  it("done이 true인 경우 checkbox에 체크가 되어있는지 확인한다.", () => {
    const { hasDoneCheckbox } = renderTodoItem({ ...mockTodo, done: true });

    expect(hasDoneCheckbox()).toBeChecked();
  });

  it("done이 false인 경우 checkbox에 체크 해제되어 있는지 확인한다.", () => {
    const { hasDoneCheckbox } = renderTodoItem({ ...mockTodo, done: false });

    expect(hasDoneCheckbox()).not.toBeChecked();
  });

  it("삭제 버튼이 있는지 확인한다.", () => {
    const { hasRemoveButton } = renderTodoItem();

    expect(hasRemoveButton()).toBeVisible();
  });
});
