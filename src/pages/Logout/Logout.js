import React, { useEffect } from 'react';
import logo from '../../assets/logotext.png'
const Logout = () => {
  

  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get('redirect_to');
      console.log('Successfully logged out!');
      window.location.href = redirectUrl;
    }, 1500)
    
  },[]);

  return (
    <div style={{ width:'100%', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor: '#082743'}}>
       <img src={logo} width="50%"/>
      <h1 className='auth-status-text'>Logging out...</h1>
    </div>
  );
}

export default Logout;