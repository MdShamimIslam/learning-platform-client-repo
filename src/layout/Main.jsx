import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Sidebar from '../Pages/Sidebar/Sidebar';


const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container className='mt-5'>
                <Row>
                    <Col lg='4' className="d-none d-lg-block">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;