let btnShow = document.getElementById("btn-show");
let btnHide = document.getElementById("btn-hide");
let toggle = document.getElementById("toggle");
let user = document.getElementById("user");
let links = document.getElementById("link");
let link = document.querySelector(".link");
let chekUser = localStorage.getItem("username");
let btnBack = document.getElementById("back");
let btnCartRemove = document.getElementById("btn-cart-page");
let cartPage = document.getElementById("cart-page");
let addCart = document.querySelectorAll(".add-cart");
let btnRegister = document.getElementById("btn-register");
btnShow.addEventListener("click", function () {
  toggle.classList.toggle("show");
});
btnHide.addEventListener("click", function () {
  toggle.classList.toggle("show");
});

let btnShop = document.getElementById("btn-shop");
let shopCart = document.querySelector(".shop-page .container");
let btnShopHide = document.getElementById("btn-shop-hide");

btnShop.addEventListener("click", () => {
  shopCart.style.display = "block";
});
btnShopHide.addEventListener("click", () => {
  shopCart.style.display = "none";
});

if (chekUser) {
  links.style.display = "none";
  link.style.display = "none";
  user.textContent = `Hi ${chekUser.slice(0, 5)}.`;
}
let emailCheck = localStorage.getItem('email');
let passwordCheck = localStorage.getItem('password');

addCart.forEach((e) => {
  e.addEventListener("click", () => {
    if(emailCheck && passwordCheck){
      cartPage.style.display = "block";
    }
    else{
      window.location = 'login.html'
    }
  });
});

user.addEventListener('click',()=>{
  localStorage.clear();
  location.reload();
})
btnBack.addEventListener("click", () => {
  cartPage.style.display = "none";
});
btnCartRemove.addEventListener("click", () => {
  cartPage.style.display = "none";
});
btnRegister.addEventListener("click", () => {
  alert("The product will arrive in 5 days :)");
  cartPage.style.display = "none";
});
    
      const form = document.getElementById("form");
      const result = document.getElementById("result");
      form.addEventListener("submit", function (e) {
        const formData = new FormData(form);
        e.preventDefault();
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait...";
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        })
          .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
              result.innerHTML = json.message;
            } else {
              console.log(response);
              result.innerHTML = json.message;
            }
          })
          .catch((error) => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
          })
          .then(function () {
            form.reset();
            setTimeout(() => {
              result.style.display = "none";
            }, 3000);
          });
      });
    
