import React, { Component } from 'react';
import { NavigationType } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  onEditField(key, val) {

  }

  render() {
    return (
     <div className='app-main'>
       <h1 className='app-main-header'>Main</h1>

       <div className='app-main-note-edit'> 

        {this.props.activeNote.map(active => 
          <input 
            key={`inputTitle ${active.note_id}`}
            type='text' 
            id='title' 
            value={active.title}
            onChange={(e) => e.target.value} 
            autoFocus 
          />
        )}

        {this.props.activeNote.map(active => 
          <textarea 
            key={`inputNote ${active.note_id}`}
            id='body' 
            placeholder='Write Note Here! :)'
            value={active.note}
            onChange={(e) => e.target.value}
          />
        )}
        
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
    