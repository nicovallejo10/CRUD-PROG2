const $submit = document.getElementById("submit"),
  $password = document.getElementById("password"),
  $username = document.getElementById("username"),
  $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
  if (e.target === $visible) {
    if ($visible.checked === false) $password.type = "password";
    else $password.type = "text";
  }
});

document.addEventListener("click", (e) => {
  if (e.target === $submit) {
    e.preventDefault();
    const usernameValue = $username.value;
    const passwordValue = $password.value;


    if (usernameValue === "pilo" && passwordValue === "perez") {
      window.location.href = "index.html";
    alert("Bienvenido Usuario/Empleado");
    
  }else if (usernameValue === "enzo" && passwordValue === "123") {
    window.location.href = "index2.html";
  alert("Bienvenido Admin");
  
} else {

  alert("Usuario o contraseña incorrectos, vuelva a intentar");
}
}
});
