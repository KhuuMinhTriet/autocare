import Header from "@/components/header";
import { notFound } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }) => {
  return (
    <div className="h-full">
      <Header />
      <div className="flex h-full w-56 flex-col top-20 fixed inset-y-0 z-50"></div>
      <main className="md:pl-56 h-full pt-20">{children}</main>
    </div>
  );
};

export default AdminLayout;
