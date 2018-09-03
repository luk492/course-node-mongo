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
    
    db.collection('Todos').deleteMany({
        text: 'Eat lunch'
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});