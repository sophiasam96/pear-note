const path = require('path');
const express = require('express');
const app = express();
const noteController = require('./controllers/noteController');

 
const PORT = 3000; 

/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
 app.use(express.static(path.resolve(__dirname, '../client')));


// GET REQUEST - GET GET ALL NOTES
app.get('/api', noteController.getAllNotes, (req, res) => {
  return res.status(200).json(res.locals.getAllNotes);
});

// GET REQUEST - GET SPECIC NOTE
app.get('/api/:id', noteController.getNote, (req, res) => {
  return res.status(200).json(res.locals.getNote);
});

// POST REQUEST - SUBMIT NEW NOTE
app.post('/api', noteController.newNote, (req, res) => {
  return res.status(200).json(res.locals.newNote);
})

// UPDATE SPECIFIED NOTE (USING ID)
app.put('/api/:id', noteController.updateNote, (req, res) => {
  console.log('Note has been updated!')
  return res.status(200).json('Note was successfully updated!');
});

// DELETE SPECIFIED NOTE (USING ID)
app.delete('/api/:id', noteController.updateNote, (req, res) => {
  return res.status(200).json('Note was successfully deleted!');
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  console.log('caught here');
  res.status(404).send('This is not the page you\'re looking for...')
});

// Global error handling middleware
// How can we trigger this to run? 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


// LISTENER 
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app; 