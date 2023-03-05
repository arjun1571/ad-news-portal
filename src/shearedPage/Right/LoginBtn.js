import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const LoginBtn = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle/> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub/> Login With Github</Button>
            </ButtonGroup>
            <h5 className='mt-2'>Find Us On</h5>
        </div>
    );
};

export default LoginBtn;