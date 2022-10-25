import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Sidebar from '../Sidebar/Sidebar';
import image from '../../asset/cool.jpg';
import './Header.css';


const Header = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Link className="heading" to="/">
                    <img src={image} alt="" />
                    <h2>PL-Education</h2>
                    </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/course">Courses</Link>
                    <Link >FAQ</Link>
                    <Link to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                         {
                                user?.uid ?
                                <>
                                    <Button onClick={handleLogOut} variant="light">Log Out</Button>{' '}
                                </>
                                :
                                <>
                                    <Link className="Login" to="/login">Login</Link>
                                </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                <Image roundedCircle style ={{height:'23px'}} src={user?.photoURL}></Image>
                                : <FaUserAlt></FaUserAlt>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className="d-lg-none">
                        <Sidebar></Sidebar>
                    </div>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
};

export default Header;