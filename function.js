// test()

(function () {
    console.log("test")
})()



// 호이스팅(hoisting) : 하단 정의와 할당을 분리해서 사용 var만 정의 가능(let, const hoisting 불가)
// 정의 : let, var, const / 할당 : 변수에 값을 지정

// scope : 범위지정
// 익명함수(Anonymous function) : 함수명을 선언하지 않고, 바로 실행하는 함수
// arrow function(화살표 함수)


const test = function () {
    
    console.log("test")
    var a
    console.log(b)
    a = 1
    var b = 2
    console.log(c)
    var c = 3
}
test()

const test01 = () => ("end")


console.log(test01())

var a
a = 1

