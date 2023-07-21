import UserModel from "@/models/UserModel";
import connect from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await UserModel.findOne({ email: credentials?.email });

          if (user) {
            const isPassCorrect = await bcrypt.compare(
              credentials?.password as string,
              user.password
            );
            if (isPassCorrect) {
              return user as any;
            }
          } else {
            return new NextResponse("Wrong email or password", { status: 500 });
          }
        } catch (error) {
          if (error instanceof Error) {
            return new NextResponse(error.message, { status: 500 });
          }
        }
      },
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user }) {
      const isAllowedToSignIn = user.email === '93katu@gmail.com'
      if (isAllowedToSignIn) {
        return true
      } else {
        return false

      }
    }
  },
  pages: {
    error: "/",
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
