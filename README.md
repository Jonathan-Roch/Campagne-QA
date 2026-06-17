# Miniprojet-QA

## Introduction

**Pourquoi ce projet ?**

Ayant parcouru le syllabus ISTQB Foundation Level v4.0, l'idée de mettre en pratique ces connaissances acquises m'est parvenue.

**But de ce projet ?**

Il a pour but d'évaluer mes capacités en autodicate à appliquer les axes de compréhension que doit adopter un testeur QA. Apprendre à rédiger tout type d'artefact, et appréhender différentes techniques dans cet exercice.

**Comment utiliser ce projet ?**

>[!IMPORTANT]
> Pour comprendre correctement la progression de mon projet, il est recommandé de consulter les dossiers dans l’ordre où ils sont présentés ci‑dessous. Chaque dossier contient un README dédié qui explique son rôle et la manière de l’utiliser.



## Explications

**/test-exploratoire**

Ce dossier est découpé en plusieurs sous-fichiers respectant une trame exploratoire suivant ma réflexion tout au long de ce projet.
Consulter le fichier README.md figurant dans le dossier /test-exploratoire pour mieux comprendre la teneur de chaque fichier.

___

**/user-stories**

Ce dossier contient une user story respectant l'objet de test utilisé elle respecte différents critères (nomenclature, hiérarchisation).
Le ficher README.md est là pour expliquer brièvement la construction de celui-ci.

___

**/criteres-acceptation**

Ce dossier fait suite à la création de la User Story, il prend comme référence direct le fichier [User Story 01 Panier](/user-stories/us-01-panier.md).
Le fichier README.md est là pour expliquer brièvement la construction de celui-ci.

___

**/test-cases**

Ce dossier contient mes scénarios de test, ils prennent comme référence les dossiers [user-stories](/user-stories/), et [criteres-acceptation](/criteres-acceptation/).
Qui comprend bien évidemment un fichier README pour la compréhension.

___

**/bug-reports**

> [!WARNING]
> Ce dossier n'a pas besoin d'être ouvert, il a été crée pour reprendre les artéfacts produits pendant les tests exploratoires, et en ajoutant de nouveaux issues de mes tests exécutions.

Il comprend toutes les preuves sous forme de **GIF** ou **PNG**, pour annoter des points ou mettre en valeur des bugs.

___

**/test-execution**

Ce dossier fait suite à mes [scénarios de test](/test-cases/test-cases.pdf) pour les exécuter. Pendant cet exercice, certains artéfacts ont été produits, ils ont été reportés dans ce dossier [bug-reports](/bug-reports/).
Un fichier README.md est compris dedans pour expliquer brièvement ce dossier.

___

**/rapport-final**

Ce dossier clôture ma campagne de test en ayant reprit tous mes artéfacts comme base de test et produire une synthèse cohérente avec des attentes spéculatives que peut avoir un client.
Un fichier README.md est compris dedans pour expliquer brièvement ce dossier.

___

**/e2e**

Ce dossier met en place mes scénarios de test automatisés en vue d'un apprentissage futur d'un pipeline CI/CD.
Tous ces tests ont été établis dans le cadre de mon apprentissage de la librairie playwright, mais aussi du langage JavaScript. Cet exercice m'a permis de deceller certaines subtilités quant à l'utilisation des attributs du DOM mais aussi, la polyvalence que peut avoir un scénario E2E.


 ```
 88888 88""Yb 
    88 88__dP 
o.  88 88"Yb  
"bodP' 88  Yb
```