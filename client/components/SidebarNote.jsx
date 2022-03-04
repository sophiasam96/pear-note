import React, { Component } from 'react';

class SidebarNote extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {title, text, date, id} = this.props;
    const {deleteNote, activeNote, setActiveNote} = this.props;
  
    return (
      <div className='app-sidebar-note' onClick={() => setActiveNote(id)}>

        <div className="sidebar-note-title">
          <strong>{title && title.substr(0, 20) + '...'}</strong>
          <button onClick={() => deleteNote(id)}>➖</button>
        </div>
        
        <p>{text && text.substr(0, 20) + '...'}</p>
        <small className='note-meta'>{new Date(date).toDateString()}</small>

      </div>
  
    );
  }
}

export default SidebarNote;