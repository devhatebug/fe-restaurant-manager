'use client'
import React from "react";
import Navbar from "@/components/header";
import Carousel from "@/components/carousel";
import BoardProducts from "@/components/boardProduct";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="h-auto w-[100%]">
      <div className="w-[100%] h-auto">
        <Navbar />
        <div className="">
          <Carousel />
        </div>
        <div>
          <BoardProducts />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
