import SimpleMenu from '../components/simplemenu'


export default function Header() {

  return (
    <div className="main">
      <header className="header">
        <a className="logo" href="#">KUPBSV</a>
        <a className="push" href="#">Login</a>
        <a className="item"><SimpleMenu /></a>
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
  }
   .logo {
    font-weight: 700;
    margin-left: 15px;
    font-size: 25px;
   }
   
   .push {
    margin-left: auto;
    text-align: center;
  }

  .header {
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 555px) {
    .item, .push, .logo {
      font-size: 18px;	
      margin auto;
    }
  }

  @media only screen and (max-width: 400px) {
    .item, .push, .logo {
      font-size: 13px;	
      margin auto;
    }
  }

`}</style>
    </div>
  );
}