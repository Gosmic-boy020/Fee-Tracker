import { arr,deleteTable } from "./data.js";
import { yearButtonDev } from "./yearsButtons.js";
import { assemble, deAssemble } from "./assemble.js";
import { loginArr } from "./loginData.js";
export function claluculationTable(sem,user11111){
  const userKey=user11111;
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
        <td class="SI-NO">${item.ins}</td>
        <td>${item.cred}</td>
        <td>${loc1.toLocaleString('en-US',{style:'currency',currency:'INR',})}</td>
        <td>${item.dbed}</td>
        <td>${dbnum1.toLocaleString('en-US',{style:'currency',currency:'INR',})}</td>
        <td class="recipt-tb-data">
        <button class="recipts deactive recipt-button" data-inst="${item.ins}" data-y=${item.year}>Recipt</button>
        </td>
        
      
      `;
        
        let num=item.dbea;
        let n=Number(num.split(",").join(""));
        total+=n;
    }
  
    });

    let userName=``;

    loginArr.forEach((item)=>{
      if(userKey==item.uniqKey){
        userName=item.user_name;
      }
    });
  
    TH_html=`
      <hr>
       <table class="money-table">
      <tr>
        <th class="">${sem} year</th>
        <th class="details">Name:${userName}</th>
        <th class="">${userName}</th>
        <th class="details">${userName}</th>
      </tr>
      <tr>
        <th>INST</th>
        <th>CREDIT DATE</th>
        <th>CREDIT AMOUNT</th>
        <th>DEBIT DATE</th>
        <th>DEBIT AMOUNT</th>
        <th>View</th>
        <th class="del"><button data-del=${sem} class="delete-table ">delete table</button></th>
      </tr>
      ${TD_html}
  
      <td class="amount-total">Total:${total.toLocaleString('en-US',{
        style:'currency',
        currency:'INR',
      })}</td>
      </tr>
  
       </table>
       <hr>
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