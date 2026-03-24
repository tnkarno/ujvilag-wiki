# Ősi Bűvölés és Mesterségek

> *A birodalom régésze elfeledett tudást hozott napvilágra. Csak az Őrzők méltóak arra, hogy birtokolják.*

[← Vissza a főoldalra](index.md)

---

## Áttekintés

Az Ősi Bűvölés rendszer a szerver **végjáték utáni tartalma** — azoknak tervezve, akik már mindent elértek a vanilla Minecraftban és új kihívásra vágynak. A rendszer az [Őrző](rangok.md#-őrző) rangtól érhető el.

A koncepció: a birodalom régésze időnként **elfeledett ősi mesterségeket** fedez fel, és elárulja az Őrzőknek a tudás megszerzésének útját. Minden mesterség egy **egyedi kihívást** jelent, aminek teljesítése után speciális képességeket kapsz.

---

## Hol történik az ősi bűvölés?

Az ősi bűvölés egy **egyedi helyen** végezhető: a régész által feltárt **ősi romoknál**, a főváros alatt. Kinézetre egy normál enchant table, de ha egy Őrző kattint rá, **egyedi felület** nyílik meg a speciális bűvölésekkel.

**/uticelok** -> OsiBuvoles

---

## A mesterségek

Minden mesterség megszerzéséhez teljesítened kell egy **gyűjtési/elérési feltételt**. A cím megszerzése után egy **emoji** jelenik meg a neved mellett a chatben, jelezve a tudásodat.

### ⛏️ Ősi Bányász

**Feltétel:** Legyen nálad az összes Overworld érc, mind a normál, mind a deepslate változatban — **Gyengéd érintés (Silk Touch)** enchanttal bányászva.

**A szükséges ércek:**

| Normál | Deepslate |
|---|---|
| Szén érc | Deepslate szén érc |
| Vas érc | Deepslate vas érc |
| Réz érc | Deepslate réz érc |
| Arany érc | Deepslate arany érc |
| Lapis érc | Deepslate lapis érc |
| Redstone érc | Deepslate redstone érc |
| Gyémánt érc | Deepslate gyémánt érc |
| Smaragd érc | Deepslate smaragd érc |

**Hatás:** Az ősi bűvölés segítségével **tovább emelheted az eszközökre vonatkozó bűvöléseket** az eredeti felső határ fölé.

| Bűvölés | Vanilla max | Új felső határ |
|---|:---:|:---:|
| Hatékonyság (Efficiency) | V (5) | X (10) |
| Törhetetlenség (Unbreaking) | III (3) | X (10) |
| Szerencse (Fortune) | III (3) | X (10) |

**Fontos:** Minden újabb szint emelése **egyre nagyobb [gyémánt](gazdasag.md), lazurit és xp szint költséggel** jár. Ez nem olcsó mulatság — gondolkodj befektetésként!

---

### ⚔️ Ősi Harcos

**Feltétel:** Legyen nálad az összes, túlélő módban megszerezhető mob fej (mob head).

**Hatás:** Hozzáférsz a tudáshoz, amellyel **tovább fejlesztheted a fegyverek bűvöléseit:**

| Bűvölés | Vanilla max | Emelhető |
|---|:---:|:---:|
| Élesség (Sharpness) | V (5) | ✓ |
| Erő (Power — íj) | V (5) | ✓ |
| Szikrából pattant (Fire Aspect) | II (2) | ✓ |
| Hátralökés (Knockback) | II (2) | ✓ |
| *és további fegyver enchantok* | | |

**Tutorial — Hogyan szerezz mob fejeket:**
A legtöbb mob fejet úgy kapod, hogy az adott mobot egy **Charged Creeper** robbanása öli meg. Ez a vanilla Minecraft mechanika — villám kell a creeperhez (trident + Channeling enchant, vagy villámvihar). Egyes fejek (Wither Skeleton, Ender Dragon) más módon szerezhetők meg.

---

### 🛡️ Ősi Kovács

**Feltétel:** Legyen nálad az összes **armor trim** (páncéldíszítés).

**Hatás:** Növelheted a **páncélok bűvöléseit** az eredeti maximum fölé:

| Bűvölés | Vanilla max | Emelhető |
|---|:---:|:---:|
| Védelem (Protection) | IV (4) | ✓ |
| Légzés (Respiration) | III (3) | ✓ |
| Könnyű esés (Feather Falling) | IV (4) | ✓ |
| *és további páncél enchantok* | | |

**Tutorial — Armor trimek:**
Az armor trimeket **különféle struktúrákban** találod: Trail Ruins, Desert Temple, Jungle Temple, Ocean Monument, Ancient City, Nether Fortress, Bastion Remnant, End City, stb. Minden struktúra más trim-et tartalmaz. A teljes gyűjteményhez az egész világot be kell járnod!

---

### 🏹 Ősi Vadász

**Feltétel:** Öld meg az **Ender Sárkányt** és a **Withert** is.

**Hatás:**
1. **Elytra + páncél összeolvasztás** — kovácsasztal segítségével összekombinálhatod az elytrát a mellvérteddel, és egyetlen tárgyként használhatod mindkettőt
2. **Végtelen (Infinity) + Önjavítás (Mending) egyszerre** — az íjadon egyszerre lehet mindkét bűvölés (vanilla-ban ez kizárt)

**Tutorial — Sárkány és Wither:**
A sárkányt a The End dimenzióban találod (End Portal a Strongholdban). A Witherhez 3 Wither Skeleton koponyára van szükséged (Nether Fortressben farmolhatók) és 4 soul sandre. A Withert a világ bármely pontján megidézheted, de **gondold meg, hol teszed** — hatalmas pusztítást okozhat!

---

### 🎨 Ősi Kézmíves

**Feltétel:** Legyen nálad az összes **pottery sherd** (cserépdarab).

**Hatás:** Képes vagy **testreszabni a tárgyaid neveit és leírásait:**

| Funkció | Hogyan |
|---|---|
| Tárgy neve színezése | Üllőben (anvil), minimessage, hex vagy Minecraft color code használatával |
| Tárgy leírása | Könyv és tinta segítségével, a tárgy leírásába írhatsz |

**Tutorial — MiniMessage formázás (nevek):**
Az üllőben a tárgy nevét formázhatod speciális kódokkal. Néhány példa:
- `<red>Tűzkard</red>` — piros szöveg
- `<gradient:red:gold>Legendás Kard</gradient>` — piros-arany átmenet
- `<bold>Erős Név</bold>` — félkövér
- `&#FF5500Narancs Szöveg` — hex szín

**Tutorial — Pottery sherdek:**
A pottery sherdeket **Suspicious Sand** és **Suspicious Gravel** blokkokból bányászhatod ki ecsettel (brush). Ezek a Trail Ruins, Desert Temple, Desert Well, Ocean Ruins, Cold Ocean Ruins, és Warm Ocean Ruins struktúrákban találhatók.

---

### 🌾 Ősi Paraszt

**Feltétel:** A **legtöbbet a szerveren játszó játékos** kapja — ez egy versenyalapú cím!

**Hatás:** A veteményeket **nem kell manuálisan újra ültetni**. Ha netherite kapával jobbklikkel szüretelsz, a növény **automatikusan visszaültetésre kerül**.

Ez hatalmas kényelmi funkció — nagyobb farmok kezelése pillanatok alatt elvégezhető.

---

### 🔮 Továbbiak (TBD)

A birodalom régésze még nem fedte fel az összes ősi tudást. Időnként **új mesterségek** jelenhetnek meg, amelyeket az Őrzők fedezhetnek fel. Tartsd szemmel a közösségi híreket!

**Lehetséges jövőbeli mesterségek (ötletek):**

- **Ősi Építész** — Feltétel: építs meg egy monumentális építményt (pl. bizonyos méret/blokk felhasználás). Hatás: hozzáférés speciális dekoratív blokkokhoz vagy egyedi építési képességekhez (pl. világító blokkok, láthatatlan keretek).
- **Ősi Halász** — Feltétel: fogj meg minden halfajtát és szerezz meg minden horgász kincset. Hatás: emelt horgász-enchantok (Luck of the Sea, Lure) és/vagy egyedi halak amik speciális hatást adnak elfogyasztáskor.
- **Ősi Állatszelídítő** — Feltétel: szelídíts meg minden szelídíthető állatfajt. Hatás: a háziállatok erősebbek, gyorsabbak, vagy nehezebben halnak meg (emelt HP).

---

## Az ősi bűvölés költségei

Az ősi bűvölés **nem ingyenes**. Minden szint-emelés [gyémánt](gazdasag.md) költséggel jár, és az ár **gyorsan nő** a szinttel. Ez a rendszer a [gazdaság](gazdasag.md) egyik legjelentősebb sink-je — a tapasztalt játékosok folyamatosan fektetnek be az ősi bűvölésbe, ami fenntartja a gyémánt keresletét.

---

## Összefoglaló

| Mesterség | Emoji | Feltétel | Hatás területe |
|---|:---:|---|---|
| Ősi Bányász | ⛏️ | Összes Overworld érc (Silk Touch) | Eszköz enchantok |
| Ősi Harcos | ⚔️ | Összes mob fej | Fegyver enchantok |
| Ősi Kovács | 🛡️ | Összes armor trim | Páncél enchantok |
| Ősi Vadász | 🏹 | Sárkány + Wither megölése | Elytra-páncél fúzió, Infinity+Mending |
| Ősi Kézmíves | 🎨 | Összes pottery sherd | Tárgy név/leírás testreszabása |
| Ősi Paraszt | 🌾 | Legtöbb játékidő | Auto-újraültetés |
| *Továbbiak* | 🔮 | *TBD* | *TBD* |

---

[← Előző: Ládaboltok és Piactér](piacter.md) | [→ Következő: Szabályzat](szabalyzat.md)
