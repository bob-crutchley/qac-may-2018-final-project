import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Carousel from 'nuka-carousel';
import Nawid from "./images/Nawid.png";
import Liam from "./images/Liam.png";
import Daryl from "./images/Daryl.png";
import Michael from "./images/Michael.png";
import Jarad from "./images/Jarad.jpg";
import Robert from "./images/Robert.png";
import Benny from "./images/benny.png";
import Adam from "./images/Adam.png";

import Christopher from "./images/CHRIS.png";

class Team extends Component {


    render() {


        return (
            <div className="staffList">
                <Carousel>
                    <p className="center">Daryl Conway<br/><img width="250" height="250" src={Daryl} /></p>
                    <p className="center">Michael Massey<br/><img width="250" height="250" src={Michael}/></p>
                    <p className="center">Jarad Huggard<br/><img width="250" height="250" src={Jarad}/></p>
                    <p className="center">Robert Crutchley<br/><img width="250" height="250" src={Robert}/></p>
                    <p className="center">Benny Wong<br/><img width="250" height="250" src={Benny}/></p>
                    <p className="center">Adam Afzal<br/><img width="250" height="250" src={Adam}/></p>
                    <p className="center">Nawid Mujadidi<br/><img width="250" height="250" src={Nawid}/></p>
                    <p className="center">Liam Donoghue - Testing<br/><img width="250" height="250" src={Liam}/></p>
                    <p className="center">Christopher Darrall<br/><img width="250" height="250" src={Christopher}/></p>
                </Carousel>
            </div>

        )
    }
}

export default Team