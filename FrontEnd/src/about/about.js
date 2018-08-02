import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Team from './team'
class About extends Component{


    render(){
        return(
            <div>
                <h2>
                    About the Game
                </h2>
                <p>
                    The EZLearn educational game is a simple drag and drop game
                    that aims to teach children the basics of software development
                    by providing them with simple code snippets and allows them to
                    complete the code, This allows them to learn real code and logic
                    as opposed to trying to hide real programming languages.
                    <br/><br/>
                   
                </p>
                <h2>
                    Meet the Team
                </h2>
                <Team/>
                <label> <a href="www.bensound.com">Royalty Free Music from Bensound</a></label>
            </div>

        )
    }


}

export default About;
