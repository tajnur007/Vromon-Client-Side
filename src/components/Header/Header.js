import React from 'react';
import './Header.css';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import companyImage from '../../resources/images/vromon-large.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    const activeNavItem = {
        fontWeight: "bold",
        color: "#ec7d1c"
    }

    return (
        <div className="sticky-top shadow-lg">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="d-flex justify-content-between">
                    {/* Company Logo  */}
                    <div>
                        <NavLink to="/"><img src={companyImage} alt="" /></NavLink>
                    </div>

                    {/* Navbar Items  */}
                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <NavLink exact to="/" activeStyle={activeNavItem} className="nav-item">
                                Home
                            </NavLink>
                            <NavLink exact to="/destinations" activeStyle={activeNavItem} className="nav-item">
                                Destinations
                            </NavLink>
                            <NavLink exact to="/packages" activeStyle={activeNavItem} className="nav-item">
                                Packages
                            </NavLink>
                            <NavLink exact to="/contacts" activeStyle={activeNavItem} className="nav-item">
                                Contact Us
                            </NavLink>

                            {/* More Dropdown  */}
                            <NavDropdown title={<span style={{ color: "#d8d1d1" }}>More</span>} id="collasible-nav-dropdown">
                                <NavLink exact to="/gallary" className="dropdown-item">
                                    Gallary
                                </NavLink>
                                {
                                    user.email ? <NavLink exact to="/myOrders" className="dropdown-item">
                                        My Orders
                                    </NavLink> : ''
                                }
                                {
                                    user.email ? <NavLink exact to="/allOrders" className="dropdown-item">
                                        Manage All Orders
                                    </NavLink> : ''
                                }
                                {
                                    user.email ? <NavLink exact to="/addPackage" className="dropdown-item">
                                        Add A New Package
                                    </NavLink> : ''
                                }
                            </NavDropdown>

                            {/* User Section  */}
                            <div className="border-start ms-2 px-2 border-2">
                                {
                                    user.email ? <span className="text-app-secondary pe-2">{user.displayName}</span> : ''
                                }
                                {
                                    user.email ?
                                        <button onClick={logout} className="outline-btn-primary py-1 px-2">Logout</button>
                                        :
                                        <NavLink exact to="/login" activeStyle={activeNavItem} className="nav-item">
                                            Login / Register
                                        </NavLink>
                                }
                            </div>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;