import Header from "@/components/header";
import { notFound } from "next/navigation";
import React from "react";
import { getAdmin } from "@/lib/admin";
import Sidebar from "./_components/sidebar";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const admin = await getAdmin();
  if (!admin.authorized) return notFound();

  return (
    <div className="h-full">
      <Header isAdminPage={true} />
      <div className="flex h-full w-56 flex-col top-22 fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <main className="md:pl-56 h-full pt-24">{children}</main>
    </div>
  );
};

export default AdminLayout;
