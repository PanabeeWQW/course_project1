import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const App = observer((props) => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setTimeout( () => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        },  )
    }, [])
    if (loading) {
        return <Spinner animation={"border"} variant="primary" />
    }



    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;