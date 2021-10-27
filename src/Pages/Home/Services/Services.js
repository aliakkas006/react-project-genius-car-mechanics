import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container id="services">
            <h2 className="text-primary mt-5">Our Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Services;

/* 
.service-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}


@media only screen and(max - width: 688px) {
    .service - container{
        grid - template - columns: repeat(1, 1fr);
    }
}


@media only screen and(min - width: 689px) and(max - width: 991px) {
    .service - container{
        grid - template - columns: repeat(2, 1fr);
    }
}
*/