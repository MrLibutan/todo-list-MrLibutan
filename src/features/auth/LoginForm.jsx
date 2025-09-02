import { Button, Container, Paper, TextField, Typography } from "@mui/material";

import { useState } from "react";
import FormContainer from "../../ui/FormContainer";
import { useLogin } from "./useLogin";
import FullpageLoader from "../../ui/FullpageLoader";

function LoginForm() {
  const { isLoggingin, login } = useLogin();
  const [values, setValues] = useState({
    email: "david@example.com",
    password: "123456",
  });

  function handleOnchange(e) {
    const { name, value } = e.target;

    setValues((cur) => ({ ...cur, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    login({ email: values.email, password: values.password });
  }

  if (isLoggingin) return <FullpageLoader />;

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" textAlign="center" mb={4}>
          Login
        </Typography>
        <TextField
          sx={{ mb: 4 }}
          label="Email"
          name="email"
          type="text"
          required
          fullWidth
          value={values.email}
          onChange={handleOnchange}
        ></TextField>
        <TextField
          sx={{ mb: 4 }}
          label="Password"
          name="password"
          type="password"
          required
          fullWidth
          value={values.password}
          onChange={handleOnchange}
        ></TextField>
        <Button type="submit" fullWidth color="primary" variant="contained">
          Login
        </Button>
      </form>
    </FormContainer>
  );
}

export default LoginForm;
