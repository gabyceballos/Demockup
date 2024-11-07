"use client"; 
import { DemockupUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const DemockupLayout = ({
  children,
  header = 1,
  footer = 1,
  noFooter = false,
  onePageMenu = true,
}) => {
  useEffect(() => {
    DemockupUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      {/* Pasamos onePageMenu al Header */}
      <Header header={header} onePageMenu={onePageMenu} />
      <SideBar />
      {children}
      {/* Mostramos Footer solo si no está oculto */}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};

export default DemockupLayout;
