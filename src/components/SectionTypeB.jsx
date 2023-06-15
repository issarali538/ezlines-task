import React from 'react';
import { Row, Col, Button, Stack } from 'react-bootstrap';

const SectionTypeB = function ({ blog }) {
  
    return (
        <>
            <section className='section-wrapper section-type-a'>
                <Row className="align-items-center">
                    <Col md={6}>
                        <Stack className="section__thumbnail">
                            <Stack className="thumnail__img-wrapper" data-aos="fade-down-right">
                                <img className='img-fluid' src={blog.img} alt="" />
                            </Stack>
                        </Stack>
                    </Col>
                    <Col md={6}>
                        <Stack className="section__content">
                            <Row direction='vertical' gap={1}>
                                <Col xs={12}>
                                    <div className="content__starter">
                                        <span className='span-line'></span>
                                        <span>{blog.smallHeading}</span>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <h1 className="content__title">{blog.mainHeading}</h1>
                                </Col>
                                <Col xs={12}>

                                    <p className="content__detail">
                                    {blog.content}
                                    </p>

                                </Col>
                                <Col xs>
                                    <div className="content__ender">
                                        <Button><i className="fa-solid fa-arrow-right me-2"></i>  Read More</Button>
                                    </div>
                                </Col>

                            </Row>
                        </Stack>
                    </Col>
                </Row>
                <div className="circle-box-type-b" data-aos="zoom-out-up"></div>
            </section>
        </>
    )
}

export default SectionTypeB;