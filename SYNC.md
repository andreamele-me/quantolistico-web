# Sync git — Quantolistico web

Repo: https://github.com/andreamele-me/quantolistico-web
Branch: `main`
Hosting: GitHub Pages + Cloudflare → quantolistico.it
Stato DNS/posta: andreamele-me/quantolistico-memoria, file DNS.md. Prima di parlarne, interrogare il DNS vivo.

## Ruoli

| Macchina | Ruolo | Path |
|---|---|---|
| Mint P645-M + Lexar interno | Casa. Qui si modifica il sito. | `/mnt/lexar/SITO WEB/quantolistico-web` |
| Nitro + PowerDirector | Solo video. Non si edita HTML/CSS. | rushes sul disco Nitro; mp4 finiti → cartella `assets/video/` sul Mint |

Clone doppio da ignorare o rimuovere sul Mint:
`/mnt/lexar/ILDISEGNOORIGINARIO/quantolistico-web`

Nota: dal 23 set 2026 il Lexar è montato via fstab su `/mnt/lexar` (non più `/media/andrea/LEXAR`), per evitare che il mount udisks facesse sparire la cartella dal file picker di Code.

## Sul Mint (ogni sessione)

```bash
cd "/mnt/lexar/SITO WEB/quantolistico-web"
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
