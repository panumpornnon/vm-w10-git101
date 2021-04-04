//alert("message");
let v_input=prompt("Get Input")
let v2_input=parseInt(v_input)
document.getElementById("input").innerHTML= v2_input//typeof(v2_input)
var summary=0
for(let i=0;v2_input>i;i++){
    document.getElementById("output").innerHTML=i+"<br/>"
    summary=summary+i
}
document.getElementById("sum").innerHTML=summary