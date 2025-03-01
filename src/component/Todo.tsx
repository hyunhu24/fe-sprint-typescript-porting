import React from "react";
import { TodoProps } from "./type";

// const Todo = ({ todos, completeTodo, removeTodo }: TodoProps) => {
const Todo:React.FC<TodoProps> = ({ todos, completeTodo, removeTodo }) => {

  return (
    <div className='wrapper-todo' data-testid="todo">
      {todos.map((todo, index) => {
        const todoClass = todo.isComplete ?
          'todo-row complete' :
          'todo-row';

        return (
          <div 
            className={todoClass}
            key={index}
          >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <i className="fas fa-times delete-icon" onClick={() => removeTodo(todo.id)}></i>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Todo
