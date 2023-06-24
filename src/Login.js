import React, { useState } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import './App.css';
import Dashboard from './Dashboard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = ({ provider, data }) => {
    if (provider === 'google' && data?.email) {
      window.location.href = '/Dashboard';
    }
  };

  const handleClick = () => {
    if (email.includes('gmail.com') && password.length >= 5) {
      window.location.href = '/Dashboard';
    } else {
      alert('Please use a Gmail account and enter a password with at least 5 characters.');
    }
  };

  return (
    <div className='container'>
      <div className='left'>
        <h1>Board</h1>
      </div>
      <div className='right'>
        <div className='login'>
          <h2>Sign in</h2>
          <input type='text' placeholder='Email id' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
};

export default Login;
