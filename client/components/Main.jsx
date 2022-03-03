import React, { Component } from 'react';
import { NavigationType } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('in main ', this.props.activeNote[0])
    this.props.activeNote
    return (
     <div className='app-main'>
       <h1>Main</h1>

       <div className='app-main-note-edit'> 
    
        <input type='text' id='title' autoFocus></input>

        <textarea id='body' placeholder='Write Note Here! :)'/>

       </div>

        <div className='app-main-note-preview'>
          {this.props.activeNote.map(active => 
          <h1 key={`activeTitle${active.note_id}`} className="preview-title" placeholder="Title">{active.title}</h1>
          )}
          

          {this.props.activeNote.map(active => 
          <div key={`activeNote${active.note_id}`} className="markdown-preview" placeholder="Preview">{active.note}</div> 
          )}
        
          </div>
        </div>
        )
      }
    }
    
    export default Main;
    