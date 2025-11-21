"use server";

const { auth } = require("@clerk/nextjs/server");
import { supabase } from "./supabase";

export async function getAdmin() {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  const user = await supabase
    .from("Users")
    .select("*")
    .eq("clerkUserID", userId)
    .single();

  if (!user || user.data.role !== "ADMIN") {
    return { authorized: false, reason: "not-admin" };
  }

  return { authorized: true, user };
}
