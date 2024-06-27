import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/db";
import User from "@/models/User";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful signin
    async signIn({ profile }) {
      // connect to db
      await connectDB();
      // check if user exists
      const userExists = await User.findOne({ email: profile.email });
      //if not then add user to db
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          username,
          email: profile.email,
          image: profile.picture,
        });
      }
      //return true to allow sign in
      return true;
    },
    async session({ session }) {
      // get user from db
      const user = await User.findOne({ email: session.user.email });
      // assign the user id to the session
      session.user.id = user._id.toString();
      // return the session
      return session;
    },
  },
};
