let arr = ["Karachi", "lahore", "Islamabad", "Quetta", "Swat"]
// let userCity = "karachi"
function checkCity(){
let userCity= document.getElementById("input-1").value//.toLowerCase()
let matched = false
    for(let i=0; i < arr.length; i++){
        if (arr[i]==="Karachi" && userCity==="Karachi"){
            // alert("match")
            matched = true
            break;
        }
    }
    let resultElement=document.getElementById("result")
    if(matched){
        resultElement.textContent="Matched"
        resultElement.style.color="green"
        // alert("Matched")
    }else{
         resultElement.textContent="Un-matched"
        resultElement.style.color="red"
        // alert("Sorry! No Matched")
    }
}