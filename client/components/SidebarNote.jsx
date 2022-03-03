import React, { Component } from 'react';

class SidebarNote extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {title, text, date, id} = this.props;
    const {deleteNoteButton, activeNote, setActiveNote} = this.props;
  
    return (
      <>
        <div className={`app-sidebar-note`} onClick={() => setActiveNote(id)}>
          <div className="sidebar-note-title">
            <strong>{title}</strong>
            <button onClick={() => deleteNoteButton(id)}>Delete</button>
          </div>
          <p>{text && text.substr(0, 20) + '...'}</p>
          <small className='note-meta'>Last Modified{" "} {new Date(date).toLocaleDateString('en-US', {hour: '2-digit', minute: '2-digit'})}</small>
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