const num1 = +prompt('Введите высоту прямоугольника, см');
const num2 = +prompt('Введите ширину прямоугольника, см');

function s(a, b){
    return a *
    b;
}
console.log('Площать прямоугольника равна ' + s(num1, num2) + ' см/кв');
alert('Площать прямоугольника равна ' + s(num1, num2) + ' см/кв');