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
    document.getElementById("result").innerText= lin1;
}

}
        
