import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <Box>
      <Nav />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "600px",
          mt: 5,
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}

export default AppLayout;
