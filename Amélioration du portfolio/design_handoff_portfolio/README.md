# Handoff : Portfolio Rafick Malick (v3)

## Overview
Refonte complète du portfolio personnel de **Rafick Malick** (développeur fullstack + embarqué/robotique, étudiant Epitech Bénin).
Objectif produit : **convaincre un recruteur en un seul scroll** — l'argumentaire ("pourquoi moi") passe avant la liste des réalisations.

Le site existant à remplacer : https://rafick.vercel.app/ — repo `rafickMalick/portfolio` (React/Vite).

## About the Design Files
Les fichiers HTML de ce bundle sont des **références de design**, pas du code de production.
Ils sont écrits en HTML/JS autonome (styles inline + petites animations impératives) pour prototyper rapidement le rendu et le mouvement.

La tâche : **recréer ces écrans dans le codebase cible** (ici : React + Vite, tel que `rafickMalick/portfolio`) en suivant les patterns existants du projet
(composants par section dans `src/components/`, CSS/Tailwind du projet, etc.). Ne pas copier le HTML tel quel.

## Fidelity
**High-fidelity.** Couleurs, typographie, tailles, espacements et timings d'animation sont définitifs et doivent être reproduits fidèlement.
Les seules libertés : le découpage en composants et la façon d'exprimer le thème clair/sombre (CSS variables recommandées).

## Page structure (single page, ancres)
Ordre vertical, une seule page avec navigation par ancres :

1. Barre de navigation collante
2. Hero (ouverture)
3. Bande défilante de technos (marquee)
4. Bandeau de 4 chiffres
5. `01 — Pourquoi moi` (3 piliers)
6. `02 — Travaux` (8 projets)
7. `03 — Outillage` (3 groupes de compétences + passions + langues)
8. `04 — Parcours` (6 étapes)
9. `05 — Suite` (contact, bloc sombre)
10. Pied de page

---

## Screens / Views

### 1. Barre de navigation (sticky)
- **Purpose** : accès direct aux sections + CTA de recrutement + bascule de thème.
- **Layout** : `position:sticky; top:0; z-index:60`, `display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px 16px`.
  Padding `12px clamp(18px,4vw,40px)`. Fond `var(--nav)` + `backdrop-filter:blur(14px)`. Bordure basse 1px `var(--rule)`.
- **Composants** :
  - Gauche : "RAFICK MALICK" — JetBrains Mono 11.5px, `letter-spacing:.09em`, `text-transform:uppercase`, couleur `var(--text)`.
  - Droite : liens `Travaux`, `Outillage`, `Parcours` — même style mono, couleur `var(--link)`, hover → `var(--accent)` (transition `color .3s`).
  - Bouton thème : libellé `CLAIR` / `SOMBRE` (mono 10.5px), bordure 1px `var(--rule-2)`, padding `7px 13px`, radius 2px, hover → texte + bordure `var(--accent)`.
  - CTA `ME RECRUTER` : fond `var(--accent)`, texte `var(--bg)`, padding `8px 16px`, radius 2px, hover `transform:translateY(-2px)` (`.3s cubic-bezier(.2,.8,.2,1)`).

