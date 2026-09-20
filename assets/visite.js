(function () {
  var el = document.getElementById('visite');
  if (!el) return;
  var url = 'https://hitscounter.dev/api/hit?url=' +
    encodeURIComponent('https://quantolistico.it') +
    '&output=json';
  fetch(url, { credentials: 'omit' })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (!d || typeof d.total_hits !== 'number') return;
      el.textContent = 'visualizzazioni ' + d.total_hits.toLocaleString('it-IT');
    })
    .catch(function () {});
})();
