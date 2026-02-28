const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.getElementById("container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function login(e) {
  e.preventDefault();

  const email = document.querySelector('.sign-in input[type="email"]').value;

  // Extract name from email (demo purpose)
 const name = email.split("@")[0]
  .replace(/[^a-zA-Z]/g, "")
  .replace(/^./, c => c.toUpperCase());


  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userName", name);

  window.location.href = "index.html";
}
