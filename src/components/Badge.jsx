import React from "react";
import { CiHeart } from "react-icons/ci";

const Badge = ({className}) => {
  return (
    <>
      <div className={`flex w-[330px] items-center justify-between${className}`}>
        <h3>Dresses</h3>
        <CiHeart />
    
      </div>
      
    </>
  );
};

export default Badge;
