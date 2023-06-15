import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import logo from '../assets/imgs/logo-header.svg'

const Footer = function () {
    return (
        <>
            <footer className='py-2'>
                <Container>
                    <Row className="justify-contente-between">
                        <Col xs>
                            <img src={logo} className='d-block mb-2' alt="" />
                        </Col>
                        <Col xs>
                            <p className='text-white'>
                                2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <ul>
                                <li>
                                    <a href="#"> <i className="fa-brands fa-facebook-f"></i> </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa-brands fa-facebook-f"></i> </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa-brands fa-facebook-f"></i> </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa-brands fa-facebook-f"></i> </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;