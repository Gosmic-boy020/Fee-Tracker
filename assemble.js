import { claluculationTable } from './tableDisplay.js';
import { pdfView } from './reciptsDisplay.js';
import { yearButtonDev } from './yearsButtons.js';
export function assemble(user11){
   
 yearButtonDev(user11);
 console.log(user11);
};


export function deAssemble(className){
   document.querySelector(`.${String(className)}`).innerHTML=null;
}
export function deAssembleAlpha(className){
   document.querySelector(`.${String(className)}`).remove();
}


export function display(sem,user1111){
 claluculationTable(sem,user1111);
  pdfView();
  console.log(user1111)
}
