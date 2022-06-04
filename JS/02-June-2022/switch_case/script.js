var grade = "B";

var message = '';
// if (grade === 'A') {
//     message = 'Excellent';
// } else if (grade === 'B'){
//     message = 'Good'
// } else if(grade === 'C'){
//     message = 'Average';
// } else if(grade === 'D'){
//     message = 'Poor';
// } else if(grade === 'E'){
//     message = 'Fail'
// } 

// console.log(message);

// Switch  case statment

switch (grade) {
    case 'A':
        message = 'Excellent';
        break;
    case 'B':
        message = 'Good';
        break;
    case 'C':
        message = 'Average';
        break;
    case 'D':
        message = 'Poor';
        break;
    default:
        message = 'Fail'
        break;
}

console.log("Message case from Switch case : ", message);