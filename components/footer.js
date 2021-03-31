export default function Footer() {
  return (
    <div className="main">
      <footer className="footer">
        <div className="box">
          <div>
            <p className="rightstext">All rights reserved 2021</p>
          </div>
          <div>
            <img src="/logo.png" alt="Banach Logo" className="logo" />
          </div>
        </div>
      </footer>
      <style jsx>{`
   .main {
    width: 100%;
    background-color: black;
    height: 63px;
    color: white;
    margin: auto;
  }
  .box {
    display: flex;
    justify-content: center;
  }
  .rightstext {
    font-size: 18.5px;

  }
  p {
    letter-spacing: 2px;
  }
  .logo {
    height: 25px;
    padding-left: 30px;
    margin-top: 18px;
  }

  @media only screen and (max-width: 550px) {
  .rightstext {
      font-size: 16px;
      margin-top: 23px;
    }
  .logo {
    padding-left: 20px;
    margin-top: 23px;
    height: 21px;
  }
  }

`}</style>

    </div>
  );
}

