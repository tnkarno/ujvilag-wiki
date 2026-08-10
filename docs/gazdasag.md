# Gazdasági rendszer

> *A birodalom valutája a gyémánt — nem virtuális szám, hanem igazi, kézzel bányászott érték.*

[← Vissza a főoldalra](index.md)

---

## Alapelvek

Az Újvilág gazdasági rendszere egyetlen egyszerű elvre épül: **a gyémánt a valuta.** Nem virtuális pénz, nem token, nem pont — hanem a fizikai gyémánt item, amit kézzel kell kibányásznod. Az árképzés alapegysége a **gyémántrög**, amelyből 9 darab ad ki egy gyémántot.

Ez a megoldás azt jelenti, hogy:
- **Nem farmolható automatikusan** — a gyémánt értékét a befektetett munka adja
- **Vannak sink-ek** (gyémánt-elnyelők) a rendszerben, így **nem lesz infláció**
- **Minden tranzakció valós** — amit fizetsz vagy kapsz, az tényleg a tárhelyeden jelenik meg
- **Pontos árképzés** — a gyémántrögnek köszönhetően 1 gyémántnál kisebb értékek is kifejezhetők

---

## Hogyan működik?

### Gyémánt mint valuta

Az economy plugin a gyémántot jelöli meg valutaként. Amikor fizetsz vagy neked fizetnek, a rendszer **automatikusan kezeli** a gyémántjaidat:

A rendszer automatikusan megtalálja a gyémántjaidat és a megfelelő helyre rakja a kapott gyémántokat. Természetesen **blokkosít** is — azaz 9 gyémánt automatikusan gyémánt blokká alakul a hatékonyabb tárolás érdekében.

### Gyémántrög — az árképzés alapegysége

A szerveren elérhető a **gyémántrög** (<img src="../assets/diamond_nugget.png" style="height:1.2em;vertical-align:middle;image-rendering:pixelated"> ), amely ugyanúgy működik, mint az aranyrög az arany esetén. A gyémántrög lehetővé teszi a **törtértékű árképzést** — azaz olyan termékek és szolgáltatások árazását, amelyek kevesebbet érnek, mint 1 teljes gyémánt.

A gazdaság három fizikai tárgyat használ valutaként:

| Tárgy | Kép | Érték | Leírás |
|---|---|---|---|
| **Gyémántrög** | <img src="../assets/diamond_nugget.png" style="height:24px;image-rendering:pixelated"> | **1 rög** (alapegység) | A legkisebb címlet — az árképzés alapja |
| **Gyémánt** | <img src="../assets/diamond.webp" style="height:24px;image-rendering:pixelated"> | **9 rög** | 9 gyémántrögből állítható össze |
| **Gyémánt blokk** | <img src="../assets/diamond_block.webp" style="height:24px;image-rendering:pixelated"> | **81 rög** (9×9) | 9 gyémántból áll össze — a legnagyobb címlet |

#### Gyémánt craftolása gyémántrögből

<div class="crafting-container">
<div class="crafting-header">Barkácsolás</div>
<table class="crafting-grid">
<tr>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
</tr>
<tr>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
</tr>
<tr>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
<td><img src="../assets/diamond_nugget.png" title="Gyémántrög"></td>
</tr>
</table>
</div>

**Recept:** 9 gyémántrög = 1 gyémánt

!!! tip "Miért gyémántrög?"
    A gyémántrög segítségével pontosabb árakat tudsz megadni a [ládaboltodban](piacter.md). Ha például egy termék 3 rögöt ér, azt eddig nem lehetett kifejezni — most viszont igen. Az árképzés alapja mindig a **gyémántrög**.

