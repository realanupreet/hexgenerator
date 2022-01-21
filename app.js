const button=document.querySelector("button");
const val=document.querySelector(".val");
const hexval=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const body=document.querySelector("body");

button.addEventListener('click',()=>{
let hex="#";
for(let i=0;i<6;i++){
    var index=Math.floor(Math.random()*hexval.length);
    hex+= hexval[index];
}
val.innerHTML=hex;
body.style.backgroundColor=hex;
})
