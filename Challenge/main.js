var studentName = prompt('Type your name');
var studentGrade = prompt('Type your grade');


let students = [];
let mathGrades = [];
let grade = document.getElementById("grade");
let container = document.getElementById("container");
students.push(studentName);
mathGrades.push(mathGrades);

document.write(`${studentName}  has reached ${studentGrade} in Math this season.<br\>` );

if(studentGrade < 60){

   grade.innerHTML = "red";
   container.style.backgroundColor= 'red';
}
else if((studentGrade >= 60) && (studentGrade <= 70)){
    grade.innerHTML = "yellow";
    container.style.backgroundColor= 'yellow';
}
else if((studentGrade > 70) && (studentGrade <= 99)){
    grade.innerHTML = "green";
    container.style.backgroundColor= 'green';
    
}
else if(studentGrade == 100){
    grade.innerHTML = "blue";
    container.style.backgroundColor= 'blue';
}
console.log(students);
console.log(mathGrades);