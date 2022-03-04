const db = require('../models/noteModels');

const noteController = {

  async getAllNotes (req, res, next) {
    try {
      const notesQuery = 'SELECT * FROM notes';
      const result = await db.query(notesQuery)
      res.locals.getAllNotes = result.rows;
      return next();
    } catch (err) {
        console.error(err.message)
    }
  },

  async getNote (req, res, next) {
    try {
      const { id } = req.params;
      const noteQuery = 'SELECT * FROM notes WHERE note_id = $1';
      const result = await db.query(noteQuery, [id]);
      res.locals.getNote = result.rows;
      return next();
    } catch (err) {
        console.err(err.message);
    } 
  },
  
  async newNote (req, res, next) {
    try {
      const {title, note} = req.body;
      const notesQuery = 'INSERT INTO notes (title, note) VALUES ($1, $2) RETURNING *'
      const result = await db.query(notesQuery, [title, note]); 
      res.locals.newNote = result.rows;
      return next(); 
    } catch (err) {
        console.error(err.message);
    }
    },

    async updateNote (req, res, next) {
      try {
        const { id } = req.params;
        const { title , note } = req.body;

        if (title || note) {
          const titleBit = title ? `title = '${title}'` : '';
          const notesBit = note ? `note = '${note}'` : '';
          const comma = title && note ? ',' : '';
          const notesQuery = `UPDATE notes SET ${titleBit}${comma} ${notesBit} WHERE note_id = ${id}`;

          const result = await db.query(notesQuery); 
          return next();
        }
      } catch (err) {
          console.error(err.message);
      }
    },

    async deleteNote (req, res, next) {
      try {
        const { id } = req.params;

        const notesQuery = 'DELETE FROM notes WHERE note_id = $1';
        const result = await db.query(notesQuery, [id]); 
        return next();

      } catch (err) {
          console.error(err.message);
      }
    },
  

};  

module.exports = noteController; 