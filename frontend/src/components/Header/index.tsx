import React from 'react';
import {Category} from "../../models/models";
import "./header.scss";

type HeaderProps = {
    categories: Category[]
}

const Header = ({categories}: HeaderProps) => (
    <header className={"header"} title="Index">
        <ul>
            {categories && categories.map((category, index) => (
                <a href="#" key={index}>
                    <li>{category.title}</li>

                </a>
            ))}
        </ul>
    </header>
);

export default Header
