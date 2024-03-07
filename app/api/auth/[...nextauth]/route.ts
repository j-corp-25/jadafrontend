import { API_URL } from '@/config'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'



const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // using credentials, one of the options to setup nextauth
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          const response = await fetch(
            `${API_URL}/api/auth/local/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                identifier: credentials?.username,
                password: credentials?.password,
              }),
            }
          )

          const data = await response.json()
          if (response.ok && data) {
            return data
          } else {
            return null
          }
        } catch (error) {
          return null
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
     // this will spread the user and token

      return { ...token, ...user }
    },
    async session({ session, token }) {
      //sets up the session with token and user for easy access on the frontend
      session.jwt = token.jwt as string
      session.user = token.user as any

      return session
    },
  },
})

export { handler as GET, handler as POST }
