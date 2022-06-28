import React from 'react';
import {Col, Form, Row, Button, FloatingLabel,Modal } from "react-bootstrap";


const Formtransaksi = () => {
    return (
        <>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                    <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

</>
);

}

export default Formtransaksi;