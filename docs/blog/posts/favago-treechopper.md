---
date: 2026-07-31
slug: favago-treechopper
categories:
  - Hírek
---

# 🪓 Új favágó rendszer — leomló fák, eltűnő levelek

Lecseréltük a régi levéltisztító pluginünket egy sokkal okosabbra: megjött a **TreeChopper**. Mostantól a fa egyben dől ki, a levelek eltűnnek vele, és ha van nálad csemete, magától vissza is ültetjük. És ami a legfontosabb: **teljesen kikapcsolható**, ha nem szeretnéd.

<!-- more -->

## Mi volt eddig?

Eddig egy egyszerű levéltisztító plugin futott a szerveren: ha egy játékos kivágott egy fát, az ottmaradt lebegő leveleket automatikusan eltüntette. Működött — csak épp **hibás volt itt-ott**, és teljesen **statikus**: nem volt hozzá semmilyen beállítási lehetőség, sem szerver-, sem játékosszinten.

## Mi az új rendszer?

A **TreeChopper** ugyanezt a problémát oldja meg, csak sokkal jobban:

- **Felismeri a természetes fákat.** A rendszer megvizsgálja, hogy valódi, természetes fáról van-e szó — nem esik szét minden faanyagból épített házad.
- **Shift + vágás.** Ha **lenyomva tartod a Shiftet**, miközben nekiállsz a fának, az egész fa kidől egyszerre — a **levelek is eltűnnek** vele együtt. Shift nélkül minden marad a régi, blokkonkénti vágásnál.
- **Automatikus újratelepítés.** Ha van nálad **csemete ugyanabból a fatípusból**, a rendszer magától elülteti a kivágott fa helyére.
- **Arányos szerszámhasználat.** A plugin megszámolja, hány fablokkból állt a fa, és **ennyivel csökkenti a fejszéd tartósságát**. Egy nagy fa kidöntése tehát ugyanannyiba kerül, mint kézzel kivágni — nincs ingyen ebéd.

## Nem kötelező!

Ha neked ez nem jön be — akár mert a hagyományos favágást szeretsz, akár mert félsz a fejszéd tartósságáért —, **bátran kapcsold ki**. A funkció játékosonként külön-külön állítható:

| Parancs | Leírás |
|---|---|
| `/favago` | Gyors favágás be-/kikapcsolása (csak neked) |
| `/treechopper toggle` | Ugyanaz, angol néven |

A beállításod megmarad, nem kell minden belépésnél újra beírnod.

!!! tip "Tipp"
    Tarts magadnál csemetét a kedvenc fatípusaidból — így a nagy erdőirtás után magától újranő a fa, és nem kell külön visszaültetned.

Ha bármi furcsaságot tapasztalsz az új rendszerrel, szólj a Discordon — most cseréltük, szívesen finomhangoljuk!
