# Ripoti ya Mradi: Duka la Majaribio la Temeke

Hii ni ripoti rasmi ya utekelezaji wa mradi wa tovuti ya kutua (landing page) ya "Duka la Majaribio la Temeke" kwa kutumia muundo wa brutalist usio na utegemezi wa nje (zero external dependencies) na usio na JavaScript (zero JavaScript).

## 1. Yaliyofanywa (Executed Work)
- **Uhakiki wa Data:** Tulihakiki faili za data za mfumo (`src/data/services.json` na `src/data/config.json`) dhidi ya DATA RASMI iliyotolewa na Bodi. Hakuna tofauti au mabadiliko yoyote yaliyofanyika.
- **Ujenzi wa index.html:** Tuliunda faili moja ya `index.html` yenye muundo kamili wa HTML5 na CSS iliyopachikwa (embedded CSS).
- **Mtindo wa Brutalist:** Tulitumia tokeni za rangi zilizofungwa:
  - `--bg`: `#FDFBF7` (warm off-white)
  - `--ink`: `#1C1917` (deep stone)
  - `--accent`: `#047857` (emerald green)
  - `--price`: `#B91C1C` (market-red)
  - Hakuna `border-radius`, hakuna `box-shadow`, na hakuna `gradients`. Mistari ya mipaka (borders) ni ya gorofa na thabiti (`2px solid var(--ink)`).
- **Sehemu ya Hero:** Tuliongeza kichwa cha habari kikubwa "Duka la Majaribio la Temeke" na kaulimbiu "Matunda freshi ya Temeke" kwa kutumia saizi ya herufi inayobadilika (fluid typography via `clamp()`).
- **Gridi ya Matunda:** Tuliunda gridi ya CSS inayojirekebisha yenyewe (`repeat(auto-fit, minmax(250px, 1fr))`) kuonyesha matunda manne na bei zake halisi:
  - ndizi — TSh 1,000
  - machungwa — TSh 500
  - embe — TSh 800
  - papai — TSh 1,500
- **Mawasiliano na Kijachini (Footer):** Tuliongeza anwani ya "Mtaa wa Chang'ombe, Temeke, Dar es Salaam" na namba ya simu "+255 700 000 000" pamoja na kijachini chenye rangi zilizogeuzwa (inverted colors).
- **Majaribio ya Playwright:** Tuliandika na kuendesha majaribio ya Playwright (`tests/verify_responsive.spec.js`) ili kuhakikisha kuwa gridi ina nguzo 4 kwenye Desktop na nguzo 1 kwenye Mobile. Majaribio yote yalipita kwa 100%.

## 2. Jedwali la Majaribio (Desktop vs Mobile)

| Kipengele | Desktop (1280x800) | Mobile (375x667) | Hali ya Jaribio |
| :--- | :--- | :--- | :--- |
| **Idadi ya Nguzo za Gridi** | Nguzo 4 (1x4 grid) | Nguzo 1 (1x1 grid) | Imepita (Passed) |
| **Upana wa Skrini** | 1280px | 375px | Imepita (Passed) |
| **Picha ya Skrini** | `screenshots/desktop.png` | `screenshots/mobile.png` | Imehifadhiwa |
| **Utegemezi wa JS** | Hakuna (0) | Hakuna (0) | Imepita (Passed) |

## 3. Viungo (Links)
- **GitHub Repository:** [https://github.com/professor-xmd-company/temeke-majaribio](https://github.com/professor-xmd-company/temeke-majaribio)
- **Live Website Link (Vercel):** [https://temeke-majaribio.vercel.app](https://temeke-majaribio.vercel.app)

## 4. Mapungufu (Limitations)
- **Tovuti Tuli (Static Site):** Tovuti hii haina mfumo wa nyuma (backend) au hifadhidata kwa ajili ya usimamizi wa bidhaa au oda.
- **Kikapu cha Ununuzi (No Cart/Ordering):** Hakuna kikapu cha ununuzi au mfumo wa malipo mtandaoni; wateja wanatakiwa kuwasiliana moja kwa moja kupitia namba ya simu iliyotolewa.
