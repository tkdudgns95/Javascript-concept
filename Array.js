 // 배열(array): 순서가 있는 리스트이다.

   /* let students = ['철수', '영희', '미나', '영수'];
                    //  0       1      2       3   (인덱스)
    console.log(students); */

/* let arr = [
    '인수',
    3,
    false,
    {
        name:'Mike',
        age:30,
    },
    function() {
        console.log('TEST');
    }
];
console.log(arr); */ // 객체엔 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있다.

// length: 배열의 길이.

// push(): 배열 끝에 리스트 추가 (push 메소드)

/* let days = ['월', '화', '수'];
days.push('목');
console.log(days); */ // push 메소드 써보기 예시

// pop(): 배열 끝 요소(리스트) 제거 (pop 메소드)

/* let days = ['월', '화', '수'];
days.pop()
console.log(days); */ // pop 메소드 써보기 예시

// shift, unshift: 배열 앞에 제거/추가

/* let days = ['월', '화', '수'];
days.unshift('금','토','일');
console.log(days) */ // unshift 써보기 예시

/* let days = ['월', '화', '수','목','금'];
days.shift('월'); // 가로()안에 공백이나 '화'를 넣어도 '월'이 지워진다.
console.log(days); */

// 반복문: for

/* let days = ['월', '화', '수'];
for(let index = 0; index < days.length; index ++) { // length 는 3
    console.log(days[index]) // 0부터 2까지 반복
} */ // for문 써보기 예시

// 반복문: for ... of (for문 보다는 간단하지만, index를 못얻는다는 단점이 있다.)

/* let days = ['월','화','수'];
for(let day of days) {
    console.log(day)
} */ // for ... of 문 써보기 예시

 /* let days = ['mon', 'tue', 'wed'];
 
 days.push('thu');
 days.unshift('sun');

 for(let index=0; index < days.length; index ++) {
    console.log(days[index]);
 } */ // for문 실행 예시.

 /* for (let x of days){
    console.log(x);
 } */ // for ... of 문 실행 예시.

 /* var arr1 = [0,1,2]; // concat 배열 써보기 예시
var arr2 = new Array(3,4,5,6);
var arr = arr1.concat(arr2);

console.log(arr); */

// forEach 문은 배열의 반복이다. for문에 비해 forEach문은
// 내장함수라 속도는 더 빠르다.

/* let users = ['Mike', 'Tom', 'Jane'];
users.forEach((item, index, arr) => {
});
console.log(users); */


 /* foreach 실행 예시
 let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index) => {
    console.log([name],[index+1]);
}); */

/* foreach 실행 예시 
const arr = ['가', '나', '다', '라'];
arr.forEach(function(item, index, arr2){
    console.log(item, index, arr2[index+1]);
}) */

// indexOf문은 앞에서 부터 특정문자의 인덱스 위치를 찾는 메소드이다.
// 문자열이 첫번째로 나타나는 위치 index를 리턴한다.

// lastindexOf 문은 뒤에서 부터 특정문자의 인덱스 위치를 찾는 메소드이다.

/*
let arr = [1,2,3,4,5,1,2,3];

console.log(arr.indexOf(3)); // 2 반환
console.log(arr.lastIndexOf(3)); // 7 반환 */

/*
var str = 'JavaScript and Java';

console.log(str.indexOf('Java')); // 0 반환
console.log(str.lastIndexOf('Java')); // 15반환
console.log(str.indexOf(' ')); // 공백위치 10반환.
console.log(str.lastIndexOf(' ')); // 뒤에서 공백위치 14 반환. */

// includes는 특정값을 포함하고 있는지의 여부를 boolean(true,false) 값으로 반환해준다.

/* includes 배열 예시
let arr = [1,2,3];

console.log(arr.includes(2));
console.log(arr.includes(8)); */

/* let arr = [1,2,3,4,5,2];

const result = arr.find((item) => {
    return item === 2;
})
console.log(result); */


// find문은 특정 값을 찾는 조건을 callback 함수를 통해 전달하여,
// 조건에 맞는 값 중 첫번째 값을 리턴한다. 해당하는 값 없으면, undefined를 반환.

// find배열 쓰기 예시1.

/*
 let userList = [
    {name: "Mike", age: 30 },
    {name: "Jane", age: 18 },
    {name: "Tom", age: 10 },
];

const result = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result); */

// find배열 쓰기 예시2.

/*
const arr = [
    {name: 'apple', price : 1000}, 
    {name: 'banana', price : 2000},
    {name: 'apple', price: 3000}
  ];
  
  function isApple(element)  {
    if(element.name === 'apple')  {
      return true;
    }
  }
  
  const apple = arr.find(isApple);
  console.log(apple.name); // apple
  console.log(apple.price); // 1000 */

  // findIndex 쓰기 예시.
  
  /*
  let userList = [
    {name: "Mike", age: 30 },
    {name: "Jane", age: 20 },
    {name: "Tom", age: 10 },
];

const result = userList.findIndex((user) => {
    if (user.age < 18) {
        return true;
    }
    return false;
});

console.log(result); */










