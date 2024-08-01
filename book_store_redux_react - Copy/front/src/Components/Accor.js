import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Accor = () => {
    return (
        <div className='container mt-2'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-12 col-md-6'>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Best Sellers</Accordion.Header>
                            <Accordion.Body>
                                <h5>The Midnight Library by Matt Haig</h5>
                                <p>
                                    A unique and beautiful novel about the choices that go into a life well-lived.
                                </p>
                                <h5>The Vanishing Half by Brit Bennett</h5>
                                <p>
                                    A multi-generational family saga that tackles questions of race, identity, and belonging.
                                </p>
                                <h5>The Invisible Life of Addie LaRue by V.E. Schwab</h5>
                                <p>
                                    A story of a young woman who makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>New Arrivals</Accordion.Header>
                            <Accordion.Body>
                                <h5>Klara and the Sun by Kazuo Ishiguro</h5>
                                <p>
                                    A thrilling and poignant new novel that offers a look at our changing world through the eyes of an unforgettable narrator.
                                </p>
                                <h5>Project Hail Mary by Andy Weir</h5>
                                <p>
                                    A lone astronaut must save the earth from disaster in this incredible new science-based thriller.
                                </p>
                                <h5>Malibu Rising by Taylor Jenkins Reid</h5>
                                <p>
                                    A story about one unforgettable night in the life of a family, set against the backdrop of the Malibu surf culture.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Upcoming Releases</Accordion.Header>
                            <Accordion.Body>
                                <h5>The Last Graduate by Naomi Novik</h5>
                                <p>
                                    A budding dark sorceress must save or destroy the magical school that took her in, in this sequel to "A Deadly Education."
                                </p>
                                <h5>Dune: The Duke of Caladan by Brian Herbert and Kevin J. Anderson</h5>
                                <p>
                                    An exploration of the beloved world of Dune with a focus on Duke Leto, father of the Kwisatz Haderach.
                                </p>
                                <h5>Cloud Cuckoo Land by Anthony Doerr</h5>
                                <p>
                                    From the Pulitzer Prize-winning author of "All the Light We Cannot See," a stunning novel about children on the cusp of adulthood in a broken world.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Accor;
