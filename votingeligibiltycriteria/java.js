function check(){
    let age=Number(document.getElementById("age").value);
    if(age>=18){
        document.getElementById("result").innerHTML="Eligible";
    }
    else{
        document.getElementById("result").innerHTML="Not Eligible";
    }
}