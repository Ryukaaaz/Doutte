import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import StickyCTA from "@/components/ui/sticky-cta";

export default function MainLayout
(
  { children }: React.PropsWithChildren
) {
  return (
    <div className="color-bg min-h-screen">
      <Navbar/>
      <main>
      {children}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
