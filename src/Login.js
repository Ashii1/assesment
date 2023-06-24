import React from 'react'
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import './App.css';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    navigate('/home');

    const handleGoogleLogin = ({ provider, data }) => {
      if (provider === 'google' && data?.email) {
        navigate('/Dashboard');
      }
    };
      const handleClick=()=>{
        alert("Please use Google acccount for Sign In")
      }
  return (
    
    <div className='container'>
      <div className='left'>

        <h1>Board</h1>
      </div>
     <div className='right'>
      <div className='login'>
        <h2>Sign in</h2>
        <input type='text' placeholder='Email id' />
        <input type='text' placeholder='Password' />
        <button onClick={handleClick}>Sign In</button>
        <LoginSocialGoogle
          client_id='799984109445-ejak2c7rrdiva2ssr96u9ht712b3cg25.apps.googleusercontent.com'
          scope='openid profile email'
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={handleGoogleLogin}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton className='button' />
        </LoginSocialGoogle>
        </div>
      </div> 
    </div>
   
  );
}


export default Login