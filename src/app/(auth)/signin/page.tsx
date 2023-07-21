"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const Login = () => {

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = target.email.value;
    const password = target.password.value;

    signIn("credentials", { email, password });
    redirect("/");
  };

  const { status } = useSession();

  const handleSignout = () => {
    signOut();
  };

  if (status === "unauthenticated") {
    return (
      <div>
        <form
          onSubmit={handleLogin}
          className="mx-auto flex w-[min-content] flex-col items-center justify-center gap-5"
        >
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="rounded-lg p-4"
          />
          <input
            type="password"
            name="password"
            placeholder="xxxxxxx"
            autoComplete="current-password"
            className="rounded-lg p-4"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 p-4 text-white"
          >
            Login
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <button
        type="submit"
        className="mx-auto w-full max-w-[300px] rounded-lg bg-blue-700 p-4 text-white"
        onClick={handleSignout}
      >
        Logout
      </button>
    );
  }
};

export default Login;
