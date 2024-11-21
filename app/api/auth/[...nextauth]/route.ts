import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/landing", // Redirect users to the landing page if they are not logged in
    error: "/error", // You can also add an error page to handle authentication errors
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/course"; // Redirect to /course after successful login
    },
  },
});

export { handler as GET, handler as POST };
