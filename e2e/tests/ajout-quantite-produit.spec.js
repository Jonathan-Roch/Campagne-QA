import { test, expect } from '@playwright/test'

test("Ajout d'un produit avec quantité différente", async({page}) => {
    // Scénario d'ajout d'un produit avec une quantité choisie

    // Se rendre sur la page
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/')

    // Cliquer sur le produit 'Combination Pliers'
    await page.click(".card-img-wrapper")

    // Etre sur la bonne page
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible()

    // Cliquer sur le champ quanité et le remplir d'une value
    let quantiteProduit = '3'
    await page.locator('[data-test="quantity"]').click()
    await page.locator('[data-test="quantity"]').fill(quantiteProduit)

    // Ajouter le produit au panier, le span panier passe à 1
    await page.locator('[data-test="add-to-cart"]').click()
    await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible()

    // Le logo panier est visible et clickable pour s'y rendre
    await expect (page.locator('[data-test="nav-cart"]')).toBeVisible()
    await page.locator('[data-test="nav-cart"]').click()

    // Récuperer la quantité produit
    const inputQuantitePanier = await page.locator('[data-test="product-quantity"]').inputValue()

    // Comparer les deux valeurs
    expect(inputQuantitePanier).toBe(quantiteProduit)
})