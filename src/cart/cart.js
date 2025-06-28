import "../assets/styles/styles.scss";
import "./cart.scss";

const cartContainer = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total-price");

// Charger les produits du panier depuis localStorage
let panier = JSON.parse(localStorage.getItem("panier")) || [];

function displayCart() {
  cartContainer.innerHTML = "";

  if (panier.length === 0) {
    cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
    totalDisplay.textContent = "0.00";
    return;
  }

  let total = 0;

  panier.forEach((item, index) => {
    total += parseFloat(item.prix);

    const div = document.createElement("div");
    div.className = "cart-item card";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.nom}" />
      <div>
        <h3>${item.nom}</h3>
        <p>${item.maison}</p>
        <p>${item.prix} $</p>
        <button data-index="${index}" class="btn btn-secondary">Supprimer</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  totalDisplay.textContent = total.toFixed(2);

  // Gestion des suppressions
  const boutons = document.querySelectorAll(".btn-secondary");
  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = btn.dataset.index;
      panier.splice(i, 1);
      localStorage.setItem("panier", JSON.stringify(panier));
      displayCart();
    });
  });
}

// Initialisation
displayCart();
