// src/auth/login.js
import "../assets/styles/styles.scss";
import "./auth.scss";

const form = document.querySelector("form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = [];

  if (!data.email || !data.password) {
    errors.push("Les deux champs sont obligatoires.");
  }

  if (!data.email.includes("@")) {
    errors.push("Format de courriel invalide.");
  }

  if (data.password.length < 6) {
    errors.push("Mot de passe trop court.");
  }

  errorsList.innerHTML = "";
  if (errors.length > 0) {
    errors.forEach((err) => {
      const li = document.createElement("li");
      li.textContent = err;
      errorsList.appendChild(li);
    });
  } else {
    alert("Connexion réussie (simulation) !");
    form.reset();
  }
});
