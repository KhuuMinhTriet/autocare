import { supabase } from "./supabase";

export const getServices = async () => {
  const { data, error } = await supabase.from("Services").select("*");

  if (error) {
    console.error(
      "Lỗi khi trích xuất thông tin từ bảng Services",
      error.message
    );
    return null;
  }
  return data;
};

export const getServiceById = async (id) => {
  const { data, error } = await supabase
    .from("Services")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error("Lỗi khi lấy dịch vụ theo ID:", error.message);
    return null;
  }
  return data;
};
