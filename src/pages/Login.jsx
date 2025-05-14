import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import React from "react";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h3">Log in to your Account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
