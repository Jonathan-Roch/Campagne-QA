import { test, expect } from '@playwright/test'

test('Vérification montant total après ajout au panier', async({page}) => {
    // Scénario de vérification du montant après ajout au panier

    // Se rendre sur la page
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/')

    // Cliquer sur le produit 'Combination Pliers'
    await page.click(".card-img-wrapper")

    // Etre sur la bonne page et créer des points d'encrages avec des data-test pour la suite
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible()
    let titreProduit = await page.locator('[data-test="product-name"]').textContent()
    let prixProduit = await page.locator('[data-test="unit-price"]').textContent()

    // Ajouter le produit au panier, le span panier passe à 1
    await page.locator('[data-test="add-to-cart"]').click()
    await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible()

    // Aller sur la page panier
    await expect(page.locator('[data-test="nav-cart"]')).toBeVisible()
    await page.click('[data-test="nav-cart"]')

    // Vérifier que le bon produit et dans le panier
    await expect(page.locator('[data-test="product-title"]')).toContainText(titreProduit)


    // Créer une variable du montant total
    const montantPanier = await page.locator('[data-test="cart-total"]').textContent()
    // Clean les deux variables provenant du DOM
    const prix = Number(prixProduit.replace('$', '').trim())
    const total = Number(montantPanier.replace('$', '').trim())

    // Comparer les deux valeurs
    expect(total).toBe(prix)
})
