import React, { Component } from 'react';
import './App.css';
import Main from "./main";
import Header from "./header";
import Footer from "./footer";
import bee from "./bee.png";
import Music from "./media/music";
import './font-awesome/css/font-awesome.min.css';

class App extends Component {


    render() {

        return (
            <div className="">
                <div className="topbar">
                    <Music/>
                </div>
                <div className="">
                    <img className="bee" src={bee} alt="Cody the Bee!" />
                    <Header/>
                </div>
                <div className="container">
                    <Main/>
                </div>
                <div className="shrub"></div>


            </div>
        );
    }
}

export default App;
