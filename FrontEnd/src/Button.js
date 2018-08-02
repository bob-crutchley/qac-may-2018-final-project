import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';

var createReactClass = require('create-react-class');
var Button = createReactClass({

    getInitialState: function(){
        return {
            type: this.props.type
        }
    },
    handleClick: function(){
        this.props.parentMethod(this.props.index);
    },
    render: function(){
        if(this.state.type == "Edit"){
            return <button type="button" onClick={this.handleClick} className="btn btn-primary">{this.state.type}</button>
        }
        else if(this.state.type == "Remove"){
            return <button type="button" onClick={this.handleClick} className="btn btn-danger">{this.state.type}</button>
        } else {
            return <button type="button" onClick={this.handleClick} className="btn btn-default">{this.state.type}</button>
        }
    },

});
export default Button;