import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, description, price, time, img } = service;
    
    return (
        <>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name.toUpperCase()} </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h5>Duration: {time} </h5>
                        <h4 className="text-warning">Price: {price} </h4>
                        <Link to={`/servicing/${_id}`}>
                            <Button>Book {name} now!</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;