// {
// 	id: 'uuid',
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

const random = require('randomstring');
var id = 1;

function newDBElement() {
    return {
        id: id++,
        first_name: random.generate({ length: 15 }),
        last_name: random.generate({ length: 15 }),
        email: random.generate({ length: 15 }) + '@gmail.com',
        password: random.generate({ length: 15 }),
        birthday: '2002/04/24'
    };
}

const database = [];

for (let i = 0; i < 15; i++)
    database.push(newDBElement());

function getAllUsers() {
    return database;
}

function getUserById(id) {
    return database.find(user => user.id == id);
}

function addNewUser(first_name, last_name, email, password, birthday) {
    return database.push({ id: id++, first_name, last_name, email, password, birthday });
}

function deleteUserById(id) {
    delete database[id];
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    deleteUserById
};