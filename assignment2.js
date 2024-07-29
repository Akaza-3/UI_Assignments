//task1 --> use map
const array1 = [1,2,3,4,5]
const res = array1.map(x=> x**3);
console.log(res);


//task2 --> use reduce
const array2 = [1,2,3,4,5];
const sum = array2.reduce((acc,curr)=>acc+curr,0);
console.log(sum);


//task3 --> use filter
const array3 = [1,2,3,4,5];

const isPrime = (num) => {
    if(num<=1)return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0)return false;
    }
    return true;
}

const primes = array3.filter(isPrime);
console.log(primes);


//task4 --> use all map, reduce and filter
const array4 = [1,2,3,4,5];

const isOdd = (num) => {
    if(num%2)return true;
    return false;
}

const oddNos = array4.filter(isOdd);
const squaresOfOdds = oddNos.map((x) => x**2);
const sumOfSquareOfOdds = squaresOfOdds.reduce((acc,curr)=>acc+curr,0);
const averageOfSquareOfOdds = sumOfSquareOfOdds/squaresOfOdds.length;
console.log(averageOfSquareOfOdds);


//task5 -- > use all map, reduce and filter
const array5 = ["welcome", "to", "deutsche", "bank"]

const lengthOfEachString = array5.map((str) => str.length);
const lengthOfMaxString = lengthOfEachString.reduce((max,curr) => Math.max(max,curr),0);
const stringWithMaxLength = array5.filter((str) => str.length === lengthOfMaxString);

console.log(stringWithMaxLength);


//task6 --> use map
const sentence = "welcome to deutsche bank";
const words = sentence.split(' ');
const upperCaseWords = words.map((word) => {
    return word[0].charAt(0).toUpperCase() + word.slice(1);
})

const upperCaseSentence = upperCaseWords.join(' ');
console.log(upperCaseSentence);


//task 7 -- > use filter
const students = [
    {
        "name": "A",
        "score": 54
    },
    {
        "name": "B",
        "score": 78
    },
    {
        "name": "C",
        "score": 65
    },
    {
        "name": "D",
        "score": 60
    },
    {
        "name": "E",
        "score": 47
    },
]

const isPassed = (student) => {
    if(student.score>=60)return true;
    return false;
}

const passedStudents = students.filter(isPassed);
console.log(passedStudents)


//task8 --> Private counter for multiple instances

const instanceCounter = () =>{
    let count=0;

    return function() {
        count++;
        return count;
    }
}

const counter1 = instanceCounter();
const counter2 = instanceCounter();


console.log("counter1 value: " + counter1()); 
console.log("counter1 value: " + counter1());
console.log("counter2 value: " + counter2()); 
console.log("counter2 value: " + counter2());
console.log("counter2 value: " + counter2());
console.log("counter2 value: " + counter2());
console.log("counter1 value: " + counter1());


//task9 --> Promise based calcutor

function calculator(num1, num2, opr){
    return new Promise((resolve, reject) => {
        switch (opr) {
            case 'add':
              resolve(num1 + num2);
              break;
            case 'sub':
              resolve(num1 - num2);
              break;
            case 'mul':
              resolve(num1 * num2);
              break;
            case 'div':
              if (num2 === 0) {
                reject('Error: Division by zero is not allowed.');
              } else {
                resolve(num1 / num2);
              }
              break;
            default:
              reject('Invalid Operation');
          }
    })
}

calculator(45, 55, 'add')
  .then(result => console.log('Result of opr is:', result))
  .catch(error => console.error(error));

calculator(20, 10, 'sub')
  .then(result => console.log('Result of opr is:', result))
  .catch(error => console.error(error)); 
  
calculator(2, 5, 'mul')
.then(result => console.log('Result of opr is:', result))
.catch(error => console.error(error)); 

calculator(10, 5, 'div')
.then(result => console.log('Result of opr is:', result))
.catch(error => console.error(error)); 

calculator(14, 0, 'div')
  .then(result => console.log('Result of opr is:', result))
  .catch(error => console.error(error)); 


//task10 --> calculate total score
const array6 = [
    {
        "name": "A",
        "score": 54
    },
    {
        "name": "B",
        "score": 78
    },
    {
        "name": "C",
        "score": 65
    },
    {
        "name": "D",
        "score": 60
    },
    {
        "name": "E",
        "score": 47
    },
]

let totalScore=0;
array6.forEach((item) => totalScore=totalScore+item.score);
console.log("total score is: ", totalScore);

