import React, { Component } from 'react';
import Draggable from 'react-draggable';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Button from "./Button";
import Timer from './Timer.js';

var createReactClass = require('create-react-class');
var Question = createReactClass({

    getInitialState: function(){
        return {
            isAnswered: false,
            correct: false,
            showAnswer: false,
            score: 0,
            attempts: 0,
            correctResponse: ["Nice one!", "Good job!", "Correct!", "Well done!", "You got it right!"],
            wrongResponse: ["Unlucky, try again", "Not quite, have another go", "Nearly, have another shot"]
        }
    },

    handleClick: function(){
        this.props.parentMethod(this.state.score);
    },

    isCorrect: function(){
        var isCorrect = true;
    var answers = this.props.questionsList[this.props.index].solution;
        for (var i=0; i< answers.length;i++) {
            if (answers[i].answerPosition != "placeD"){
                if(document.getElementById(answers[i].answerPosition).innerHTML != "\u2003"+answers[i].answerCodeSnippet+"\u2003"){
                    isCorrect = false;
                    document.getElementById('wrongMessage').style.visibility = "visible";
                    this.setState({
                        attempts: this.state.attempts+1
                    })
                }
            }
        }
        if(isCorrect && this.state.attempts<10){
            this.setState({
                correct: true,
                isAnswered: true,
                score: (this.state.score+10)-this.state.attempts
            })
        } else if(isCorrect){

            this.setState({
                correct: true,
                isAnswered: true,
                score: 1
            })
        }
    },

    compareAnswer: function(){

    },

    allowDrop: function(event){
        event.preventDefault();
    },

    // allowDrop: function(event){
    //     event.preventDefault();
    // },

    drag: function(event){
        event.dataTransfer.setData("text", event.target.id);
    },

    drop: function(event) {
    event.preventDefault();
    if( "place" == event.target.className) {
        var data = event.dataTransfer.getData("text");
        event.target.innerHTML = "&emsp;"+document.getElementById(data).innerHTML+"&emsp;";
    }
    if("missing" == event.target.className){
        event.target.value = event.dataTransfer.getData("text");
    }
    },

    renderQuestion: function(){
        const html = this.props.questionsList[this.props.index].levelCode
        return (
            <div>
                <h1>&nbsp;Question {this.props.index+1}</h1><br/>
                <span>Drag the correct answer into the missing boxes</span>
                <div className="tracker">Attempts: {this.state.attempts}</div><br/>
                <div className="tracker">Your score: {this.state.score}</div>

                <div className="answers">
                    {this.props.questionsList[this.props.index].solution.map((item,i) => {
                        var idName = "drag";
                        return <span key={i} >
                            <span className="dragItem" id={idName+(i+1)} draggable="true" onDragStart={this.drag}>{ReactHtmlParser(item.answerCodeSnippet)}</span>
                                <br/><br/>
                        </span>
                    })
                    }
                </div>

                <div className="text">
                    {this.props.questionsList[this.props.index].levelCode.question.map((item,i) => {
                        var idName = "place";
                        if (i < this.props.questionsList[this.props.index].levelCode.question.length - 1) {
                            return <span key={i}>{ReactHtmlParser(item)}
                                <span id={idName+(i+1)} className="place" onDrop={this.drop} onDragOver={this.allowDrop} style={{border: "solid"}}>&emsp;</span></span>
                        } else {
                            return <span key={i}>
                            {ReactHtmlParser(item)}
                        </span>
                        }
                    })
                    }
                </div>



                <br/><br/>
                    <button type="button" onClick={this.isCorrect} className="btn btn-success submitButton">Submit</button>
                <button type="button" onClick={this.handleClick} className="btn btn-success submitButton">Skip</button>

                <span id='wrongMessage' className='wrongMessage alert alert-warning'>{this.state.wrongResponse[Math.floor(Math.random() * 3)]}</span>

            </div>
        )
    },


    renderCorrect: function(){
        return (
            <div>
                <h1>&nbsp;Question {this.props.index+1}</h1><br/>
                <span>Drag the correct answer into the missing boxes</span>
                <div className="tracker">Attempts: {this.state.attempts}</div>
                <div className="tracker">Your score: {this.state.score}</div>

                <div className="answers">
                    {this.props.questionsList[this.props.index].solution.map((item,i) => {
                        var idName = "drag";
                        return <span key={i} >
                            <span className="dragItem" id={idName+(i+1)} draggable="true" onDragStart={this.drag}>{ReactHtmlParser(item.answerCodeSnippet)}</span>
                                <br/><br/>
                        </span>
                    })
                    }
                </div>

                <div className="text">
                    {this.props.questionsList[this.props.index].levelCode.question.map((item,i) => {
                        var idName = "place";
                        if (i < this.props.questionsList[this.props.index].levelCode.question.length - 1) {
                            return <span key={i}>{ReactHtmlParser(item)}
                                <span id={idName+(i+1)} className="place" onDrop={this.drop} onDragOver={this.allowDrop} style={{border: "solid"}}>&emsp;</span></span>
                        } else {
                            return <span key={i}>
                            {ReactHtmlParser(item)}
                        </span>
                        }
                    })
                    }
                </div>

                <br></br>
                <button type="button" onClick={this.handleClick} className="btn btn-success submitButton">Next</button>
                <span className='correctMessage alert alert-success'>{this.state.correctResponse[Math.floor(Math.random() * 5)]}</span>

            </div>
        )
    },

    render: function(){
        if(!this.state.isAnswered){
            return this.renderQuestion();
        } else if(this.state.showAnswer){
            return this.renderResult()
        } else if(this.state.correct){
            return this.renderCorrect();
        }
    }
});
export default Question;