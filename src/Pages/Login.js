import React from 'react'
import { useAccordionButton } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Login = ({setAuthenication}) => {
  const navigate = useNavigate();
  const loginUser = (event) =>{
    event.preventDefault();
    console.log('로그인 버튼 동작')
    //로그인이 될때 메인페이지로 이동시킴
    navigate('/');
    setAuthenication(true);    
    
  }
  return (
    <div className='Login'>
    <h3>SIGN IN</h3>
      <form onSubmit={(event)=>{loginUser(event)}}>
      <input type="email" placeholder='이메일을 입력하시오' id="email" />
      <input type="password" placeholder='비밀번호를 입력하시오' id='password'/>
      <br />
      <label htmlFor="checkbox">Remember me</label>
      <input type="checkbox" id='checkbox' /> <br />
      {/* 로그인버튼을 누르면 머..? */}
      <button type='submit'>
      로그인
      </button>

      </form>
    </div>
  )
}

export default Login
