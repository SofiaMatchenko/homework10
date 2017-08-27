/**
 * Created by СПС on 27.08.2017.
 */
//Task 1+2
function larger() {
    var first1 = document.getElementById('first-value').value;
    var second1 = document.getElementById('second-value').value;
    var result1 = document.getElementById('result');

    if (first1==second1) {
        result1.value = 'они равны';
    }

    else {
        result1.value = Math.max(first1,second1);
    }
}
document.getElementById('compare').onclick = larger;

//Task 3
function flats() {
    var flat1 = document.getElementById('flat').value;
    var porch1 = document.getElementById('porch');

    if (flat1>=1 && flat1<=20) {
        porch1.value = '1 подъезд';
    }

    else if (flat1>=21 && flat1<=48) {
        porch1.value = '2 подъезд';
    }

    else if (flat1>=49 && flat1<=90) {
        porch1.value = '3 подъезд';
    }
}
document.getElementById('find').onclick = flats;

//Task 4
function login1() {
    var name1 = document.getElementById('name').value;
    var password1 = document.getElementById('password').value;
    var par = document.getElementById('p');

    if (name1==='ivan' && password1==='334455' || name1==='alex' && password1==='777' || name1==='petr' && password1==='b5678') {
        par.innerText = 'Добро пожаловать';
    }
    else {
        par.innerText = 'Ошибка входа';
    }
}
document.getElementById('login').onclick = login1;

// Task 5
function howOld() {
    var year1 = document.getElementById('year').value;
    var par1 = document.getElementById('paragraph');

    if (year1>=1940 && year1<=2017 && 2017-year1>=16) {
        par1.innerText = 'Добро пожаловать';
    }
    else if  (year1<1940 || year1>2017) {
        par1.innerText = 'Неверно указан год рождения';
    }
    else {
        par1.innerText = 'Вход воспрещен';
    }
}
document.getElementById('enter').onclick = howOld;

// Task 6
function surcharge() {
    var exp = document.getElementById('experience').value;
    var per = document.getElementById('percent');

    if (exp>=0 && exp<=3) {
        per.value = 'Ваша надбавка 0%';
    }
    else if  (exp>3 && exp<=10) {
        per.value = 'Ваша надбавка 10%';
    }
    else if  (exp>10 && exp<=20) {
        per.value = 'Ваша надбавка 20%';
    }
    else if  (exp>=30) {
        per.value = 'Ваша надбавка 30%';
    }
    else if (exp<0 && exp>100){
        per.value = 'Вы ввели неверное значение';
    }
}
document.getElementById('consider').onclick = surcharge;