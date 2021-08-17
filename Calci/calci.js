let display = document.getElementById("display");
let operator;
let y;
let i=0;
function listen(a)
{
    if(i==0)
    {
        display.innerHTML="";
    }
    if( display.innerHTML == "+ " || display.innerHTML == "* " || display.innerHTML == "/ " || display.innerHTML == "- ")
    {
        operator = display.innerHTML; 
        display.innerHTML="";
    }
    display.innerHTML += a;
    i++;
}
function add()
{
    y = display.innerHTML;
    display.innerHTML = "+ ";
}
function minus()
{
    y = display.innerHTML;
    display.innerText = "- ";
}
function multiply()
{
    y = display.innerHTML;
    display.innerText = "* ";
}
function divide()
{
    y = display.innerHTML;
    display.innerText = "/ ";
}
function equal()
{
    let x= display.innerHTML;
    let z = eval(y + operator + x);
    display.innerHTML = z;
}
function del()
{
    display.innerText = "";
}
function backspace()
{
    let temp = display.innerText;
    let a = eval(temp);
    let d = a%10;
    a=a/10;
    a=a-(d/10);
    display.innerText=a;
}
function plmin()
{
    let m = display.innerHTML;
    let q = eval(m);
    if(q< 0)
    {
        display.innerText = "+" + m;
    }
    else
    {
        display.innerText = "-" + m;
        
    }

}