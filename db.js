const { DataStore } = require('notarealdb');
const store = new DataStore('./data');
const fs = require('fs')

var raw_data = fs.readFileSync('./students.json', 'utf-8');
var students_data = JSON.parse(raw_data)
// console.log(students_data);

students_data.forEach((ele)=>{
    // console.log(ele);
    store.collection('students').create(ele);
});


var raw_data2 = fs.readFileSync('./colleges.json', 'utf-8');
var college_data = JSON.parse(raw_data2)
// console.log(students_data);

college_data.forEach((ele)=>{
    // console.log(ele);
    store.collection('colleges').create(ele);
});


module.exports = {
    students:store.collection('students'),
    colleges:store.collection('colleges')
};