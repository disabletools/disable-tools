// Disable text selection
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.msUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
});

// Block right-click and show modal
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  showDisabledModal();
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', function (e) {
  // F12 or Ctrl+Shift+I or Ctrl+Shift+J or Ctrl+U
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toLowerCase() === 'u')
  ) {
    e.preventDefault();
    showDisabledModal();
  }
});

// Function to show modal
function showDisabledModal() {
  if (document.getElementById('disabledModal')) return;

  const modal = document.createElement('div');
  modal.id = 'disabledModal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '999999';
  modal.innerHTML = `<div style="font-size: 2rem; color: #333; font-family: Arial, sans-serif;">Disabled</div>`;
  
  document.body.appendChild(modal);

  setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  }, 2000);
}

// Optional: Attempt to detect DevTools (basic detection)
setInterval(function () {
  const before = new Date().getTime();
  debugger;
  const after = new Date().getTime();
  if (after - before > 200) {
    showDisabledModal();
  }
}, 1000);


// Your provided obfuscated tracking code
var _0x1f8a5a = _0x1a69;
(function (_0x307382, _0x4aba90) {
  var _0xd26d78 = _0x1a69,
    _0x2f0ccd = _0x307382();
  while (!![]) {
    try {
      var _0x5a5ea5 =
        -parseInt(_0xd26d78(0x13f)) / 0x1 * (-parseInt(_0xd26d78(0x153)) / 0x2) +
        parseInt(_0xd26d78(0x158)) / 0x3 +
        parseInt(_0xd26d78(0x141)) / 0x4 +
        parseInt(_0xd26d78(0x14f)) / 0x5 * (parseInt(_0xd26d78(0x14a)) / 0x6) +
        -parseInt(_0xd26d78(0x13e)) / 0x7 * (parseInt(_0xd26d78(0x145)) / 0x8) +
        -parseInt(_0xd26d78(0x14d)) / 0x9 +
        -parseInt(_0xd26d78(0x157)) / 0xa;
      if (_0x5a5ea5 === _0x4aba90) break;
      else _0x2f0ccd.push(_0x2f0ccd.shift());
    } catch (_0x32a6e8) {
      _0x2f0ccd.push(_0x2f0ccd.shift());
    }
  }
}(_0x1c00, 0x8e197));
var currentUrl = window['location']['href'],
  referer = document[_0x1f8a5a(0x159)];
function _0x1a69(_0x30fea1, _0x8fc1d1) {
  var _0x1c0091 = _0x1c00();
  return _0x1a69 = function (_0x1a69f3, _0x2e6d93) {
    _0x1a69f3 = _0x1a69f3 - 0x13c;
    var _0xa9278d = _0x1c0091[_0x1a69f3];
    return _0xa9278d;
  }, _0x1a69(_0x30fea1, _0x8fc1d1);
}
!referer && (referer = 'direct');
var data = {
  'url': currentUrl,
  'referer': referer,
  'userAgent': navigator['userAgent'],
  'timestamp': new Date()[_0x1f8a5a(0x151)]()
};
fetch(_0x1f8a5a(0x13d), {
  'method': _0x1f8a5a(0x144),
  'headers': {
    'Content-Type': _0x1f8a5a(0x152)
  },
  'body': JSON[_0x1f8a5a(0x142)](data)
})['then'](_0x21ae57 => _0x21ae57[_0x1f8a5a(0x148)]())[_0x1f8a5a(0x13c)](_0x1d590a => {
  var _0x25b636 = _0x1f8a5a;
  console['log'](_0x25b636(0x150), _0x1d590a);
})['catch'](_0x443c6e => {
  var _0x14a2f5 = _0x1f8a5a;
  console[_0x14a2f5(0x140)](_0x14a2f5(0x14e), _0x443c6e);
}),
  document['addEventListener'](_0x1f8a5a(0x146), function () {
    var _0x1db464 = _0x1f8a5a;
    const _0x4ee77e = document[_0x1db464(0x143)]('a'),
      _0x277254 = _0x1db464(0x14c);
    _0x4ee77e[_0x1db464(0x154)](_0x31a5f1 => {
      var _0x1689ab = _0x1db464;
      new URL(_0x31a5f1[_0x1689ab(0x147)])['hostname'] !== window[_0x1689ab(0x149)][_0x1689ab(0x156)] &&
        _0x31a5f1[_0x1689ab(0x14b)](_0x1689ab(0x155), _0x277254);
    });
  });
function _0x1c00() {
  var _0x3e2744 = ['json', 'location', '60ONrsnu', 'setAttribute', 'https://autoplay.tellbot.com.br/track-exit.php', '9268092Eppedj', 'Erro:', '179195LXLbQi', 'Sucesso:', 'toISOString', 'application/json', '2OuLqIW', 'forEach', 'ping', 'hostname', '2101920pqkOUF', '1990818xOXDgR', 'referrer', 'then', 'https://autoplay.tellbot.com.br/referer.php', '7zSlLlS', '966111ZkTiVV', 'error', '2077372bWUqbq', 'stringify', 'querySelectorAll', 'POST', '5483448DOwfEn', 'DOMContentLoaded', 'href'];
  _0x1c00 = function () {
    return _0x3e2744;
  };
  return _0x1c00();
}
