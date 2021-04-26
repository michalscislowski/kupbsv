import SimpleMenu from '../components/simplemenu'
import LoginDialog from '../components/logindialog'
import {useRouter} from "next/router";
import handleAuthuser from '../components/handleauth'
import React, { useState, useEffect } from 'react';
import Profile from '../components/profile';
import DarkMode from './darkMode';
import Link from 'next/link';

export default function Header() {

  const { query } = useRouter();

  const [name, setName] = useState('')
  const [primaryPaymail, setPrimaryPaymail] = useState('')
  const [email, setEmail] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [userId, setUserId] = useState('')
  const [userAmount, setUserAmount] = useState('')
  const [userCurrency, setUserCurrency] = useState('')
  // const [paymentsId, setPaymentId] = useState('')
  // const [paymentsDate, setPaymentDate] = useState('')
  // const [paymentsTxid, setPaymentTxid] = useState('')
  // const [paymentsAmount, setPaymentAmount] = useState('')
  // const [paymentsCurrency, setPaymentCurrency] = useState('')
  // const [paymentsStatus, setPaymentStatus] = useState('')

  if (query.code && !name) {
    const userProfile = async() => {
    const {profile, balance/*, payments*/} = await handleAuthuser();
        setName(profile.name);
        setPrimaryPaymail(profile.primaryPaymail);
        setEmail(profile.email);
        setAvatarUrl(profile.avatarUrl);
        setUserAmount(balance.amount);
        setUserCurrency(balance.currency);
        // setPaymentId(payments.id);
        // setPaymentDate(payments.created-at);
        // setPaymentTxid(payments.normalized-txid);
        // setPaymentAmount(payments.amount);
        // setPaymentCurrency(payments.currency);
        // setPaymentStatus(payments.status)
        setUserId(profile.id);
      }
    userProfile();
  }
  useEffect(() => {
    console.log(name);
    console.log(primaryPaymail);
    console.log(email);
    console.log(avatarUrl);
    console.log(userId);
    console.log(userAmount);
    console.log(userCurrency);
  },[userId]);

  return (
    <div className="main">
      <header className="header">
      <Link as="/" href="/" ><a className="logo">KUPBSV</a></Link>
        <a className="push" >
          {!name ? <LoginDialog /> :
          <Profile name={name} userId={userId} primaryPaymail={primaryPaymail} userEmail={email} userAvatar={avatarUrl} userAmount={userAmount} userCurrency={userCurrency}/> }
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