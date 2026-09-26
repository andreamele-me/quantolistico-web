# Foto grezze — cartella di lavoro

Non è pubblica. Non è servita dal sito. Esclusa da git (vedi `.gitignore`).

Qui vanno gli scatti originali, prima della selezione: file grandi, non ritagliati,
non compressi, eventuali scarti. Non deve capirsi che lo scatto è in negozio —
niente insegna, vetrina con marchi, griglia di montature, cartellini, seduta da
refrazione, forottero intero.

## Quando una foto è pronta

1. Selezionare, ritagliare, controllare che non compaia il logo Optomaster né altro
   marchio di catalogo.
2. Esportare in `astro-site/public/assets/foto/` (cartella pubblica, ancora vuota
   e non linkata da nessuna pagina) — JPEG o WebP, ~1600px lato lungo, peso vicino
   all'hero esistente (~350 KB).
3. Alt onesto e descrittivo (es. "Lente in controluce"), non uno slogan.
4. Solo dopo, usarla nel componente `Figura.astro` in una pagina reale.

Foto e testo restano separati: sul sito la foto è nuda, la frase sta sotto in una
didascalia, non sovrapposta come nei post social.
