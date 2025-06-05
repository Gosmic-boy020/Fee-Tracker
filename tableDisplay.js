import { arr,deleteTable } from "./data.js";
import { yearButtonDev } from "./yearsButtons.js";
import { assemble, deAssemble } from "./assemble.js";
export function claluculationTable(sem){
  let TH_html=``;
    let TD_html=``;
    let total=0;
    
    arr.forEach((item)=>{
  
      if(item.year==sem){
        let loc=item.crea;
        let loc1=Number(loc.split(",").join(""));
  
        let dbnum=item.dbea;
        let dbnum1=Number(dbnum.split(",").join(""));
      TD_html+=`
        <tr>
        <td>${item.ins}</td>
        <td>${item.cred}</td>
        <td>${loc1.toLocaleString('en-US',{style:'currency',currency:'INR',})}</td>
        <td>${item.dbed}</td>
        <td>${dbnum1.toLocaleString('en-US',{style:'currency',currency:'INR',})}</td>
        <td>
        <button class="recipts deactive" data-inst="${item.ins}" data-y=${item.year}>Recipt</button>
        </td>
        
      
      `;
        
        let num=item.dbea;
        let n=Number(num.split(",").join(""));
        total+=n;
    }
  
    });
  
    TH_html=`
       <table>
      <tr>
        <th>${sem} year</th>
      </tr>
      <tr>
        <th>INST</th>
        <th>CREDIT DATE</th>
        <th>CREDIT AMOUNT</th>
        <th>DEBIT DATE</th>
        <th>DEBIT AMOUNT</th>
        <th>View</th>
        <button data-del=${sem} class="delete-table">delete table</button>
      </tr>
      ${TD_html}
  
      <td>Total:${total.toLocaleString('en-US',{
        style:'currency',
        currency:'INR',
      })}</td>
      </tr>
  
       </table>
    `;
  
    document.querySelector('.area').innerHTML=TH_html;

    console.log(`${sem} Year Table Displayed`);


document.querySelectorAll('.delete-table').forEach((item)=>{

  item.addEventListener('click',()=>{
    const id=item.dataset.del;
    deleteTable(id);
    assemble();
    deAssemble("area");
    deAssemble('recipt-area');
    
    
    
  });

});


}