const { tvaForProductCategory } = require("./TVA");
const { Product } = require("./Product");

function calculateTTCPrice(panier) {
    if (!Array.isArray(panier)) {
        throw new Error("Le panier n'est pas valide.");
    }
    if (panier.length === 0) {
        return 0;
    }
    if (panier.some((product) => !(product instanceof Product))) {
        throw new Error("Le panier contient un élément invalide.");
    }
    if (panier.some((product) => product.price === undefined)) {
        throw new Error("Un produit ne possède pas de prix.");
    }
    if (panier.some((product) => product.price < 0)) {
        throw new Error("Le prix d'un produit doit être positif.");
    }
    if (panier.some((product) => product.quantity <= 0)) {
        throw new Error("La quantité d'un produit doit être positive.");
    }
    let totalTTC = 0;
    panier.forEach((product) => {
        const productWithTVA = tvaForProductCategory(product); 
        totalTTC += productWithTVA.price * product.quantity; 
    });
    return parseFloat(totalTTC.toFixed(2)); 
}

module.exports = { calculateTTCPrice };
