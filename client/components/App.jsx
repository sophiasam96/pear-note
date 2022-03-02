
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Heyo {name}
        </h1>
      </>
    );
  }
}

export default App;
