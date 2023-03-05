import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook,FaYoutube,FaTwitter,FaWhatsapp,FaDiscord } from 'react-icons/fa';
const List = () => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp></FaWhatsapp> WhatApp</ListGroup.Item>
                <ListGroup.Item><FaDiscord></FaDiscord> Discord</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default List;