import SimpleMenu from '../components/simplemenu'

export default function Header() {

  return (
    <div className="main">
      <header className="header">
        <a className="logo" href="#">KUPBSV</a>
        <a className="push" href="#">Money Button</a>
        <a className="item" href="#">Login</a>
        <a className="item"><SimpleMenu /></a>
      </header>

<<<<<<< HEAD
      <style jsx> {`
        .main {
          position: fixed;
          top: 0;
          width: 100%;
          height: auto;
          background-color: black;
        }
        a {
          color: white;
          letter-spacing: 2px;
          text-decoration: none;
          padding: 20px 15px;
          display: inline-block
        }
        .logo {
          font-weight: 700;
          justify-content: flex-start;
          margin-left: 10px;
        }
        .item {
          display: flex;	
          font-size: 25px;	
          font-weight: 300;	
          justify-content: flex-end;
        }
      
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          overflow: hidden;
          vertical-align: middle;
        }
        .liLogo {
          flex-grow: 3;
        }
        li {
          font-size: 25px;
          display: inline-block;
          background: black;
        }

        @media only screen and (max-width: 984px) {
          li {
            font-size: 19px;
          }
        }

        @media only screen and (max-width: 800px) {
          li {
            font-size: 13px;
          }
        }

      
      `} </style>
=======
      <style jsx>{`
  .main {
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    background-color: black;
    font-size: 25px;	
    font-weight: 300;	
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
    float: left;
   }
   
   .push {
    margin-left: auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 555px) {
    .item, .push {
      font-size: 18px;	
      margin auto;
    }
  }

`}</style>
>>>>>>> 31fcf50385ca0e9eab5f159222aea264fea230e5
    </div>
  );
}