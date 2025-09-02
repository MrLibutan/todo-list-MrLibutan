import { Container, Paper } from "@mui/material";

function FormContainer({ children }) {
  return (
    <Container maxWidth="sm">
      <Paper elevation={5} sx={{ mt: 10, px: 6, py: 6, borderRadius: 6 }}>
        {children}
      </Paper>
    </Container>
  );
}

export default FormContainer;
