import { supabase } from "./supabase";

export const getTeamLeaders = async () => {
  const { data, error } = await supabase.from("Team_Leaders").select("*");

  if (error) {
    console.error(
      "Lỗi khi trích xuất thông tin từ bảng Team_Leaders",
      error.message
    );
    return null;
  }
  return data;
};

/*
// lib/api/products.js (hoặc products.ts nếu dùng TypeScript)
import { supabase } from '../supabase';

// READ: Lấy tất cả sản phẩm
export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*'); // Lấy tất cả các cột

  if (error) {
    console.error('Lỗi khi lấy sản phẩm:', error.message);
    return null;
  }
  return data;
};

// READ: Lấy sản phẩm theo ID
export const getProductById = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id) // Lọc theo id
    .single(); // Chỉ lấy một dòng dữ liệu

  if (error) {
    console.error('Lỗi khi lấy sản phẩm theo ID:', error.message);
    return null;
  }
  return data;
};

// CREATE: Tạo mới một sản phẩm
export const createProduct = async (productData) => {
  const { data, error } = await supabase
    .from('products')
    .insert([productData]); // productData là object chứa dữ liệu sản phẩm

  if (error) {
    console.error('Lỗi khi tạo sản phẩm:', error.message);
    return null;
  }
  return data;
};

// UPDATE: Cập nhật một sản phẩm theo ID
export const updateProduct = async (id, updates) => {
  const { data, error } = await supabase
    .from('products')
    .update(updates) // updates là object chứa các trường cần cập nhật
    .eq('id', id); // Lọc theo id

  if (error) {
    console.error('Lỗi khi cập nhật sản phẩm:', error.message);
    return null;
  }
  return data;
};

// DELETE: Xóa một sản phẩm theo ID
export const deleteProduct = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('id', id); // Lọc theo id

  if (error) {
    console.error('Lỗi khi xóa sản phẩm:', error.message);
    return null;
  }
  return data;
};

 */
