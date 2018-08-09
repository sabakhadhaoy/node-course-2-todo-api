// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err){
    //         return console.log('Unable to insert to do', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'James',
    //     age: 21,
    //     location: 'Guadalupe'
    // }, (err, res) => {
    //     if (err){
    //         return console.log('Unable to insert to do', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.close();
});