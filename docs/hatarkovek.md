# Határkövek

> *A birodalom területvédelmi rendszere — védd meg otthonod, szabályozd a területedet, és utazz haza pillanatok alatt.*

[← Vissza a főoldalra](index.md)

---

## Mi az a határkő?

A határkő egy **egyedi tulajdonsággal bíró blokk**, amelyet lehelyezve levéd egy bizonyos méretű területet körülötte. A védelmi zóna a határkő körül négyzet alakban terjed ki, és **a teljes világmagasságot átfogja** (bedrocktól az égig).

A határkő egyszerre:
- **Területvédelem** — megakadályozza, hogy mások építsenek, bontsanak vagy lopjanak a területeden
- **Otthon** — lehelyezés után azonnal utazhatsz hozzá a `/otthon` paranccsal
- **Vezérlőpult** — számos beállítás elérhető rajta (szörnyek, tűzterjedés stb.)

---

## Határkő típusok

Minden [rang](rangok.md) saját típusú határkövet készíthet, egyre nagyobb védelmi területtel:

| Rang | Határkő típus | Sugár (radius) | Max. darabszám | Fenntartási költség |
|---|---|:---:|:---:|---|
| [Vándor](rangok.md#-vándor) | Vándor határkő | 16 blokk | 1 | 1 gyémánt / 4 nap |
| [Telepes](rangok.md#-telepes) | Telepes határkő | 32 blokk | 2 | 1 gyémánt / 4 nap |
| [Úttörő](rangok.md#-úttörő) | Úttörő határkő | 64 blokk | 3 | 1 gyémánt / 4 nap |
| [Őrző](rangok.md#-őrző) | Őrző határkő | 128 blokk | 4 | 1 gyémánt / 4 nap |

**A megadott méret a sugár (radius), nem az átmérő!** A tényleges védett terület ennél nagyobb, mert a sugár a határkőtől mért távolság minden irányba. Például az Őrző határkő 128-as sugara egy 257×257 blokkos (128+1+128) régiót fed le a gyakorlatban. A magasság minden esetben a teljes világot átfogja (bedrocktól az égig).

---

## Hogyan készíts határkövet?

A határkő **egyedi recepttel** készíthető. Minden [rangnak](rangok.md) saját receptje van — az anyagok egyre értékesebbek a rang növekedésével. A `/hk help` parancs részletes segítséget ad a határkővel kapcsolatos műveletekhez.

### Vándor határkő

<div class="crafting-container">
<div class="crafting-header">Barkácsolás</div>
<table class="crafting-grid">
<tr>
<td><img src="../assets/smooth_stone.webp" title="Csiszolt Kő"></td>
<td><img src="../assets/diorite.webp" title="Diorit"></td>
<td><img src="../assets/smooth_stone.webp" title="Csiszolt Kő"></td>
</tr>
<tr>
<td><img src="../assets/diorite.webp" title="Diorit"></td>
<td><img src="../assets/gold_block.webp" title="Arany blokk"></td>
<td><img src="../assets/diorite.webp" title="Diorit"></td>
</tr>
<tr>
<td><img src="../assets/smooth_stone.webp" title="Csiszolt Kő"></td>
<td><img src="../assets/diorite.webp" title="Diorit"></td>
<td><img src="../assets/smooth_stone.webp" title="Csiszolt Kő"></td>
</tr>
</table>
</div>

### Telepes határkő

<div class="crafting-container">
<div class="crafting-header">Barkácsolás</div>
<table class="crafting-grid">
<tr>
<td><img src="../assets/iron_block.webp" title="Vas blokk"></td>
<td><img src="../assets/moss_block.webp" title="Moha blokk"></td>
<td><img src="../assets/iron_block.webp" title="Vas blokk"></td>
</tr>
<tr>
<td><img src="../assets/moss_block.webp" title="Moha blokk"></td>
<td><img src="../assets/emerald_block.webp" title="Smaragd blokk"></td>
<td><img src="../assets/moss_block.webp" title="Moha blokk"></td>
</tr>
<tr>
<td><img src="../assets/iron_block.webp" title="Vas blokk"></td>
<td><img src="../assets/moss_block.webp" title="Moha blokk"></td>
<td><img src="../assets/iron_block.webp" title="Vas blokk"></td>
</tr>
</table>
</div>

### Úttörő határkő

<div class="crafting-container">
<div class="crafting-header">Barkácsolás</div>
<table class="crafting-grid">
<tr>
<td><img src="../assets/lazurit_block.webp" title="Lazurit blokk"></td>
<td><img src="../assets/blackstone.webp" title="Feketekő"></td>
<td><img src="../assets/lazurit_block.webp" title="Lazurit blokk"></td>
</tr>
<tr>
<td><img src="../assets/blackstone.webp" title="Feketekő"></td>
<td><img src="../assets/diamond_block.webp" title="Gyémánt blokk"></td>
<td><img src="../assets/blackstone.webp" title="Feketekő"></td>
</tr>
<tr>
<td><img src="../assets/lazurit_block.webp" title="Lazurit blokk"></td>
<td><img src="../assets/blackstone.webp" title="Feketekő"></td>
<td><img src="../assets/lazurit_block.webp" title="Lazurit blokk"></td>
</tr>
</table>
</div>

### Őrző határkő

<div class="crafting-container">
<div class="crafting-header">Barkácsolás</div>
<table class="crafting-grid">
<tr>
<td><img src="../assets/amethyst_block.webp" title="Ametiszt blokk"></td>
<td><img src="../assets/obisdian.webp" title="Obszidián"></td>
<td><img src="../assets/amethyst_block.webp" title="Ametiszt blokk"></td>
</tr>
<tr>
<td><img src="../assets/obisdian.webp" title="Obszidián"></td>
<td><img src="../assets/netherite_block.webp" title="Netherite blokk"></td>
<td><img src="../assets/obisdian.webp" title="Obszidián"></td>
</tr>
<tr>
<td><img src="../assets/amethyst_block.webp" title="Ametiszt blokk"></td>
<td><img src="../assets/obisdian.webp" title="Obszidián"></td>
<td><img src="../assets/amethyst_block.webp" title="Ametiszt blokk"></td>
</tr>
</table>
</div>

---

## Lehelyezés és használat

### Határkő lehelyezése

1. Készítsd el a megfelelő rangú határkövet
2. Helyezd le a kívánt helyen
3. **Kész!** A védelem azonnal aktív, és máris utazhatsz haza

### Hazautazás

Amint a határkő le van rakva, használhatod:
- `/otthon` vagy `/haz` vagy `/hk home` — majd kattints a megjelenő elemre
- A határkő néhány másodperc után **azonnal** hazateleportál — **ingyen**

### Otthon áthelyezése

Ha a levédett területen belül máshová szeretnéd tenni a megjelenési pontodat:
- `/hk sethome` — az otthonod pontját áthelyezi a jelenlegi pozíciódra (a védett területen belül kell lenned)

### Otthonaim listája

- `/otthonok` vagy `/hk home` — megmutatja az összes otthonod

---

## Beállítások

A határkő **egyedi módon állítható be**. A védelmi zónán belül számos funkciót szabályozhatsz:

| Beállítás | Leírás |
|---|---|
| Szörnyek | Szörny spawning engedélyezése/tiltása a területen |
| Tűzterjedés | Tűz terjedésének szabályozása |
| Robbanások | TNT és creeper robbanások kezelése |
| Belépés | Ki léphet be a területre |
| Építés/bontás | Ki építhet és bonthat |

A beállítások részletes listáját a `/hk help` parancs adja meg.

---

## Fenntartás

**Minden határkövet 4 naponta 1 gyémánttal kell feltölteni**, rangtól és mérettől függetlenül. Ez a [gazdasági rendszer](gazdasag.md) egyik sink-je, amely segít fenntartani a gyémánt értékét.

!!! warning "Figyelem!"
    Ha elfelejtesz feltölteni: A védelem megszűnik, és a területed védtelenné válik! (A szabályzat szerint védtelen területről lopni szabad.)

!!! tip "Tipp"
    Tartsd szemmel a határkő állapotát, és tartsd készenlétben a gyémántjaidat. A fenntartás a szerver egyik legfontosabb rendszeres kiadása.

---

## Sírhely jegy

A sírhely jegy nem tartozik közvetlenül a határkő rendszerhez, de szorosan kapcsolódik a túléléshez.

### Mi ez?

Ha a sírhely jegy az **inventorydban van** halálkor, a tárgyaid **egy sírhelybe kerülnek** ahelyett, hogy szétszóródnának. A sírhely **1 órán át** tartja biztonságban a holmidat, és a rendszer megadja a **pontos koordinátákat** a halál helyének.

### Crafting recept

<div class="crafting-container">
<div class="crafting-header">Barkácsolás</div>
<table class="crafting-grid">
<tr>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
</tr>
<tr>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
<td><img src="../assets/diamond.webp" title="Gyémánt"></td>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
</tr>
<tr>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
<td><img src="../assets/gold_nugget.webp" title="Aranyrög"></td>
</tr>
</table>
</div>

**Recept:** 8 aranyrög + 1 gyémánt (középen)

### Fontos tudnivalók

- A jegynek az **inventorydban kell lennie** halálkor (nem ender ládában)
- 1 óra után a tárgyak **a földre esnek** és eltűnhetnek a szokásos módon
- A rendszer kiírja a **koordinátákat** a chatbe, hogy megtaláld a sírhelyed
- **Mindig hordj egyet!** Egy gyémánt és 8 aranyrög olcsó biztosítás. Lásd a [Gyors indulás](gyors-indulas.md) tippjeit is.

---

## Parancsok összefoglaló

| Parancs | Funkció |
|---|---|
| `/hk help` | Részletes segítség a határkő rendszerhez |
| `/otthon` vagy `/haz` | Hazautazás |
| `/hk home` | Otthonaim listája |
| `/hk sethome` | Otthon áthelyezése (védett területen belül) |
| `/otthonok` | Összes otthon megtekintése |

A teljes parancslistát a [Parancsok](parancsok.md) oldalon találod.

---

[← Előző: Gazdasági rendszer](gazdasag.md) | [→ Következő: Utazás](utazas.md)
