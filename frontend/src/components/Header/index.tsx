import React from 'react';
// import {useHistory} from "react-router-dom";
import {TCategory} from "../../types/models";
import "./header.scss";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button} from "@blueprintjs/core";

type HeaderProps = {
    categories: TCategory[]
}

const Header = ({categories}: HeaderProps) => {

    // const history = useHistory()

    // function GoHome () {
    //     history.push('/')
    // }
    return (

        <Navbar bg="light" expand="lg" className={"header"}>
            <Container className="navbar-container">
                <Navbar.Brand href='/' className="me-5">Mebelli</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        {categories && categories.map((category, index) => (
                            <Nav.Link href="#" key={index}>
                                {category.title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
