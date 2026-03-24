# Utazási rendszer

> *A birodalom hatalmas — de a kocsis, a fogadók és a varázslat segítenek célba érni.*

[← Vissza a főoldalra](index.md)

---

## Áttekintés

Az Újvilágban többféle utazási mód áll rendelkezésre. Néhány ingyenes, mások [gyémántba](gazdasag.md) kerülnek. A rendszer úgy van kialakítva, hogy a távolság **számítson** — nem teleportálhatsz bárhová ingyen, de a fontos helyek mindig elérhetők.

``` mermaid
flowchart TB
    subgraph free ["🆓 INGYENES"]
        direction TB
        A["/otthon\n(határkő)"]
        B["/fovaros"]
        C["Fogadók\n(/eszak, /del,\n/nyugat, /kelet)"]
    end
    subgraph paid ["💎 FIZETŐS"]
        direction TB
        D["Kocsis\n(megállók között,\n~gyémánt)"]
        E["Játékos-látogatás\n(Telepes rangtól,\n~4 gyémánt)"]
    end
```

---

## Főváros

A főváros a szerver központja — a spawn pont, a fő piactér és a közösségi élet szíve.

| Parancs | Alternatívák |
|---|---|
| `/fovaros` | `/fv` vagy `/spawn` |

**Költség:** Ingyenes, bármikor, bárhonnan.

---

## Fogadók

A világ négy égtájánál egy-egy fogadó áll, néhány ezer blokkra a spawntól. Ezek segítenek az új játékosoknak **jó lakható területet találni** a különböző biomokban.

| Fogadó | Biom | Parancs | Rövidítések |
|---|---|---|---|
| Északi fogadó | Tajga | `/eszakifogado` | `/ef` vagy `/eszak` |
| Déli fogadó | Sivatag | `/delifogado` | `/df` vagy `/del` |
| Nyugati fogadó | Badlands | `/nyugatifogado` | `/nf` vagy `/nyugat` |
| Keleti fogadó | Dzsungel | `/keletifogado` | `/kf` vagy `/kelet` |

**Költség:** Ingyenes.

**Tipp új játékosoknak:** A [Gyors indulás](gyors-indulas.md) oldalon ajánljuk, hogy a fogadókat használd kiindulópontként a tökéletes helyszín megtalálásához. Mindegyik más-más biomban van — válaszd azt, ami a legjobban tetszik!

---

## Összes úticél

Az összes elérhető warp (úticél) megtekintése:

| Parancs | Alternatíva |
|---|---|
| `/uticelok` | `/warps` |

Egy interaktív lista jelenik meg, ahol **kattintással** választhatod ki az úticélt. A lista a rangoddal és az elérhető helyekkel együtt bővül.

---

## Kocsis rendszer

A kocsis rendszer a szerver egyedi utazási megoldása. Kocsis megállókat helyezhetsz el a világban, és a kocsis pár másodperc alatt elszállít az egyik megállóból a másikba — természetesen **pár gyémánt fejében**.

### Hogyan működik?

1. **Állíts fel egy kocsis megállót** — ez egy hely a világban, ahová a kocsis el tud szállítani (és ahonnan is indulhatsz)
2. **Nézd meg a megállók listáját** — más játékosok megállóit is láthatod
3. **Utazz!** — válaszd ki a célállomást, fizess, és a kocsis pár másodperc alatt odavisz

### Parancsok

| Parancs | Funkció |
|---|---|
| `/kocsis` | Saját kocsis megállók kezelése |
| `/kocsis megállónév` | Utazás egy adott megállóhoz |
| `/megallok` | Összes megálló listája (kattintható!) |

### Megálló-limit rangonként

| [Rang](rangok.md) | Max. megállók | Megjegyzés |
|---|:---:|---|
| Vándor | 1 | — |
| Telepes | 2 | A 2. megállót gyémántért kell feloldani |
| Úttörő | 3 | A 3. megállót is fel kell oldani |
| Őrző | 4 | A 4. megállót is fel kell oldani |

### Költségek

Az utazás költsége **pár gyémánt** alkalmanként. A pontos ár a távolságtól függhet. Ez a [gazdasági rendszer](gazdasag.md) egyik sink-je.

---

## Játékos-látogatás

[Telepes](rangok.md#-telepes) rangtól kezdve meglátogathatod más játékosokat, és ők is meglátogathatnak téged.

### Hogyan?

| Művelet | Parancs | Alternatíva |
|---|---|---|
| Látogatás kérése | `/utazas játékosnév` | `/tpa játékosnév` |
| Meghívás küldése | `/meghivas játékosnév` | `/tpahere játékosnév` |
| Kérés elutasítása | `/elutasitom` | `/tpdecline` |

### Fontos tudnivalók

- **Telepes rang szükséges** — Vándorok nem használhatják
- **Költsége van** — jelenleg körülbelül 4 gyémánt (ez változhat)
- A célszemélynek **el kell fogadnia** a kérést
- A megjelenő akciók a chatben **kattinthatóak** — nem kell parancsokat memorizálnod

---

## Hazautazás

A leggyakrabban használt utazási mód: visszatérés a [határkőhöz](hatarkovek.md).

| Parancs | Alternatívák |
|---|---|
| `/otthon` | `/haz` vagy `/hk home` (majd kattints) |

**Költség:** Ingyenes. A határkő néhány másodperc után azonnal hazateleportál.

**Előfeltétel:** Legalább egy lerakott [határkő](hatarkovek.md).

Több otthonod van? Listázd őket:
- `/otthonok` vagy `/hk home`

---

## Utazási rendszer diagram

``` mermaid
flowchart TD
    FV["🏰 FŐVÁROS\n(ingyenes)"]
    FV --> EF["Északi Fogadó\n(ingyenes)"]
    FV --> DF["Déli Fogadó\n(ingyenes)"]
    FV --> WP["Warpok"]
    FV --> NF["Nyugati Fogadó\n(ingyenes)"]
    FV --> KF["Keleti Fogadó\n(ingyenes)"]

    subgraph kocsis ["🐴 KOCSIS HÁLÓZAT"]
        M1["Megálló"] -- "💎 gyémánt" --- M2["Megálló"]
        M3["Megálló"] -- "💎 gyémánt" --- M4["Megálló"]
        M1 -- "💎 gyémánt" --- M3
        M2 -- "💎 gyémánt" --- M4
    end

    subgraph latogatas ["👥 JÁTÉKOS-LÁTOGATÁS"]
        JA["Játékos A"] -- "💎 4 gyémánt\n(Telepes rangtól)" --- JB["Játékos B"]
    end

    subgraph haza ["🏠 HAZAUTAZÁS"]
        BH["Bárhol"] -- "INGYENES" --> HK["Határkő"]
    end
```

---

## Interaktivitás

**Minden parancs által generált lista kattintható!** A szerver nagyon ügyes abban, hogy interaktív elemeket jelenít meg a chatben. Nem kell parancsokat memorizálnod — kattints a megjelenő gombokra, nevekre, úticélokra, és a rendszer elvégzi a többit.

---

[← Előző: Határkövek](hatarkovek.md) | [→ Következő: Ládaboltok és Piactér](piacter.md)
