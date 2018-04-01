//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    };

    console.log('Connectd to MongoDB server.');

    // client.db('TodoApp').collection('Todos').findOneAndUpdate({ 
    //     _id: new ObjectID("5ac0ac7843388f2d8ccc7e8e")
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    client.db('TodoApp').collection('Users').findOneAndUpdate({ 
        _id: new ObjectID("5ac1087ef744032b36c7351f")
    }, {
        $set:{
            name: 'Akash'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    client.close();
});