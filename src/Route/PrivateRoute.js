import React from 'react'
import ProductDetail from '../Pages/ProductDetail'
import { Navigate } from 'react-router'
 //authentication 의 state가 true이냐 false 이냐에 따라서 true면 상품을 보여주고 false면 로그인페이지로 이동
const PrivateRoute = ({authenication}) => {
  return authenication ==
  true ?
  <ProductDetail/> 
  :
  <Navigate to='/login'/>

}

export default PrivateRoute

