import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fotter from '../shearedPage/Fotter/Fotter';
import LeftSideNav from '../shearedPage/Left/LeftSideNav';
import RightSideNav from '../shearedPage/Right/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col className='d-lg-block  d-md-none' lg="3">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="6">
                        <Outlet />
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;