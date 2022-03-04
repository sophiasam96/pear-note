import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);

    this.onEditField = this.onEditField.bind(this);
    this.onEditTitle = this.onEditTitle.bind(this);
    this.onEditNote = this.onEditNote.bind(this);

    this.newNote = '';
    this.newTitle = '';
    this.activeId;
  }

  onEditField(activeId, key, val) {
    // console.log('in onEditField')
    // this.props.onUpdateNote(
    //   {
    //     note_id: activeId,
    //     body : val,
    //   }, key)
  }

  onEditTitle(id, title) {
    this.activeId = id;
    this.newTitle = title;

    this.props.saveUpdatedState(id, title, undefined);
  }

  onEditNote(id, note) {
    this.activeId = id;
    this.newNote = note;

    this.props.saveUpdatedState(id, undefined, note);
  }

  render() {
    const {activeNote} = this.props;
    return (
     <div className='app-main'>

       <div className='app-main-note-edit'> 
       <button type='button' class='padding-bottom' onClick={() => this.props.onUpdateNote(this.activeId, this.newTitle, this.newNote)}>💾</button>
        {activeNote.map(active => 
          <input 
            class='title textinput'
            key={`inputTitle ${active.note_id}`}
            type='text' 
            id='title' 
            placeholder='Title'
            defaultValue={active.title}
            // onChange={(e) => this.onEditField(active.note_id, 'title', e.target.value)} 
            onChange={(e) => this.onEditTitle(active.note_id, e.target.value)} 
            autoFocus 
          />
        )}
        
        {activeNote.map(active => 
          <textarea
            class='textinput'
            key={`inputNote ${active.note_id}`}
            id='body' 
            placeholder='New Note Here :)'
            defaultValue={active.note}
            onChange={(e) => this.onEditNote(active.note_id, e.target.value)} 
          />
        )}
        

       </div>

        {/* <div className='app-main-note-preview'>
          {activeNote.map(active => 
          <h1 key={`activeTitle${active.note_id}`} className="preview-title" placeholder="Title">{active.title}</h1>
          )}
          

          {activeNote.map(active => 
          <div key={`activeNote${active.note_id}`} className="markdown-preview" placeholder="Preview">{active.note}</div> 
          )}
        
          </div> */}
        </div>
        )
      }
    }
    
    export default Main;
    