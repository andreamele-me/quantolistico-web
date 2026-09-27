// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://quantolistico.it',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // build.format: 'file' serve le pagine con estensione .html, ma il
      // rilevamento automatico delle route dell'integrazione la omette
      // (tranne per la home). URL espliciti per farli coincidere con
      // quelli reali, non con quelli che Google indicherebbe a caso.
      customPages: [
        'https://quantolistico.it/',
        'https://quantolistico.it/chi-sono.html',
        'https://quantolistico.it/metodo.html',
        'https://quantolistico.it/disegno-originario.html',
        'https://quantolistico.it/quantoptica.html',
        'https://quantolistico.it/quantoptica-luce-blu.html',
        'https://quantolistico.it/quantoptica-filtri-blu.html',
        'https://quantolistico.it/quantoptica-lenti-sole.html',
        'https://quantolistico.it/quantoptica-miopia.html',
        'https://quantolistico.it/quantoptica-schermi-lavoro.html',
        'https://quantolistico.it/quantoptica-occhiali-lenti.html',
        'https://quantolistico.it/quantoptica-scelta-lenti.html',
        'https://quantolistico.it/quantoptica-materiali-lenti.html',
        'https://quantolistico.it/quantoptica-geometria-lenti.html',
        'https://quantolistico.it/quantoptica-pulizia-occhiali.html',
        'https://quantolistico.it/quantoptica-sistema-psicologico.html',
        'https://quantolistico.it/fotobiostimolazione.html',
        'https://quantolistico.it/fotobiostimolazione-aprire.html',
        'https://quantolistico.it/fotobiostimolazione-fotone.html',
        'https://quantolistico.it/fotobiostimolazione-mitocondrio.html',
        'https://quantolistico.it/fotobiostimolazione-dose.html',
        'https://quantolistico.it/fotobiostimolazione-cosa-non-e.html',
      ],
      // Filtra via i duplicati senza .html che l'integrazione genera
      // in automatico dalle route: teniamo solo customPages sopra.
      filter: (page) => page === 'https://quantolistico.it/' || page.endsWith('.html'),
    }),
  ],
});
