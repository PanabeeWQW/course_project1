import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
            <Card
            style={{cursor:'pointer'}}
            key={brand.id}
            className="p-3 mx-1"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'primary' : 'Secondary'}
        >
            {brand.name}
        </Card>
        
            )}
        </Row>
    );
});

export default BrandBar;