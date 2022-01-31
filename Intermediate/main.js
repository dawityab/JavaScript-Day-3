
// Student grade

let studentsName = ["Marta","Thomas","Klaus","Maria","David"]
let studentsGrade = [76,85,65,93,81];

let result = studentsGrade.reduce((prev,cur)=>{
     return prev + cur;
});
console.log(result);
let avg = result / studentsName.length;
let studentGrade;
if(avg < 60){
    studentGrade = `The class average is ${avg}, the average grade will be F`;
}
else if(avg < 70){
    studentGrade = `The class average is ${avg}, the average grade will be D`;

}
else if(avg < 80){
    studentGrade = `The class average is ${avg}, the average grade will be C`;

}
else if(avg < 90){
    studentGrade = `The class average is ${avg}, the average grade will be B`;

}
else{
    studentGrade = `The class average is ${avg}, the average grade will be A`;

}

document.write(studentGrade +'<br/>');






// Star tree

for(let i = 1; i < 7; i++){
    for(let j = 1; j <= i; j++){
      document.write('*')
    }
     document.write('<br/>');
}
