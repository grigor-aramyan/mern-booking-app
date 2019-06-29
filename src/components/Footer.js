import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Footer() {
    const footerStyle = {
        backgroundColor: 'black',
        height: '20vh',
        color: 'white'
    }

    return(
        <div style={footerStyle}>
            <Container>
                <Row>
                    <Col xs={{ size: 2, offset: 7 }}>
                        Follow us:
                        <ul className="list-unstyled">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </Col>
                    <Col xs={{ size: 3 }} className='mt-3'>
                        <p className="small">&copy; Hostel Booking, 2019</p>
                        <span className="small">Azatutyan str 20, Yerevan, Armenia</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}