/*
let ageText = prompt('Enter your age: ');
let age = Number(ageText);


while(age<18){
    ageText = prompt('Access restricted, +18 only. Enter your age: ');
    age = Number(ageText);
}

document.write('Welcome!');

let optionText;
let option;
do{
    optionText = prompt('Choose an option:\n\n1 - Caviar\n2 - Meatballs\n3 - Feijoada');
    option = Number(optionText);
}while(option<1 || option>3);


switch(option){
    case 1:
        document.write('<br>You picked caviar');
        break;
    case 2:
        document.write('<br>You picked meatballs');
        break;
    case 3:
        document.write('<br>You picked feijoada');
        break;
}
*/

const reportCard = [];
const subjects = ['Maths', 'Biology', 'History'];
const tests = ['T1', 'T2', 'T3'];

for(let i=0;i<subjects.length;i++){
    reportCard[i] = [];
    for(let j=0;j<tests.length;j++){
        const grade = prompt(`${subjects[i]} (${tests[j]}): `);
        reportCard[i][j] = Number(grade);
    }
}

console.log(reportCard);

for(let i=0;i<subjects.length;i++){
    for(let j=0;j<tests.length;j++){
        document.write(j==0?`${subjects[i]}: `:'');
        document.write(`${reportCard[i][j]}`);
        document.write(j<tests.length-1?' | ':'<br>');
    }
}