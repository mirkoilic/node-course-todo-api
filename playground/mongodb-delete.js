//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Call bus station'
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => console.log(err));

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Buy presents'
    // }).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Srdjan'
    // }).then((result) => console.log('deleted many',result), (err) => console.log('error',err));

    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5bae316cd67c1642bce05a3d")
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });


    //client.close();
});