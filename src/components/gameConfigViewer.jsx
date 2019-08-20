import React from 'react';
import SingleParameter from './viewComponents/singleParameter';
import MultiParameter from './viewComponents/multiParameter';

const GameConfigViewer = props => {
    const { bike, track, module, obstacle, oponentModule } = props.gameConfig;

    return (
        <React.Fragment>
            <div className="row font-weight-bold m-3">
                WYBRANA KONFIGURACJA:
            </div>
            <ul className="list-group">
                <SingleParameter label="Bike:" parameter={bike} color="info" />
                <MultiParameter label="BikeModules:" parameters={module} color="success" />
                <SingleParameter label="Track:" parameter={track} color="primary" />
                <MultiParameter label="Track Obstacles:" parameters={obstacle} color="warning" />
                <MultiParameter label="Oponent Modules:" parameters={oponentModule} color="danger" />
            </ul>
        </React.Fragment>
    );
}

export default GameConfigViewer;