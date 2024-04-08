import React, { useEffect, useState } from 'react'
import MainVisual from './MainVisual';
import ProducCard from '../Components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import db from '../db.json';  //db.json 파일가져오기


//   getProduct함수로 만들어서 useEffect에 가져옴
const ProductAll = () => {
// 6번줄 배열형태로 가져올것이다 
const [productList, setProductList]=useState([]);
const [query, setQuery]=useSearchParams();
const getProducts = async() =>{
  //제품값 받아옴
let searchQuery= query.get('q')||"";
//베포시 주소 변경해야함
console.log(searchQuery);
//모든제품 가져오기
let products= db.products;
let fillteredProducts = products.filter(products => products.title.toLowerCase().includes(searchQuery.toLowerCase()));
console.log(fillteredProducts);
console.log('setQuery?',setQuery);

//
setProductList(fillteredProducts);



//  setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div className='ProductAll'>
      <MainVisual/>
      <div className='ProductAllInner'>
        {productList.map((item)=>(<ProducCard item = {item}
        key={item.id}/>
        ))}
      {/* <ProducCard/>
      <ProducCard/>
      <ProducCard/>
      <ProducCard/> */}
      </div>
    </div>
  )
}

export default ProductAll
