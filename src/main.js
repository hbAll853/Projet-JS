import "./assets/styles/styles.scss";
import "./main.scss";
import { produits } from "./data/products.js";

const content = document.querySelector(".content");
const btnSuivant = document.querySelector("#btn-suivant");
const btnPrecedent = document.querySelector("#btn-precedent");

let index = 0;
const PRODUITS_PAR_PAGE = [8, 8, 6];

function afficherProduits() {
  content.innerHTML = "";

  const pageActuelle = Math.floor(index / 8);
  document.body.classList.toggle("page-2", pageActuelle === 1);
  const nombreProduits = PRODUITS_PAR_PAGE[pageActuelle] || 0;

  const produitsAfficher = produits.slice(index, index + nombreProduits);

  produitsAfficher.forEach((jeu) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${jeu.image}" alt="${jeu.nom}">
      <h2>${jeu.nom}</h2>
      <h3>${jeu.maison}</h3>
      <p>${jeu.prix} $</p>
      <a href="./produit/produit.html?id=${jeu.id}">Voir</a>
    `;
    content.appendChild(div);
  });

  btnPrecedent.style.display = index === 0 ? "none" : "inline-block";
  btnSuivant.style.display =
    index + nombreProduits >= produits.length ? "none" : "inline-block";
}

btnSuivant.addEventListener("click", () => {
  const pageActuelle = Math.floor(index / 8);
  const nombreProduits = PRODUITS_PAR_PAGE[pageActuelle] || 0;
  index += nombreProduits;
  afficherProduits();
});

btnPrecedent.addEventListener("click", () => {
  const pageActuelle = Math.floor(index / 8);
  const pagePrecedente = pageActuelle - 1;

  if (pagePrecedente >= 0) {
    // Recalculer l’index de départ de la page précédente
    index = PRODUITS_PAR_PAGE.slice(0, pagePrecedente).reduce(
      (acc, val) => acc + val,
      0
    );
    afficherProduits();
  }
});

afficherProduits();