### 2. Hero
- **Layout** : `max-width:1300px; margin:0 auto`, padding `clamp(64px,9vw,110px) clamp(18px,4vw,40px) clamp(52px,7vw,84px)`, `position:relative`.
- **Fond** : calque `inset:-60px` en `radial-gradient(var(--dot) 1px, transparent 1px)`, `background-size:30px 30px`, `opacity:.6` — animé en parallaxe (voir Interactions).
- **Composants** :
  - Pastille de disponibilité : `display:inline-flex`, bordure 1px `var(--rule-2)`, radius 100px, padding `8px 15px`, mono 11.5px uppercase, couleur `var(--soft)`.
    Point 6px `var(--accent)` avec `animation:floatDot 2.2s ease-in-out infinite` (opacité 1 → .5 → 1).
    Texte : "Ouvert aux offres & stages · Bénin / remote".
  - Titre H1, 3 lignes, Bricolage Grotesque 700, `font-size:clamp(34px,6.6vw,88px)`, `line-height:.94`, `letter-spacing:-.035em`, `max-width:1120px` :
    "J'écris le code" / "qui fait bouger" / "les choses réelles." (3ᵉ ligne en `var(--accent)`).
    Chaque ligne est dans un `span` `overflow:hidden` avec la ligne intérieure animée (masque).
  - Filet `border-top:1px solid var(--rule)`, puis 2 colonnes `repeat(auto-fit,minmax(min(100%,290px),1fr))`, gap `clamp(20px,3vw,48px)` :
    - Gauche : `clamp(16px,1.5vw,18px)`, `line-height:1.55` — "Du firmware d'un boîtier d'arrosage jusqu'à l'interface web qui le pilote, je livre la chaîne complète."
    - Droite : 15px, `var(--soft)`, max-width 520px — "Étudiant ingénieur à Epitech Bénin, autodidacte compulsif, déjà en responsabilité sur des projets qui tournent en conditions réelles — pas seulement sur ma machine."

### 3. Bande défilante (marquee)
- Bandes haute et basse 1px `var(--rule)`, fond `var(--panel)`, padding `16px 0`, `overflow:hidden`.
- Contenu dupliqué 2× dans un flex `width:max-content`, `animation:marquee 34s linear infinite` (`translateX(0)` → `translateX(-50%)`).
- Items mono `clamp(9px,1.5vw,11.5px)`... en pratique 11.5px uppercase `letter-spacing:.11em`, couleur `var(--muted)`, séparés par un point 4px `var(--accent)` à `opacity:.55`, gap 44px.
- Liste : C / C++, React, Node.js, ESP32, Python, OpenCV, ROS, Docker, PostgreSQL, Arduino, Next.js, Firmware.
- **Toggleable** : ce bandeau est optionnel (prop `showMarquee`, défaut activé).

### 4. Bandeau de chiffres
- Grille `repeat(4,minmax(0,1fr))` (reste sur **une seule ligne à tous les formats**, y compris mobile), `border-bottom:1px solid var(--rule)`.
- Cellule : padding `clamp(20px,3vw,38px) clamp(8px,1.6vw,32px) clamp(20px,3vw,38px) 0`.
- Nombre : Bricolage Grotesque 700, `clamp(22px,4.4vw,40px)`, `line-height:1`, `letter-spacing:-.03em` — **animé en compteur** (voir Interactions).
- Libellé : mono `clamp(9px,1.5vw,11px)` uppercase `letter-spacing:.06em`, `var(--muted)`, `line-height:1.45`.
- Données : `14+` Projets menés à terme · `3` Expériences professionnelles · `2` Piles maîtrisées : soft + hard · `2028` Diplôme Epitech en vue.

### 5. `01 — Pourquoi moi`
- Étiquette de section : mono 11.5px uppercase `letter-spacing:.1em`, `var(--accent)`, `margin-bottom:16px`.
- H2 : Bricolage 700 `clamp(24px,2.9vw,38px)`, `line-height:1.08`, `letter-spacing:-.03em`, max-width 760px, `margin-bottom:36px` —
  "Les entreprises cherchent deux profils. J'en suis un seul."
- Grille `repeat(auto-fit,minmax(min(100%,280px),1fr))`, gap 20px. Carte :
  fond `var(--panel-2)`, bordure 1px `var(--rule)`, radius 6px, padding `26px 24px`,
  hover → bordure `var(--rule-3)`, fond `var(--panel-3)` (transitions `.4s`).
  - Numéro romain (I, II, III) : mono 11px `var(--accent)`, `margin-bottom:24px`.
  - Titre : Bricolage 700 19px, `margin-bottom:10px`.
  - Corps : 14px `line-height:1.65`, `var(--soft)`.
- Contenus :
  1. **Du capteur à l'écran** — "J'écris le firmware qui lit le capteur ET l'application qui l'affiche. Pas de passage de main, donc pas de perte d'information."
  2. **J'apprends seul, vite** — "Raytracer en C++, cryptographie PGP, Kubernetes, vision par ordinateur : appris en autonomie, puis livrés en projet réel."
  3. **Déjà en responsabilité** — "Stage en développement web, formateur en robotique, puis chef de projet tech pour Techbo Robotique. Je tiens un délai et une équipe."

