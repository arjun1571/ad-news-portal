import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthPorvider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const [accepted,setAccepted]=useState()
    const navigate = useNavigate()
    const [error,setError]=useState("")
    const {CrateUser,UpdateUserProfile,emailVerify}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const Photo = form.PhotoURL.value;
        const password = form.password.value;
        console.log(name,email,Photo,password);
        CrateUser(email,password)
        .then(result =>{
            const user= result.user;
            console.log(user);
            form.reset()
            navigate("/login")
            setError("")
            handleUpdateProfile(name,Photo)
            emailVerify()
            toast.success('Please cheak your email address')
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })

    }
    const handleUpdateProfile =(name,photoURL)=>{
        const profile ={
            displayName: name, 
            photoURL:photoURL,
        }
        UpdateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))

    }
    const handleACccetped = (event)=>{
        setAccepted(event.target.checked);
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='PhotoURL' type="phtourl" placeholder="Enter your photo url" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>Already have an account ? <Link to="/login">LogIn</Link></p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                onClick={handleACccetped} 
                label={<>
                    Accept <Link to="/treams">Tream and condition</Link>
                </>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <p>{error}</p>
        </Form>
    );
};

export default Register;