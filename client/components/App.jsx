import React, {Component} from "react";
// import { hot } from 'react-hot-loader/root';
import Sidebar from './Sidebar.jsx'
import Main from './Main.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className='App'>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
