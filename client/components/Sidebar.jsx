import React, { Component } from 'react';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(data => this.setState({ notes: data }))
    .catch(err => console.log(err));
  }
  
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

  render() {
    console.log(this.state.notes);
    return (
      <div>
        <p> Current notes: {this.state.notes}</p>
      </div>
    )
  }
}

export default Sidebar;