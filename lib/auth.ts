import prisma from "@/db";
import { SHA256 } from "crypto-js";
import encBase64 from "crypto-js/enc-base64";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
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
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        console.log("credentials", credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }
        const newHash = SHA256(credentials.password + user?.salt).toString(
          encBase64
        );
        const isPasswordValid = newHash === user?.password;
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id + "",
          email: user.email,
        };
      },
    }),
  ],
};
