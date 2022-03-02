import React, { Component } from 'react';
import { NavigationType } from 'react-router-dom';
import SidebarNote from './SidebarNote.jsx'

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
    // console.log(this.state.notes)
    const notesList = [];
    this.state.notes.map(note => {
      notesList.push(<SidebarNote 
        key={note.note_id}
        text={note.note}
        date={note.date}
      />)
    })
      console.log('notesList ', notesList);
    return (
     <div className='app-sidebar'>
       {notesList}
       </div>
       )
  }
}

export default Sidebar;
