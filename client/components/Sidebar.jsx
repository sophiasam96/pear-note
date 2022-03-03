import React, { Component } from 'react';
import { NavigationType } from 'react-router-dom';
import SidebarNote from './SidebarNote.jsx'

// window.location.reload(true);

class Sidebar extends Component {
  constructor(props) {
    super(props);
    // this.state = { 
    //   notes: [],
     
    // }
  }

//   componentDidMount() {
//     fetch('/api')
//     .then(res => res.json())
//     .then(data => this.setState({ notes: data }))
//     .catch(err => console.log(err));

//   }
  
//   componentWillUnmount() {
//     // fix Warning: Can't perform a React state update on an unmounted component
//     clearInterval(this.interval);
//     this.setState = (state,callback)=>{
//     return;
//     };
// }

  render() {
    const {setActiveNote, addNote, deleteNote} = this.props;
    // console.log(this.props.activeNote);
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
    // const sortedNotes = notesList.sort((a, b) => b.this.state.date - a.this.state.notes.date);

    return (
      <>
        <div className="app-sidebar">

          <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button type='button' onClick={() => addNote()}>Add</button>
          
          </div>

          <div className='app-sidebar-notes'>
            {notesList}
          </div>


        </div>
      </>
    )
  }
}

export default Sidebar;
