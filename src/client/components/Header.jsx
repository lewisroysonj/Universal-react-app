/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  console.log("My auth status is ", auth);

  const authButton = auth ? <a href='/api/logout'>Logout</a> : <a href='api/auth/google'>Login</a>;
  return (
    <nav>
      <div className='headerLogo'>
        <Link to='/'>React SSR</Link>
      </div>
      <ul className='navLinks' style={{ marginTop:"40px"}} >
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/admins'>Admins</Link>
        </li>
        <li>{authButton}</li>
      </ul>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
