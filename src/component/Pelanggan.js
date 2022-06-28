import React, {useEffect, useState} from 'react';
import {
    Button,
    Form,
    Card,
    Col,
    Container,
    Nav,
    Navbar,
    Offcanvas,
    Row,
    Tab,
    Table,
    Modal,
    FloatingLabel
} from "react-bootstrap";
import axios from "axios";
import formtransaksi from "./formtransaksi";
import {Link} from "react-router-dom";

const Pelanggan = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [pelanggan, setpelanggan] = useState([]);
    useEffect(() => {
        axios.get("https://laundryapii.000webhostapp.com/backendlaundry/pelanggan/AllPelanggan.php" )
            .then((res) => {
                setpelanggan(res.data.Pelanggan)
            })
            .catch((error) => {
                console.log(error, 'error handle nama surah')
            })
    },)
    return (
<>
<Card>

    <Card.Header>Pelanggan</Card.Header>
    <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
            Menampilkan daftar pelanggan,tambah data,edit,dan delete


        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
           + Data Pelanggan
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Pelanggan</Modal.Title>
            </Modal.Header>
            <Modal.Body>Tambahkan Data Pelanggan
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="ID Pelanggan ">
                            <Form.Control type="text" placeholder="PL" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Nama">
                            <Form.Control type="nama" placeholder="PL" />
                        </FloatingLabel>
                    </Col>

                </Row>
                <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Telp">
                        <Form.Control type="number" placeholder="no_tlp" />
                    </FloatingLabel>
                </Col>
                    <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Jenis Kelamin">
                        <Form.Select aria-label="Floating label select example">
                            <option value="L">Laki-laki</option>
                            <option value="P">Perempuan</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col></Row>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Alamat">
                            <Form.Control type="text" placeholder="PL" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Kelurahan">
                            <Form.Control type="text" placeholder="PL" />
                        </FloatingLabel>
                    </Col></Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        <br/>
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>ID Pelanggan</th>
            <th>Nama</th>
            <th>Telp</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Kelurahan</th>
            <th>Aksi</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
            <td></td>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
            <Button variant="primary"> Delete </Button>
        </tr>
        <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </Table>
        </Card.Body>
</Card>
</>
);

}

export default Pelanggan;