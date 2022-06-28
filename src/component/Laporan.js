import React, {useEffect, useState} from 'react';
import {Button, Form, Card, Col, Row, Table, Modal, FloatingLabel} from "react-bootstrap";
import axios from "axios";


const Laporan = () => {
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

                <Card.Header>Transaksi</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        Menampilkan daftar Transaksi ,tambah data,edit,dan delete


                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        + Data Transaksi
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Transaksi</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Tambahkan Data Transaksi
                            <Row className="g-3" >
                                <Col md>
                                    <FloatingLabel controlId="floatingInputGrid" label="ID Transaksi">
                                        <Form.Control type="text" placeholder="PL" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingInputGrid" label="ID User">
                                        <Form.Control type="text" placeholder="PL" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingInputGrid" label="ID Pelanggan">
                                        <Form.Control type="text" placeholder="PL" />
                                    </FloatingLabel>
                                </Col>

                            </Row>
                            <Row className="g-2">
                                <Col md>
                                    <FloatingLabel controlId="floatingInputGrid" label="Tanggal Bayar">
                                        <Form.Control type="date" placeholder="tgl_byr" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingInputGrid" label="Total Harga">
                                        <Form.Control type="Text" placeholder="tgl_byr" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="g-2">
                                <Col md>
                                    <FloatingLabel controlId="floatingSelectGrid" label="Katalog">
                                        <Form.Select aria-label="Floating label select example">
                                            <option value="L">Cuci Reguler</option>
                                            <option value="P">Cuci Premium</option>
                                            <option value="L">Setrika</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingSelectGrid" label="Status">
                                        <Form.Select aria-label="Floating label select example">
                                            <option value="L">Baru</option>
                                            <option value="P">Proses</option>
                                            <option value="L">Selesai</option>
                                            <option value="L">Diambil</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingSelectGrid" label="Dibayar">
                                        <Form.Select aria-label="Floating label select example">
                                            <option value="L">Dibayar</option>
                                            <option value="P">Belum Dibayar</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
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

export default Laporan;