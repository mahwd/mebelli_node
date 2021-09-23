import React, {Component} from 'react';
import './dashboard.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-items">
                    <div className="dashboard-item" style={{backgroundImage: 'url(/images/car.jpg)'}}>
                        {/*<p>salam</p>*/}
                    </div>
                    <div className={"dashboard-item"} style={{backgroundImage: 'url(/images/fish.jpg)'}}>
                        {/*<p>aleykum</p>*/}
                    </div>
                    <div className={"dashboard-item"} style={{backgroundImage: 'url(/images/football.jpg)'}}>
                        {/*<p>aleykum</p>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
