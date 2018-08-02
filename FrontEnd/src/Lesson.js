import React, { Component } from 'react';

var createReactClass = require('create-react-class');
var Lesson = createReactClass({


    // getLesson: function(){
    //     console.log(this.props.difficulty);
    //     if(this.state.difficulty == "Easy"){
    //         this.currLesson = "Easy Lesson";
    //         this.setState({
    //             lessonLoaded: 'true'
    //         });
    //     } else if(this.state.difficulty == "Medium"){
    //         this.currLesson = "Medium Lesson";
    //         this.setState({
    //             lessonLoaded: 'true'
    //         });
    //     } else if(this.state.difficulty == "Hard"){
    //         this.currLesson = "Hard Lesson";
    //         this.setState({
    //             lessonLoaded: 'true'
    //         })
    //     }
    // },

    // reset: function(){
    //     this.setState({
    //         lessonLoaded: 'false'
    //     });
    // },

    handleButtonClick: function(){
        this.props.parentMethod();
    },

    render: function(){
        return (
            <div>
                <h1>&nbsp;Lesson {this.props.index+1}</h1><br/>
                <p>{this.props.lessonList[this.props.index].lesson}</p><br/>
                <button type="button" onClick={this.handleButtonClick} className="btn btn-success">Start Question</button>
            </div>
        )
    }
});
export default Lesson;