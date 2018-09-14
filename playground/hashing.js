const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashPass = "$2a$10$5gRYoseX4APYhgtQOr6OFexha8kWCJSgd8wAy44QttubbG.fILP3q";

bcrypt.compare(password, hashPass, (err, res) => {
    console.log(res);
})

/*var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('Decoded',decoded);*/
// var message = 'test message';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'some string').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'some string').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed, dont trust');
// }