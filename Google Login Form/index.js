
const Password = document.querySelector("#txtPassword");

const checkbox = document.querySelector("#show");


checkbox.addEventListener("click", function(){
    const type = Password.getAttribute("type")==="password"? "text": "password";
    Password.setAttribute("type",type);
});