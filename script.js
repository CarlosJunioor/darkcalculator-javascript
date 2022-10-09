let btns = document.querySelectorAll('.botoes button');
let expression = document.querySelector('input[type=text]');
let result = document.querySelector('.screen-result input[type=text]');

function getText(){
    expression.value += `${this.innerText}`;//expression.value, expression.placeholder , etc !
}
btns.forEach((e) => { /*add texto do botão ao input expressão */
    e.addEventListener('click',getText);
});

function calcular(n,operator){
    let result = 0;
    let op;

    result = n[0];
    for(let i = 0; i < n.length; ++i){
        operator[i] === '+' ? result +=  n[i + 1] : result = result;
        operator[i] === '-' ? result -= n[i + 1] : result = result;
        operator[i] === '/' ? result /= n[i + 1] : result = result;
        operator[i] === '*' ? result *= n[i + 1] : result = result;
    }
    return result;
}

let btn_result = document.querySelector('.result button');
btn_result.addEventListener('click', (e) => {
    let n = [],operator = [];//array num e array operator
    let numberclean1,j;
    numberclean1 = j = 0;
    
    for(let i = 0; i < expression.value.length; ++i){//255+10=
        if(isNaN(+expression.value[i])){
            operator[j] = expression.value[i];
            n[j] = +numberclean1;
            console.log(n[j]);
            ++j;
            numberclean1 = '';//note que numberclean1 não é um number,portanto resetá-lo com 0 dara erro!!
        }
        numberclean1 += expression.value[i];
    }
  
    result.value = calcular(n,operator);
    expression.value = '';
});

let clear = document.querySelector('.clear');
clear.addEventListener('click',(e) => {
    expression.value = '';
    result.value = '';
});

function typewriter(){
    let logo = document.querySelector('.logo');
    let arraylogo = logo.innerText.split('');

    logo.innerText = '';
    arraylogo.forEach((e,i) => {
        setTimeout(() => {
            logo.innerText += e;
        },200 * i);
    });
}
typewriter();