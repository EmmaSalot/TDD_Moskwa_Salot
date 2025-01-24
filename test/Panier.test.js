//En tant qu'utilisateur, je veux pouvoir calculer le prix total de mon panier avec la TVA

// Quand j'ai un panier avec des articles, j'ai le total du prix de mon panier avec la TVA et quantités.
// Quand j'ai un panier vide, j'ai un total de 0.
// Quand j'ai un panier avec un article possédant un prix négtif, j'ai une erreur.
// Quand jai un panier avec un article ne possédant pas de prix, j'ai une erreur.
// Quand j'ai un panier avec un article possédant une quantité négative, j'ai une erreur.
// Quand j'ai un panier avec un article possédant une quantité négative, j'ai une erreur.
// Quand le calcul de la TVA est incorrect, j'ai une erreur.

const {CategoryEnum, Product} = require("../src/Product");
const { calculateTTCPrice } = require("../src/Panier");
describe("Calculer le prix total du panier", () => {
    test("Calculer le total TTC pour un panier valide", () => {
        const panier = [
            new Product(1, "Livre A", 10, CategoryEnum.BOOK, 2), 
            new Product(2, "DVD B", 15, CategoryEnum.DVD, 1), 
            new Product(3, "Jeu vidéo C", 50, CategoryEnum.VIDEO_GAME, 1),
        ];

        const total = calculateTTCPrice(panier);
        expect(total).toBe(97.6);
    });

    test("Calculer le total pour un panier vide", () => {
        const panier = [];
        const total = calculateTTCPrice(panier);
        expect(total).toBe(0);
    });

    test("Erreur pour un produit avec un prix négatif", () => {
        const panier = [new Product(1, "Livre A", -10, CategoryEnum.BOOK, 1)];
        expect(() => calculateTTCPrice(panier)).toThrowError("Le prix d'un produit doit être positif.");
    });

    test("Erreur pour un produit sans prix", () => {
        const panier = [new Product(1, "Livre A", undefined, CategoryEnum.BOOK, 1)];
        expect(() => calculateTTCPrice(panier)).toThrowError("Un produit ne possède pas de prix.");
    });

    test("Erreur pour un produit avec une quantité négative", () => {
        const panier = [new Product(1, "Livre A", 10, CategoryEnum.BOOK, -2)];
        expect(() => calculateTTCPrice(panier)).toThrowError("La quantité d'un produit doit être positive.");
    });

    test("Erreur pour un élément invalide dans le panier", () => {
        const panier = [
            { id: 1, name: "Livre A", price: 10, category: CategoryEnum.BOOK, quantity: 1 },
        ];
        expect(() => calculateTTCPrice(panier)).toThrow();
    });
});
