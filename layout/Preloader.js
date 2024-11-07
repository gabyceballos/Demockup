"use client";
import { DemockupUtilits } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    DemockupUtilits.preloader();
  }, []);

  return <div className="preloader" />;
};
export default Preloader;
