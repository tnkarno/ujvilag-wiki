# Rangrendszer

> *A birodalom a befektetett időt és munkát jutalmazza. A rangok automatikusan aktiválódnak, amint teljesíted a feltételeket.*

[← Vissza a főoldalra](index.md)

---

## Áttekintés

A szerveren négy rang létezik, amelyek egyre több jogosultságot és lehetőséget adnak. A rendszer **teljesen automatizált** — nem kell kérvényezni, a rang azonnal aktiválódik, amint a feltételek teljesülnek.

Az előrehaladásodat bármikor ellenőrizheted:
- `/rangom` — jelenlegi rang és állapot
- `/rangom KövetkezőRang` — adott rang feltételeinek megtekintése

```
┌──────────┐    ┌───────────┐    ┌───────────┐    ┌──────────┐
│  VANDOR  │--->│  TELEPES  │--->│  UTTORO   │--->│  ORZO    │
│  Feher   │    │  Zold     │    │  Kek      │    │  Lila    │
│  Kezdo   │    │  Letelepul│    │  Befolyas │    │  Vegjatek│
└──────────┘    └───────────┘    └───────────┘    └──────────┘
```

---

## ⬜ Vándor

**Szín:** Fehér | **Rang típus:** Kezdő rang

*A Vándor a birodalom kapujában áll. Még kevés a bizalom, de szeretettel fogadott utazó, aki reméljük, megtalálja a helyét közöttünk.*

### Feltételek
Automatikus — minden új játékos Vándorként kezd.

### Jogosultságok

