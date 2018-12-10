const client = require('../db-client'); 

client.query(`
  DROP TABLE IF EXISTS rating;
  DROP TABLE IF EXISTS islands;
`)
  .then(
    () => console.log('drop tables complete'), 
    err => console.log(err)
  )
  .then(() => {
    client.end(); 
  }); 