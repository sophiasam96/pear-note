import React, {Component} from "react";
// import { hot } from 'react-hot-loader/root';
import Sidebar from './Sidebar.jsx'
import Main from './Main.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNote : {},
    }
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.setActiveNote = this.setActiveNote(this);
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
        title: 'Untitled', 
        note: '' ,
      })
    }

    fetch('/api/', submission)
      .then(input => input.json())
      .then(input => {
        location.reload();
        console.log(input);
      })
      .catch(error => console.log(error));
  }

  deleteNote(id) {
      console.log(id)
      fetch(`/api/${id}`, { method: 'DELETE' })
        .then(() => console.log('Delete successful'));
        location.reload();
  }
  
  setActiveNote(id) {
    console.log('setActiveNote', id);
    // fetch(`/api/${id}`)
    // .then(res => {
    //   res.json()
    //   console.log(res.json)
    // })
    // .then(data => this.state = activeNote: data))
      
    // .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <Sidebar addNote={this.addNote} deleteNote={this.deleteNote} setActiveNote={this.setActiveNote}/>
        <Main />
      </div>
    );
  }
}

export default App;
