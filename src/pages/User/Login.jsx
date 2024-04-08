import React, { useState, useEffect } from 'react';

const Login = () => {

    return(
      <>
  <div className='content'/>
  <div className="CBody">

<div className="cont">  
  <div className="form">
    <form action="">
      <h1>Login</h1>
      <input type="text"
             className="user"
             placeholder="Username"/>
      <input type="password" 
             className="pass"
             placeholder="Password"/>
    <button className="login"><a href="/home">Login</a></button>
    </form>
  </div>  
</div>

  </div>
      </>
    )
}

export default Login;
