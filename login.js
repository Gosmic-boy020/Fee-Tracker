import { deAssemble } from "./assemble.js";
import { loginArr,SaveSignUpDetails } from "./loginData.js";
import { updateListner,exsistListner,prePmfTracker } from "./create.js";
import { adminScreen } from "./main.js";
//////

document.querySelector('.signup').addEventListener('click',()=>{
  
  html('SignUp','creat');
  
});

document.querySelector('.signin').addEventListener('click',()=>{
  html('SignIn','login')
})

function html(name,fun){
  let html=``;
  html=`
      <input type="text" class="user-nam pmf-user" placeholder="username">
      <input type="password" class="pass pmf-pass" placeholder="password">
      <input type="checkbox" id="toggleCheck" title="password visible" class="chk">
      <br><br>
      <button class="loged deactive">${name}</button>
      <p class="message"></p>
  `;

  document.querySelector('.login-area').innerHTML=html;
  deAssemble('login-buttons');
  document.querySelector('.loged').addEventListener('click',()=>{
   setUp(fun);
  });
  document.getElementById("toggleCheck").addEventListener("change",function(){
  let input=document.querySelector('.pass');
    if(this.checked){
     input.type='text';
    }else{
      input.type='password';
    }

   
  });
}





function setUp(fun){
  if(fun==='creat'){
  const uname=document.querySelector('.user-nam').value;
  const pasw=document.querySelector('.pass').value;
  const ran=String(Math.random()).substring(2,7);
  const ranu="12345";
  let tru=0;
  let userFal=0;
  if(uname!=''&&pasw!=''){

    loginArr.forEach((item)=>{
      if((item.user_name==uname && item.password==pasw )||item.uniqKey==ran){
        message('name & pass matched');
          if(item.uniqKey==ran){
            console.log('!!!also importent element matched',ran);
            tru+=1;
          }else{
           userFal+=1;
          }
           
      }else{
          message(`user nt found`);
        }
      });
  
    }else{
      message(`enter user & pass`);
      userFal=+1
    }

  if(tru==1){
    message(`user found`);
  }else{
    if(userFal==1){
      message(`facing ***userFal error***>>>> this error occurs only u enter matching user and pass |OR| not entering any details`);

    }else{
      console.log('user not found');
      loginArr.push({
      user_name:uname,
      password:pasw,
      uniqKey:ran
    });
    SaveSignUpDetails();
      console.log('so new user added...');
      message('new user added..');
      setTimeout(()=>{
        document.location.reload();
      },1500)
      
    }
    
  }
}else{
  message('failed to signup  \n');
  
  if(fun=='login'){
    loginToTracker();
  }else{
    message('login failed')
    }

  
}


}

let usernamko=``;
let keyForPree=``;
function loginToTracker(){
  //  const uname=document.querySelector('.user-nam').innerHTML='sunny';
  //  const pasw=document.querySelector('.pass').innerHTML='su';

   ////////

  const uname=document.querySelector('.user-nam').value;
  const pasw=document.querySelector('.pass').value;


  usernamko=uname;
  let key='';

  if(uname=='admin' && pasw=='admin'){
      adminScreen();
      }else{

  if(uname!=''&&pasw!=''){
        loginArr.forEach((item)=>{
          if(uname==item.user_name && pasw==item.password){
            key=item.uniqKey;
            keyForPree=item.uniqKey;
            message(`user:${uname}\n pass:${pasw}\n key:${key}`);
            document.querySelector('.brand').innerHTML=`WELCOME-${uname}`;
             document.querySelector('.brand').title=`<-<-back<-`;
            prePmfTracker(key,usernamko);
            document.querySelector('.brand').addEventListener('click',()=>{
                 prePmfTracker(key,usernamko);
              });
           
          }else{
            
                message('user not found');
              
          }
        });
    }else{
      
        message(`facing ***userFal error***>>>> this error occurs only u enter matching user and pass |OR| not entering any details`);
    
      
    }
      };
  
}


let msgg=``;

function message(msg){
  document.querySelector('.message').innerHTML=msg;
  unmsg();
}


function unmsg(){
  setTimeout(()=>{
    msgg=``;
    message('')
  },10000);
}