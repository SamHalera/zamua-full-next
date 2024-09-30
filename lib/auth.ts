import prisma from "@/db";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = { id: "1", name: "Ethan", email: "test@test.mail" };

        if (!user) {
          return null;
        }

        return user;
        // const isPasswordValid = await compare(
        //   credentials.password,
        //   user.password
        // )

        // if (!isPasswordValid) {
        //   return null
        // }

        // return {
        //   id: user.id + '',
        //   email: user.email,
        //   name: user.name,
        //   randomKey: 'Hey cool'
        // }
      },
    }),
  ],
};
