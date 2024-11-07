"use client";
import { DemockupUtilits } from "@/utility";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    DemockupUtilits.scrollTop();
  }, []);

  return (
    <a href="#" className="scroll-top scroll-to-target" data-target="html">
      <span className="fas fa-angle-double-up" />
    </a>
  );
};
export default ScrollTop;
