import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../AuthPorvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const LoginBtn = () => {

    const {SinginProvider}=useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const hadleGoogleSingin =()=>{
        SinginProvider(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
        .catch((error) => {
            console.error(error)
          })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={hadleGoogleSingin} className='mb-2' variant="outline-primary"> <FaGoogle/> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub/> Login With Github</Button>
            </ButtonGroup>
            <h5 className='mt-2'>Find Us On</h5>
        </div>
    );
};

export default LoginBtn;