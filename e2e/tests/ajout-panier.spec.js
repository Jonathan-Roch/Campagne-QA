import { test, expect } from '@playwright/test'
test('Ajout panier', async({page}) => {
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/')
    await page.click(".card-img-wrapper")
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible()
    let titreProduit = await page.locator('[data-test="product-name"]').textContent()
    await page.locator('[data-test="add-to-cart"]').click()
    await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible()
    await page.goto("https://with-bugs.practicesoftwaretesting.com/#/checkout")
    await expect(page.locator('[data-test="product-title"]')).toContainText(titreProduit)

})
