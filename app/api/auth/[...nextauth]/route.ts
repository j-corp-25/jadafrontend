import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          const response = await fetch('http://localhost:1337/api/auth/local/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              identifier: credentials?.username,
              password: credentials?.password,
            }),
          });

          const data = await response.json(); // Parse the JSON response
          if (response.ok && data) {
            // Return the entire data object to include both user and jwt in the token
            return data;
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error in authorize:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Assuming you want to store user details in the token
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      // Assuming you want to store user details from the token in the session
      session.jwt = token.jwt as string;
      if (typeof token.user === 'object' && token.user !== null) {
        session.user = { ...token.user };
      }
      return session;
    },
  },

});

export { handler as GET, handler as POST };
