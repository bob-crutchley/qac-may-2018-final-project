import React, {Component} from 'react';
const FontAwesome = require('react-fontawesome');

class Music extends Component {

    constructor(props) {
        super(props);


        this.mediaList = [
            {
                "composer": "Benjamin Tissot",
                "composition": "Sunny",
                "link": "http://localhost:3000/song0.mp3"
            },
            {
                "composer": "Benjamin Tissot",
                "composition": "November",
                "link": "http://localhost:3000/song1.mp3"
            },
            {
                "composer": "Benjamin Tissot",
                "composition": "Love",
                "link": "http://localhost:3000/song2.mp3"
            },
            {
                "composer": "Benjamin Tissot",
                "composition": "Memories",
                "link": "http://localhost:3000/song3.mp3"
            },
            {
                "composer": "Benjamin Tissot",
                "composition": "Piano Moment",
                "link": "http://localhost:3000/song4.mp3"
            }

        ];

        this.state = {
            mediaPlayerPosition: 0,
            mediaPlayerLength: this.mediaList.length,
            mediaPlayerTitle: this.mediaList[0].composition,
            mediaPlayerComposer: this.mediaList[0].composer,
            mediaPlayerLink: (this.mediaList[0].link),
            play: false,
            mediaDuration: 0
        };

        console.log(this.state.mediaPlayerLength);



        this.audio = new Audio(this.state.mediaPlayerLink);


        this.togglePlay = this.togglePlay.bind(this);
        this.toggleNext = this.toggleNext.bind(this);
        this.togglePrev = this.togglePrev.bind(this);

        console.log(this.state);

        this.audio.pause();
        this.audio.removeEventListener("ended", null);
        this.audio = new Audio(this.state.mediaPlayerLink);
        this.audio.load();
        this.audio.play();
        this.audio.onended = () => this.toggleNext();



        }

    togglePlay(){
        this.setState({ play: !this.state.play });
        console.log(this.audio);
        this.state.play ? this.audio.play() : this.audio.pause();
    }

    toggleNext(){
        var nextSong = (this.state.mediaPlayerPosition) + 1;
        if (nextSong <= (this.state.mediaPlayerLength)-1) {
            console.log("YEUIE");
            this.setState({
                mediaPlayerPosition: nextSong,
                mediaPlayerTitle: this.mediaList[nextSong].composition,
                mediaPlayerComposer: this.mediaList[nextSong].composer,
                mediaPlayerLink: this.mediaList[nextSong].link
            },
            function () {
              console.log(this.state);
                this.audio.pause();
               // this.audio.removeEventListener("ended", null);

                this.audio = new Audio(this.state.mediaPlayerLink);
                this.audio.load();
                this.audio.play();
                this.audio.onended = () => this.toggleNext();

                //this.audio.addEventListener("ended", this.toggleNext())

            });
        }else{
                this.setState({
                    mediaPlayerPosition: 0,
                    mediaPlayerTitle: this.mediaList[0].composition,
                    mediaPlayerComposer: this.mediaList[0].composer,
                    mediaPlayerLink: this.mediaList[0].link
                },
                    function () {
                        console.log(this.state);
                        this.audio.pause();

                        this.audio = new Audio(this.state.mediaPlayerLink);
                        this.audio.load();
                        this.audio.play();
                        this.audio.onended = () => this.toggleNext();






                    });
            }


    console.log(this.state);

    }

    togglePrev() {

        var nextSong = this.state.mediaPlayerPosition - 1;
        if (nextSong >= 0) {
            console.log("YEUIE");
            this.setState({
                    mediaPlayerPosition: nextSong,
                    mediaPlayerTitle: this.mediaList[nextSong].composition,
                    mediaPlayerComposer: this.mediaList[nextSong].composer,
                    mediaPlayerLink: this.mediaList[nextSong].link
                },
                function () {
                    console.log(this.state);
                    this.audio.pause();
                    this.audio = new Audio(this.state.mediaPlayerLink);
                    this.audio.load();
                    this.audio.play();
                    this.audio.onended = () => this.toggleNext();


                });
        } else {
            this.setState({
                    mediaPlayerPosition: this.state.mediaPlayerLength-1,
                    mediaPlayerTitle: this.mediaList[this.state.mediaPlayerLength-1].composition,
                    mediaPlayerComposer: this.mediaList[this.state.mediaPlayerLength-1].composer,
                    mediaPlayerLink: this.mediaList[this.state.mediaPlayerLength-1].link
                },
                function () {
                    console.log(this.state);
                    this.audio.pause();
                    this.audio = new Audio(this.state.mediaPlayerLink);
                    this.audio.load();
                    this.audio.play();
                    this.audio.onended = () => this.toggleNext();



                });
        }

    }


    componentDidMount(){
        this.currentTimeInterval = null;
    }




    render() {
        return (
                <table className="float-none">
                    <tr>
                        <td className="mediaZone">
                            <span className="">
                    <label onClick={this.togglePrev}> <FontAwesome className="fa-backward"/></label>{'\u00A0'}
                    <label  onClick={this.togglePlay}>{this.state.play ? <FontAwesome className="fa-play"/> : <FontAwesome className="fa-pause"/>}</label>{'\u00A0'}
                    <label onClick={this.toggleNext}> <FontAwesome className="fa-forward"/></label>{'\u00A0'}
                </span>
                        </td>
                        <td className="w-75">
                            <label id="mediaTitle" className="w-75 float-right">  {this.state.mediaPlayerComposer} - {this.state.mediaPlayerTitle}</label>

                        </td>
                    </tr>


                </table>
        );
    }
}

export default Music;