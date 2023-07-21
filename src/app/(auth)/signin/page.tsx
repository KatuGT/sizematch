"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = target.email.value;
    const password = target.password.value;

    signIn("credentials", { email, password });
  };

  const session = useSession();

  return (
    <div>
      <form onSubmit={handleLogin} >
        <input type="email" name="email" />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
