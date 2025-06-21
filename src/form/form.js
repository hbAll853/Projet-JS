// src/form/form.js
import "../assets/styles/styles.scss";
import "./form.scss";

const form = document.querySelector("form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = [];

  if (!data.nom || !data.maison || !data.prix || !data.image || !data.description) {
    errors.push("Tous les champs sont requis.");
  }

  if (data.description.length < 20) {
    errors.push("La description doit contenir au moins 20 caractères.");
  }

  if (isNaN(parseFloat(data.prix)) || parseFloat(data.prix) <= 0) {
    errors.push("Le prix doit être un nombre valide et positif.");
  }

  errorsList.innerHTML = "";
  if (errors.length > 0) {
    errors.forEach((e) => {
      const li = document.createElement("li");
      li.textContent = e;
      errorsList.appendChild(li);
    });
  } else {
    alert("Jeu validé ! (stockage non implémenté)");
    form.reset();
  }
});
