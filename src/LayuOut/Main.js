import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Header from '../Pages/Home/Shared/Header/Header';
import LeftSideNAv from '../Pages/Home/Shared/Header/LeftSideNAv';
import RightsideNav from '../Pages/Home/Shared/RightSideNav/RightsideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col lg="2" className='d-none d-lg-block'>
                <LeftSideNAv></LeftSideNAv>
                </Col>
                <Col lg="7"> 
                <Outlet></Outlet>
                </Col>
                <Col lg="3">
               <RightsideNav></RightsideNav>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
          
        </div>
    );
};

export default Main;