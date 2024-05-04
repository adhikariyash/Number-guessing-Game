let input = document.getElementById('enter');
let submit = document.getElementById('submit');
let result = document.getElementById('result');
let max = 100;
let min = 0
let main = document.getElementById('main')
let counter = 1;
let play  = document.getElementById("play");
let random = Math.floor(Math.random()* max)


submit.addEventListener('click', function(){

   if(input.value ===""){
   result.innerText = "Please Enter A Valid Number!"
   input.value = ""
   }
  
else{
   if(input.value > random){
    result.innerText = "TOO HIGH! Try Again";
    counter++;
   
       
    input.value =""
   }
   else if(input.value < random){
    result.innerText = "TOO LOW! Try Again"
    counter++;
    input.value = ""
   }
   else{
     
    result.innerText = `Congratulations! Your guess was right. You took ${counter} attempts `
    input.value = ""
    play.style.display = "block";
    submit.style.display = "none"
    }
}

});
play.addEventListener('click', function(){
window.location.reload();
})

