import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthPorvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const location = useLocation()
    const {setUserIn,setLoading}=useContext(AuthContext)
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const forn = location.state?.from.pathname || '/';
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
            setError('')
            if(user.emailVerified){
                navigate(forn,{replace: true})
            }
            else{
                toast.error("your email is not verified")
            }
        })

        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
        .finally(()=>{
            setLoading(false)
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
                <p>Dont have an account ? <Link to="/register">Register</Link></p>
                
            </Form.Group>
            <Button variant="primary" type="submit">
                Log IN
            </Button>
            <p className='text-warning'>{error}</p>
        </Form>
    );
};

export default Login;