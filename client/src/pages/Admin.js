import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button onClick={() => setTypeVisible(true)} variant='outline-dark' className='mt-3 p-3'>Добавить тип устройства</Button>
            <Button onClick={() => setBrandVisible(true)} variant='outline-dark' className='mt-3 p-3'>Добавить бренд</Button>
            <Button onClick={() => setDeviceVisible(true)} variant='outline-dark' className='mt-3 p-3'>Добавить новое устройство</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}></CreateType>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}></CreateDevice>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}></CreateBrand>
        </Container>
    );
}

export default Admin;