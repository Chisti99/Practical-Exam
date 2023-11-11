document.addEventListener("DOMContentLoaded", function () {
  function handleSubmit(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
});
