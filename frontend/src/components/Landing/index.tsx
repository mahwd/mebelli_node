import React, {Component, SyntheticEvent} from 'react';
import Slider, {Settings} from "react-slick";
import {Button, Position, Toaster} from "@blueprintjs/core";
import './landing.scss';
import car from "../../assets/images/car.jpg";


class Landing extends Component {
    render() {
        const settings: Settings = {
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: false
        };

        const handleClick = (e: SyntheticEvent) => {
            e.preventDefault()

            alert("DONE")
        }
        return (
            <div className="landing">
                <div className="container">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="slider-item">
                                <div className="slider-item-image" style={{backgroundImage: `url(${car})`}}>
                                    <p className="slider-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, distinctio dolorem expedita </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
