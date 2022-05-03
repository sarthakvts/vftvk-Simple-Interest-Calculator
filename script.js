function validateAmount(){
    var validating = false;
var x = document.getElementById("principal").value;

if(x <= 0){
    if(validating == false) {
        validating = true
alert("Enter a positive number");
setTimeout(function(){
    document.getElementById("principal").focus();
    validating = false;
}, 1);
}
}
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);
   var lin1= `If you deposit ${principal}, \nat an interest rate of ${rate}. \nYou will receive an amount of ${interest}, \n in the year ${year}`;

function updateResult(){
    function highlightResult(){
        var newNode = document.createElement("div");
        newNode.setAttribute(
           "style",
           "background-color: yellow; display: inline;"
        );
        principal.surroundContents(newNode);
        rate.surroundContents(newNode);
        interest.surroundContents(newNode);
        year.surroundContents(newNode);
    }
    document.getElementById("result").innerText= lin1;
}

}
