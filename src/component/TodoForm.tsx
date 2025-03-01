import React from "react";
import { useState, useEffect, useRef } from 'react';
import { TodoFormProps } from "./type";

// function TodoForm(props) {
//   console.log(props);
const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(1);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setNumber(number + 1);

    props.onSubmit({
      id: number,
      text: input
    });

    setInput('');
  }

  return (
    <form id="todoForm" data-testid="todo-form" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
