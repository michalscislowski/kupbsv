import SimpleMenu from '../components/simplemenu'
import LoginDialog from '../components/logindialog'
import {useRouter} from "next/router";
import handleAuthuser from '../components/handleauth'
import React, { useState, useEffect } from 'react';

export default function Header() {

  const { query } = useRouter();

  const [name, setName] = useState('')
  const [primaryPaymail, setPrimaryPaymail] = useState('')
  const [email, setEmail] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [userId, setUserId] = useState('')

  if (query.code) {
    const userProfile = async() => {
        const authResult = await handleAuthuser();
        setName(authResult.name);
        setPrimaryPaymail(authResult.primaryPaymail);
        setEmail(authResult.email);
        setAvatarUrl(authResult.avatarUrl);
        setUserId(authResult.id);
      }
    userProfile();
  }
  useEffect(() => {
    console.log(name);
    console.log(primaryPaymail);
    console.log(email);
    console.log(avatarUrl);
    console.log(userId);
  },[userId]);

  return (
    <div className="main">
      <header className="header">
        <a className="logo" href="#">KUPBSV</a>
        <a className="push" ><LoginDialog name={name} userId={userId} primaryPaymail = {primaryPaymail} userAvatar = {avatarUrl} /></a>
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
  }
  a {
    color: white;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 20px 15px;
    justify-content: flex-end;
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
    justify-content: space-between;
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