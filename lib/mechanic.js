import { supabase } from "./supabase";

export const getMechanics = async () => {
  const { data, error } = await supabase.from("Mechanics").select("*");

  if (error) {
    console.error(
      "Lỗi khi trích xuất thông tin từ bảng Mechanics",
      error.message
    );
    return null;
  }
  return data;
};
