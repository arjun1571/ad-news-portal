
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthPorvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const {user,SingOutAuth}=useContext(AuthContext)
    const signOutHadle=()=>[
        SingOutAuth()
        .then(() => {
            
          }).catch((error) => {
            
          })
          
    ]
    return (
        <div className='mb-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Link className='text-decoration-none' to='/'>AD-News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ></Nav.Link>
                        <Nav.Link ></Nav.Link>
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                        user?.uid ? 
                        <>
                        <span>{user?.displayName}</span>
                        <Button className='ms-4 border-none' variant="outline-danger" onClick={signOutHadle}>log Out</Button>
                        </> : 
                        <>
                        <Link to="/login" className='text-decoration-none me-4'>Login</Link>
                        <Link to="/register" className='text-decoration-none'>Register</Link>
                        </>

                        }</Nav.Link>
                        <Nav.Link eventKey={2} >
                        {
                            user?.photoURL ?
                            <Image style={{height:"30px"}} roundedCircle src={user.photoURL} ></Image> : <FaUser></FaUser>
                        }
                        </Nav.Link>
                    </Nav>
                    <div className=' d-lg-none d-sm-block'>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;