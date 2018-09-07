const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = "5b92a15ddaa0491ec5c4c75a111";

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

// Todo.findById(id).then((todo) => console.log('Todo by id', todo));

var userId = "5b8ebfd5431cb116c110f844";

User.findById(userId).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User by id', user);
},(e) => console.log(e));