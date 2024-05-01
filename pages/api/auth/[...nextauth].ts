import NextAuth, { NextAuthOptions, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface SessionData extends Session {
  accessToken?: string;
  user?: { id: string; name: string; email: string; role: string };
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email === "jimmy.dinnartec@gmail.com" && password === "123456") {
          return { id: "1", name: "Jimmy", email: email, role: "admin" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 2592000,
    strategy: "jwt",
    updateAge: 86400,
  },
  callbacks: {
    async jwt({ token, account, user }) {

      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case "credentials":
            token.user = user;
            break;
        }
      }

      return token;
    },
    async session({ session, token, user }: any) {
      session.accessToken = token.accessToken;
      session.user = token.user;

      return session;
    },
  },
};

export default NextAuth(authOptions);
