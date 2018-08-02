import React, { Component } from 'react';
import ReactHTMLParser, { processNodes, convertNodeElement, htmlparser2 } from 'react-html-parser';
import $ from 'jquery';


var createReactClass = require('create-react-class');
var HighScores = createReactClass({

    render: function(){
        return <div onMouseEnter={this.change}>
            <h1>HighScores</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Avatar</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                </tr>
                </thead>
                <tbody>
                {this.props.userScores.map((userScore, index) => {
                    return (
                        <tr key={index}>
                            <td className="avatar" dangerouslySetInnerHTML={(() => { return {__html: userScore.imageData}})()}/>
                            <td>{userScore.name}</td>
                            <td>{userScore.score}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
    }
});
export default HighScores;
