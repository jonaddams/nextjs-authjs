import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
// import Sendgrid from "next-auth/providers/sendgrid";
import { db } from "@/database/drizzle";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Postmark from "next-auth/providers/postmark";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google,
    GitHub,
    MicrosoftEntraID,
    // Sendgrid({
    //   server: process.env.SENDGRID_EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    Postmark({
      server: process.env.POSTMARK_EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: "jwt", // Ensure JWT strategy is used for sessionj
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
