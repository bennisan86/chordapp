import React from 'react';
import { ReactComponent as Winicon } from './../icons-01.svg';
import { ReactComponent as Looseicon } from './../icons-02.svg';

export default function Challenge(props) {
  return (
  <div>
    <div className={props.styles.challenge}>
      <p className={props.styles.challengenotes}>{props.challenge.notes}</p>
      <h1>{props.challenge.chordname}</h1>
    </div>
    <div className="iconholder">
      <Winicon
        className={props.styles.win} />
      <Looseicon
        className={props.styles.lose} />
    </div>
  </div>

);
}

