import { supabase } from "./supabase";

export const getPackages = async () => {
  const { data, error } = await supabase.from("Packages").select("*");

  if (error) {
    console.error(
      "Lỗi khi trích xuất thông tin từ bảng Packages",
      error.message
    );
    return null;
  }
  return data;
};

export const getRelatedPackages = async (id) => {
  const { data, error } = await supabase
    .from("Packages")
    .select("*")
    .eq("serviceID", id)
    .order("price", { ascending: true }); // sắp xếp theo giá từ thấp đến cao

  if (error) {
    console.error("Lỗi khi lấy các gói thuộc dịch vụ:", error.message);
    return null;
  }
  return data;
};
