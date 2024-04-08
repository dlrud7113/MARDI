import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import db from '../db.json';


const ProductDetail = () => {
  let {id}=useParams();
  let [product, setproduct]=useState(null)

  useEffect(()=>{
    //url 파라미터로 받은 상품 아이디에 해당하는 상품 db.json에서 찾아서 설정
    const selectedProduct = db.products.find((item)=>
      item.id === parseInt(id));
    setproduct(selectedProduct);
  },[id]);
  
  return (
    <div className='ProductDetail'>
      <img src={product?.img} alt="images" />
      <form className='DetailContent'>
        <h3 className='Title01'>{product?.title}</h3>
        <div className='Detail_box'>
        <span className='Price01'>{product?.price}원</span>
        <select name="" id="">
          <option value="-1">사이즈 선택</option>
          <option value="-1">S</option>
          <option value="-1">M</option>
        </select>
        <button className='keep'>장바구니 추가</button>
        </div>
      </form>
    </div>
  )
}

export default ProductDetail
