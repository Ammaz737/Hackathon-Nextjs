import Footer from "@/components/footer";
import Header, { Header1, Header2 } from "@/components/header";
import Hero, { Hero2, Hero3, Hero4 } from "@/components/Hero";
import React from "react";

function page() {
  return (
    <div className="container mx-auto px-4 sm:px-2 lg:px-8">
      {/* Header Section */}
      <div className="space-y-4">
        <Header />
        <Header1 />
        <Header2 />
      </div>

      {/* Hero Section */}
      <div className="space-y-8">
    <Hero/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default page;
