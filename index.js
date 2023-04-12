let display =document.getElementById("display");
buttons =document.querySelectorAll('button');
let finalans="";
let ans="";

for(items of buttons){
   
items.addEventListener('click',  (e)=>{
    buttonText = e.target.innerText;
    console.log(buttonText);
    if(buttonText=='X'){
        buttonText= '*';
        ans+=buttonText;
        display.value= ans;

    }else if(buttonText=='='){
        display.value=eval(ans);
        
    }else if(buttonText=='C'){
               ans="";
        display.value=ans;  
      }
    else{
        ans+=buttonText;
        display.value=ans;
    }
   // console.log(display.value);
})

}
