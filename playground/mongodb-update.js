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
    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b8d664809acd8022f423413')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    // client.close();
});