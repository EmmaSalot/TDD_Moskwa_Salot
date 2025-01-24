//En tant qu'utilisateur je souhaite calculer la TVA d'un produit.

// - Lorsque le produit est un livre, alors le prix augmente de 5.5%.
// - Lorsque le produit est un DVD, alors le prix augmente de 10%.
// - Lorsque le produit est un jeux vidéo, alors le prix augmente de 20%.
// - Lorsque le produit est un autre type, alors le prix augmente de 20%.
//  si pas de catégorie erreur
// - Inférieur à 0
// si pas de prix
// - Lorsque qu'il n'y a pas de produit, alors j'obtiens une erreur.

const {CategoryEnum, Product} = require("../src/Product");
const { tvaForProductCategory } = require("../src/TVA");
describe("Quand j'essaie de calculer la TVA d'un produit", () => {
    test("Lorsque le produit est un livre, alors le prix augmente de 5.5%", () => {
        let product = new Product(1,"Harry Potter", 10, CategoryEnum.BOOK,1);
        product = tvaForProductCategory(product);
        expect(product.price).toBe(10.55);
    });
        
    test("Lorsque le produit est un DVD, alors le prix augmente de 10%",() => {
        let product = new Product(1,"Inception",14.99, CategoryEnum.DVD, 1);
        let product1 = tvaForProductCategory(product);
        expect(product1.price).toBe(16.49);
    });
    test("Lorsque le produit est un jeux vidéo, alors le prix augmente de 20%",() => {
        let product = new Product(1,"The Witcher 3",39.99, CategoryEnum.VIDEO_GAME, 1);
        let product1 = tvaForProductCategory(product);
        expect(product1.price).toBe(47.99);
    });

    test("Lorsque le produit est un autre type, alors j'obtiens une erreur",() => {
        let product = new Product(1,"The Witcher 3",39.99, CategoryEnum.OTHER, 1);
        expect(() => tvaForProductCategory(product)).toThrowError("Categorie incorrecte");
    });

    test("Lorsque qu'il n'y a pas de produit, alors j'obtiens une erreur",() => {
        expect(() => tvaForProductCategory(undefined)).toThrowError("Produit requis");
    });

    test("Lorsque le produit n'a pas de catégorie alors j'obtiens une erreur",() => {
        let product = new Product(1,"The Witcher 3",39.99, undefined, 1);
        expect(() => tvaForProductCategory(product)).toThrowError("Categorie incorrecte");
    });
    test("Lorsque qu'il n'y a pas de prix affecter au produit, alors j'obtiens une erreur",() => {
        let product = new Product(1,"The Witcher 3",undefined, CategoryEnum.BOOK, 1);
        expect(() => tvaForProductCategory(product)).toThrowError("Le produit n'a pas de prix");
    });
});