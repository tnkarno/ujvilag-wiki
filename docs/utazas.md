# Utazási rendszer

> *A birodalom hatalmas — de a kocsis, a fogadók és a varázslat segítenek célba érni.*

[← Vissza a főoldalra](index.md)

---

## Áttekintés

Az Újvilágban többféle utazási mód áll rendelkezésre. Néhány ingyenes, mások [gyémántba](gazdasag.md) kerülnek. A rendszer úgy van kialakítva, hogy a távolság **számítson** — nem teleportálhatsz bárhová ingyen, de a fontos helyek mindig elérhetők.

| Ingyenes | Fizetős |
|---|---|
| `/otthon` — hazateleport a [határkőhöz](hatarkovek.md) | **Kocsis** — megállók között, pár gyémánt |
| `/fovaros` — spawn pont, bárhonnan | **Játékos-látogatás** — Telepes rangtól, ~4 gyémánt |
| **Fogadók** — `/eszak`, `/del`, `/nyugat`, `/kelet` | |

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

!!! tip "Tipp új játékosoknak"
    A [Gyors indulás](gyors-indulas.md) oldalon ajánljuk, hogy a fogadókat használd kiindulópontként a tökéletes helyszín megtalálásához. Mindegyik más-más biomban van — válaszd azt, ami a legjobban tetszik!

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

## Gyors áttekintés

| Utazási mód | Parancs | Költség | Feltétel |
|---|---|---|---|
| Főváros | `/fovaros` | Ingyenes | — |
| Északi fogadó | `/eszak` | Ingyenes | — |
| Déli fogadó | `/del` | Ingyenes | — |
| Nyugati fogadó | `/nyugat` | Ingyenes | — |
| Keleti fogadó | `/kelet` | Ingyenes | — |
| Összes úticél | `/uticelok` | Ingyenes | — |
| Hazautazás | `/otthon` | Ingyenes | Lerakott [határkő](hatarkovek.md) |
| Kocsis utazás | `/kocsis megállónév` | Pár gyémánt | Megálló szükséges |
| Kocsis megállók | `/megallok` | — | — |
| Játékos-látogatás | `/utazas játékosnév` | ~4 gyémánt | [Telepes](rangok.md#-telepes) rang |
| Meghívás küldése | `/meghivas játékosnév` | ~4 gyémánt | [Telepes](rangok.md#-telepes) rang |

---

## Interaktivitás

**Minden parancs által generált lista kattintható!** A szerver nagyon ügyes abban, hogy interaktív elemeket jelenít meg a chatben. Nem kell parancsokat memorizálnod — kattints a megjelenő gombokra, nevekre, úticélokra, és a rendszer elvégzi a többit.

---

[← Előző: Határkövek](hatarkovek.md) | [→ Következő: Ládaboltok és Piactér](piacter.md)
