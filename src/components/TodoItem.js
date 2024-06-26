import React from "react";
import { Button, Checkbox, ListItem, ListItemText } from "@mui/material";

const TodoItem = ({ todo, updateTodo = () => {}, handleDelete = () => {} }) => {
  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={() => {
          updateTodo(todo);
        }}
      />
      <ListItemText primary={todo.title} />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleDelete(todo)}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default TodoItem;
