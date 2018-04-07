// let circleArea = function(pi, r) {
//     let area = pi * r * r;
//     return area;
// };

// 위의 문장을 한줄로 작성하시오.

// 익명 함수를 애로우 펑션으로 변경 가능
// 파라메터가 한 개면 괄호 생략 가능
// 중괄호가 한 줄이면 중괄호 생략 가능
// 한줄일 경우에는 return 생략 가능
let circleArea = (pi, r) => pi * r * r;

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"

let getA = param => param;

console.log('getA() '+getA('AAAAAA'));

