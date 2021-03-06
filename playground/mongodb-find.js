// const MongoClient = require('mongodb').MongoClient;
// Object destructuring
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost',{ 
    useNewUrlParser: true 
},(err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b8b04e59288a90f2990ad7e')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => console.log('Unable to fetch todos', err));

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count:',count);
    }, (err) => console.log('Unable to fetch todos', err));

    // client.close();
});