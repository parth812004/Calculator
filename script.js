var current_val=document.getElementById("current");
var history_val=document.getElementById("history");

function setValue(val)
{
    if(current_val.value!='0')
    {
        current_val.value+=val;
    }
    else
    {
        current_val.value=val;
    }
}

function allClear()
{
    current_val.value='0';
    history_val.value='';
}

function backspace()
{
    if(current_val.value.length>1)
    {
        current_val.value=current_val.value.slice(0,-1);
    }
    else
    {
        current_val.value=current_val.value.slice(0,-1);
        current_val.value='0';
    }
}

function calculate()
{
    var equation=current_val.value;
    console.log(equation);
    history_val.value=equation+"=";
    var answer=eval(equation);
    current_val.value=answer;
}