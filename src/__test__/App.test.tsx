import { render , screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import TestRenderer from "react-test-renderer";
import App from "../App";
import TodoForm from "../component/TodoForm";
import Todo from "../component/Todo";
import { execSync } from "node:child_process";

describe("App rendering Event", () => {
  test("App component has class name: todo-app", async () => {
    render(<App />);
    
    // 비동기 렌더링을 고려해 findByTestId 사용해야 함!
    const todoClass = await screen.findByTestId("todo-app");

    expect(todoClass).toBeTruthy();
    expect(todoClass).toBeInstanceOf(HTMLDivElement);
  });

  test("App component has child component: TodoForm", () => {
    render(<App />);
    const todoForm = screen.getByTestId("todo-form");
    expect(todoForm).toBeInTheDocument();
  });
  
  test("App component has child component: Todo", () => {
    render(<App />);
    const todo = screen.getByTestId("todo");
    expect(todo).toBeInTheDocument();
  });

  //비동기 하려면 아래로 해야 오류안나고 테스트 통과함
  // test("App component has child component: TodoForm", async () => {
  //   render(<App />);
  //   const todoForm = await screen.findByTestId("todo-form");
  //   expect(todoForm).toBeInTheDocument();
  // });
  
  // test("App component has child component: Todo", async () => {
  //   render(<App />);
  //   const todo = await screen.findByTestId("todo");
  //   expect(todo).toBeInTheDocument();
  // });
});

describe("No TypeScript Error", () => {
  test("Should not have TypeScript Errors", () => {
    // Execute the command and capture the output
    expect(() => {
      try {
        const output = execSync("tsc --project ./tsconfig.json", {
          encoding: "utf-8",
        });

        expect(output).not.toContain("error");
      } catch (e) {
        console.error(e);
        throw `🚨🚨🚨️ 타입스크립트 에러가 없는지 확인하세요. 🚨🚨🚨`;
      }
    }).not.toThrow();
  });
});
