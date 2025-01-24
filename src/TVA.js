const {CategoryEnum, Product} = require('./Product');
function tvaForProductCategory(product) {
    if(!(product instanceof Product)){
        throw new Error("Produit requis");
    }
    if(product.category === undefined){
        throw new Error("Categorie incorrecte");
    }
    if(product.price === undefined){
        throw new Error("Le produit n'a pas de prix");
    }
    let TVA = 0;
    if (product.category === CategoryEnum.BOOK) {
        TVA = product.price * 0.055;
    } else if (product.category === CategoryEnum.DVD) {
        TVA = product.price * 0.1;
    } else if (product.category === CategoryEnum.VIDEO_GAME) {
        TVA = product.price * 0.2;    
    } else {
        TVA = product.price * 0.2;
    }
    product.price += TVA;
    // arrondi à 2 chiffres après la virgule
    product.price = Math.round(product.price * 100) / 100;
    return product;
}
module.exports = {tvaForProductCategory};