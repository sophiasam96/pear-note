import React, { Component } from 'react';

class SidebarNote extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {title, text, date, id} = this.props;
    const {deleteNote, activeNote, setActiveNote} = this.props;
  
    return (
    <>
        <div className='app-sidebar-note' onClick={() => setActiveNote(id)}>

          <div className="sidebar-note-title">
            <strong>{title}</strong>
            <button onClick={() => deleteNote(id)}>Delete</button>
          </div>
          <p>{text && text.substr(0, 20) + '...'}</p>
          <small className='note-meta'>Last Modified{" "} {new Date(date).toLocaleDateString('en-US', {hour: '2-digit', minute: '2-digit'})}</small>

        </div>
    </>
    );
  }
}

export default SidebarNote;