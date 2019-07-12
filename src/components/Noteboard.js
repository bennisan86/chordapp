import React from 'react';
import Note from './Note';


class Noteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          buttoncount: 0,
          clean: false
        };
    }

    render() {
        const allnotes = this.props.notes;
        const listItems = allnotes.map((note) =>
            <Note
                value={note.value}
                key={note.id}
                note={note}
                onClick={() => this.props.onClick(note)}
                styling={note.styling}
                >{note}</Note>
            );
        return (
          <div>
            <div className={this.props.styles.noteboard}>{listItems}
            </div>
          </div>
          );
        }
    }

export default Noteboard;


