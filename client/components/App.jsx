import React, {Component} from "react";
// import { hot } from 'react-hot-loader/root';
import Sidebar from './Sidebar.jsx'
import Main from './Main.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      activeNote : [],
    }
    this.setActiveNote = this.setActiveNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.onUpdateNote = this.onUpdateNote.bind(this);
    this.saveUpdatedState = this.saveUpdatedState.bind(this);
  }

  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(data => this.setState({ notes: data}))
    
    .catch(err => console.log(err));

  }
  
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    clearInterval(this.interval);
    this.setState = (state,callback)=>{
    return;
    };
}

  setActiveNote(id) {
    // console.log('setActiveNote', id);
    const {notes} = this.state.notes; 
    fetch(`/api/${id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ activeNote: data })
      // console.log('setActive, ', this.state)
    })
    .catch(err => console.log(err));
  }


  addNote() {
     console.log('addNote');
     const newNote = {
       title: 'Untitled Note',
       note: "",
     }

     const submission = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        title: '', 
        note: '' ,
      })
    }

    fetch('/api/', submission)
      .then(input => input.json())
      .then(input => {
        const newState = { notes: [...this.state.notes, ...input]};
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  deleteNote(id) {
      console.log(id)
      fetch(`/api/${id}`, { method: 'DELETE' })
        .then(() => console.log('Delete successful'))
        .then(() => {
          this.setState({ notes: this.state.notes.filter(e => e.note_id !== id )});
        })
        .catch(error => console.log(error));
  }

  onUpdateNote(id, title, note) {
    const updatedNote = {
      title,
      note
    }
    const submission = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(updatedNote)
        }
    fetch(`/api/${id}`, submission)
      .then(input => input.json())
      .then(() => console.log('Update Successful!'))
      .then(() => {
        this.setActiveNote(id);
        this.saveUpdatedState(id, title, note);
      })
      .catch(error => console.log(error))
}

saveUpdatedState(id, title, note) {
  const newNotes = this.state.notes.map(e => {
    if (e.note_id === id) {
      if (title) {
        e.title = title;
      }
      if (note) {
        e.note = note;
      }
    }

    return e;
  });
  this.setState({ notes: newNotes });
}
  
  render() {
    // console.log('state in mount', this.state.notes)
    return (
      <div className='App'>
        <Sidebar 
          notes={this.state.notes}
          setActiveNote={this.setActiveNote}
          activeNote={this.state.activeNote}
          addNote={this.addNote} 
          deleteNote={this.deleteNote} 
          />
        <Main 
          onUpdateNote={this.onUpdateNote}
          activeNote={this.state.activeNote}
          saveUpdatedState={this.saveUpdatedState}
          />
      </div>
    );
  }
}

export default App;
    
    // console.log('in onUpdateNOte')
    // let newNote;
    // // this.state.notes.map(note => {
    //   // console.log('updated note ', updatedNote.note_id)
    //   // console.log('curr noteid ', note.note_id)
    //   // if (note.note_id === updatedNote.note_id) {
    //     newNote = {
    //       ...note,
    //       note_id : note.note_id,
    //       [key] : updatedNote.body,
    //     }
    //     console.log('newNote', newNote)
    //     this.setState({ activeNote: newNote });
    //     console.log('new activeNote', this.state)
    //   // }
    // // })