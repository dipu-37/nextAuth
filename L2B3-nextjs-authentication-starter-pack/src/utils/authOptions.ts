import { Secret } from './../../node_modules/next-auth/src/jwt/types';
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import  { NextAuthOptions } from "next-auth"


export const authOptions :NextAuthOptions= {
  providers: [
   GitHubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
  }),
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  }),
  ],
  pages : {
    signIn:"/login"
  },
  secret : process.env.NEXTAUTH_SECRET,
}

