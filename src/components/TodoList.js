import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import Todoitems from "./Todoitems";

const Todolist = () => {
  const todos = useSelector((state) => state.todo.todolist);

  return (
    <div className="todo-list ">
      <AddTodo />

      {todos.map((todo) => (
        <Todoitems todo={todo} />
      ))}
    </div>
  );
};

export default Todolist;
