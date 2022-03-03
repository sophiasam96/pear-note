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
        <h1 className="preview-title" placeholder="Title">{this.props.activeNote.title}</h1>
        <div className="markdown-preview "placeholder="Preview"></div>

       </div>

     </div>
       )
  }
}

export default Main;