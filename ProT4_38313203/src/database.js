import mysqlConnection from 'mysql2/promise';

const propeties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest-api'
};

export const pool = mysqlConnection.createPool(propeties);

