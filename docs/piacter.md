# Ládaboltok és Piactér

> *A birodalom gazdasága a játékosok kezében van — építs boltot, kereskedj, és gazdagodj.*

[← Vissza a főoldalra](index.md)

---

## Áttekintés

Az Újvilágban **nincsenek NPC boltok** és nincs admin shop. Minden kereskedelem a **játékosok között** zajlik ládaboltokon keresztül. Ez azt jelenti, hogy az árak a valódi kereslet és kínálat alapján alakulnak ki.

A ládabolt egy egyszerű rendszer: egy láda + egy tábla = bolt. A boltodban eladhatsz tárgyakat [gyémántért](gazdasag.md), vagy vehetsz tárgyakat más játékosoktól.

---

## Ládabolt létrehozása

### Lépések

1. **Rakj le egy ládát** oda, ahol a boltodat szeretnéd
2. **Hozd létre a boltot** a `/chestshop create boltnév` paranccsal
3. **Állítsd be** mit adsz el (vagy veszel) és milyen áron
4. **Tedd bele a ládába** az eladni kívánt tárgyakat
5. Kész! Más játékosok már használhatják is

### Bolt törlése

Egyszerűen **törd össze a ládát** — a bolt megszűnik.

### Segítség

| Parancs | Funkció |
|---|---|
| `/chestshop help` | Részletes segítség |
| `/chestshop create boltnév` | Új bolt létrehozása |
| `/ladabolt` | Bemutató bolt meglátogatása |

**Tipp:** Mielőtt boltot nyitsz, látogasd meg a **ládabolt bemutatót** (`/ladabolt` vagy `/warp LadaBoltInfo`). Itt megtudod, hogyan működik a rendszer, és kipróbálhatod élesben is.

---

## Bolt limitek

A boltjaid száma a [rangoddal](rangok.md) nő:

| [Rang](rangok.md) | Maximum ládaboltok |
|---|:---:|
| Vándor | 1 |
| Telepes | 16 |
| Úttörő | 32 |
| Őrző | 64 |

---

## Fővárosi piactér

Az **[Őrző](rangok.md#-őrző)** rangot elért játékosok jogosultak a **főváros piacterein** bolthelyet foglalni. Ezek kis méretű, kijelölt területek a szerver legforgalmasabb pontján — a fővárosban.

### Hogyan kapok helyet?

- Érd el az **Őrző** rangot
- Igényelj helyet (amíg a készlet tart!)
- A helyet a staff osztja ki

### Miért éri meg?

A fővárosi piactér a szerver központja — ide érkezik minden játékos a `/fovaros` paranccsal. A bolthelyednek garantált a forgalom.

**Ha a főváros betelt?** A négy [fogadó](utazas.md#fogadók) közelében is tervben vannak piacterek a jövőben.

---

## Kereskedés tippek

**Árazás.** Mivel nincs referencia-ár (nincs admin shop), az árak a közösségben alakulnak ki. Nézd meg, mások mennyiért adják el — a `/megallok` és a kocsis rendszer segítségével bejárhatod más játékosok boltjait.

**Mit érdemes eladni?** Bármit, amire más játékosnak szüksége lehet:
- Nyersanyagok (fa, kő, vas, arany)
- Élelmiszer
- Bűvölt tárgyak
- Építőanyagok
- Ritka tárgyak

**Forgalmas hely = több eladás.** Egy jól elhelyezett [kocsis megálló](utazas.md#kocsis-rendszer) a boltod mellett segít, hogy mások könnyebben eljussanak hozzád.

**Védd a boltodat!** A boltod helyét mindenképpen védd [határkővel](hatarkovek.md) — a [szabályzat](szabalyzat.md) szerint védtelen területről lopni szabad.

---

## A kereskedelem folyamata

```
  ELADO                                     VEVO
  ─────                                     ────
  Beleteszi a targyat      ┌────────────┐   Megtalálja a boltot
  a ladaba          ──────>│  LADABOLT  │<────── (kocsis/seta/warp)
                           │            │
  Beallitja az arat        │ Gy <--> Rk │   Kattint a vasarlasra
  (gyemant/darab)          │            │
                           └────────────┘
  Gyemantot kap                             Targyat kap
  (automatikusan az                         (automatikusan az
   eszkoztarba/enderbe)                      eszkoztarba/enderbe)

  Gy = Gyemant    Rk = Rakomany (targy)
```

A tranzakció **autómatikus** — a [gazdasági rendszer](gazdasag.md) kezeli a gyémánt mozgatását mindkét fél között.

---

[← Előző: Utazás](utazas.md) | [→ Következő: Ősi Bűvölés és Mesterségek](osi-mestersegek.md)
