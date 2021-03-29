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
`}</style>

    </div>
);
}

