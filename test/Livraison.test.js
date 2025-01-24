// - Total < 50 : frais de 10 euros. - 50 ≤ Total < 100 : frais de 5 euros. - Total ≥ 100 : livraison gratuite.
//En tant qu'utilisateur, je veux pouvoir calculer le prix de livraison selon le prix de mon panier.
//  Quand j'ai un panier à moins de 50 euros, alors le prix de la livraison est de 10 euros.
// Quand j'ai un panier entre 50 et 100 euros, alors le prix de la livraison est de 5 euros.
// Quand j'ai un panier à partir de 100 euros, alors le prix de la livraison est gratuit.
// Quand j'ai un panier avec un total inférieur à 0, alors j'ai une erreur.
// Lorsque le calcul du total a remonté une erreur, alors cette erreur est remontée.

const { calculateShippingFees } = require("../src/Livraison");

describe("Calculer les frais de livraison", () => {
    test("Total < 50 : frais de 10 euros", () => {
        const total = 30;
        const fees = calculateShippingFees(total);
        expect(fees).toBe(10);
    });

    test("50 ≤ Total < 100 : frais de 5 euros", () => {
        const total = 75;
        const fees = calculateShippingFees(total);
        expect(fees).toBe(5);
    });

    test("Total ≥ 100 : livraison gratuite", () => {
        const total = 150;
        const fees = calculateShippingFees(total);
        expect(fees).toBe(0);
    });

    test("Erreur si le total est négatif", () => {
        const total = -10;
        expect(() => calculateShippingFees(total)).toThrowError("Le total doit etre positif.");
    });

    test("Si le total a remonté une erreur}", () => {
        const total = -10;
        expect(() => calculateShippingFees(total)).toThrow();
    });
});
