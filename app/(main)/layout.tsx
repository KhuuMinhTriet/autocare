import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="container mx-auto my-18">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
