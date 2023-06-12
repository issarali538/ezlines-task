import React from 'react';
import blogImg1 from '../assets/imgs/blog-img-1.jpg';
import { Row, Stack, Col, Button } from 'react-bootstrap';

const MainContent = function () {
    return (
        <>
            <main>
                <Stack>
                    <section className='section-wrapper section-a'>
                        <Row>
                            <Col md={6} className="border border-white">
                                <Row className="section__content" direction='vertical' gap={1}>
                                    <Col xs={12}>
                                        <div className="content__starter">
                                            <span>Project 1</span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <h1 className="content__title">Branding Nice Studio</h1>
                                    </Col>
                                    <Col xs={12}>

                                        <p className="content__starter">
                                            The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.
                                        </p>

                                    </Col>
                                    <Col xs>
                                        <div className="content__ender">
                                            <Button>Read More</Button>
                                        </div>
                                    </Col>

                                </Row>

                            </Col>
                            <Col md={6} className="border border-white">
                                <div className="section__thumbnail">
                                    <figure>
                                        <img className='img-fluid' src={blogImg1} alt="" />
                                    </figure>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Stack>
            </main>
        </>
    )
}

export default MainContent;