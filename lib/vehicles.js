import { supabase } from "./supabase";

export const getUserVehicles = async () => {
  const { data, error } = await supabase.from("Vehicles").select("*");

  if (error) {
    console.error(
      "Lỗi khi trích xuất thông tin từ bảng Vehicles: ",
      error.message
    );
    return null;
  }
  return data;
};