### 6. `02 — Travaux` (comportement responsive spécifique)
- H2 : "Huit projets, deux mondes". Sous-texte 15.5px `var(--soft)` max-width 560px :
  "Plateformes web en production d'un côté, boîtiers que je conçois et programme de l'autre."
- Indice "FAITES DÉFILER →" (mono 10.5px `var(--muted)` + trait 26px `var(--accent)`) : **visible uniquement < 860px**.

**Desktop (≥ 860px) — liste verticale**
- Conteneur `border-top:1px solid var(--rule)`. Chaque ligne :
  `border-bottom:1px solid var(--rule)`, padding `22px 20px 22px 4px`, fond transparent ;
  hover → `padding-left:20px` + fond `var(--panel-2)` (`padding-left .45s cubic-bezier(.2,.8,.2,1)`, `background .45s`).
- En-tête de ligne : flex wrap, `align-items:baseline`, gap `6px 20px` →
  numéro (mono 11.5px `var(--accent)`, min-width 26px) · titre (Bricolage 500 `clamp(18px,1.9vw,26px)`, `letter-spacing:-.025em`) · catégorie (mono 10.5px uppercase `var(--muted)`, `margin-left:auto`).
- Corps de ligne : `padding-left:46px`, flex wrap gap `12px 24px` → description (14px, `var(--soft)`, `flex:1 1 320px`, max-width 640px) + puces technos
  (mono 10px, bordure 1px `var(--rule-2)`, padding `5px 9px`, radius 2px, `white-space:nowrap`).

**Mobile (< 860px) — rail horizontal**
- Conteneur : `display:flex; gap:12px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:16px`, plus de `border-top`.
- Chaque projet devient une carte : `flex:0 0 min(74vw,300px)`, `scroll-snap-align:start`, bordure 1px `var(--rule)`, radius 6px, padding 16px, fond `var(--panel)`, `display:flex; flex-direction:column`.
- En-tête en colonne (catégorie sous le titre, `margin-left:0`) ; corps `padding-left:0`, en colonne, gap 12px.

**Les 8 projets (ordre exact)**
| # | Titre | Catégorie | Description | Technos |
|---|---|---|---|---|
| 01 | Sang + | Plateforme · Santé | Mise en relation entre donneurs de sang et structures de santé : inscription des donneurs, appels aux dons ciblés et suivi des demandes urgentes. | React, Node.js, PostgreSQL |
| 02 | Visa & Haj Bénin | Automatisation · Administration | Automatisation de la soumission et de la gestion des demandes de visa, avec suivi étape par étape du parcours des pèlerins. | Workflow, Node.js, Dashboard |
| 03 | Boutique en ligne | E-commerce | Catalogue, panier, tunnel de commande et back-office complet de gestion des produits et des commandes. | React, Paiement, PostgreSQL |
| 04 | AREA (Action/REAction) | Fullstack · API | Plateforme d'automatisation type Zapier : interconnexion dynamique de services web via leurs API, avec authentification OAuth. | React, OAuth, Docker |
| 05 | Smart Irrigation | IoT · Agritech | Boîtier d'arrosage autonome : capteurs d'humidité et météo, déclenchement automatique des vannes, application mobile de pilotage à distance. | ESP32, Capteurs, App mobile |
| 06 | Bras robot | Robotique · Mécanique | Conception mécanique et programmation d'un bras robotisé interactif : cinématique, contrôle des servos, interface de commande. | Cinématique, Servos, C++ |
| 07 | Main robotisée | Robotique · Vision | Main robotique qui reproduit en temps réel les gestes humains analysés par vision par ordinateur. | OpenCV, Python, Hardware |
| 08 | Sauvegarde énergétique | Énergie · Embarqué | Boîtier de contrôle des circuits énergétiques : un jeu de capteurs surveille la consommation et bascule les circuits pour préserver l'énergie disponible. | Firmware, Capteurs, Électronique |

