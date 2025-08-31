import React from 'react'
import { GrPrevious } from "react-icons/gr";


const PrevArrow = (props) => {
      const {onClick } = props;
  return (
     <div
          className={'absolute text-3xl text-black -left-5 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-100 duration-300'}
        
          onClick={onClick}
        >
            <GrPrevious/>
        </div>
  )
}

export default PrevArrow