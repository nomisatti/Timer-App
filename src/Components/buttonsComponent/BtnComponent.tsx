import React from 'react';

function BtnComponent(props: any) {
    return (
        <div >
            <button
                onClick={props.startTimer}
                className="stopwatch-btn stopwatch-btn-green">  <i className="fa fa-play"></i>
            </button>
            <button
                onClick={props.pauseTimer}
                className="stopwatch-btn stopwatch-btn-yel"> <i className="fa fa-pause"></i>
            </button>
            <button
                onClick={props.resetTimer}
                className="stopwatch-btn stopwatch-btn-red"> <i className="fa fa-stop"></i>
            </button>
        </div>
    );
}

export default BtnComponent;
