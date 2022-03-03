import React, { Component } from 'react';
import { NavigationType } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    this.state = { 
      
    }
  }

//   componentDidMount() {
//     fetch('/api')
//     .then(res => res.json())
//     .then(data => this.setState({ notes: data }))
//     .catch(err => console.log(err));
//   }
  
//   componentWillUnmount() {
//     // fix Warning: Can't perform a React state update on an unmounted component
//     this.setState = (state,callback)=>{
//         return;
//     };
// }

  render() {
   
    return (
     <div className='app-main'>
       <h1>Main</h1>

       <div className='app-main-note-edit'> 
    
        <input type='text' id='title' autoFocus></input>

        <textarea id='body' placeholder='Write Note Here! :)'/>

       </div>

       <div className='app-main-note-preview'>
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">Preview</div>

       </div>

     </div>
       )
  }
}

export default Main;