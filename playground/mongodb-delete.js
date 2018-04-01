//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    };

    console.log('Connectd to MongoDB server.');

    //delete Many
    // client.db('TodoApp').collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // client.db('TodoApp').collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // client.db('TodoApp').collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // client.db('TodoApp').collection('Users').deleteMany({name:'Akash'}).then((result) => {
    //         console.log(result);
    // });

    client.db('TodoApp').collection('Users').findOneAndDelete({ 
        _id: new ObjectID("5ac10897f744032b36c7352a")
    }).then((result) => {
        console.log(result);
    });

    client.close();
});