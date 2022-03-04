import React, { Component } from 'react';
import SidebarNote from './SidebarNote.jsx'


class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {setActiveNote, addNote, deleteNote} = this.props;
    const notesList = []
    this.props.notes.map(note => {
      notesList.push(<SidebarNote 
        key={`n${note.note_id}`}
        title={note.title}
        text={note.note}
        date={note.date}
        id={note.note_id}
        setActiveNote={setActiveNote}
        deleteNote={deleteNote}
        activeNote={this.props.activeNote}
      />)
    })

    return (
      <div className="app-sidebar">
        
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button type='button' onClick={() => addNote()}>➕</button>
        </div>

        <div className='app-sidebar-notes'>
          {notesList}
        </div>

      </div>
      
    )
  }
}

export default Sidebar;
