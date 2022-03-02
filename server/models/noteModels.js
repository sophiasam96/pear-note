const { Pool } = require('pg');

// POSTGRES URI from ElephantSQL
const PG_URI = 'postgres://gfgmzlxy:VPAxdddPjwg_GMZNRzD_b1w640GLWQd4@castor.db.elephantsql.com/gfgmzlxy';

// CREATING POOL with PG_URI
const pool = new Pool({
  connectionString: PG_URI,
});

const queryTemplate = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}
module.exports = queryTemplate; 