import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar"></nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TRAVEL THE BALKANS
        </Link>
      </div>
    </>
  );
}

export default Navbar;
