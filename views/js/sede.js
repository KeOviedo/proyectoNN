const tieneIpsPaciente = document.querySelector(".tieneIpsPaciente");
const nombreIpsPaciente = document.querySelector(".nombreIpsPaciente");

tieneIpsPaciente.addEventListener("change", () => {
  if (tieneIpsPaciente.value === "Si") {
    nombreIpsPaciente.style.display = 'initial';
  } else {
    nombreIpsPaciente.style.display = 'none';
  }
});