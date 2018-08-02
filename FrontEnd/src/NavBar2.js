import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'
import Music from "./media/music";

    var createReactClass = require('create-react-class');
    var NavBar = createReactClass({

        handleClick1: function() {
            this.props.parentMethod("AboutUs");
        },  

        handleClick2: function(){
            this.props.parentMethod("Easy");
        },

        handleClick3: function(){
            this.props.parentMethod("Medium");
        },

        handleClick4: function(){
            this.props.parentMethod("Hard");
        },

        handleClick5: function(){
            this.props.parentMethod("HighScores");
        },

        render: function(){
            return (
            <nav className="navbar-default">
                 <ul className="">
                   <li onClick={this.handleClick1}><a href="#">About us</a></li>
                   <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Start Playing</a>
                     <ul className="dropdown-menu">
                       <li><a href="#" onClick={this.handleClick2}>Easy</a></li>
                       <li><a href="#" onClick={this.handleClick3}>Medium</a></li>
                       <li><a href="#" onClick={this.handleClick4}>Hard</a></li>
                     </ul>
                   </li>
                     <li onClick={this.handleClick5}><a href="#">HighScores</a></li>
                 </ul>
                <br/>
                <br/>
             </nav>

            );
        }
    });
export default NavBar;