const tieneEpsPaciente = document.querySelector(".tieneEpsPaciente");
const EpsPaciente = document.querySelector(".EpsPaciente");
const epsPacienteNo = document.querySelector(".epsPacienteNo");


tieneEpsPaciente.addEventListener("change", () => {
  if (tieneEpsPaciente.value === "No") {
    epsPacienteNo.style.display = 'initial';
    EpsPaciente.style.display = 'none';
  } else {
    EpsPaciente.style.display = 'initial';
    epsPacienteNo.style.display = 'none';

  }
});