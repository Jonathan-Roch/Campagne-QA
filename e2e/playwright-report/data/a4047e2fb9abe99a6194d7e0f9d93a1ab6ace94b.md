# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: suppression-panier.spec.js >> Supprimer du panier
- Location: tests\suppression-panier.spec.js:3:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('[data-test="product-title"]')
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test="product-title"]')
    14 × locator resolved to <span class="product-title" data-test="product-title" _ngcontent-ng-c1226357352="">Combination Pliers</span>
       - unexpected value "visible"

```

```yaml
- text: Combination Pliers
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('Supprimer du panier', async({page}) => {
  4  |     // Ajout du scénario d'ajout au panier
  5  | 
  6  |     // Se rendre sur la page
  7  |     await page.goto('https://with-bugs.practicesoftwaretesting.com/#/')
  8  | 
  9  |     // Cliquer sur le produit 'Combination Pliers'
  10 |     await page.click(".card-img-wrapper")
  11 | 
  12 |     // Etre sur la bonne page et créer un point d'encrage avec un data-test pour la suite
  13 |     await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible()
  14 |     let titreProduit = await page.locator('[data-test="product-name"]').textContent()
  15 | 
  16 |     // Ajouter le produit au panier, le span panier passe à 1
  17 |     await page.locator('[data-test="add-to-cart"]').click()
  18 |     await expect(page.locator('[data-test="cart-quantity"]')).toBeVisible()
  19 | 
  20 |     // Aller sur la page panier URL
  21 |     await page.goto("https://with-bugs.practicesoftwaretesting.com/#/checkout")
  22 | 
  23 |     // Vérifier que le bon produit et dans le panier
  24 |     await expect(page.locator('[data-test="product-title"]')).toContainText(titreProduit)
  25 | 
  26 | 
  27 | 
  28 |     // Scénario de suppression du panier
  29 | 
  30 |     // Supprimer le produit du panier
  31 |     await page.locator(" .btn.btn-danger").click()
  32 | 
  33 |     // Le produit n'est plus dans le panier
> 34 |     await expect(page.locator('[data-test="product-title"]')).not.toBeVisible()
     |                                                                   ^ Error: expect(locator).not.toBeVisible() failed
  35 | 
  36 |     // Le panier reste visible mais vide
  37 |     await expect(page.locator('[data-test="nav-cart"]')).toBeVisible()
  38 |     await expect(page.locator('[data-test="cart-quantity"]')).not.toBeAttached()
  39 |     
  40 | })
```