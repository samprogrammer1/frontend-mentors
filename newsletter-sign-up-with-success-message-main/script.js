const container = document.querySelector(".container");
const singUpCardE1 = document.querySelector(".from-card");
const successCardEl = document.querySelector(".success-card");
const form = document.querySelector(".form");
const emailIn = document.getElementById("email");
const submitBtn = document.querySelector(".submit-btn");
const submitedEmail = document.querySelector(".submitted_email");
const dissmissbtn = document.querySelector(".diss-miss-btn");

submitBtn.addEventListener("click", submitEmail);
dissmissbtn.addEventListener("click", toggleCards);

console.log("singUpCardE1:", singUpCardE1);
console.log("successCardEl:", successCardEl);


function toggleCards() {
    singUpCardE1.classList.toggle("hidden");
    successCardEl.classList.toggle("hidden");
    container.classList.toggle("success");
}

// email validation
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function submitEmail(e) {
    e.preventDefault();

    
  
    // valid email
    if (validateEmail(emailIn.value)) {
      submitedEmail.innerText = emailIn.value;
      toggleCards();
    console.log("remove");
      emailIn.value = "";
      form.classList.remove("error");
    }
    // invalid email
    else {
        console.log("add");
        form.classList.add("error");
    }
}