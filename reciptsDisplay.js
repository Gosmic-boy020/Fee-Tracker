import { arr } from "./data.js";
export function pdfView(){
document.querySelectorAll('.recipts').forEach((reciptButton)=>{
    reciptButton.addEventListener('click',()=>{
      let html=``;
      const recipt_num=reciptButton.dataset.inst;
      const yarr=reciptButton.dataset.y;
      let recipt_loco;
      const ran=String(Math.random()).substring(2,8);
      const dat=new Date();
      const day=dat.getDate();
      const month=dat.getMonth();
      const currenrYear=dat.getFullYear();
      arr.forEach((item)=>{
        if(item.year==yarr && item.ins==recipt_num){
          recipt_loco=item;
          
         
        }
      })

           html=`
            
            
            <div class="container">
            <h4 class="pdf-close pdf-closer"title="close pdf">X</h4>
              <img src="logo.png" alt="logo" class="logo">
              
              <div class="clg-name">
              <h3 class="h3">DVR & Dr. HS</h3>
              <h1 class="h1">MIC College of Technology</h1>
              </div>
            
              <table class="fee-name">
                <tr>
                  <th class="recipt-title table-styles-deativate">Fee Recipt</th>
                </tr>
              </table>
              <text class="transaction-no">Transaction.No: ${ran}</text>
              <text class="db-date">Date:${day}/${month}/${currenrYear}</text>
              <p class="user-name">Name:Prasanna Kumar M</p>
              <text class="course">Course:</text>
              <text class="pay-year">Year: ${recipt_loco.year}</text>
              <text class="roll-num">Roll No:21H71A05A6</text>
              <table class="fee-table">
                <tr>
                  <th  class="table-styles-deativate">SI.NO.</th>
                  <th class="table-styles-deativate">PARTICULARS</th>
                  <th class="table-styles-deativate">AMOUNT</th>
                </tr>

                <tr>
                  <td class="table-styles-deativate">1</td>
                  <td class="table-styles-deativate">Tution Fee</td>
                  <td class="table-styles-deativate">${recipt_loco.dbea}</td>
                </tr>
                <tr>
                  <td class="table-styles-deativate"></td>
                  <td class="table-styles-deativate">Total</td>
                  <td class="table-styles-deativate">${recipt_loco.dbea}</td>
                </tr>
              </table>
              <P>This is a computer generated reciept. Hence, no signatures are required.
          </P>
              <button class="print-btn deactive">Print This Page</button>
            </div>
            `;
     
      document.querySelector('.recipt-area').innerHTML=html;
      const elemen=document.querySelector('.container');
      elemen.style.display = "block";
        setTimeout(() => {
          elemen.classList.add("show");
        }, 10);
      
      document.querySelector('.pdf-close').addEventListener('click',()=>{
        pdfclose();
      });


     
    });

    });
   
}

export function pdfclose(){
  document.querySelector('.recipt-area').innerHTML='';
}

