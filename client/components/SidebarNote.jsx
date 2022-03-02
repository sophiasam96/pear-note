import React, { Component } from 'react';

class SidebarNote extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button>Add</button>
      </div>
      
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>TITLE</strong>
            <button>Delete</button>
          </div>
          <p>{this.props.text}</p>
          <small className='note-meta'>Last Modified {this.props.date}</small>
        </div>
      </div>

       
      </> 
    );
  }
}

export default SidebarNote;

{/* <div className="app-sidebar">
  <div className="app-sidebar-header">
    <hl>Notes</hl>
    <button>Add</button>
  </div>
  <div className="app-sidebar-notes">
    <div className="app-sidebar-note">
      <div className="sidebar-note-title">
        <strong>TITLE</strong>
        <button>Delete</button>
      </div>
    </div>
  </div>
</div> */}