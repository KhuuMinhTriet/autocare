import { supabase } from "./supabase";

export const getProducts = async () => {
  const { data, error } = await supabase.from("Products").select("*");

  if (error) {
    console.error(
      "Lỗi khi trích xuất thông tin từ bảng Products",
      error.message
    );
    return null;
  }
  return data;
};

export const getProductById = async (id) => {
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error("Lỗi khi lấy sản phẩm theo ID:", error.message);
    return null;
  }
  return data;
};
