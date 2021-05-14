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
import {recoilUserId, recoilUserName, recoilUserStatus, recoilUserPrimaryPaymail, recoilUserAmount, recoilUserCurrency, recoilUserAvatarUrl, recoilUserEmail} from './states'

export default function Header(props) {
  const { query } = useRouter();
  const router = useRouter();
  const [userName, setUserName] = useRecoilState(recoilUserName)
  const [userPrimaryPaymail, setUserPrimaryPaymail] = useRecoilState(recoilUserPrimaryPaymail)
  const [userEmail, setUserEmail] = useRecoilState(recoilUserEmail)
  const [userAvatarUrl, setUserAvatarUrl] = useRecoilState(recoilUserAvatarUrl)
  const [userStatus, setUserStatus] = useRecoilState(recoilUserStatus)
  const [userAmount, setUserAmount] = useRecoilState(recoilUserAmount)
  const [userCurrency, setUserCurrency] = useRecoilState(recoilUserCurrency)
  const [userId, setUserId] = useRecoilState(recoilUserId)
  const [refreshToggle, setRefreshToggle] = useState(true)
  
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
          setUserName(profile.name);
          setUserPrimaryPaymail(profile.primaryPaymail);
          setUserEmail(profile.email);
          setUserAvatarUrl(profile.avatarUrl);
          setUserStatus(userStatus.data.status);
          setUserAmount(balance.amount);
          setUserCurrency(balance.currency);
          setUserId(profile.id);  
        }

        if (storage.getItem('mb_js_client:oauth_access_token') && !userId) {
          const { profile, balance, userStatus } = await getUserData();
          setUserName(profile.name);
          setUserPrimaryPaymail(profile.primaryPaymail);
          setUserEmail(profile.email);
          setUserAvatarUrl(profile.avatarUrl);
          setUserStatus(userStatus.data.status);
          setUserAmount(balance.amount);
          setUserCurrency(balance.currency);
          setUserId(profile.id); 
        } 
      }
      userProfile();

      
      //setTimeout(router.push('/'),5000);

    useEffect(() => {
      console.log(userName);
      console.log(userPrimaryPaymail);
      console.log(userEmail);
      console.log(userAvatarUrl);
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
            <Profile name={userName} userId={userId} primaryPaymail={userPrimaryPaymail} userEmail={userEmail} userAvatar={userAvatarUrl} userAmount={userAmount} userCurrency={userCurrency} userStatus={userStatus}/> }
          </a>
          <a><SimpleMenu /></a>
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