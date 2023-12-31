import React, { useState } from 'react';
import Logo from '../assets/imgs/logo-header.svg'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import HeaderDrawer from './HeaderDrawer';



export default function HeaderComp() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <header>
                <Navbar className='p-0'>
                    <Navbar.Brand>
                        <img src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Nav class="navigator">
                        <NavItem className='navigator__link d-lg-block d-none' key={1} href="#"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"
                        >Home</NavItem>
                        <NavItem className='navigator__link active d-lg-block d-none' active key={2} href="#"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"
                        >Porfolio</NavItem>
                        <NavItem className='navigator__link d-lg-block d-none' key={2} href="#"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"
                        >Contact</NavItem>
                        <NavItem onClick={handleShow} className='navigator__link d-lg-none d-block ms-auto' key={2} href="#" >
                            <i className="fa fa-bars"></i>
                        </NavItem>
                    </Nav>
                    <Nav pullRight className="ms-auto navigator__button-icon d-md-flex d-none">
                        <NavItem className="button-icon__icon" data-aos="fade-left" eventKey={1} href="#">
                            <i class="fa-solid fa-globe"></i>
                        </NavItem>
                        <NavItem className='button-icon__button' eventKey={2} href="#">
                            <Button variant="warning" data-aos="fade-left">Contact Us</Button>
                        </NavItem>
                    </Nav>

                </Navbar>
            </header >

            {/* ===drawer which is show on the madium screen  */}
            <HeaderDrawer handleClose={handleClose} show={show} />
        </>
    )
}
