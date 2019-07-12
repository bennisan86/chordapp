import React from 'react';
import './Game.css';
import './Game.sass';
import Challenge from './components/Challenge';
import Noteboard from './components/Noteboard';


var allchords = [{
    chordname: 'Emaj7',
    notes: ['E','Ab','B','Eb']
},{
    chordname: 'Emin7',
    notes: ['E','G','B','D']
},{
    chordname: 'E7',
    notes: ['E','Ab','B','D']
},{
    chordname: 'Fmaj7',
    notes: ['F','A','C','E']
},{
    chordname: 'Fmin7',
    notes: ['F','Ab','C','Eb']
},{
    chordname: 'F7',
    notes: ['F','A','C','Eb']
},{
    chordname: 'Gmaj7',
    notes: ['G','B','D','F#']
},{
    chordname: 'Gmin7',
    notes: ['G','Bb','D','F']
},{
    chordname: 'G7',
    notes: ['G','B','D','F']
},{
    chordname: 'Abmaj7',
    notes: ['Ab','C','Eb','G']
},{
    chordname: 'Abmin7',
    notes: ['Ab','B','Eb','F#'],
},{
    chordname: 'Ab7',
    notes: ['Ab','C','Eb','F#']
},{
    chordname: 'Amaj7',
    notes: ['A','Db','E','Ab']
},{
    chordname: 'Amin7',
    notes: ['A','C','E','G']
},{
    chordname: 'A7',
    notes: ['A','Db','E','G']
},{
    chordname: 'Bbmaj7',
    notes: ['Bb','D','F','A']
},{
    chordname: 'Bbmin7',
    notes: ['Bb','Db','F','Ab']
},{
    chordname: 'Bb7',
    notes: ['Bb','D','F','Ab']
},{
    chordname: 'Bmaj7',
    notes: ['B','Eb','F#','G']
},{
    chordname: 'Bmin7',
    notes: ['B','D','F#','A']
},{
    chordname: 'B7',
    notes: ['B','Eb','F#','A']
},{
    chordname: 'Cmaj7',
    notes: ['C','E','G','B']
},{
    chordname: 'Cmin7',
    notes: ['C','Eb','G','Bb']
},{
    chordname: 'C7',
    notes: ['C','E','G','Bb']
},{
    chordname: 'Dbmaj7',
    notes: ['Db','F','Ab','C']
},{
    chordname: 'Dbmin7',
    notes: ['Db','E','Ab','B']
},{
    chordname: 'Db7',
    notes: ['Db','F','Ab','B']
},{
    chordname: 'Dmaj7',
    notes: ['D','F#','A','C']
},{
    chordname: 'Dmin7',
    notes: ['D','F','A','C']
},{
    chordname: 'D7',
    notes: ['D','F#','A','C']
},{
    chordname: 'Ebmaj7',
    notes: ['Eb','G','Bb','D']
},{
    chordname: 'Ebmin7',
    notes: ['Eb','F#','Bb','Db']
},{
    chordname: 'Eb7',
    notes: ['Eb','G','Bb','Db']
}];

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chords: allchords,
            notes: [
                {
                    id:1,
                    value:'E',
                    styling:'noteboardbtn'
                },{
                    id:2,
                    value:'F',
                    styling:'noteboardbtn'
                },{
                    id:3,
                    value:'F#',
                    styling:'noteboardbtn'
                },{
                    id:4,
                    value:'G',
                    styling:'noteboardbtn'
                },{
                    id:5,
                    value:'Ab',
                    styling:'noteboardbtn'
                },{
                    id:6,
                    value:'A',
                    styling:'noteboardbtn'
                },{
                    id:7,
                    value:'Bb',
                    styling:'noteboardbtn'
                },{
                    id:8,
                    value:'B',
                    styling:'noteboardbtn'
                },{
                    id:9,
                    value:'C',
                    styling:'noteboardbtn'
                },{
                    id:10,
                    value:'Db',
                    styling:'noteboardbtn'
                },{
                    id:11,
                    value:'D',
                    styling:'noteboardbtn'
                },{
                    id:12,
                    value:'Eb',
                    styling:'noteboardbtn'
                },
            ],
            allclickednotes: [],
            challenge: {
                chordname: '',
                notes: ''
            },
            score: 0,
            styles: {
                challenge: '',
                challengenotes: 'gone',
                total: 'total',
                noteboard: 'noteboard',
                win: '',
                lose: ''
            }
        }
    }
    

    containsAllNotes(_arr1,_arr2){
        if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
        return false;
    
        var arr1 = _arr1.concat().sort();
        var arr2 = _arr2.concat().sort();
    
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i])
                return false;
        }
        return true;
    }

    componentDidMount(){
        this.newChallenge();
    }
    componentDidUpdate(_prevProps, prevState){
        if (prevState.allclickednotes !== this.state.allclickednotes) {
        this.countUp();
        }
    }

    newChallenge(){
        const newchallenge = this.state.chords[Math.floor(Math.random() * 34)];
        const notesClear = [
            {
                id:1,
                value:'E',
                styling:'noteboardbtn'
            },{
                id:2,
                value:'F',
                styling:'noteboardbtn'
            },{
                id:3,
                value:'F#',
                styling:'noteboardbtn'
            },{
                id:4,
                value:'G',
                styling:'noteboardbtn'
            },{
                id:5,
                value:'Ab',
                styling:'noteboardbtn'
            },{
                id:6,
                value:'A',
                styling:'noteboardbtn'
            },{
                id:7,
                value:'Bb',
                styling:'noteboardbtn'
            },{
                id:8,
                value:'B',
                styling:'noteboardbtn'
            },{
                id:9,
                value:'C',
                styling:'noteboardbtn'
            },{
                id:10,
                value:'Db',
                styling:'noteboardbtn'
            },{
                id:11,
                value:'D',
                styling:'noteboardbtn'
            },{
                id:12,
                value:'Eb',
                styling:'noteboardbtn'
            },
        ];
        this.setState({
            notes: notesClear,
            challenge: newchallenge,
            allclickednotes: [],
            styles: {
                challenge: 'challenge',
                challengenotes: 'gone',
                total: 'total',
                noteboard: 'noteboard',
                win: 'hide',
                lose: 'hide'
            }
        });
    }

    handleClick(note) {
        let allclickednotes = this.state.allclickednotes;
        let notesCopy = this.state.notes.slice();
        const ding =  this.state.notes.indexOf(note);
        notesCopy[ding].styling = "noteboardbtn toggled";
        var clickednote = note.value;
        this.setState({
            allclickednotes: allclickednotes.concat(clickednote),
            notes: notesCopy 
        });

    }

    countUp(){
        let chordnotes = this.state.challenge.notes;
        let notecount = this.state.challenge.notes.length - 1;
        let allclickednotes = this.state.allclickednotes;
        if(allclickednotes.length > notecount){
            if(this.containsAllNotes(allclickednotes,chordnotes)){
                this.winner();
            } else {
                this.loser();
            };
            };
    }

    winner(){
        console.log("I'm a winner!");
        setTimeout(function() {
            this.newChallenge()
        }.bind(this), 2000);
        this.setState({
            styles: {
                challenge: 'challenge',
                challengenotes: 'gone',
                total: 'total winbg',
                noteboard: 'noteboard winnoteboard',
                win: 'icon',
                lose: 'gone'
            }
        });
    }

    loser(){
        console.log("I'm a loser!");
        setTimeout(function() {
            this.newChallenge()
        }.bind(this), 2000);
        this.setState({
            styles: {
                challenge: 'challenge',
                challengenotes: 'show',
                total: 'total',
                noteboard: 'noteboard',
                win: 'gone',
                lose: 'icon'
            }
        });
    }

    render() {
        return (
        <div className={this.state.styles.total}>
                <Challenge
                    challenge={this.state.challenge}
                    styles={this.state.styles}
                    />
                <Noteboard
                    notes={this.state.notes}
                    onClick={(note) => this.handleClick(note)}
                    styles={this.state.styles}
                    />
            </div>
            );
    }
}

export default Game;
