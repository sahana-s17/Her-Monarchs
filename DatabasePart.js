const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'monarch_butterfly_db'
});

connection.connect();

// Insert data into the database
const data = {
    species: 'butterfly',
    location: 'New Brunswick, NY',
    date: '2022-05-01',
    sighting: true
};

const sql = 'INSERT INTO sightings SET ?';
connection.query(sql, data, (error, results, fields) => {
    if (error) throw error;
    console.log(results.affectedRows + ' row(s) inserted');
});

// Retrieve data from the database
connection.query('SELECT * FROM sightings', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

connection.end();