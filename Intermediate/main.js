
// Student grade
let grade = prompt();

let studentGrade;
if(grade < 60){
    studentGrade = `The class average is ${grade}, the average grade will be F`;
}
else if(grade < 70){
    studentGrade = `The class average is ${grade}, the average grade will be D`;

}
else if(grade < 80){
    studentGrade = `The class average is ${grade}, the average grade will be C`;

}
else if(grade < 90){
    studentGrade = `T99he class average is ${grade}, the average grade will be B`;

}
else{
    studentGrade = `The class average is ${grade}, the average grade will be A`;

}
85
console.log(alert(studentGrade));






// Star tree

for(let i = 1; i < 7; i++){
    for(let j = 1; j <= i; j++){
      document.write('*')
    }
     document.write('<br/>');
}
