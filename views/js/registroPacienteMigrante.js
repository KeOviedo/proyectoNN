const migracion = document.querySelector(".migracion");
const LugarCapitaPaciente = document.querySelector(".LugarCapitaPaciente");

migracion.addEventListener("change", () => {
  if (migracion.value === "Si") {
    LugarCapitaPaciente.style.display = 'initial';
  } else {
    LugarCapitaPaciente.style.display = 'none';
  }
});