import React from 'react';
import GameConfigViewer from './components/gameConfigViewer';
import GameConfigController from './components/gameConfigController';
import { countObstacles, countBikeModules } from './components/utils/couters';
import { disablePropertiesButton, disableConfigButton } from './components/utils/buttonDisabler';
import { initialize } from './logic/index';

const INITIAL_STATE = {
  initialButtons: {
    bikes: ['Raider', 'Speedster', 'Tank'],
    modules: ['Jump', 'Speed'],
    obstacles: ['Curve', 'Ditch'],
    tracks: ['Track1', 'Track2'],
    oponentModules: ['Jump', 'Speed'],
  },

  gameConfig: {
    bike: "",
    track: "",
    obstacle: [],
    module: [],
    oponentModule: [],

  },

  disableButtons: {
    disableBike: false,
    disableObstacle: false,
    disableTrack: false,
    disableModule: false,
    disableOponentModule: false,
  },

  raceResult: "",
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  addConfig = ({ currentTarget: input }) => {
    const gameConfig = { ...this.state.gameConfig };
    const buttons = { ...this.state.disableButtons }
    const { name, value } = input;
    gameConfig[name] = [...gameConfig[name]];

    const disableButtons = disableConfigButton(name, buttons)
    gameConfig[name] = value
    this.setState({ gameConfig, disableButtons });
  }

  addProperties = ({ currentTarget: input }) => {
    const gameConfig = { ...this.state.gameConfig };
    const buttons = { ...this.state.disableButtons }
    const { name, value } = input;
    gameConfig[name] = [...gameConfig[name]];

    switch (name) {
      case "module":
        const modules = countBikeModules(gameConfig);
        gameConfig[name].push(value);

        if (gameConfig.module.length <= modules - 1) {
          this.setState({ gameConfig });
        } else {
          const disableButtons = disablePropertiesButton(name, buttons);
          this.setState({ gameConfig, disableButtons })
        }
        break;
      case "obstacle":
        const obstacles = countObstacles(gameConfig);
        gameConfig[name].push(value);

        if (gameConfig.track === "Track1") {
          if (gameConfig.obstacle.length <= obstacles - 1) {
            this.setState({ gameConfig });
          } else {
            const disableButtons = disablePropertiesButton(name, this.state.disableButtons);
            this.setState({ gameConfig, disableButtons })
          }
        }
        else if (gameConfig.track === "Track2") {
          const upperObstacleLimit = obstacles[1];
          if (gameConfig.obstacle.length <= upperObstacleLimit - 1) {
            this.setState({ gameConfig });
          } else {
            const disableButtons = disablePropertiesButton(name, this.state.disableButtons);
            this.setState({ gameConfig, disableButtons })
          }
        }
        break;
      case "oponentModule":
        gameConfig[name].push(value);
        const oponentModuleUpperLimit = 5;
        if (gameConfig.oponentModule.length <= oponentModuleUpperLimit - 1) {
          this.setState({ gameConfig });
        } else {
          const disableButtons = disablePropertiesButton(name, this.state.disableButtons);
          this.setState({ gameConfig, disableButtons })
        }
        break;
      default: break;
    }
  }

  startIsEnabled = () => {
    const { bike, track, obstacle } = this.state.gameConfig;
    if (bike !== "" && track !== "") {
      if (track === "Track1" || (track === "Track2" && obstacle.length >= 5))
        return false
    }
    return true;
  }

  startRace = () => {
    const raceResultDisplay = initialize(this.state.gameConfig)
    this.setState({ raceResult: raceResultDisplay })
  }

  render() {
    const { initialButtons, gameConfig, disableButtons, raceResult } = this.state;
    return (
      <div className="container">
        <h2 className="text-center text-uppercase m-2 font-weight-bold">Roman Głowica SuperStar track Simulator</h2>
        {raceResult && <h3 className="text-center text-uppercase m-4 text-info">{raceResult}</h3>}
        <div className="row">
          <div className="col-6">
            <GameConfigViewer gameConfig={this.state.gameConfig} />
          </div>
          <div className="col-6">
            <GameConfigController
              startRace={this.startRace}
              startButtonEnable={this.startIsEnabled}
              onReset={this.handleReset}
              initialButtons={initialButtons}
              gameConfig={gameConfig}
              disableButtons={disableButtons}
              addConfig={this.addConfig}
              addProperties={this.addProperties} />
          </div>
        </div>
      </div >
    );
  }
}

export default App;