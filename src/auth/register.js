// src/auth/register.js
import "../assets/styles/styles.scss";
import "./auth.scss";

const form = document.querySelector("form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = [];

  if (!data.nom || !data.email || !data.password || !data.confirm) {
    errors.push("Tous les champs doivent être remplis.");
  }

  if (!data.email.includes("@")) {
    errors.push("Adresse courriel invalide.");
  }

  if (data.password.length < 6) {
    errors.push("Le mot de passe doit avoir au moins 6 caractères.");
  }

  if (data.password !== data.confirm) {
    errors.push("Les mots de passe ne correspondent pas.");
  }

  errorsList.innerHTML = "";
  if (errors.length > 0) {
    errors.forEach((err) => {
      const li = document.createElement("li");
      li.textContent = err;
      errorsList.appendChild(li);
    });
  } else {
    alert("Inscription réussie (simulation) !");
    form.reset();
  }
});
