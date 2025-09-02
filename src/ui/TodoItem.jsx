import { Box, Checkbox, Typography } from "@mui/material";

function TodoItem({ todo, onToggle }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderRadius: 6,
        mb: 4,
        mx: 2,
        px: 2,
        py: 1,
      }}
    >
      <Checkbox checked={todo.done} onChange={onToggle} />
      <Typography sx={{ ml: 4 }}>{todo.item}</Typography>
    </Box>
  );
}

export default TodoItem;
