import React from "react";
import { Offcanvas,Button } from 'react-bootstrap';

const HeaderDrawer = function ({show, handleClose}) {
    return (
        <>
            <Offcanvas className="header-drawer" show={show} onHide={handleClose}>
                <Offcanvas.Header className="justify-content-center">
                   <Button onClick={handleClose} varian="dark" className="header-drawer__close-btn" ><i className="fa fa-close"></i></Button>
                </Offcanvas.Header>
                <Offcanvas.Body className="header-drawer__offcanvas-body">
                   <a href="#" className="offcanvas-body__a" >Home</a>
                   <a href="#" className="offcanvas-body__a active" >Portfolio</a>
                   <a href="#" className="offcanvas-body__a" >Contact</a>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default HeaderDrawer;