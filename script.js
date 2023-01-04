//collecting  DOM elements

const E_name = document.querySelector("#f-name");
const E_email = document.querySelector("#f-email");
const E_password = document.querySelector("#f-password");
const notification = document.querySelector(".notify");
const overlay = document.querySelector(".overlay");

const submit_btn = document.querySelector("#submit-btn");
const close_noti = document.querySelector("#close-not-btn");

//checking for user in local storage
const user = localStorage.getItem("user");

if (user) {
  //   alert("User found !");
  notification.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//closing notification
close_noti.addEventListener("click", function () {
  notification.classList.add("hidden");
  overlay.classList.add("hidden");
});

// storing inputs to local storage
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();

  //trim any blank spaces
  const email = E_email.value.trim();
  const name = E_name.value.trim();
  const password = E_password.value.trim();

  if (email === "" || name === "" || password === "") {
    // console.log("Enter fields");
    alert("Please fill the input fileds and then submit.");
    return;
  }

  //create an object to store in local storage
  const user = {
    email: email,
    name: name,
  };

  E_email.value = "";
  E_name.value = "";
  E_password.value = "";
  E_email.blur();
  E_name.blur();
  E_password.blur();

  //storing our user in local storage
  localStorage.setItem("user", JSON.stringify(user));
});
