let a = 10;
alert (a);

a=20;
alert(a);

let b = 'Первый айфон был выпущен в 2007 году';
alert (b) ;

let c = 'Brendan Eich';
alert (c)

let x = 10;
let y = 2;
alert (x+y);
alert (x-y);
alert (x*y);
alert (x/y);

let result = y**5;
alert (result);

a=9;
b=2;
alert(a%b)

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = num++;
num = num--;
alert(num);

let age =prompt('Сколько вам лет');
alert (age);

const user = {
	name: 'Roma',
	age: 26,
	isAdmin: true,
}

user.cityOfResidence = 'Moscow';

user.age = 27;

delete user.ityOfResidence;

let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert (user[info]);

let userName = prompt('Введите ваше имя');
alert (`Привет, ${userName}!`);