# Gazdasági rendszer

> *A birodalom valutája a gyémánt — nem virtuális szám, hanem igazi, kézzel bányászott érték.*

[← Vissza a főoldalra](index.md)

---

## Alapelvek

Az Újvilág gazdasági rendszere egyetlen egyszerű elvre épül: **a gyémánt a valuta.** Nem virtuális pénz, nem token, nem pont — hanem a fizikai gyémánt item, amit kézzel kell kibányásznod.

Ez a megoldás azt jelenti, hogy:
- **Nem farmolható automatikusan** — a gyémánt értékét a befektetett munka adja
- **Vannak sink-ek** (gyémánt-elnyelők) a rendszerben, így **nem lesz infláció**
- **Minden tranzakció valós** — amit fizetsz vagy kapsz, az tényleg a tárhelyeden jelenik meg

---

## Hogyan működik?

### Gyémánt mint valuta

Az economy plugin a gyémántot jelöli meg valutaként. Amikor fizetsz vagy neked fizetnek, a rendszer **automatikusan kezeli** a gyémántjaidat:

```
Fizetéskor a rendszer innen veszi a gyémántot:
┌─────────────┐     ┌──────────────┐     ┌──────────────────┐
│  Eszköztár  │ ──▶ │  Ender láda  │ ──▶ │  Shulker ládák   │
│  (hotbar +  │     │              │     │  (eszköztárban   │
│   inventory)│     │              │     │   vagy enderben) │
└─────────────┘     └──────────────┘     └──────────────────┘

Fizetés fogadásakor a rendszer ide teszi:
┌──────────────────────────────────────────────────────────┐
│  Az első elérhető shulker ládába, ha van                 │
│  Ha nincs shulker → eszköztár / ender láda               │
└──────────────────────────────────────────────────────────┘
```

A rendszer automatikusan megtalálja a gyémántjaidat és a megfelelő helyre rakja a kapott gyémántokat. Természetesen **blokkosít** is — azaz 9 gyémánt automatikusan gyémánt blokká alakul a hatékonyabb tárolás érdekében.

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
| [Határkő](hatarkovek.md) fenntartás | 1 gyémánt | 4 naponta | Rangtól függetlenül |
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

```
                 ┌──────────────┐
                 │  BANYASZAT   │
                 │  (gyemant    │
                 │   termeles)  │
                 └──────┬───────┘
                        │
                        v
              ┌──────────────────┐
              │  JATEKOS         │
              │  EGYENLEG        │
              │  (fizikai        │
              │   gyemant)       │
              └───┬────┬────┬────┘
                  │    │    │
        ┌─────────┘    │    └─────────┐
        v              v              v
  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │ Hatarko  │  │ Kocsis   │  │ Osi      │
  │ fenntart.│  │ utazas   │  │ buvoles  │
  │ (sink)   │  │ (sink)   │  │ (sink)   │
  └──────────┘  └──────────┘  └──────────┘
        │              │              │
        └──────────────┼──────────────┘
                       v
              ┌──────────────────┐
              │ GYEMANT ELTUNIK  │
              │ (inflacio-       │
              │  vedelem)        │
              └──────────────────┘
```

A rendszer tehát **zárt kör**: a gyémánt bányászattal jön létre, különféle szolgáltatások elnyelik, és ez tartja fenn az értékét. Nincs infláció, mert a sink-ek folyamatosan vonják ki a gyémántot a forgalomból.

---

[← Előző: Rangrendszer](rangok.md) | [→ Következő: Határkövek](hatarkovek.md)
