# TDD 흐름으로 투두리스트 만들기

## 프로젝트 세팅

```shell
> create-react-app react-tdd-todo --template typescript
```

## 컴포넌트 계획

투두리스트를 만들기 위해서 만들어야 하는 컴포넌트를 생각해보자

- `TodoForm`: 할 일을 작성할 form이 있고 submit 이벤트가 발생하면 새로운 할 일을 추가할 수 있어야 한다.
- `TodoItem`: 할 일을 보여주는 컴포넌트다. 클릭하면 체크박스에 체크가 되고 삭제 버튼을 클릭하면 해당 할 일이 목록에서 삭제되어야 한다.
- `TodoList`: 할 일 목록을 보여주는 컴포넌트다. 여러개의 `TodoItem` 컴포넌트로 구성한다.
- `TodoApp`: 위에 컴포넌트의 조합으로 할 일 목록 기능이 구현되는 컴포넌트다.

## 참고

- [React Testing Library 사용법](https://www.daleseo.com/react-testing-library/)
- [react-testing-library 를 사용하여 TDD 개발 흐름으로 투두리스트 만들기](https://velog.io/@velopert/tdd-with-react-testing-library)
