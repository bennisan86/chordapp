import React from 'react';


export default function Note(props) {
    return (
        <div
            className={props.styling}
            onClick={(i) => props.onClick(i)}
            value={props.value}
            >
            {props.value}
        </div>
  );
  }
  