| Kategória | Lehetőségek |
|---|---|
| **[Határkő](hatarkovek.md)** | 1 db Vándor határkő (sugár: 16 blokk), 4 naponta 1 gyémánt fenntartás |
| **[Ládabolt](piacter.md)** | 1 db ládabolt |
| **[Kocsis](utazas.md#kocsis-rendszer)** | 1 db kocsis megálló |
| **[Utazás](utazas.md)** | Főváros, fogadók, warps |
| **[Gazdaság](gazdasag.md)** | Teljes hozzáférés (fizetés, egyenleg, kereskedés) |
| **Egyéb** | Sírhely jegy, 1 egyedi festmény, voice chat, skinrestorer, /sit, /sb, interaktív chat |

### Mire figyelj Vándorként?
A legfontosabb első lépés egy [határkő elkészítése](hatarkovek.md#hogyan-készíts-határkövet) — ez védi az otthonod és lehetővé teszi a gyors hazautazást. A [Gyors indulás](gyors-indulas.md) oldalon részletes TODO listát találsz.

---

## 🟩 Telepes

**Szín:** Zöld | **Megközelítés:** *A Vándor megtalálta otthonát. Telepedj le és építs ki saját gazdaságod.*

### Feltételek

| Feltétel | Mennyiség | Megjegyzés |
|---|---|---|
| Megtett blokkok | 3 000 | A szerveren megtett távolság |
| Játékidő | 8 óra | Valós játékidő a szerveren |
| Kibányászott gyémánt érc | 10 db | **Érc, nem gyémánt!** A Szerencse enchant nem számít — a nyers ércet kell kibányásznod |

### Jogosultságok (a Vándor fölött)

| Kategória | Változás |
|---|---|
| **[Határkő](hatarkovek.md)** | Telepes határkő (sugár: 32), maximum 2 db |
| **[Ládabolt](piacter.md)** | 16 db |
| **[Kocsis](utazas.md#kocsis-rendszer)** | 2 db megálló (a másodikat gyémántért kell feloldani) |
| **[Utazás](utazas.md)** | **Meglátogathat más játékosokat** és elfogadhat látogatókat (költsége: ~4 gyémánt) |
| **Egyedi festmény** | 8 db |

### Mi változik a gyakorlatban?
A legnagyobb ugrás a **játékos-látogatás** feloldása. Telepesként végre ellátogathatsz más játékosokhoz, körbenézhetsz, kereskedhetsz személyesen, és meghívhatod őket magadhoz. Ez nyitja meg igazán a közösségi játékot.

---

## 🔷 Úttörő

**Szín:** Kék | **Megközelítés:** *Gazdaságod számottevő méretet ért el. Befolyásoddal tereld jó irányba a birodalmat.*

### Feltételek

| Feltétel | Mennyiség |
|---|---|
| Játékidő | 48 óra |
| Kibányászott gyémánt érc | 100 db |

### Jogosultságok (a Telepes fölött)

| Kategória | Változás |
|---|---|
| **[Határkő](hatarkovek.md)** | Úttörő határkő (sugár: 64), maximum 3 db |
| **[Ládabolt](piacter.md)** | 32 db |
| **[Kocsis](utazas.md#kocsis-rendszer)** | 3 db megálló (a harmadikat is fel kell oldani) |
| **Egyedi festmény** | 16 db |

### Mit jelent Úttörőnek lenni?
Az Úttörő már komoly gazdasági szereplő a birodalomban. Nagyobb terület, több bolt, több kocsis megálló — a befolyásod nő, és a közösség egyre inkább számít rád.

---

## 🟣 Őrző

**Szín:** Lila | **Megközelítés:** *Kiérdemelted, hogy a birodalom Őrzője légy. Vigyázd épségét és békéjét a megszerzett hatalmaddal.*

### Feltételek

| Feltétel | Mennyiség |
|---|---|
| Játékidő | 100 óra |
| Kibányászott gyémánt érc | 500 db |

### Jogosultságok (az Úttörő fölött)

| Kategória | Változás |
|---|---|
| **[Határkő](hatarkovek.md)** | Őrző határkő (sugár: 128), maximum 4 db |
| **[Ládabolt](piacter.md)** | 64 db |
| **[Kocsis](utazas.md#kocsis-rendszer)** | 4 db megálló (feloldás után) |
| **Egyedi festmény** | 32 db |
| **[Ősi bűvölés](osi-mestersegek.md)** | Teljes hozzáférés az ősi mesterségekhez |
| **[Piactér](piacter.md#fővárosi-piactér)** | Jogosultság a fővárosi piactéri területekre (amíg a készlet tart) |

### Az Őrző különlegessége
Az Őrző rang nyitja meg az [Ősi Bűvölés és Mesterségek](osi-mestersegek.md) rendszert — ez a szerver végjáték tartalmának gerince. Az Őrzők emellett jogosultak a főváros piacterein bolthelyet foglalni, ami a szerver legforgalmasabb kereskedelmi területe.

---

## Összehasonlító táblázat

| | Vándor | Telepes | Úttörő | Őrző |
|---|:---:|:---:|:---:|:---:|
| **Határkő sugár** | 16 | 32 | 64 | 128 |
| **Határkövek száma** | 1 | 2 | 3 | 4 |
| **Ládaboltok** | 1 | 16 | 32 | 64 |
| **Kocsis megállók** | 1 | 2 | 3 | 4 |
| **Egyedi festmény** | 1 | 8 | 16 | 32 |
| **Játékos-látogatás** | ✗ | ✓ | ✓ | ✓ |
| **[Ősi bűvölés](osi-mestersegek.md)** | ✗ | ✗ | ✗ | ✓ |
| **Fővárosi piactér** | ✗ | ✗ | ✗ | ✓ |

---

## Rangon kívüli címek

A rangrendszeren túl léteznek **ősi mesterség címek** is, amelyeket az Őrzők szerezhetnek meg. Ezek speciális képességeket adnak és egy egyedi emoji jelenik meg a játékos neve mellett, jelezve a megszerzett tudást. Bővebben lásd az [Ősi Bűvölés és Mesterségek](osi-mestersegek.md) oldalt.

---

[← Előző: Gyors indulás](gyors-indulas.md) | [→ Következő: Gazdasági rendszer](gazdasag.md)
