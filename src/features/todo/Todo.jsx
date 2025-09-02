import { useEffect, useState } from "react";
import { Box, Button, Divider, TextField } from "@mui/material";

import TodoItem from "../../ui/TodoItem";
import FullpageLoader from "../../ui/FullpageLoader";

import { useUser } from "../../hooks/useUser";
import { useUpdateTodo } from "./useUpdateTodo";

function Todo() {
  const { isPending, user } = useUser();
  const { updateTodo } = useUpdateTodo();

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // Sync local state when user loads or changes
  useEffect(() => {
    if (!isPending && user) {
      setTitle(user.todoListTitle);
      setTodos(user.todolist || []);
    }
  }, [user, isPending]);

  function handleTitleUpdate() {
    updateTodo({ userId: user.id, updatedProps: { todoListTitle: title } });
  }

  function handleRemoveAllDone() {
    if (
      window.confirm("Are you sure you want to remove all completed todos?")
    ) {
      const updatedList = todos.filter((t) => !t.done);

      setTodos(updatedList); // update UI immediately
      updateTodo({
        userId: user.id,
        updatedProps: { todolist: updatedList },
      });
    }
  }

  function handleCheckToggle(todoId) {
    const updatedList = todos.map((curTodo) =>
      curTodo.id === todoId ? { ...curTodo, done: !curTodo.done } : curTodo
    );

    setTodos(updatedList);
    updateTodo({
      userId: user.id,
      updatedProps: { todolist: updatedList },
    });
  }

  if (isPending) return <FullpageLoader />;

  return (
    <>
      <TextField
        variant="standard"
        name="password"
        fullWidth
        value={title}
        sx={{
          mb: 4,
          ".MuiInputBase-input": {
            fontSize: "2rem",
          },
        }}
        onBlur={handleTitleUpdate}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Box sx={{ height: "280px", overflowY: "auto" }}>
        <Box>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onToggle={() => handleCheckToggle(todo.id)}
            />
          ))}
        </Box>
      </Box>
      <Divider sx={{ mt: 4 }} />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4, gap: 2 }}>
        <Button
          variant="outlined"
          type="button"
          sx={{ borderRadius: 4 }}
          onClick={handleRemoveAllDone}
        >
          Remove All Done Tasks
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ borderRadius: 4 }}
          onClick={() => alert("Feature under construction 😣")}
        >
          Edit
        </Button>
      </Box>
    </>
  );
}

export default Todo;
