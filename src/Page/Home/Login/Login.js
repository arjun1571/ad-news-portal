import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthPorvider/AuthProvider';

const Login = () => {
    const {setUserIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogin=(event)=>{
        event.preventDefault();
        const from=event.target;
        const email = from.email.value;
        const password= from.password.value;
        setUserIn(email,password)
        .then(resutl=>{
            const user= resutl.user;
            console.log(user);
            from.reset()
            navigate('/')
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>Don’t have an account ? <Link to="/register">Register</Link></p>
                
            </Form.Group>
            <Button variant="primary" type="submit">
                Log IN
            </Button>
        </Form>
    );
};

export default Login;