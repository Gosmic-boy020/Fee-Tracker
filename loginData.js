export let loginArr=JSON.parse(localStorage.getItem('login'));

if(!loginArr){
  loginArr=[
  {
    user_name:"sunny",
    password:"su",
    uniqKey:"12345"
  }]

}

export function SaveSignUpDetails(){
  localStorage.setItem('login',JSON.stringify(loginArr));
}


