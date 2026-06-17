# 📁 Explication du dossier e2e

## 🛠️​ Commandes 

### **Etape 1**

```
npm init -y
npm install -D @playwright/test
npx playwright install
```

### **Etape 2**

Création du dossier [tests](/e2e/tests/)

```
mkdir tests
```

### **Etape 3**

Création du fichier [configuration](/e2e/playwright.config.cjs) pour lire les reports.

```
touch playwright.config.cjs
```

Créer le fichier config provenant de la documentation officielle [playwright](https://playwright.dev/docs/test-configuration#commonjs).

> [!WARNING]
> Mon fichier [package.json](/e2e/package.json) prend pour réglage du commonJS alors que mes scripts utilises ES modules, ça ne pose aucun problème pour la librairie playwright, elle le permet.

### **Etape 4**

Création des différents scripts e2e mit dans le dossier [test](/e2e/tests/)

### **Commandes d'execution**

***Run***
```
npx playwright test
```
***Run debug mode***
```
npx playwright test --debug
```
***Voir le rapport***
```
npx playwright show-report
```

## Informations

Ces tests E2E ont été réalisés en connaissance du manque d'attribut d'élément du DOM, et de leur fiabilités. J'ai voulu rendre ces scénarios le plus proche possible de l'utilisation utilisateur afin qu'une potentielle intégration CI soit respectée.

## ​📂​ /tests

Ce dossier comprend tous mes scénarios E2E, en essayant d'avoir des commentaires pour une meilleure lisibilité.

## ​📂​ /playwright-report

Ce dossier comprend un fichier [index](/e2e/playwright-report/index.html) étant utile pour avoir un compte rendu de mes différents scénarios : ✅​ **3 Passed** ; ​❌​ **2 Failled**