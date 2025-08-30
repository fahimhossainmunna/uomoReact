import React from 'react'
import Image from './Image'
import Badge from './Badge'

const Product = ({productImg,title,price}) => {
  return (
    <>
    <div className="">

    <Image imgSrc={productImg}/>
    <Badge className={'flex items-center justify-between text-[14px] leading-[24px] text-[#767676]'}/>
    <div className="">
        <h3 className='text-[16px] text-[#222222]'>{title}</h3>
        <h3 className='text-[16px] text-[#222222]'>{price}</h3>
    </div>
    </div>
    </>
  )
}

export default Product