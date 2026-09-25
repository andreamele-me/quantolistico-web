(function () {
  var el = document.getElementById('visite');
  if (!el) return;

  var host = location.hostname;
  var onSite = host === 'quantolistico.it' || host === 'www.quantolistico.it';
  var storageKey = 'visite-quantolistico';

  function show(n) {
    if (typeof n !== 'number') return;
    el.textContent = 'visualizzazioni ' + n.toLocaleString('it-IT');
  }

  var cached = null;
  try {
    var raw = sessionStorage.getItem(storageKey);
    if (raw) cached = JSON.parse(raw);
  } catch (e) {}

  if (cached && typeof cached.total === 'number') {
    show(cached.total);
    return;
  }

  if (!onSite) return;

  var url = 'https://hitscounter.dev/api/hit?url=' +
    encodeURIComponent('https://quantolistico.it') +
    '&output=json';
  fetch(url, { credentials: 'omit' })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (!d || typeof d.total_hits !== 'number') return;
      show(d.total_hits);
      try {
        sessionStorage.setItem(storageKey, JSON.stringify({ total: d.total_hits }));
      } catch (e) {}
    })
    .catch(function () {});
})();
