import SimpleMenu from '../components/simplemenu'
import LoginDialog from './login/logindialog'
import {useRouter} from "next/router";
import handleAuthuser from './userAuth/handleauth'
import React, { useState, useEffect } from 'react';
import Profile from './login/profile';
import DarkMode from './darkMode';
import Link from 'next/link';
import storage from 'local-storage-fallback';
import getUserData from './userAuth/getUserData';

export default function Header(props) {
  const { query } = useRouter();
  const [name, setName] = useState('')
  const [primaryPaymail, setPrimaryPaymail] = useState('')
  const [email, setEmail] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [userStatus,setUserStatus] = useState('')
  const [userAmount, setUserAmount] = useState('')
  const [userCurrency, setUserCurrency] = useState('')
  const [userId, setUserId] = useState('')
  
    // if (storage.getItem('mb_js_client:oauth_access_token') && !query.code) {
    //   const userProfile = async() => {
    //       const { profile, balance } = await handleAuthuser();
    //       setName(profile.name);
    //       setPrimaryPaymail(profile.primaryPaymail);
    //       setEmail(profile.email);
    //       setAvatarUrl(profile.avatarUrl);
    //       setUserAmount(balance.amount);
    //       setUserCurrency(balance.currency);
    //       setUserId(profile.id);
    //   }
    //   userProfile();

    // };

      const userProfile = async() => { 
        if (query.code && !userId) { 
          await handleAuthuser();
          const { profile, balance, userStatus } = await getUserData();
          setName(profile.name);
          setPrimaryPaymail(profile.primaryPaymail);
          setEmail(profile.email);
          setAvatarUrl(profile.avatarUrl);
          setUserStatus(userStatus.data.status);
          setUserAmount(balance.amount);
          setUserCurrency(balance.currency);
          setUserId(profile.id); 
        } 
        else if (storage.getItem('mb_js_client:oauth_access_token') && !name) {
          const { profile, balance, userStatus } = await getUserData();
          setName(profile.name);
          setPrimaryPaymail(profile.primaryPaymail);
          setEmail(profile.email);
          setAvatarUrl(profile.avatarUrl);
          setUserStatus(userStatus.data.status);
          setUserAmount(balance.amount);
          setUserCurrency(balance.currency);
          setUserId(profile.id); 
        } 
      }
      userProfile();
      //setTimeout(router.push('/'),5000);

    useEffect(() => {
      console.log(name);
      console.log(primaryPaymail);
      console.log(email);
      console.log(avatarUrl);
      console.log(userStatus);
      console.log(userAmount);
      console.log(userCurrency);
      console.log(userId);
      
      
    },[userId]);

  return (
    <div className="main">
      <header className="header">
        <Link as="/" href="/" ><a className="logo">KUPBSV</a></Link>
          <a className="push" >
            {!userId ? <LoginDialog /> :
            <Profile name={name} userId={userId} primaryPaymail={primaryPaymail} userEmail={email} userAvatar={avatarUrl} userAmount={userAmount} userCurrency={userCurrency} userStatus={userStatus}/> }
          </a>
          <a><SimpleMenu /></a>
      </header>
      <div className="changeTheme">
        <DarkMode />
      </div>
      <style jsx>{`
  .main {
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%;
    height: auto;
    background-color: black;
    font-size: 25px;	
    font-weight: 300;	
    z-index: 2;
    border-bottom: 1px solid gray;
  }
  a {
    color: white;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 20px 15px;
  }
   .logo {
    font-weight: 700;
    margin-left: 15px;
    font-size: 25px;
   }
   
   .push {
    margin-left: auto;
    text-align: center;
    cursor: pointer;
    margin-right: 20px;
  }

  .header {
    display: flex;
    justify-content: flex-end;
  }
  .changeTheme {
    position: absolute;
    top: 100px;
    right: 20px;
    display: ${props.dark == "no" ? "none" : "block"};
  }

  @media only screen and (max-width: 555px) {
    .push, .logo {
      font-size: 18px;	
      margin auto;
    }
  }

  @media only screen and (max-width: 400px) {
    .push, .logo {
      font-size: 13px;	
      margin auto;
    }
  }

`}</style>
    </div>
  );
}