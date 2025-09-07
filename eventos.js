// Al hacer clic en el botón, muestra la alerta
document.getElementById("btnSaludar").onclick = () => {
  alert("Hola!");
};

// Al hacer clic en el div, muestra otra alerta
document.getElementById("contenedor").addEventListener("click", () => {
  alert("Hola! Soy el div");
});
