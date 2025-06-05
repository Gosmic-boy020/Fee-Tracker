 import { buttons,arr,saveButtons,saveToStorage } from "./data.js";
 import { assemble,deAssemble } from "./assemble.js";
 function test(){
      let html=``;
        html=`
        <input type="text" placeholder="Year" class="year"><br>
        <br>
        <input type="text" placeholder="Installment.no" class="ins-no">
        <p>CREDIT AREA</p>
        <input type="text" placeholder="CREDIT DATE" class="credit-date">
        <input type="text" placeholder="CREDIT AMOUNT" class="credit-amount">
        


        <p>DEBITED AREA</p>
        <input type="tect" placeholder="DEBITED DATE" class="debit-date">
        <input type="text" placeholder="DEBITED AMOUNT" class="debit-amount">
        <button class="check deactive">same as crd</button>
        <BR></BR>

        <button class="submit">Submit</button>
        `;

         

      document.querySelector('.activity-Buttons').innerHTML=html;


      document.querySelector('.submit').addEventListener('click',()=>{
        newAdmission();
        setTimeout(()=>{
          deAssemble("activity-Buttons");
        },1000);
      });
let key='';
      document.querySelector('.check').addEventListener('click',(event)=>{
      const cr_date=document.querySelector('.credit-date').value;
       const cr_amount=document.querySelector('.credit-amount').value;
       
       if(cr_date){
        key+=event.key
          document.querySelector('.debit-date').value=cr_date;
          document.querySelector('.debit-amount').value=cr_amount;
       }else{
        console.log("fill first||error",event);
       }
    });
    };
    	
    
    

    
    function newAdmission(){
       const yr=Number(document.querySelector('.year').value);
       const insta=Number(document.querySelector('.ins-no').value);
       const cr_date=document.querySelector('.credit-date').value;
       const cr_amount=document.querySelector('.credit-amount').value;
       const db_date=document.querySelector('.debit-date').value;
       const db_amount=document.querySelector('.debit-amount').value;
       let tru=0;
       let fal=0;
      function btnCreat(){
       buttons.forEach((item)=>{
        
          if(item.year==yr){
             tru+=1;
          }else{
            fal+=1;

            }

            
       });

       if(tru==1 || yr==0){
        console.log('dont add to btns');
       }else{
        if(tru==0){
          buttons.push({
            year:yr
          })
          saveButtons();
          console.log('add to buttons')
        }
       }
      }

       console.log(cr_date);
            console.log("false",fal);

      
       
       if(yr!=0 && insta!=0){
        console.log('yr and ins is cross');
        if((cr_date!='' ) && (Number(cr_amount)!=0)){
          console.log('crd and cra is cross');
          if((db_date!='')&&(Number(db_amount)!=0)){
            console.log('dbd and abd is cross');
            btnCreat();
            arr.push({year:yr,ins:insta,cred:cr_date,crea:cr_amount,dbed:db_date,dbea:db_amount});
            console.log('new data pushed to array');

            saveToStorage();
          }
        }
        
      }

       assemble();
       

      //  validation();
      //   //console.log('yr',yr)
      //   let newitem=[];
      //   const tru=true;
      //   const fal=false;
      //   let decision=false;
      //   arr.forEach((item)=>{
      //     if(yr==item.year){
      //         newitem.push(item);
      //     }else{
      //       console.log(fal);
      //     }
      //   });

      //   console.log(newitem);
        
        
      //   newitem.forEach((item)=>{
      //     if(insta==item.ins || insta==0){
      //       decision=tru;
      //       console.log(tru)
      //     }
      //   }); 

      //   if(decision==true){
      //     console.log('decision true')
      //   }else{
      //     newitem.push({
      //           year:yr,
      //           ins:insta,
      //           cred:cr_date,
      //           crea:cr_amount,
      //           dbed:db_date,
      //           dbea:db_amount,
                
      //       });

      //       console.log(newitem);
      //   }       

      //console.log(yr,insta,cr_date,cr_amount,db_date,db_amount);
      
       //document.location.reload();

      
    }

    // function validation(){
    //    const yr=Number(document.querySelector('.year').value);
    //    const insta=Number(document.querySelector('.ins-no').value);
    //    const cr_date=document.querySelector('.credit-date').value;
    //    const cr_amount=document.querySelector('.credit-amount').value;
    //    const db_date=document.querySelector('.debit-date').value;
    //    const db_amount=document.querySelector('.debit-amount').value;

    //   if(yr==null||insta==null||cr_date==null||cr_amount==null||db_date==null||db_amount===null){
    //     console.log('something is null');
    //   }
      
    // }


    document.querySelector('.update').addEventListener('click',()=>{
    console.log('click');
    test();        
      deAssemble("demo-buttons");

    });


    document.querySelector('.exist').addEventListener('click',()=>{
    console.log('exsist-clicked');
    document.querySelector('.activity-Buttons').innerHTML=null;
    assemble();
    
    });

  