# Álmok-Ura

> *Közösségi alvásrendszer — az éjszaka átalvása egyszerűen és igazságosan.*

[← Vissza a főoldalra](index.md)

---

## Miért van rá szükség?

A vanilla Minecraftban **minden online játékosnak** ágyba kell feküdnie, hogy átugord az éjszakát. Egy közösségi szerveren ez szinte lehetetlen:

- Valaki éppen bányászik a mélyben
- Valaki AFK-zik
- Valaki nem találja az ágyát

Az **Álmok-Ura** rendszer ezt a problémát oldja meg egy egyszerű, automatikus szavazásos alvási rendszerrel.

---

## Hogyan működik?

| Szabály | Leírás |
|---|---|
| **AFK játékosok** | A rendszer figyelmen kívül hagyja őket — nem számítanak bele a szavazásba |
| **Mélybányászok** | Aki **Y: -16 alatt** tartózkodik, szintén nem számít — valószínűleg éppen bányászik |
| **Szükséges arány** | Az aktív játékosok **legalább felének** aludnia kell |
| **Páratlan létszám** | A rendszer **felfelé kerekít** |

### Példák

| Aktív játékosok | Szükséges alvók | Miért? |
|---|---|---|
| 2 | 1 | 2 / 2 = 1 |
| 3 | 2 | 3 / 2 = 1.5 → felfelé kerekítve **2** |
| 4 | 2 | 4 / 2 = 2 |
| 5 | 3 | 5 / 2 = 2.5 → felfelé kerekítve **3** |
| 6 | 3 | 6 / 2 = 3 |
| 1 | 1 | Ha egyedül vagy, te döntesz |

!!! tip "Tipp"
    Ha egyedül játszol (vagy csak te vagy aktív), simán átaludhatod az éjszakát — nem kell várni senkire!

---

## Mit kell tennem játékosként?

1. **Feküdj ágyba** éjszaka, ahogy vanilla Minecraftban tennéd
2. A rendszer automatikusan számolja, hányan alszanak
3. Ha elég játékos alszik → az éjszaka átugorva, reggel lesz

Nincs szükség parancsra vagy szavazásra — csak feküdj le!

---

## Kapcsolódó oldalak

- [Gyors indulás](gyors-indulas.md) — az első lépések
- [Szerver infó](szerver-info.md) — technikai adatok
- [Parancsok](parancsok.md) — teljes parancslista

---

[← Előző: Ősi Bűvölés](osi-mestersegek.md) | [→ Következő: Szabályzat](szabalyzat.md)
