var readlineSync = require('readline-sync');

var students = [
  student1 = [],
  student2 = [],
  student3 = [],
  student4 = [],
  student5 = []
]

for(i=0; i<5; i++) {
  console.log("-------------------------------------")
  console.log("Enter details for Student: " + i)
  console.log("-------------------------------------")
  students[i][0] = readlineSync.question("Enter student name: ");
  students[i][1] = readlineSync.question("Enter unit test marks: ");
  students[i][2] = readlineSync.question("Enter pre final marks: ");
  students[i][3] = readlineSync.question("Enter final marks: ");

}

function totalMarks(i) {
  var totalMarks = Number(students[i][1]) + Number(students[i][2]) + Number(students[i][3]);
  return totalMarks;
}

var allTM = [totalMarks(0), totalMarks(1), totalMarks(2), totalMarks(3), totalMarks(4)];

var maxMarks = Math.max(...allTM);

var highestMarksIndex = allTM.indexOf(maxMarks);

console.log("-------------------------------------");
console.log(students[highestMarksIndex][0] + " has scored highest marks amongst all");
console.log("-------------------------------------");

var allAvg = [totalMarks(0)/3, totalMarks(1)/3, totalMarks(2)/3, totalMarks(3)/3, totalMarks(4)/3];

for(i=0; i<5; i++) {
  console.log(students[i][0] + " has an average marks of " + allAvg[i]);
  console.log("-------------------------------------")
}