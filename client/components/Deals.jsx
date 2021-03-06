import React from 'react';
import axios from 'axios';


export default class Deals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        data: {
            contents: [
            {
                cities: ["Los Angeles", "San Diego"],
                dealName: "10% off at Disneyland!"
            },
            {
                cities: ["San Jose", "San Francisco"],
                dealName:  "12% off at Great America!"
            },
                {
                    cities: ["San Jose", "San Francisco"],
                    dealName:  "Free tours at Winchester Mystery House!"
                },
                {
                    cities: ["San Jose", "San Francisco"],
                    dealName:  "20% off on wine tasting!"
                },
                {
                    cities: ["Los Angeles", "San Diego"],
                    dealName: "10% off at Universal Studios!"
                },
                {
                    cities: ["Los Angeles", "San Diego"],
                    dealName: "Free trip to the Wax Museum!"
                }
        ]
        }
        }
    }
    componentDidMount() {
        console.log(data);
        console.log(this.state.data);
    }
    render() {
        return (
            <div class="deals" className="dealsPage">
            <div id='place' >
                <div id="placeContent">
                <h2>DEALS for {sessionStorage.place}</h2>
                <p>&nbsp;</p>
                {this.state.data.contents.map(function(obj){
                    if (obj.cities.includes(sessionStorage.place)) {
                        return (<p><a href="#">{obj.dealName}</a></p>);
                    }
                })}
            </div>
            </div>
            </div>
        );
    }
}
