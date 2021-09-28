import React from 'react';
import {Category} from "../../models/models";
import "./header.scss";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button} from "@blueprintjs/core";

type HeaderProps = {
    categories: Category[]
}

const Header = ({categories}: HeaderProps) => (

    <Navbar bg="light" expand="lg">
        <Container className="navbar-container">
            <Navbar.Brand href="/" className="me-5">Mebelli</Navbar.Brand>
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

    /*<Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Mebelli</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav me-auto">
                    {categories && categories.map((category, index) => (
                        <Nav.Link href="#" key={index} className={"nav-link"}>{category.title}</Nav.Link>
                    ))}

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>*/

    /*<Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Mebelli</Navbar.Heading>
            <Navbar.Divider/>
            {categories && categories.map((category, index) => (
                <Button minimal={true} className="bp3-minimal" text={category.title} key={index} />
            ))}
        </Navbar.Group>
    </Navbar>*/

)

export default Header
