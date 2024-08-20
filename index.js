


let counter = 0;



document.getElementById("mybutton").onclick =  function(){
    counter = counter + 1 ;
    document.getElementById("myh2").textContent = counter;

}
document.getElementById("reset").onclick = function(){
    counter = 0;
    document.getElementById("myh2").textContent = counter;
}

