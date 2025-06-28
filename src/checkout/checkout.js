import "../assets/styles/styles.scss";
import "./checkout.scss";


const form = document.querySelector("#checkout-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const panier = JSON.parse(localStorage.getItem("panier")) || [];

  if (panier.length === 0) {
    alert("Votre panier est vide.");
    return;
  }

  alert("Paiement simulé avec succès !");
  localStorage.removeItem("panier");
  window.location.href = "/index.html";
});
