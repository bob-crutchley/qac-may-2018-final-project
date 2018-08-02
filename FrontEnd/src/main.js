import React, { Component } from 'react';
import $ from 'jquery';
import NavBar from './NavBar2.js';
import Lesson from './Lesson.js';
import Question from './Question.js';
import HighScores from './HighScores.js';
import bee from './bee.png';
import About from './about/about';

import './App.css';

var createReactClass = require('create-react-class');
var Main = createReactClass({

    getInitialState: function(){
        return {
            showAboutUs: true,
            showLesson: false,
            showQuestion: false,
            showHighScores: false,
            getUserDetails: false,
            addHighScore: false,
            lessonList: [],
            questionsList: [],
            answersList: [],
            difficulty: null,
            index: 0,
            score: 0,
            userScores: [],
            currUser: "",
            email: ""
        }
    },

    handleState: function(newState){

        this.getQuestions(newState);
        this.getHighScores();

        if(newState == "AboutUs"){
            this.setState({
                showLesson: false,
                showQuestion: false,
                showAboutUs: true,
                addHighScore: false,
                difficulty: null,
                score: 0,
                index: 0
            })
        } else if(newState == "Easy"){
            this.setState({
                getUserDetails: true,
                showLesson: false,
                showQuestion: false,
                showAboutUs: false,
                difficulty: "Easy"
            })
        } else if(newState == "Medium"){
            this.setState({
                getUserDetails: true,
                showLesson: false,
                showQuestion: false,
                showAboutUs: false,
                difficulty: "Medium"
            })
        } else if(newState == "Hard"){
            this.setState({
                getUserDetails: true,
                showLesson: false,
                showQuestion: false,
                showAboutUs: false,
                difficulty: "Hard"
            })
        } else if(newState == "HighScores"){
            this.setState({
                showLesson: false,
                showQuestion: false,
                showAboutUs: false,
                difficulty: null,
                addHighScore: false,
                showHighScores: true,
                getUserDetails: false,
                score: 0,
                index: 0
            })
        }
    },

    lessonFinish: function(){
        this.setState({
            showLesson: false,
            showQuestion: true,
            showAboutUs: false
        })
    },

    next: function(score){
        if(this.state.index+1<this.state.questionsList.length){
            this.setState({
                index: this.state.index+1,
                showLesson: true,
                showQuestion: false,
                score: this.state.score+score
            })
        } else {
            score= score +this.state.score;
            this.setState({
                getUserDetails: false,
                showHighScores: false,
                showLesson: false,
                showQuestion: false,
                addHighScore: true,
                score: score
            });
        }

    },

    updateEmail: function(){
        this.setState({
            email: document.getElementById("email").value
        })
    },

    sendPlayer: function(){

        if(this.state.email!="" && !this.state.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
            document.getElementById("emailMessage").style.visibility = "visible";
        }else{
            this.postScore();

        }

    },

    postScore: function(){

        var userData= {"name":this.state.currUser, "score":this.state.score, "email":this.state.email};
        var self = this;
        $.ajax({
            url: "http://localhost:8182/user/save",
            type: "POST",
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(userData)

        }).then(function () {
            self.getHighScores();
            self.setState({
                getUserDetails: false,
                showHighScores: true,
                showLesson: false,
                showQuestion: false,
                addHighScore: false
            })
        });
    },

    getHighScores: function(){

        var self = this;

        $.ajax({
            url: "http://localhost:8182/user/highscores/10",
            dataType: 'json'
        }).then(function (data) {
            self.setState({
                userScores: data
            });
        });
    },

    getQuestions: function(difficulty){

        var self = this;
        var url = "";

        if(difficulty == "Easy"){
            url = "http://localhost:8182/questions/difficulty/1";
        } else if(difficulty == "Medium"){
            url = "http://localhost:8182/questions/difficulty/2";
        } else if(difficulty == "Hard"){
            url = "http://localhost:8182/questions/difficulty/3";
        }
        $.ajax({
            url: url,
            dataType: 'json'
        }).then(function (data) {
            console.log(data);
            self.setState({
                questionsList: data
            });
        });
    },


    getUserName: function(){
        document.getElementById('text').style.visibility='hidden';
        document.getElementById('first').innerHTML='HUH ' + document.getElementById('text').value +'? that\'s a nice name';

        this.setState({
            currUser: document.getElementById('text').value,
        })

        this.setState({
            showHighScores: false,
            showQuestion: false,
            showLesson: true,
            getUserDetails: false
        })
    },

    goToAbout: function(){
        this.setState({
            showAboutUs: true,
            showHighScores: false,
            showQuestion: false,
            showLesson: false,
            addHighScore: false,
            score: 0,
            index: 0
        })
    },

    renderAboutUs: function(){
        return (
            <div>
                <NavBar parentMethod={this.handleState} />
                <div className="">
                <About/>
                </div>
                <img className="bee" src={bee} alt="Logo" />
                <span className="footer"></span>

            </div>
        )
    },

    renderLesson: function(){
        console.log(this.state.questionsList[0].lesson);
        return (
            <div>

                <NavBar parentMethod={this.handleState}/>
                <div className="">
                    <Lesson parentMethod={this.lessonFinish} index={this.state.index} lessonList={this.state.questionsList} difficulty={this.state.difficulty}/>
                </div>
                <img className="bee" src={bee} alt="Logo" />
                <span className="footer"></span>

            </div>
        )
    },

    renderQuestion: function(){
        return(
            <div>

                <NavBar parentMethod={this.handleState}/>
                <div className="">
                    <Question parentMethod={this.next} index={this.state.index} questionsList={this.state.questionsList} difficulty={this.state.difficulty}/>
                </div>
                <img className="bee" src={bee} alt="Logo" />

                <span className="footer"></span>

            </div>
        )

    },

    renderGetUserDetails: function(){
        return(
            <div>

                <NavBar parentMethod={this.handleState}/>
                <div className="">
                    <div>
                        <h1>&nbsp;Guide</h1><br/>
                        <p>Hey there, you're about to get started with our exercises that are designed to teach you the basic principles of coding in small easy steps. Before each question there will be a lesson which you should pay close attention to as it may just help you in answering the question.<br/><br/> Each question is worth 10 points but for every attempt you get wrong you'll lose a point. Don't worry, the lowest you can get is 1 point for each question so there is always a point to play for. Good luck and just maybe we'll see your name on our highscores.</p>
                    </div>
                    <form>
                        <div id='first'>&nbsp; Before we start, could you tell me your name? </div><br></br>
                        <input className="textbox inline" id='text'/>
                        <button className="btn btn-success"   id='datdearbutton' onClick={this.getUserName}>Submit</button>
                    </form>
                </div>
                <img className="bee" src={bee} alt="Logo" />

                <span className="footer"></span>

            </div>
        )
    },
    renderHighScores: function(){
        return(
            <div>

                <NavBar parentMethod={this.handleState}/>
                <div className="">
                    <HighScores userScores={this.state.userScores}/>

                </div>
                <img className="bee" src={bee} alt="Logo" />

                <span className="footer"></span>

            </div>
        )
    },

    finalScoreMessage: function(){
        if(this.state.score == this.state.questionsList.length * 10){
            return <h1> Wow {this.state.currUser}, a perfect score. Your total score was {this.state.score} </h1>
        } else if(this.state.score > this.state.questionsList.length * 8){
            return <h1> You did great {this.state.currUser}. Your total score was {this.state.score} </h1>
        } else if(this.state.score > this.state.questionsList.length * 6){
            return <h1> Well done {this.state.currUser}. Your total score was {this.state.score} </h1>
        } else if(this.state.score > this.state.questionsList.length * 4){
            return <h1> Nice attempt {this.state.currUser}. Your total score was {this.state.score} </h1>
        } else if(this.state.score >= 0){
            return <h1> Unlucky {this.state.currUser}, maybe try reading the lessons more carefully. Your total score was {this.state.score} </h1>
        }
    },

    renderAskToAdd: function(){
        return(
            <div>

                <NavBar parentMethod={this.handleState}/>
                <div className="">
                    {this.finalScoreMessage()}
                    <br/><br/>
                    <span> Would you like to submit your score? Optionally, type in an email address if you would like to receive an email with your score</span><br/><br/>
                    Email: <input type="email" onChange={this.updateEmail} id="email" className="textbox inline" />&nbsp;<span id="emailMessage" className="emailMessage alert alert-danger">Email address is not valid</span>

                    <br/><br/>
                    <button type="button" onClick={this.goToAbout} className="btn btn-success">No</button>
                    <button type="button" onClick={this.sendPlayer} className="btn btn-success">Yes</button>
                </div>

                <img className="bee" src={bee} alt="Logo" />

                <span className="footer"></span>

            </div>
        )
    },

    render: function(){
        if(this.state.showAboutUs){
            return this.renderAboutUs();
        }
        else if(this.state.showLesson){
            return this.renderLesson();
        }
        else if(this.state.showQuestion){
            return this.renderQuestion();
        }
        else if(this.state.getUserDetails){
            return this.renderGetUserDetails();
        }
        else if(this.state.showHighScores){
            return this.renderHighScores();
        }
        else if(this.state.addHighScore){
            return this.renderAskToAdd();
        }
    }
});
export default Main;
