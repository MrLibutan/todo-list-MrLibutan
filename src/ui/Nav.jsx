import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import FullpageLoader from "../ui/FullpageLoader";
import { useLogout } from "../features/auth/useLogout";

function Nav() {
  const { isPending, logout } = useLogout();

  if (isPending) return <FullpageLoader />;
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4" sx={{ px: 4, py: 2, flexGrow: 1 }}>
          TodoList✅
        </Typography>
        <Button variant="text" color="#fff" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
