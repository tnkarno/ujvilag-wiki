# Szerver infó

> *Technikai adatok, hosting és csatlakozási információk.*

[← Vissza a főoldalra](index.md)

---

## Szerver adatok

| Adat | Érték |
|---|---|
| **Szerver típus** | Minecraft Java, PvE Survival |
| **Verzió** | 1.21.11 |
| **Platform** | Paper |
| **Elérhetőség** | 0-24 (nonstop) |
| **Whitelist** | Igen — [jelentkezés szükséges](https://forms.gle/h9J92S4DkaAJ87PA8) |
| **Korosztály** | 18+ |
| **Discord** | [discord.gg/MdBWZhAgCy](https://discord.gg/MdBWZhAgCy) |
| **Weboldal** | [ujvilag-birodalom](https://sites.google.com/view/ujvilag-birodalom/) |

---

## Hardver

| Komponens | Specifikáció |
|---|---|
| **Processzor** | AMD Ryzen 9 9950X |
| **RAM (szerver)** | 12 GB |
| **Biztonsági mentés** | Napi backup |
| **Teljesítmény** | Stabil 20 TPS |

A Ryzen 9 9950X egymagos teljesítménye a jelenlegi csúcskategória — a Minecraft szerver szempontjából ez az egyik legjobb választás, mivel a játék szervere döntően egymagos.

---

## Paper és a technikai limitációk

A szerver **Paper**-en fut, ami számos optimalizációt biztosít a stabil 20 TPS fenntartásához.

### Optimalizációs beállítások

Az alábbi `spigot.yml` értékek eltérnek az alapértelmezettől a szerver teljesítményének javítása érdekében:

| Beállítás | Alapértelmezett | Szerver értéke | Hatás |
|---|---|---|---|
| `view-distance` | `default` (10) | **18** | Nagyobb látótávolság |
| `simulation-distance` | `default` (10) | **8** | Kisebb szimulációs távolság, kevesebb terhelés |
| `merge-radius.item` | 0.5 | **3.5** | Tárgyak nagyobb távolságból olvadnak össze |
| `merge-radius.exp` | -1 | **4.0** | XP gömbök 4 blokkon belül összeolvadnak |
| `ticks-per.hopper-check` | 1 | **8** | Hopperek ritkábban ellenőriznek, kevesebb lag |

Ennek azonban vannak következményei:

**Gigantikus farmok korlátozottak.** A Paper bizonyos vanilla mechanikákat módosít a teljesítmény érdekében, ami azt jelenti, hogy a legnagyobb technikai farmok (pl. 0-tick farmok, bizonyos duplication glitch-ek) nem fognak működni.

**De ez nem is baj.** Ezen a szerveren nincs szükség giga farmokra:
- A [valuta gyémánt](gazdasag.md), amit nem lehet automatikusan farmolni
- A [rangrendszer](rangok.md) a kibányászott ércet méri, nem a feldolgozott gyémántot
- A közösségi farmok bőven elég nyersanyagot termelnek a hétköznapi szükségletekhez

A szerver **vanilla-közeli megközelítést** céloz meg — kevés QoL plugin, és a rendszerek a vanilla Minecraft **meghosszabbítására** szolgálnak, nem az átalakítására.

---

## Pluginok filozófiája

A szerveren **kevés plugin fut**, és mindegyik a játékélmény kiszolgálását célozza:

| Funkció | Cél |
|---|---|
| [Gazdasági rendszer](gazdasag.md) | Gyémánt-alapú economy, automatikus tranzakciók |
| [Határkő rendszer](hatarkovek.md) | Területvédelem egyedi blokkal |
| [Rangrendszer](rangok.md) | Automatizált előrehaladás |
| [Kocsis rendszer](utazas.md#kocsis-rendszer) | Utazási hálózat |
| [Ládaboltok](piacter.md) | Játékos-vezérelt kereskedelem |
| [Ősi bűvölés](osi-mestersegek.md) | Végjáték tartalom |
| [Álmok-Ura](almok-ura.md) | Közösségi alvásrendszer (fele elég, AFK nem számít) |
| Voice chat | Proximity voice kommunikáció |
| SkinRestorer | Skin kezelés |
| Interaktív chat | Megemlítés, tárgy linkelés |

Amit **nem** találsz: spawner termelők, automata hopper eladók, NPC boltok, virtuális pénz, OP enchantok, teleportálás bárhová ingyen.

---

## Csatlakozás

### Lépések

1. **Csatlakozz a [Discord szerverünkhöz](https://discord.gg/MdBWZhAgCy)**
2. **Töltsd ki a [jelentkezési űrlapot](https://forms.gle/h9J92S4DkaAJ87PA8)**
3. Várd meg a jóváhagyást (whitelist)
4. Add hozzá a szerver címét a Minecraft kliensedben
5. Csatlakozz és olvasd el a [Gyors indulás](gyors-indulas.md) útmutatót!

### Előfeltételek

- Minecraft Java Edition
- 1.21.11-es verzió
- 18 éves vagy idősebb

---

## Biztonsági mentés

A szerver **napi biztonsági mentést** készít. Ez azt jelenti:
- Ha szerverhiba történik, legfeljebb egy nap munkája veszhet el (de ez rendkívül ritka)
- A világ **soha nem törlődik** — amit építesz, az megmarad

---

## Szavazz ránk!

Ha tetszik a szerver, támogass minket szavazatoddal a szerverlista oldalakon:

- [mcszerverek.hu](https://www.mcszerverek.hu/szerver/ujvilag--birodalom-571/)
- [mc-szerverek.hu](https://mc-szerverek.hu/server/3662)
- [minecraft-multiplayer-servers-list.com](https://hu.minecraft-multiplayer-servers-list.com/server.php?id=13463)

---

## Kapcsolódó oldalak

- [Gyors indulás](gyors-indulas.md) — az első lépések
- [Szabályzat](szabalyzat.md) — mit szabad és mit nem
- [Parancsok](parancsok.md) — teljes parancslista

---

[← Előző: Parancsok](parancsok.md) | [→ Vissza a főoldalra](index.md)
