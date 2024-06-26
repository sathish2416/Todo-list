import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = ({ todoList = [], updateTodo, handleDelete }) => {
  return (
    <Container>
      <Title>Tasks</Title>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  margin-top: 30px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export default TodoList;
