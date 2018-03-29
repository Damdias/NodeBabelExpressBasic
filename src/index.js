import http from 'http';
import mongoose from './server/db/mongoose';
import User from "./models/user";
import Server from "./server/server";


let Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:false,
        minlength:1,
        trim :true
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

let newTodo = new Todo({
    text:'       Cook dinner'
});

let user = new User({
    userName:'Damith',
    email:'dam@gmail.com'
});

// user.save().then((doc)=>{
//     console.log("Save user",doc);
// })

// newTodo.save().then((doc)=>{
//     console.log("Saved todo",doc);
// })

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');

let server = new Server();
server.start();