import React, { useState } from 'react'
import Header from "../../components/header";
import Nav from "../../components/navBar/NavBar";
import { Container, Row, Col } from 'react-bootstrap';
import "./pri.css";

const PrivateLayout = (props) => {
    const [active, setActive] = useState("inactive");
    const [showCart, setShowCart] = useState(true);
    const [cartOrders, setCartOrders] = useState(0);

    const searchBarProps = {
        active,
        cartOrders,
        setActive,
        setShowCart,
        showCart,
        setCartOrders
    }

    const navProps = {
        active, setActive
    }
    const { component: Component, route, title, header } = props
    const lg = active === "active"
    return (
        <Container fluid>
            <Row>
                <Header {...searchBarProps} header={header} />
            </Row>
            <Row onClick={() => { setActive("inactive") }}>
                <Col className="p-0 m-0" md={lg ? 2 : 1}>
                    <Nav {...navProps} />
                </Col>
                <Col md={lg ? 10 : 11}>
                    <h3>{title}</h3>
                    <div className="scroll-able">
                        <Component route={route} {...searchBarProps} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default PrivateLayout;
