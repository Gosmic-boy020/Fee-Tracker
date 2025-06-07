 import { buttons,arr,saveButtons,saveToStorage } from "./data.js";
 import { assemble,deAssemble } from "./assemble.js";
  function test(prev1){
      let html=``;
        html=`
        <div class="pmf-create-area">
          <div class="yrs-ins">
            <text class="pmf-creat-text">Enter Year:</text>
            <input type="text" placeholder="No. Only" class="year"><br>

            <text class="pmf-creat-text">Enter Installment.No:</text>
            <input type="text" placeholder="No's Only" class="ins-no">
          </div>

            <div class="area-credit">
              <br><text  style="background-color:white;">CREDIT AREA</text><br>
              <text class="pmf-creat-text">Enter Amount Credit Date:</text>
              <input type="text" placeholder="CREDIT DATE" class="credit-date">
              <text class="pmf-creat-text">Enter Credited Amount:</text>
              <input type="text" placeholder="Number's only" class="credit-amount">
            </div>

                <div class="area-debit">
                  <br><text style="background-color:white;">DEBITED AREA</text><br>
                  <text class="pmf-creat-text">Enter Debit Date:</text>
                  <input type="tect" placeholder="DEBITED DATE" class="debit-date"><br>

                  <text class="pmf-creat-text">Enter Debit Amount:</text>
                  <input type="text" placeholder="Number's only" class="debit-amount">

                  <button class="check deactive">same as crd</button>
                </div><br><br>

       <center> <button class="submit">Creat</button></center>
        </div>
        
        `;

         

      document.querySelector('.activity-Buttons').innerHTML=html;


      document.querySelector('.submit').addEventListener('click',()=>{
        newAdmission(prev1);
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
    	
    
    

    
    function newAdmission(prev11){
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

       assemble(prev11);
       

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

export function updateListner(previ){
    document.querySelector('.update').addEventListener('click',()=>{
    console.log('click');
      test(previ);        
      deAssemble("demo-buttons");

    });
  }
  

  export function exsistListner(user1){

    document.querySelector('.exist').addEventListener('click',()=>{
    console.log('exsist-clicked');
    document.querySelector('.activity-Buttons').innerHTML=null;
    assemble(user1);
    
    });
    console.log('existencepree:',user1);
  }



  let prevKey='';
  let un=``;
  export function prePmfTracker(uniqKeyPre,u_n){
      if(uniqKeyPre){
        prevKey=uniqKeyPre;
        un=u_n;
        console.log('prevv key changed')
      }
     const html=`
            <div class="activity-Buttons">
                  <button class="update">creat</button>
                  <button class="exist">exsitance</button>
              </div>
            `;
            document.querySelector('.login-area').innerHTML=html;
            document.querySelector('.userNameArea').innerHTML=`USER:${un}`;

            updateListner(prevKey);
            exsistListner(prevKey);
            deAssemble('demo-buttons');
            deAssemble('area');
            deAssemble('recipt-area');
      console.log('prre method load with key:',prevKey);
  }
    