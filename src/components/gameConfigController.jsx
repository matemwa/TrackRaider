import React from 'react';
import Config from './config';
import MainButtons from './mainButtons';

const GameConfigController = props => {
    const { bikes, obstacles, tracks, modules, oponentModules } = props.initialButtons;
    const { bike, track } = props.gameConfig;
    const { disableBike, disableModule, disableTrack, disableObstacle, disableOponentModule } = props.disableButtons;
    const { addConfig, addProperties, onReset, startButtonEnable, startRace } = props;

    return (
        <React.Fragment>
            <MainButtons onReset={onReset} startButtonEnable={startButtonEnable} startRace={startRace} />
            <div className="row font-weight-bold">
                WYBIERZ Z PONIŻSZYCH OPCJI:
            </div>
            <Config name="bike" datas={bikes} addConfig={addConfig} buttonColor="info" disabled={disableBike} />
            {bike && <Config name="module" datas={modules} addConfig={addProperties} buttonColor="success" disabled={disableModule} />}
            <Config name="track" datas={tracks} addConfig={addConfig} buttonColor="primary" disabled={disableTrack} />
            {track && <Config name="obstacle" datas={obstacles} addConfig={addProperties} buttonColor="warning" disabled={disableObstacle} />}
            <Config name="oponentModule" datas={oponentModules} addConfig={addProperties} buttonColor="danger" disabled={disableOponentModule} />
        </React.Fragment>
    );
}

export default GameConfigController;