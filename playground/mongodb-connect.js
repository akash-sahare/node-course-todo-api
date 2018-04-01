//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    };

    console.log('Connectd to MongoDB server.');

    // client.db('TodoApp').collection('Users').insertOne({
    //     name: 'Akash',
    //     age: 23,
    //     location:'Mumbai'
    // },(err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // }); 

    client.close();
});