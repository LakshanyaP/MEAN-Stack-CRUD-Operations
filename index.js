var express=require("express");
var bodyParser=require("body-parser");
  
const mongoose = require('mongoose');

// mongoose.Promise = Promise

// const run = async () => {
//     await mongoose.connect('mongodb://localhost:27017/mean_stack',
//     {useNewUrlParser: true},
//     { useUnifiedTopology: true }, 
//     {useCreateIndex: true}, 
//     {useFindAndModify: false},
//     {serverSelectionTimeoutMS: 100000});
// }
mongoose.connect('mongodb://localhost:27017/mean_stack',{useNewUrlParser: true},{ useUnifiedTopology: true }, {useCreateIndex: true}, {useFindAndModify: false});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var db = mongoose.connection;
db.on('error', console.log.bind(console, "Connection Error!"));
db.once('open', function(callback){
    console.log("Connection Successful!");
});
  
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));
app.use(express.static(__dirname));

app.set('view engine','jade');

// var nameSchema = new mongoose.Schema(
//     {
//         fname : String,
//         lname : String,
//         email : String,
//         pwd : String,
//         phoneno : String,
//         gender : String,
//         city : String
//     },
//     {
//         collection : 'customers'
//     }
// );
// var user = mongoose.model('user', nameSchema);

// function getNextSequenceValue(db, name) {
//     db.collection("counters").findAndModify( { _id: name }, null, { $inc: { seq: 1 } }, function(err, result){
//         if(err) callback(err, result);
//         return result.seq;
//     } );
// };

app.post('/register', function(req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var pwd = req.body.password;
    var phoneno = req.body.phone;
    var gender = req.body.gender;
    var city = req.body.city;
    // var myobj = {  _id :iter++,fname: fname, lname: lname, email : email, pwd: pwd, phoneno : phoneno, gender : gender, city : city };
    // var myobj = {  _id : getNextSequenceValue(db, "item_id"),fname: fname, lname: lname, email : email, pwd: pwd, phoneno : phoneno, gender : gender, city : city };
    var myobj = { fname: fname, lname: lname, email : email, pwd: pwd, phoneno : phoneno, gender : gender, city : city };
    db.collection("customers").insertOne(myobj, function(err, collection) {
        if (err) throw err;
        console.log("1 document inserted!");
        db.close();
    });
    return res.redirect('http://localhost:3000/MFoWP2.html#!/view');
    // return res.redirect('MFoWP2.html');
});

app.post('/update', function(req, res){
    var id = req.body.id;
    var new_fname = req.body.fname;
    var new_lname = req.body.lname;
    var new_email = req.body.email;
    var new_pwd = req.body.password;
    var new_phoneno = req.body.phone;
    var new_gender = req.body.gender;
    var new_city = req.body.city;
    var myquery = { phoneno: id };
    var newvalues = {$set: { fname: new_fname, lname: new_lname, email : new_email, pwd: new_pwd, phoneno : new_phoneno, gender : new_gender, city : new_city } };
    // db.collection("customers").updateMany(myquery, newvalues, function(err, connection) {
    //     if (err) throw err;
    //     console.log(connection.result.nModified + " document(s) updated.");
    //     db.close();
    // });
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mean_stack");
        dbo.collection("customers").updateMany(myquery, newvalues, function(err, connection) {
            if (err) throw err;
            console.log(connection.result.nModified + " document(s) updated.");
            db.close();
        });
    });
    return res.redirect('http://localhost:3000/MFoWP2.html#!/view');
    // return res.redirect('MFoWP2.html');
});

app.get('/view',function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mean_stack");
        dbo.collection("customers").find({}).toArray(function(err, result) {
            if (err) throw err;
          console.log(result);
            res.render('displayed', {result:result})
            db.close();
        });
    });
});

app.post('/delete',function(req, res) {
    var id = req.body.id;
    var myquery = { phoneno: id };
    // db.collection("customers").deleteOne(myquery, function(err, connection) {
    //     if (err) throw err;
    //     console.log(connection.result.n + " document(s) deleted.");
    //     db.close();
    // });
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mean_stack");
        dbo.collection("customers").deleteOne(myquery, function(err, connection) {
            if (err) throw err;
            console.log(connection.result.n + " document(s) deleted.");
            db.close();
        });
    });
    return res.redirect('http://localhost:3000/MFoWP2.html#!/view');
});

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/TextaLiving.html");
});

app.listen(3000);
console.log("Server listening at port 3000");

// run().catch(error => console.error(error))