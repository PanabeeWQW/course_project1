import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBrand } from '../../http/deviceAPI';
import { useState } from 'react';


const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({ name: value }).then(data => {
      setValue('');
      onHide();
    });
  };

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить новый бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Введите название бренда'} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addBrand} variant='outline-primary'>
            Добавить
          </Button>
          <Button onClick={onHide} variant='outline-danger'>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateBrand;