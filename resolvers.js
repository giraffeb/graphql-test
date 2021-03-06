const db = require('./db')

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    students: ()=> db.students.list(),
    studentById:(root,args,context,info) => {
        //args will contain parameter passed in query
        return db.students.get(args.id);
    },
    sayHello:(root,args,context,info) => `Hi ${args.name} GraphQL server says Hello to you!!`
}


const Student = {
    fullName:(root,args,context,info) => {
        return root.firstName+":"+root.lastName
    },
    college:(root) => {
        return db.colleges.get(root.collegeId);
    }
}

module.exports = {Query, Student}