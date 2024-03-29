import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryScatter, VictoryTooltip } from 'victory';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
      </div>
    );
  }
}

const data = window.data;
const keys = window.keys;

class CustomFlyout extends React.Component {
  render() {
    const {x, y, orientation} = this.props;
    const newY = orientation === "bottom" ? y - 32 : y + 32;
    return (
      <g>
        <circle cx={x} cy={newY} r="15" stroke="grey" fill="none"/>
        <circle cx={x} cy={newY} r="20" stroke="black" fill="none"/>
      </g>
    );
  }
}

class App extends React.Component {
  render() {
    const items = []
    for (var i = 0; i < 1; i = i + 1) {
      items.push(
        <div>
        <VictoryChart
          width={400}
          theme={VictoryTheme.material}
          animate={{ duration: 2000 }}
        >
          <VictoryAxis
            label={keys[i][1]}
            style={{ axisLabel: {padding: 30} }}
          />
          <VictoryAxis
            dependentAxis
            label={keys[i][2]}
            style={{ axisLabel: {padding: 30} }}
          />
          <VictoryScatter padding={{top:40, right:40, left:40, bottom: 40}}
            size={5}
            data={data[i]}
            x={keys[i][1]}
            y={keys[i][2]}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
          />
        </VictoryChart>
        </div>
      )
    }
    return items
  }
}

ReactDOM.render(<Main/>, window.react_mount);

const app = document.getElementById('chartdisp');
ReactDOM.render(<App />, app);
