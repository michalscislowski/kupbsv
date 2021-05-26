import SimpleMenu from '../components/simplemenu'
import LoginDialog from './login/logindialog'
import {useRouter} from "next/router";
import handleAuthuser from './userAuth/handleauth'
import React, { useState, useEffect } from 'react';
import Profile from './login/profile';
import Link from 'next/link';
import storage from 'local-storage-fallback';
import getUserData from './userAuth/getUserData';
import {useRecoilState} from 'recoil'
import {recoilUserId, recoilUserStatus, recoilUserAmount, recoiluserProfile} from './states'

export default function Header(props) {
  const router = useRouter();
  const { query } = router;
  const [userProfile, setUserProfile] = useRecoilState(recoiluserProfile)
  const [userStatus, setUserStatus] = useRecoilState(recoilUserStatus)
  const [userAmount, setUserAmount] = useRecoilState(recoilUserAmount)
  const [userId, setUserId] = useRecoilState(recoilUserId)


  function setMoneyButtonData(_profile, _balance, _userStatus) {
    setUserProfile(_profile);
    setUserId(_profile.id);  
    setUserStatus(_userStatus.data.status);
    setUserAmount(_balance);
  }

  useEffect(() => { 
    (async() => {
      if (query.code && !userId) { 
        await handleAuthuser().then(router.push('/home'));
      }
      if (!userId) { 
        const { profile, balance, userStatus } = await getUserData();
        setMoneyButtonData(profile, balance, userStatus);
        //console.log(storage.getItem('mb_js_client:oauth_access_token'));
      }
    })()
  },[router.isReady]);

  
  useEffect(() => {
    console.log("name: " + userProfile.name + ", id: " + userId);
    console.log("email: " + userProfile.primaryPaymail);
    console.log("balance: " + parseFloat(userAmount.amount).toFixed(2) + " USD");
  },[userId]);

  useEffect(() => {
    if (router.pathname != '/home') {
    (function(w,d,v3){
      w.chaportConfig = {
      appId : '609ef156cffe24321140dea7',
      };
        
      if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
        
      window.chaport.on('ready', function () {
        window.chaport.setVisitorData({
        name: (userProfile.name),
        email: (userProfile.userEmail), 
        })
      })}
    },[userId]);

  return (
    <div className="main">
      <header className="header">
        <Link as="/" href="/" ><a className="logo">KUPBSV</a></Link>
          <a className="push" >
            {!userId ? <LoginDialog /> :
            <Profile userId={userId} userProfile={userProfile} userAmount={userAmount} userStatus={userStatus}/> }
          </a>
          <a><SimpleMenu userId={userId} /></a>
      </header>
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
    opacity: ${props.opacityVal};
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
  @media only screen and (max-width: 499px) {
    .push, .logo {
      font-size: 22px;	
      margin auto;
    }
    a {
      padding: 20px 0;
    }
  }

`}</style>
    </div>
  );
}