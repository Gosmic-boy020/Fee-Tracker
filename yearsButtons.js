import { buttons } from "./data.js";
import { pdfclose } from "./reciptsDisplay.js";
import { display } from "./assemble.js";
 export function yearButtonDev(user111){
let html=``;
const ukey=user111;
    
    buttons.forEach((item)=>{

      html+=`
      <button class="years" data-sem="${item.year}">${item.year} year</button>
    `
    });

    
    document.querySelector('.demo-buttons').innerHTML=html;
    console.log("function runned")

    document.querySelectorAll('.years').forEach((btn)=>{
    btn.addEventListener('click',()=>{
    const sem=btn.dataset.sem;
    display(sem,ukey);
    pdfclose();
  })
});
console.log('this is user key:',ukey);;
}
