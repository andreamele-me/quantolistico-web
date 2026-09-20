# Sync git — Quantolistico web

Repo: https://github.com/andreamele-me/quantolistico-web
Branch: `main`
Hosting: GitHub Pages + Cloudflare → quantolistico.it

## Ruoli

| Macchina | Ruolo | Path |
|---|---|---|
| Mint P645-M + Lexar interno | Casa. Qui si modifica il sito. | `/media/andrea/LEXAR/SITO WEB/quantolistico-web` |
| Nitro + PowerDirector | Solo video. Non si edita HTML/CSS. | rushes sul disco Nitro; mp4 finiti → cartella `assets/video/` sul Mint |

Clone doppio da ignorare o rimuovere sul Mint:
`/media/andrea/LEXAR/ILDISEGNOORIGINARIO/quantolistico-web`

## Sul Mint (ogni sessione)

```bash
cd "/media/andrea/LEXAR/SITO WEB/quantolistico-web"
git pull
# ... lavori ...
git add -A
git status
git commit -m "messaggio chiaro"
git push
```

Oppure: `./sync.sh pull` all'inizio e `./sync.sh push "messaggio"` alla fine.

## Sul Nitro (solo se serve un mp4 sul sito)

1. Esporta da PowerDirector un mp4 compresso.
2. Copialo sul Mint in `assets/video/`.
3. Dal Mint: `git add assets/video/NOME.mp4 && git commit && git push`.

Non committare progetti `.pds`, rushes, cache PowerDirector.
