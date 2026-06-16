import { test, expect } from '@playwright/test'

test('Vérification du montant total', async({page}) => {
    // Scénario de vérification du montant total = 0

    // Se rendre sur la page
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/') 

    // Vérifier l'accès à panier
    await expect(page.locator('[data-test="nav-cart"]')).toBeVisible()
    await page.click('[data-test="nav-cart"]')

    // Vérifier le montant actuel du panier
    let montantNormal = "$00.00"
    await expect(page.locator('[data-test="cart-total"]')).toContainText(montantNormal)
}) 
    
