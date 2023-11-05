import { authOptions } from "@/utilities/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export default handler;
