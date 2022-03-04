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
            <strong data-placeholder='Untitled'>{title && title.substr(0, 20) + '...'}</strong>
            <button onClick={() => deleteNote(id)}>➖</button>
          </div>
          <p placeholder='Note'>{text && text.substr(0, 20) + '...'}</p>
          <small className='note-meta'>{new Date(date).toDateString()}</small>

        </div>
    </>
    );
  }
}

//{new Date(date).toLocaleDateString('en-US', {hour: '2-digit', minute: '2-digit'})}
export default SidebarNote;