import Header from "@/components/header";
import { notFound } from "next/navigation";
import React from "react";
import { getAdmin } from "@/lib/admin";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const admin = await getAdmin();
  if (!admin.authorized) return notFound();

  return (
    <div className="h-full">
      <main className="md:pl-56 h-full pt-20">{children}</main>
    </div>
  );
};

export default AdminLayout;
