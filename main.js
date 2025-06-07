
import { assemble ,deAssemble} from './assemble.js';
import { updateListner,exsistListner } from './create.js';
import { arr,buttons } from './data.js';
import { loginArr } from './loginData.js';
// export function mainDisplay(){

//   updateListner();
//   exsistListner();
// };


export function adminScreen(){
  document.querySelector('.userNameArea').innerHTML='ADMIN ON DUTY';
  document.querySelector('.brand').innerHTML='PMF-ADMIN'
  deAssemble('login-area');
  let info=``;
  
  let row_1=``;
  let row_2=``;
  let row_3=``;
  let row_4=``;

      buttons.forEach((btnitem)=>{
              row_2+=`
            <tr>
              <td></td>
              <td>${JSON.stringify(btnitem)}</td>
              <td></td>
              <td></td>
            </tr>
            `;
          });


      loginArr.forEach((loginar)=>{
          row_3+=`
            <tr>
              <td></td>
              <td></td>
              <td>${JSON.stringify(loginar)}</td>
              <td></td>
            </tr>
            `;
          });


 
      arr.forEach((aritem)=>{
              row_4+=`
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>${JSON.stringify(aritem)}</td>
            </tr>
            `;
          });


  info=`
  <table>
    <tr>
      <Th>SI.NO</Th>
      <th>BUTTONS</th>
      <th>USERS</th>
      <th>FEE DATA</th>
    </tr>
    
      <tr>
        <td>${row_1}</td>
        <td>${row_2}</td>
        <td>${row_3}</td>
        <td>${row_4}</td>
      </tr>
      
  </table>
  `;
  document.querySelector('.area').innerHTML=info;
};