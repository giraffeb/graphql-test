const db = require('./db')
const fs = require('fs')

getStudentById:(root,args,context,info) => {
    console.log(args);
    return db.students.get(args.id);
}