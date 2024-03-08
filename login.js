
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById('btn-submit')


let getEmail = localStorage.getItem('email');
let getPassword = localStorage.getItem('password');



btn.addEventListener('click',(e)=>{
  e.preventDefault();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === getEmail && passwordValue === getPassword ){
        setTimeout(()=>{
          window.location = 'index.html'
        },1000)
    }else{
      alert(`Please Check Your Data Again`)
    }
  })