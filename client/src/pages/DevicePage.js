import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/star.png'
import {useParams} from 'react-router-dom';
import {fetchOneDevice} from "../http/deviceAPI";


const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className='mt-5'>
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}></Image>
            </Col>
            <Col md={4}>
                <Row className='d-flex flex-column'>
                    <h2>{device.name}</h2>
                    <div style={{fontSize:32}} className='d-flex align-items-center'>
                        Рейтинг устройства:{device.rating}
                        <Image width={25} height={25} src={star}></Image>
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card className='d-flex flex-column align-items-center justify-content-around'
                style={{width:300, height:300, fontSize:32}}>
                    <h3>Цена: {device.price} руб.</h3>
                    <Button variant='outline-success'>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;