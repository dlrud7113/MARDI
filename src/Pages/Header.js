import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate=useNavigate();
  const goTologin=()=>{
    console.log('로그인페이지로 이동')
    navigate('/logoin')
  }
  const search=(event)=>{
    console.log('키가 입력되는 중');
    if(event.key==="Enter"){
    event.preventDefault();
    //console.log('click Enter key', event.key);
    }
    let keyword = event.target.value;
    console.log("keyword : ", keyword);
    navigate(`/?q=${keyword}`)
  }

  return (
  <div className='Header'>
      <div className="TopBanner">
      KAKAOTALK FRIENDS 10% OFF SPECIAL COUPON
      </div>
    <div className="HeaderInner">
        <div className="Nav">
          <Link to="/">
            <img src="img/logo.png" alt="로고" className='logoImg' />
            </Link>
          <ul>
            <li><a href="#none">SHOP</a></li>
            <li><a href="#none">BRAND</a></li>
            <li><a href="#none">COLLAB</a></li>
            <li><a href="#none">STYLING</a></li>
            <li><a href="#none">STORES</a></li>
          </ul>
          
          <div className='User'>
            <span onClick={goTologin} 
            >로그인</span>
            <form className='Search'>
            <input type="text" placeholder='SEARCH' 
            onKeyPress={search} /> 
            <img src={process.env.PUBLIC_URL+'/img/search.png'} alt="검색이미지" 
            id='search_img'/>
            </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Header
