import React from 'react'
import { useAccordionButton } from 'react-bootstrap'
import { useNavigate } from 'react-router'



const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const goToDetail=()=>{
    console.log('디테일페이지로이동')
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='ProductCard' onClick={goToDetail}>
      <img src={item?.img}width="320px" />
      <div className='ProductCard_text'>
        <span className='tag'>{item?.tag.join(" | ")}</span>
      <h3 className='SubTitle'>
        Conscious choice</h3>
      <h2 className='Title'>{item?.title}</h2>
      <p className='Price'> ₩ {item?.price?.toLocaleString(undefined, {
            minimumFractionDigits: 0,
          })}</p>
      </div>
    </div>
  )
}

export default ProductCard
