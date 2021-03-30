export default function Footer () {
return (
    <div className="main">
      <footer className="footer">
        <ul>
          <li>
            <a className="rightstext">All rights reserved 2021</a>
          </li>
          <li>
            <a><img src="/logo.png" alt="Banach Logo" className="logo" /></a>
          </li>
        </ul>
      </footer>
<style jsx>{`
    .main {
      width: 100%;
    }
    .footer {
      background-color: black;
      display: flex;
      justify-content: center;
    }
    ul {
      display: flex;
    }
    .rightstext {
      font-size: 18.5px;
    }
    a {
      letter-spacing: 2px;
      color: white;
    }
    .logo {
      padding-left: 30px;
      height: 25px;
    }

    @media only screen and (max-width: 550px) {
    .rightstext {
        font-size: 16px;
      }
    .logo {
      padding-left: 30px;
      height: 21px;
    }
    ul {
      margin-left:0 ;
    }
    }

`}</style>

    </div>
);
}

