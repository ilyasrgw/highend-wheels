import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { createUser, getUser } from "./data-service";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.avatar = token.picture;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.picture = user.image;
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      try {
        const currentUser = await getUser(user.email);
        if (!currentUser)
          await createUser({ email: user.email, fullname: user.fullname });
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const customer = await getUser(session.user.email);
      session.user.user_id = customer.id;
      return session;
    },
  },
  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
