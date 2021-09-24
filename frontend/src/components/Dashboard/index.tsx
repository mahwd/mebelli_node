import React, {Component} from 'react';
import Slider, {Settings} from "react-slick";
import './dashboard.scss';

class Dashboard extends Component {
    render() {
        const settings:Settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true
        };
        return (
            <div className="dashboard">
                <div className="dashboard-items">
                    <Slider {...settings}>
                        <div className={"dashboard-item"}>
                            1
                            {/*<img src="/images/car.jpg" alt="slider_image"/>*/}
                        </div>
                        <div className={"dashboard-item"} style={{backgroundImage: 'url(/imaawges/fish.jpg)'}}>
                            2
                        </div>
                        <div className={"dashboard-item"} style={{backgroundImage: 'url(/images/football.jpg)'}}>
                            3
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Dashboard;
