//Компоненты языка JavaScript
//1
// создана переменная город со значением Красноярск
const city = 'Красноярск';
//создана переменная температура со значение -1
const temperature = '-1';
//в консоль выводится строка 
console.log(`температурa воздуха сегодня ${city}: ${temperature}`)

//2
// создана переменная result, в которой прописано выражение 
const result = (3+4)*18;
console.log(result)



//Переменные
let price = 100;
price = 150;
console.log(price)

//Типы данных
const str = 'hi';
const num = 23;
const arr = [1,2,3];//obj
let a;
const b = null; // obj
const obj = {
    1: 1,
    2: 2,
} //obj
const bo = true;
const sum = () => {
    const a = 4
    const b = 10

    console.log(a+b)
}
console.log('str - ' + typeof str)
console.log('num - ' + typeof num)
console.log('arr - ' + typeof arr)
console.log('a - ' + typeof a)
console.log('b - ' + typeof b)
console.log('obj - ' + typeof obj)
console.log('bo - ' + typeof bo)
console.log('function - ' + typeof sum)

//Операторы 

//1
//1.1
const c = 2;
const d = (c+c)*c
console.log(d)
//1.2
const n = Math.sin(54);
const m = Math.cos(16);
console.log(Math.round((n*m)**2))
//1.3
const e = 2**7
const f = 3**Math.sqrt(49)
const g = 2.4/7**4
const h = Math.sqrt(13.2*71.90)
const i = 16*h
console.log(Math.round((i/g+f)*e))
//2
const z = 6
const p = 7

if(z%2== 0) {
    console.log('четное')
} else {
    console.log('нeчетное')
}
if(p%2== 0) {
    console.log('четное')
} else {
    console.log('нeчетное')
}

//3
let name 
if(name === undefined || name === null){
    console.log('Hello, Guest!')
} else {
   console.log(`Hello, ${name}!`)
}