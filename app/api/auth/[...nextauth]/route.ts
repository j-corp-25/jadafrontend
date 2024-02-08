import { API_URL } from '@/config'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'



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

          const data = await response.json() // Parse the JSON response
          if (response.ok && data) {
            // Return the entire data object to include both user and jwt in the token
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
      // Assuming you want to store user details in the token

      return { ...token, ...user }
    },
    async session({ session, token }) {
      // Assuming you want to store user details from the token in the session
      session.jwt = token.jwt as string
      session.user = token.user as any

      return session
    },
  },
})

export { handler as GET, handler as POST }
