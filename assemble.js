import { claluculationTable } from './tableDisplay.js';
import { pdfView } from './reciptsDisplay.js';
import { yearButtonDev } from './yearsButtons.js';
export function assemble(){
 yearButtonDev();
};
export function deAssemble(className){
   document.querySelector(`.${String(className)}`).innerHTML=null;
}
export function display(sem){
 claluculationTable(sem);
  pdfView();
}
