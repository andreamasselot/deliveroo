import logo from "../assets/img/logo-teal.svg";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
