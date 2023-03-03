// test()

(function () {
    console.log("test")
})()



// 호이스팅(hoisting)
// 익명함수(Anonymous function) : 함수명을 선언하지 않고, 바로 실행하는 함수
// arrow function(화살표 함수)



const test = function () {
    console.log("test")
}
test()

const test01 = () => ("end")


console.log(test01())