import React from "react";
//import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { NavLink } from "react-router-dom";
//import SearchBox from "./SearchBox";
import { logout } from "../actions/user-actions";

// call action - useDispatch
// for bring something from state - useSelector

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <header>
      <Navbar bg="" variant="black" expand="lg" collapseOnSelect className="navbar navbar-expand-lg shadow bg-mg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand fw-bold fs-4 mx-auto">Service Provider</Navbar.Brand>
          </LinkContainer>
          <Nav className="navbar-nav fw-normal fs-3 mx-5 ">
            
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
				<NavLink className="nav-link" to="/about">
                  About
                </NavLink>
				<NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
            
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/*<Route render={({ history }) => <SearchBox history={history} />} />*/}
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="btn btn-outline-primary ms-4 px-4 mx-3 rounded-pill">
                  <i className="fas fa-shopping-cart px-1"></i>Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  {/*<LinkContainer to="/favorites">
                    <NavDropdown.Item>Favorites</NavDropdown.Item>
              </LinkContainer>*/}
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                    <i className="fas fa-user px-1"></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu" >
                  <LinkContainer to="/admin/userlist" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Services</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Booking</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
