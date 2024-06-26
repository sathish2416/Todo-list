import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { toast } from "react-toastify";
import styled from "styled-components";

const HomePage = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAdd = (task) => {
    if (task.trim()) {
      const tempTodo = {
        id: todoList.length + 1,
        title: task,
      };
      setTodoList([...todoList, tempTodo]);
      toast.success("Task added successfully!");
    }
  };

  const handleDelete = async (todo) => {
    if (todo && todo.id) {
      const tempList = todoList.filter((list) => list.id !== todo.id);
      if (tempList.length > 0) {
        setTodoList(tempList);
        toast.error("Task deleted!");
      } else {
        setTodoList([]);
        toast.error("All Tasks deleted!");
      }
    }
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <AddTodo
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        todoList={todoList}
      />
      {todoList.length > 0 ? (
        <TodoList
          todoList={todoList}
          handleDelete={handleDelete}
          updateTodo={() => {}}
        />
      ) : (
        <EmptyText>No todo list to show.</EmptyText>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EmptyText = styled.div`
  margin-top: 50px;
`;

export default HomePage;
