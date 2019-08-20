import React from 'react';

const MainButtons = props => {
    const { onReset, startButtonEnable, startRace } = props;
    return (
        <div className="row">
            <div className="col-6 text-center font-weight-bold">
                <button className="btn btn-primary m-2" disabled={startButtonEnable()} onClick={startRace}>START RACE</button>
            </div>
            <div className="col-6 text-center font-weight-bold">
                <button className="btn btn-danger m-2" onClick={onReset}>RESET CONFIG</button>
            </div>
        </div>);
}

export default MainButtons;