!!! info "Resource pack a gyémántrög megjelenítéséhez"
    Ahhoz, hogy a gyémántrög a játékban is helyesen jelenjen meg, töltsd le és használd a szerver resource packját: **[Resource pack letöltése](https://download.mc-packs.net/pack/e4ef1bff27bce59e15b183ea58186da4895e5f0c.zip)**

### Egyenleg és nyilvántartás

| Parancs | Funkció |
|---|---|
| `/bal` | Saját gyémánt egyenleg megtekintése |
| `/baltop` | Leggazdagabb játékosok listája |
| `/pay összeg` | Gyémánt küldése másik játékosnak |
| `/sb` | Információs panel (egyenleg is látható rajta) |

---

## Mire megy el a gyémánt?

A gyémánt valuta értékét az tartja fenn, hogy **rendszeres kiadásaid vannak** (sink-ek):

### Rendszeres költségek

| Költség | Mennyiség | Gyakoriság | Részletek |
|---|---|---|---|
| [Határkő](hatarkovek.md) lerakás | 1–4 gyémántrög | egyszeri | Rangtól függően |
| [Határkő](hatarkovek.md) feltöltés | 1–4 gyémántrög | 7 naponta | Rangtól függően |
| [Kocsis](utazas.md#kocsis-rendszer) utazás | pár gyémánt | alkalmanként | Játékos-látogatás, megálló utazás |
| Kocsis megálló feloldás | gyémánt | egyszeri | 2., 3., 4. megálló feloldása |
| [Ősi bűvölés](osi-mestersegek.md) | változó | alkalmanként | Szintemelés egyre drágább |

### Bevételi lehetőségek

| Forrás | Hogyan |
|---|---|
| Bányászat | A klasszikus módszer — menj le és bányássz |
| [Ládabolt](piacter.md) eladás | Termelj és adj el a piactéren |
| Kereskedés | Alkudj más játékosokkal közvetlenül |
| Közösségi farmok | A közösség által épített farmok termékei értékesek lehetnek |

---

## Fontos tudnivalók

**Szerencse enchant és bányászat.** A gyémánt érc bányászása számít a [rangfeltételeknél](rangok.md), de ott az érc darabszám lényeges, nem a gyémánt — tehát a Szerencse enchant nem gyorsítja a rang előrehaladást. Viszont a valutagyűjtéshez a Szerencse nagyon hasznos, mert több gyémántot kapsz ércenként.

**Nincs gyémánt farm.** A szerver Paper-en fut, és a rendszer lényegéből adódóan automatikus gyémánt-termelés nem lehetséges. A gyémánt értéke a bányászatba fektetett munkából származik.

**A gazdaság játékos-vezérelt.** Nincsenek NPC boltok, nincsenek admin shopok. Az árak a kereslet-kínálat alapján alakulnak ki a játékosok [ládaboltjaiban](piacter.md).

---

## A gazdaság áttekintő diagramja

``` mermaid
flowchart TD
    A["⛏️ BÁNYÁSZAT<br/>forrás — új gyémánt születik"]

    subgraph KOR ["🔁 Körforgás — a gyémánt csak gazdát cserél"]
        direction LR
        B["💎 JÁTÉKOSOK EGYENLEGE<br/>a forgalomban lévő gyémánt"]
        T["🛒 KERESKEDÉS<br/>ládabolt · alku · /pay"]
        B -->|vásárlás| T
        T -->|eladás bevétele| B
    end

    C["🪨 Határkő<br/>lerakás és fenntartás"]
    D["🐴 Kocsis<br/>utazás és megállók"]
    E["🔮 Ősi bűvölés<br/>szintemelés"]
    F["🚫 SINK — a gyémánt kikerül a forgalomból<br/>infláció-védelem"]

    A -->|termelés| B
    B --> C
    B --> D
    B --> E
    C --> F
    D --> F
    E --> F

    classDef forras fill:#2e7d32,stroke:#1b5e20,color:#ffffff
    classDef kozep fill:#4527a0,stroke:#311b92,color:#ffffff
    classDef csere fill:#0277bd,stroke:#01579b,color:#ffffff
    classDef sink fill:#c62828,stroke:#8e0000,color:#ffffff
    class A forras
    class B kozep
    class T csere
    class C,D,E,F sink
```

A diagramon **két különböző mozgás** látszik:

- **A körforgás (a kiemelt doboz).** A játékosok közti kereskedés során a gyémánt **nem tűnik el, csak gazdát cserél** — kikerül az egyenlegedből, és bekerül valaki máséba. Ez a rész valóban zárt kör: a szerveren lévő gyémánt összmennyiségét nem változtatja meg.
- **A forrás → sink tengely (zöld → piros).** Új gyémánt **kizárólag bányászattal** keletkezik, és a szolgáltatások (határkő, kocsis, ősi bűvölés) **véglegesen kivonják** a forgalomból. Ez a szakasz egyirányú — ami sinkbe kerül, az nem jön vissza.

A rendszer egyensúlyát e kettő adja: amíg nagyjából annyi gyémánt tűnik el a sinkekben, amennyit a közösség kibányászik, addig a gyémánt **megtartja az értékét**. Emiatt nincs infláció — a sink-ek folyamatosan vonják ki a felesleget, a kereskedés pedig a meglévő készletet mozgatja a játékosok között.

---

[← Előző: Rangrendszer](rangok.md) | [→ Következő: Határkövek](hatarkovek.md)
