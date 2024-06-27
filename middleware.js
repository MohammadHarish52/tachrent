export { default } from "next-auth/middleware";

export const config = {
  matchers: [
    "/properties/add",
    "/profile",
    "/properties/saved",
    "/properties/messages",
  ],
};
