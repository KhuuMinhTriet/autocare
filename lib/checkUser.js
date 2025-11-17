// lib/checkUser.js
import { currentUser } from "@clerk/nextjs/server";
import { supabase } from "./supabase"; // Import the new supabase client

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // 1. Search for the current user in the 'users' table of Supabase
    const { data: loggedInUser, error: findError } = await supabase
      .from("Users")
      .select("*")
      .eq("clerkUserID", user.id) // Assuming the foreign key column is clerkUserId
      .single(); // Get a single record

    if (findError && findError.code !== "PGRST116") {
      // PGRST116 is the "record not found" error code
      console.error("Error finding user:", findError.message);
      // You can choose to handle other errors here
    }

    if (loggedInUser) {
      return loggedInUser;
    }

    // If the user is not found, create a new one
    const name = `${user.firstName} ${user.lastName}`;

    const { data: newUser, error: createError } = await supabase
      .from("Users")
      .insert([
        {
          clerkUserID: user.id,
          name,
          imageURL: user.imageUrl,
          email: user.emailAddresses[0].emailAddress,
        },
      ])
      .select() // Return the created record
      .single();

    if (createError) {
      console.error("Error creating user:", createError.message);
      // You can choose to handle other errors here
    }

    return newUser;
  } catch (error) {
    console.error("Unexpected error in checkUser:", error.message);
    return null; // Or handle the error as desired
  }
};
