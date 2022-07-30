 // 배열(array): 순서가 있는 리스트이다.

   /* let students = ['철수', '영희', '미나', '영수'];
                    //  0       1      2       3   (인덱스)
    console.log(students); */

/* var arr1 = new Array(1,2); // concat 배열 써보기 예시
var arr2 = new Array(3,4,5,6);

var arr = arr1.concat(arr2);

console.log(arr); */


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











