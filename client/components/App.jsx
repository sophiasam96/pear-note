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
  }

  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(data => this.setState({ notes: data, activeNote : {}}))
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
    console.log('setActiveNote', id);
    fetch(`/api/${id}`)
    .then(res => res.json())
    .then(data => {
      this.state.activeNote = data
      console.log(this.state.activeNote)
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
  


  render() {
    return (
      <div className='App'>
        <Sidebar 
          notes={this.state.notes}
          setActiveNote={this.setActiveNote}
          activeNote={this.state.activeNote}
          addNote={this.addNote} 
          deleteNote={this.deleteNote} 
        />
        <Main activeNote={this.state.activeNote}/>
      </div>
    );
  }
}

export default App;
