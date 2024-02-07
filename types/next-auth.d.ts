// types/next-auth.d.ts or any TypeScript file included in your compilation context

import NextAuth from 'next-auth';

declare module 'next-auth' {
  // Extend the User interface
  // interface User {
  //   id: number;
  //   username: string;
  //   email: string;
  //   provider: string;
  //   confirmed: boolean;
  //   blocked: boolean;
  //   createdAt: string;
  //   updatedAt: string;
  //   jwt?: string; // Make sure to include this if you're using it
  // }

  // Extend the Session interface
  interface Session {
    jwt: string;

  }
}
