// src/produit/produit.js
import "../assets/styles/styles.scss";
import "./produit.scss";
import { produits } from "../data/products.js";

const content = document.querySelector(".content");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const jeu = produits.find((p) => p.id == id);

if (jeu) {
  content.innerHTML = `
    <div class="card">
      <h1>${jeu.nom}</h1>
      <img src="${jeu.image}" alt="${jeu.nom}">
      <h3>Éditeur : ${jeu.maison}</h3>
      <p><strong>Description :</strong> ${jeu.description}</p>
      <p><strong>Prix :</strong> ${jeu.prix} $</p>
      <div class="product-actions">
        <button id="ajouter-panier" class="btn btn-primary">Ajouter au panier</button>
      </div>
    </div>
  `;

  document.querySelector("#ajouter-panier").addEventListener("click", () => {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.push(jeu);
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("Produit ajouté au panier !");
  });
} else {
  content.textContent = "Jeu non trouvé.";
}
