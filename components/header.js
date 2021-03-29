import SimpleMenu from '../components/simplemenu'

export default function Header () {

return (
    <div className="main">
      <header className="header">
        <ul>
          <li className="liLogo">
            <a className="logo" href="#">KUPBSV</a>
          </li>
          <li>
            <a className="item" href="#">Money Button</a>
          </li>
          <li>
            <a className="item" href="#">Login</a>
          </li>
          <li>
              <a className="item"><SimpleMenu /></a>
          </li>
        </ul>
      </header>

<style jsx>{`
  .main {
    width: 100%;
    position: fixed;
    top: 0;
  }
  a {
      color: white;
      letter-spacing: 2px;
      text-decoration: none;
      padding: 20px 5px;
      display: inline-block;
  }
   .logo {
    font-size: 25px;
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
      background: black;
  }
   
`}</style>
    </div> 
);
}