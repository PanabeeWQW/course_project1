import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {login, registration} from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async( ) => {
        try{
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height:window.innerHeight - 54}}
        >
            <Card style={{width:600}} className='p-4'>
                <h2 className='m-auto'>{isLogin ? 'Авторицазия':'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                    className='mt-3'
                    placeholder='Введите email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                    className='mt-3'
                    placeholder='Введите пароль'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <Row className='mt-3 d-flex justify-content-between pl-3'>
                        {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                        </div>
                    }
                    </Row>
                    <Button onClick={click} className='align-self-end' variant='outline-success'>
                        {isLogin ? 'Войти' : 'Регистарция'}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;