> Les visuels manquent encore : prévoir un emplacement image 16/10 par projet quand les captures/photos seront fournies.

### 7. `03 — Outillage`
- H2 : "Ce que j'utilise, sans enjoliver" (`margin-bottom:32px`).
- Conteneur : `display:grid; grid-auto-flow:column; grid-auto-columns:minmax(250px,1fr); gap:clamp(16px,1.7vw,20px); overflow-x:auto; scroll-snap-type:x mandatory`
  → 3 colonnes pleines sur desktop, rail à défilement dès que la place manque.
- Carte : bordure 1px `var(--rule)`, fond `var(--panel)`, radius 6px, padding `clamp(20px,1.9vw,24px) clamp(18px,1.8vw,22px)`, `scroll-snap-align:start`.
  - Titre de groupe : mono 11px uppercase `letter-spacing:.09em`, couleur propre au groupe.
  - Note : 12.5px `var(--muted)`, `margin-bottom:18px`.
  - Lignes : `display:flex; justify-content:space-between; align-items:baseline; gap:14px; padding:9px 0`, `border-bottom:1px solid var(--rule)` (et `border-top` sur la liste).
    Nom `clamp(12px,1.1vw,13.5px)` ; niveau en mono 10.5px uppercase `letter-spacing:.07em`.
- **Pas de pourcentages** — 4 niveaux qualitatifs, chacun avec sa couleur :
  `solide` → `var(--accent)` · `à l'aise` → `var(--text)` · `en cours` → `var(--accent-2)` · `notions` → `var(--muted)`.

| Groupe | Couleur titre | Note | Items (nom → niveau) |
|---|---|---|---|
| Logiciel & web | `var(--accent)` | Ma base quotidienne, utilisée sur des projets livrés. | JavaScript / TypeScript → solide · React / Next.js → solide · Node.js / Express → solide · Python → à l'aise · PostgreSQL / SQL → à l'aise · PHP → à l'aise · Docker / CI-CD → à l'aise |
| Embarqué & robotique | `var(--accent-2)` | Le terrain : capteurs, cartes, mécanique. | C / Arduino → solide · ESP32 / IoT → solide · Électronique & capteurs → à l'aise · C++ → à l'aise · OpenCV / vision → à l'aise · ROS → notions · CAO / impression 3D → notions |
| IA & outils du quotidien | `var(--accent-3)` | Utilisés pour aller plus vite, jamais pour livrer à l'aveugle. | Claude → solide · ChatGPT → solide · GitHub Copilot → à l'aise · Cursor → à l'aise · Git / GitHub → solide · Figma → notions · Linux / shell → à l'aise |

- Sous les cartes, deux rangées de pastilles (bordure 1px `var(--rule-2)`, radius 100px, padding `7px 13px`, 13px, `var(--soft)`, `white-space:nowrap`) :
  - `HORS CLAVIER` : Voyage & sport · Robotique · Film & animé · Apprentissage autonome (hover → bordure `var(--accent)`, texte `var(--text)`).
  - `LANGUES` : Français — courant · Anglais — niveau intermédiaire.

