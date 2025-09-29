import React from 'react'
const Price = ({ oldPrice, newPrice }) => {
  return (
    <div className="flex items-center justify-between  gap-2">
      <span className="text-gray-400 line-through">${oldPrice}</span>
      <span className="text-red-600 font-bold">${newPrice}</span>
    </div>
  );
};

export default Price