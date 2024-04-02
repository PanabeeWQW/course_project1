import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href={SHOP_ROUTE}>MobileHUB</Navbar.Brand>
          {user.isAuth ?
          <Nav className="ml-auto justify-content-end">
            <Button variant="success mx-1" onClick={() => logOut()}>Выйти</Button>
            <Button variant="danger mx-1" onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
          </Nav>
          :
          <Nav className="ml-auto justify-content-end">
            <Button variant="success mx-2" onClick={() => history.push(LOGIN_ROUTE)}>Авторицазия</Button>
        </Nav>
        }
        </Container>
      </Navbar>
    );
});
export default NavBar;