### 8. `04 — Parcours`
- H2 : "Trois ans, déjà trois expériences" (`margin-bottom:32px`).
- Liste `border-top:1px solid var(--rule)`. Ligne : `border-bottom:1px solid var(--rule)`, padding `20px 4px`,
  grille `minmax(0,clamp(88px,17vw,170px)) 22px minmax(0,1fr)`, gap `clamp(12px,2vw,24px)`.
  - Colonne 1 : période, mono 12px `var(--muted)`.
  - Colonne 2 : point 9px, `var(--accent)` (ou `var(--accent-2)` pour l'étape finale) — **animé en pop** (voir Interactions).
  - Colonne 3 : titre Bricolage 500 17px + description 13.5px `var(--soft)` `line-height:1.6`.
- La dernière étape est mise en valeur : fond de ligne `var(--panel)`, titre et point en `var(--accent-2)`.

| Période | Titre | Description |
|---|---|---|
| 2023 | Baccalauréat scientifique (Bac C) | Obtenu au Bénin. |
| 2023 — 2028 | Epitech Bénin | Cursus d'expertise en ingénierie informatique, en cours. |
| 2024 · 4 mois | Développeur web — MarketOptionCenter | Stage de première année : développement web en conditions réelles. |
| 2025 · 2 mois | Formateur robotique — Digital Valeey | Animation d'ateliers et formation en robotique auprès de débutants. |
| Depuis nov. 2025 | Chef de projet tech — Techbo Robotique | Gestion d'équipe et pilotage de projets innovants au sein de l'association. |
| Prochainement | **Votre entreprise** | Prêt à apporter mon énergie et ma capacité d'apprentissage à vos équipes. |

### 9. `05 — Suite` (contact)
- Section : `border-top:1px solid var(--rule)`, fond `var(--deep)`, padding `clamp(64px,9vw,100px) clamp(18px,4vw,40px)`.
- H2 sur 2 lignes masquées/animées, Bricolage 700 `clamp(30px,4.8vw,64px)`, `line-height:.96`, `letter-spacing:-.035em` :
  "Le prochain projet" / "est le vôtre."
- Paragraphe 16.5px `var(--soft)` max-width 560px : "Une offre, un stage, un prototype à sortir du garage ? Écrivez-moi : je réponds vite et je vous dis franchement si je suis le bon profil."
- 3 cellules `repeat(auto-fit,minmax(min(100%,260px),1fr))` sur `border-top:1px solid var(--rule)`, chacune un lien bloc :
  `border-bottom` (+ `border-right` sauf la dernière), padding `26px 16px 26px clamp(0,2vw,24px)`,
  hover → `padding-left` +16px et fond `var(--bg)` (`.4s cubic-bezier(.2,.8,.2,1)`).
  - Libellé mono 10.5px uppercase `var(--muted)` ; valeur `clamp(14px,1.2vw,15.5px)`, `overflow-wrap:anywhere`.
  - EMAIL → `mailto:malickrafick456@gmail.com` · TÉLÉPHONE → `tel:+2290151588257` (affiché "+229 01 51 58 82 57") · CODE → `https://github.com/rafickMalick`.
- Pied : flex `justify-content:space-between`, wrap, mono 11px uppercase `var(--muted)` — "Rafick Malick — <année>" / "Epitech Bénin · Disponible en remote".

---

## Interactions & Behavior

1. **Barre de progression de lecture** — barre fixe 2px en haut, `background:var(--accent)`, `transform-origin:0 50%`.
   Dans une boucle `requestAnimationFrame` : `target = scrollY / (scrollHeight - innerHeight)`, puis lissage `prog += (target - prog) * .12` et `scaleX(prog)`.
2. **Halo qui suit le curseur** — div fixe `min(520px,90vw)` carré, `border-radius:50%`, `background:radial-gradient(circle, var(--glow) 0%, transparent 65%)`, `pointer-events:none`, `z-index:0`, `opacity:0` au départ (→ 1 au premier `pointermove`, transition `.6s`).
   Position lissée : `gx += (mx - gx) * .075` (idem y), appliquée en `translate3d(gx-260px, gy-260px, 0)`.
3. **Parallaxe du fond du hero** — même boucle : `translate3d((gx/innerWidth - .5) * -22px, (gy/innerHeight - .5) * -16px, 0)`.
4. **Révélations au scroll** (`IntersectionObserver`, `threshold:.12`, `rootMargin:'0px 0px -50px 0px'`), délai en cascade `(index % 5) * 70ms` :
   - `data-line` (lignes de titres, paragraphes du hero) : `translateY(105%) → 0` + `opacity 0 → 1`, `transform .95s cubic-bezier(.16,.84,.24,1)`, `opacity .7s` ; le parent a `overflow:hidden` (effet masque).
   - `data-reveal` (cartes, lignes de projets/parcours) : `translateY(26px) → 0` + fondu, `.8s cubic-bezier(.16,.84,.24,1)`.
   - `data-pop` (points du parcours) : `scale(0) → 1`, `.6s cubic-bezier(.2,1.5,.4,1)` (léger rebond) + fondu `.4s`.
   - `data-count` (chiffres) : compteur `requestAnimationFrame` sur 1300ms, easing `1-(1-k)^3`, `Math.round(to * e) + suffix`.
5. **Filet de sécurité** — si l'observer ne se déclenche pas (environnements sans IO fiable), tout est révélé après 2200ms ; un balayage périodique (500ms) prépare aussi les nœuds ajoutés après le premier rendu.
6. **Accessibilité mouvement** — `prefers-reduced-motion: reduce` (ou la prop `reduceMotion`) court-circuite toutes ces animations : état final appliqué immédiatement, pas de halo ni de parallaxe.
7. **Thème clair/sombre** — le bouton écrit les variables CSS de la palette sur `document.documentElement`, met à jour `document.body.style.background`, et persiste le choix dans `localStorage` (`rk-theme-v3`, valeurs `light`/`dark`, défaut `dark`). Transitions `background .45s` / `color .45s`.
8. **Navigation** — liens d'ancres + `html{scroll-behavior:smooth}`.
9. **Rails horizontaux** — Travaux (< 860px) et Outillage : `scroll-snap-type:x mandatory` + `scroll-snap-align:start`, `scrollbar-width:thin`, `scrollbar-color: var(--rule-2) transparent`.

## State Management
Très peu d'état — le design est essentiellement statique :
- `theme: 'dark' | 'light'` — persisté dans `localStorage.rk-theme-v3`, applique la palette en variables CSS.
- `showMarquee: boolean` (défaut `true`) — affiche/masque la bande défilante.
- `reduceMotion: boolean` (défaut `false`) — force l'état final des animations.
- Pas de fetch : tous les contenus (projets, compétences, parcours) sont des données statiques — les extraire dans un module de données (`src/data/`) plutôt que les coder en dur dans le JSX.

## Design Tokens

### Palette sombre (défaut)
| Token | Valeur |
|---|---|
| `--bg` | `oklch(14% 0.014 265)` |
| `--nav` | `oklch(14% 0.014 265 / 0.82)` |
| `--panel` | `oklch(16% 0.015 265)` |
| `--panel-2` | `oklch(17% 0.015 265)` |
| `--panel-3` | `oklch(19% 0.016 265)` |
| `--deep` | `oklch(11% 0.012 265)` |
| `--rule` | `oklch(26% 0.014 265)` |
| `--rule-2` | `oklch(28% 0.014 265)` |
| `--rule-3` | `oklch(45% 0.05 265)` |
| `--dot` | `oklch(30% 0.016 265)` |
| `--text` | `oklch(95% 0.008 90)` |
| `--soft` | `oklch(74% 0.01 265)` |
| `--muted` | `oklch(60% 0.012 265)` |
| `--link` | `oklch(72% 0.012 265)` |
| `--accent` | `oklch(87% 0.2 120)` (vert acide) |
| `--accent-2` | `oklch(72% 0.16 30)` (corail) |
| `--accent-3` | `oklch(78% 0.13 250)` (bleu) |
| `--glow` | `oklch(87% 0.2 120 / 0.10)` |

### Palette claire
| Token | Valeur |
|---|---|
| `--bg` | `oklch(98% 0.006 95)` |
| `--nav` | `oklch(98% 0.006 95 / 0.85)` |
| `--panel` | `oklch(96% 0.008 95)` |
| `--panel-2` | `oklch(94% 0.01 95)` |
| `--panel-3` | `oklch(92% 0.012 95)` |
| `--deep` | `oklch(94.5% 0.01 95)` |
| `--rule` | `oklch(87% 0.008 95)` |
| `--rule-2` | `oklch(82% 0.01 95)` |
| `--rule-3` | `oklch(62% 0.02 265)` |
| `--dot` | `oklch(88% 0.01 95)` |
| `--text` | `oklch(21% 0.02 265)` |
| `--soft` | `oklch(42% 0.015 265)` |
| `--muted` | `oklch(50% 0.015 265)` |
| `--link` | `oklch(44% 0.015 265)` |
| `--accent` | `oklch(52% 0.16 128)` |
| `--accent-2` | `oklch(54% 0.18 32)` |
| `--accent-3` | `oklch(48% 0.15 250)` |
| `--glow` | `oklch(52% 0.16 128 / 0.08)` |

### Typographie (Google Fonts)
- **Display** : `Bricolage Grotesque` — poids 500 et 700, `opsz` 12..96.
- **Corps** : `Work Sans` — 400, 500.
- **Mono / labels** : `JetBrains Mono` — 400, 500.
- Échelle : H1 `clamp(34px,6.6vw,88px)` · H2 section `clamp(24px,2.9vw,38px)` · H2 contact `clamp(30px,4.8vw,64px)` · titre projet `clamp(18px,1.9vw,26px)` · titre carte 19px · corps 14–15.5px · labels mono 10–11.5px (uppercase, `letter-spacing` .06–.11em).
- Titres : `letter-spacing` négatif (-.02 à -.035em) ; texte long : `text-wrap:pretty`.

### Espacement & formes
- Largeur de contenu max : **1300px**, gouttière horizontale `clamp(18px,4vw,40px)`.
- Padding vertical de section : `clamp(48px,7vw,88px)`.
- Radius : 2px (boutons/puces) · 6px (cartes) · 100px (pastilles) · 50% (points, halo).
- Gaps de grille : 16–24px ; gap des puces : 6–7px.
- Bordures : toujours 1px, couleur `var(--rule)` / `var(--rule-2)`.
- Pas d'ombres portées — la hiérarchie repose sur les filets et les fonds de panneaux.

### Timings
- Micro-interactions : `.3s`–`.45s`, easing `cubic-bezier(.2,.8,.2,1)`.
- Révélations : `.6s`–`.95s`, easing `cubic-bezier(.16,.84,.24,1)`, cascade 70ms.
- Marquee : 34s linéaire en boucle ; point de disponibilité : 2.2s.
- Bascule de thème : `.45s ease`.

## Assets
- **Aucune image dans la version actuelle.** La photo de profil (`public/profile.jpeg`, issue du repo `rafickMalick/portfolio`) a été volontairement retirée du design.
- Polices : Google Fonts (Bricolage Grotesque, Work Sans, JetBrains Mono).
- Aucune icône : les repères visuels sont des points, des traits et des flèches typographiques (→).
- À fournir plus tard : captures d'écran des projets web et photos des boîtiers/robots (emplacement 16/10 prévu par carte).

## Files
- `Portfolio v3.dc.html` — **le design de référence** (version à implémenter).
- `Portfolio v2.dc.html` — direction éditoriale précédente (papier/serif), conservée pour référence.
- `Portfolio.dc.html` — première itération (cartes sombres), historique.

Ces fichiers s'ouvrent directement dans un navigateur. Le style vit en attributs `style` inline ; les animations et le thème sont pilotés en JavaScript impératif dans le bloc de logique en bas du fichier.

## Notes d'implémentation suggérées (React/Vite)
- Un composant par section : `Nav`, `Hero`, `Marquee`, `Stats`, `WhyMe`, `Work`, `Tooling`, `Timeline`, `Contact`.
- Les tokens ci-dessus en variables CSS sur `:root` + `[data-theme="light"]`, et un `ThemeToggle` qui écrit `data-theme` sur `<html>` (+ `localStorage`).
- Un hook `useReveal()` (IntersectionObserver + `prefers-reduced-motion`) réutilisé par toutes les sections ; un hook `useCountUp()` pour les chiffres ; un `useRafLoop()` pour halo/parallaxe/progression.
- Media query unique à `860px` pour la bascule liste ⇄ rail de la section Travaux ; tout le reste est fluide (`clamp`, `auto-fit`, `minmax`).
- SEO/a11y : un seul `<h1>`, sections avec `aria-labelledby`, contraste vérifié (le vert acide n'est jamais utilisé en texte courant sur fond clair — il est assombri dans la palette claire).
