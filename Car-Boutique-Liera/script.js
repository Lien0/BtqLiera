var submit = document.getElementById("submit");
var email = document.getElementById("EmailContact");
var comments = document.getElementById("TextContact");
var Info = [{}];
function saveInfo() {
  let save = {
    Email: email.value,
    Comments: comments.value,
  };
  Info.push(save);
}

submit.addEventListener("click", saveInfo);
