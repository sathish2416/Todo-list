import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const AddTodo = ({ handleAdd }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  return (
    <div>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        error={error}
        required
      />
      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => {
          if (task.trim().length > 0) {
            handleAdd(task);
            setTask("");
            setError(false);
          } else {
            setError(true);
          }
        }}
      >
        Add
      </StyledButton>
    </div>
  );
};

const StyledButton = styled(Button)`
  width: 100px;
  height: 55px;
  margin-left: 15px !important;
`;

export default AddTodo;
