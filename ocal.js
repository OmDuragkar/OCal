let num1;
let operator;
let num2;
let disp=document.getElementById("disp")
let i=0;
function num(a) 
{
    if(i==0 || disp.innerText == "OCal")
    {
        disp.innerHTML="";
    }
    if (disp.innerText== '+' || disp.innerText== '-' || disp.innerText== '*'  || disp.innerText== '/') {
        disp.innerHTML= "";
        
    }
    if(i==17)
    {
        
    }
    else
    {
        disp.innerHTML += a;
        i++;
    }
}
function ope(b)
{
    num1 = disp.innerHTML;
    disp.innerHTML="";
    operator=b;
    disp.innerHTML += b;

}
function equal()
{
    num2=disp.innerText;
    let z= eval(num1 + operator + num2);
    disp.innerHTML = z;
}
function del()
{
    disp.innerText = "OCal";
}

function bspace()
{
    let o = disp.innerHTML;
    let d = (eval(o)/10);
    // o = (int)(o/10);
    o=Math.floor(d);
    disp.innerHTML=o;
}
function plmin()
{
    let m = disp.innerHTML;
    let q = eval(m);
    if(q< 0)
    {
        disp.innerText = "+" + m;
    }
    else
    {
        disp.innerText = "-" + m;
        
    }

}