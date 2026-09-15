// Firstly import fs(File System)module in your program
const fs = require("fs");
//now create file and also write some content in that file
fs.writeFile("student.txt", "hello,this file is for students", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("File is created successfully")
    }
});
//now reading file content
fs.readFile("student.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("err");
    }
    else {
        console.log("content of file");
        console.log(data);
    }
});
//Update a file using appendFile method,it will only add extra content inside already existed file
fs.appendFile("student.txt", " File of CSE 3rd sem", (err) => {
    if (err) throw err;
    else {
        console.log("file successfully updated");
    }
});
//Finally delete a file
fs.unlink("student.txt", (err) => {
    if (err) throw err
    else {
        console.log("file successfully deleted");
    }
});