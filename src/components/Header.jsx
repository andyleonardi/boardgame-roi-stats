import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="app-title">
        <h1>... but, is it cheaper than going to the movies?</h1>
      </div>
      <div className="navbar">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/collections">Collections</Link>
        </div>
        <div className="navbar-item">
          <Link to="/analytics">Analytics</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
