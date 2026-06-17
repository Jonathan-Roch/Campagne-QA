import { test, expect } from '@playwright/test'

test('Supprimer du panier', async({page}) => {
    // Ajout du scénario d'ajout au panier

    // Se rendre sur la page
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/')

    // Cliquer sur le produit 'Combination Pliers'
    await page.click(".card-img-wrapper")

    // Etre sur la bonne page et créer un point d'encrage avec un data-test pour la suite
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible()
    let titreProduit = await page.locator('[data-test="product-name"]').textContent()

    // Ajouter le produit au panier, le span panier passe à 1
    await page.locator('[data-test="add-to-cart"]').click()
    await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible()

    // Aller sur la page panier URL
    await page.goto("https://with-bugs.practicesoftwaretesting.com/#/checkout")

    // Vérifier que le bon produit et dans le panier
    await expect(page.locator('[data-test="product-title"]')).toContainText(titreProduit)

})