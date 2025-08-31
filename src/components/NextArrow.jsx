import React from 'react'
import { GrNext } from "react-icons/gr";


const NextArrow = (props) => {
     const {onClick } = props;
  return (
    <div
      className={'absolute text-3xl text-black -right-5 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-100 duration-300'}
    
      onClick={onClick}
    >
        <GrNext/>
    </div>
  )
}

export default NextArrow