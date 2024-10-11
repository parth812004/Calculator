var current_val=document.getElementById("current");
var history_val=document.getElementById("history");

console.log("Hi");

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

    addHistory(equation,answer);
}

function addHistory(equation,answer)
{
    equation=history_val.value;
    answer=current_val.value;
    document.querySelector(".historyElement").innerHTML+=`<div class="historyElement">
            <p id="eqn">${equation}</p>
            <p id="ans">${answer}</p>
            <hr>
        </div>`;
}

function clearHistory()
{
    if(confirm("Are you sure you want to clear the history?"))
    {
        document.querySelector(".historyElement").innerHTML='';
    }
}

function showHistory()
{
    const historyElement = document.querySelector(".history");
    if (historyElement.style.display === "none" || historyElement.style.display === "") {
        historyElement.style.display = "block";
    } else {
        historyElement.style.display = "none";
    }
}

function hideHistory()
{
    document.querySelector(".history").style.display="none";
}

let flag=true;
function brackets()
{
    if(flag)
    {
        setValue("(");
        flag=false;
    }
    else
    {
        setValue(")");
        flag=true;
    }
}

function percentage()
{
    let equation=current_val.value;
    let answer=eval(equation)/100;
    current_val.value=answer;
    history_val.value=equation+"%";
    addHistory(equation+"%",answer);
}

function floating()
{
    if (current_val.value === '' || current_val.value === '0') {
        setValue('0.');
    } else {
        const operators = ['+', '-', '*', '/'];
        let lastNumber = '';
        for (let i = current_val.value.length - 1; i >= 0; i--) {
            if (operators.includes(current_val.value[i])) {
            break;
            }
            lastNumber = current_val.value[i] + lastNumber;
        }
        if (lastNumber.indexOf('.') === -1) {
            setValue('.');
        }
    }
}