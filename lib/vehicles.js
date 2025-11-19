import { supabase } from "./supabase";

export const getUserVehicles = async (userID) => {
  const { data, error } = await supabase
    .from("Vehicles")
    .select("*")
    .eq("userID", userID);

  if (error) {
    console.error(
      "Lỗi khi trích xuất thông tin từ bảng Vehicles: ",
      error.message
    );
    return null;
  }
  return data;
};
