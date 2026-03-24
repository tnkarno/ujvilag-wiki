# Parancsok

> *Teljes parancslista — de ne aggódj, a legtöbb dolog kattintható a chatben!*

[← Vissza a főoldalra](index.md)

---

## Fontos tudnivaló

**Szinte minden parancs interaktív elemeket generál a chatben.** Ha beírsz egy parancsot, a megjelenő listák, nevek és akciók általában **kattinthatóak**. Nem kell mindent fejből tudnod — a rendszer végigvezet.

---

## Utazás

Részletes leírás: [Utazási rendszer](utazas.md)

### Főváros és fogadók

| Parancs | Rövidítések | Leírás | Költség |
|---|---|---|---|
| `/fovaros` | `/fv`, `/spawn` | Visszatérés a fővárosba | Ingyenes |
| `/uticelok` | `/warps` | Összes elérhető úticél listája | Ingyenes |
| `/eszakifogado` | `/ef`, `/eszak` | Északi fogadó (Tajga) | Ingyenes |
| `/delifogado` | `/df`, `/del` | Déli fogadó (Sivatag) | Ingyenes |
| `/nyugatifogado` | `/nf`, `/nyugat` | Nyugati fogadó (Badlands) | Ingyenes |
| `/keletifogado` | `/kf`, `/kelet` | Keleti fogadó (Dzsungel) | Ingyenes |

### Játékos-látogatás

| Parancs | Alternatíva | Leírás | Feltétel |
|---|---|---|---|
| `/utazas játékosnév` | `/tpa játékosnév` | Látogatás kérése | [Telepes](rangok.md#-telepes)+ |
| `/meghivas játékosnév` | `/tpahere játékosnév` | Meghívás küldése | [Telepes](rangok.md#-telepes)+ |
| `/elutasitom` | `/tpdecline` | Kérés elutasítása | — |

### Kocsis rendszer

| Parancs | Leírás |
|---|---|
| `/megallok` | Összes kocsis megálló listája (kattintható) |
| `/kocsis` | Saját kocsis megállók kezelése |
| `/kocsis megállónév` | Utazás egy adott megállóhoz |

---

## Otthon és határkő

Részletes leírás: [Határkövek](hatarkovek.md)

| Parancs | Rövidítések | Leírás |
|---|---|---|
| `/otthon` | `/haz`, `/hk home` + kattintás | Hazautazás a határkőhöz |
| `/otthonok` | `/hk home` | Összes otthon listája |
| `/hk sethome` | — | Otthon áthelyezése (védett területen belül) |
| `/hk help` | — | Határkő rendszer teljes segítség |

---

## Ládabolt

Részletes leírás: [Ládaboltok és Piactér](piacter.md)

| Parancs | Leírás |
|---|---|
| `/chestshop help` | Ládabolt segítség |
| `/chestshop create boltnév` | Új ládabolt létrehozása |
| `/ladabolt` | Bemutató bolt megtekintése |
| `/warp LadaBoltInfo` | Bemutató bolt (alternatív) |

*Bolt törlése: a láda összetörésével.*

---

## Rangok

Részletes leírás: [Rangrendszer](rangok.md)

| Parancs | Alternatíva | Leírás |
|---|---|---|
| `/rangom` | `/ar check` | Jelenlegi rang és előrehaladás |
| `/rangom RangNév` | `/ar check RangNév` | Adott rang feltételeinek megtekintése |

Példa: `/rangom Telepes` vagy `/ar check Úttörő`

---

## Gazdaság

Részletes leírás: [Gazdasági rendszer](gazdasag.md)

| Parancs | Leírás |
|---|---|
| `/bal` | Saját gyémánt egyenleg (vagy az információs panelen) |
| `/baltop` | Leggazdagabb játékosok listája |
| `/pay összeg` | Gyémánt küldése másik játékosnak |

---

## Kommunikáció

| Parancs | Leírás |
|---|---|
| `/msg játékosnév üzenet` | Privát üzenet küldése (vagy kattints a névre a chatben) |
| `/r üzenet` | Válasz az utolsó privát üzenetre |

A chat támogatja az **interaktív funkciókat**: megemlítés (@játékosnév), tárgy linkelés, és kattintható elemek.

---

## Egyéb

| Parancs | Leírás |
|---|---|
| `/sb` | Információs panel ki/be kapcsolása (egyenleg, rang stb.) |
| `/sit` | Leülés (bárhol!) — ismételt beírás vagy Shift a felálláshoz |

---

## Gyors referencia kártya

A leggyakrabban használt parancsok egy helyen:

``` mermaid
flowchart LR
    subgraph ref ["GYORS REFERENCIA"]
        direction TB
        A["🏠 /otthon — Hazautazás"]
        B["🏰 /fovaros — Főváros"]
        C["🗺️ /uticelok — Úticélok"]
        D["🐴 /megallok — Kocsis megállók"]
        E["📊 /rangom — Rang előrehaladás"]
        F["💎 /bal — Egyenleg"]
        G["🏪 /chestshop help — Bolt segítség"]
        H["🪨 /hk help — Határkő segítség"]
        I["📋 /sb — Info panel"]
    end
```

*Tipp: Szinte minden kattintható a chatben!*

---

[← Előző: Szabályzat](szabalyzat.md) | [→ Következő: Szerver infó](szerver-info.md)
