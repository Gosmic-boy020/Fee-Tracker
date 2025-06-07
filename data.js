
//.....BUTTONS DATA PRESERV HERE......

export let buttons=JSON.parse(localStorage.getItem('btns'));

if(!buttons){
 buttons=[{
  year:1

},{
  year:2

},{
  year:3

},{
  year:4

}];}

export function saveButtons(){
  localStorage.setItem('btns',JSON.stringify(buttons));
}
//saveButtons();
//console.log(buttons);
/////////--------END----HERE--------/////


///////....FEE DATA STORES HERE..../////

export let arr=JSON.parse(localStorage.getItem('fee'));
if(!arr){
  arr=[{
  year:1,
  ins:1 ,
  cred: "NAN",
  crea:"3,610" ,
  dbed: "24/03/2022",
  dbea: "3,610",
  recipt:"recipts/year-1-recipt-1.pdf"
},{
  year:1,
  ins:2 ,
  cred: "NAN",
  crea:"21,660 ",
  dbed: "25/04/2022",
  dbea: "21,660",
  recipt:"recipts/year-1-recipt-2.pdf"
},{
  year:1,
  ins:3 ,
  cred: "12/08/2022",
  crea:"3,610" ,
  dbed: "NAN",
  dbea: "3,610"
},{
  year:1,
  ins:4 ,
  cred: "NAN",
  crea:"3,610" ,
  dbed: "17/05/2022",
  dbea: "3,610"
},{
  year:1,
  ins:5 ,
  cred: "30/11/2022",
  crea:"3,610" ,
  dbed: "NAN",
  dbea: "3,610"
},{
  year:2,
  ins:1 ,
  cred: "01/05/2023",
  crea:"14,440",
  dbed: "MY CLASS",
  dbea: "14,440"
},{
  year:2,
  ins:2 ,
  cred: "19/08/2023",
  crea:"25,860",
  dbed: "MY CLASS",
  dbea: "21,660"
},{
  year:3,
  ins:1 ,
  cred: "22/05/2024",
  crea:"14,440" ,
  dbed: "15/04/2024",
  dbea: "14,440"
},{
  year:3,
  ins:2 ,
  cred: "10/07/2024",
  crea:"25,860" ,
  dbed: "06/08/2024",
  dbea: "21,660"
},{
  year:4,
  ins:1 ,
  cred: "27/01/2025",
  crea:"17,240" ,
  dbed: "11/02/2025",
  dbea: "14,440"
},{
  year:4,
  ins:2 ,
  cred: "24/02/2025",
  crea:"25,860",
  dbed: "07/03/2025",
  dbea: "21,660"
},];

}

export function saveToStorage(){
  localStorage.setItem('fee',JSON.stringify(arr));
}

// saveToStorage();
// console.log(arr);

export function deleteTable(id){
  const Arr=[];
arr.forEach((item)=>{    
    if(id!=item.year){
      Arr.push(item);
    }
    
    // console.log(newArr);
     //arr=newArr;
    //saveToStorage();
    });
   arr=Arr;
   saveToStorage();

  const btarr=[];
   buttons.forEach((item)=>{
    if(id!=item.year){
      btarr.push(item);
    }
   });
   buttons=btarr;
   saveButtons();
    
    console.log(`${id} table deleted`,Arr);
    console.log(arr);
  }