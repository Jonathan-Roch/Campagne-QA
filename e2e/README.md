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
> Etant donner que j'utilise du commonJS, je n'utiliserai pas import ... from ...

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