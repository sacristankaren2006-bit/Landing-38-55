/* OvaBloom landing — runtime (sin dependencias) */
(function () {
  var root = document.querySelector('[data-ovb-root]');
  if (!root) return;
  var BASE = root.getAttribute('data-assets') || '';
  var OVB_FILES={"9fa66f6a21b9b51f5e015e6bdf3179ea": "ovb-frasco.png", "9c525f03788fea850cf313279cc67979": "ovb-hero-01-oferta.jpg", "93c6e5c3bfc15eca0a7333be72e9e53f": "ovb-hero-02-formula.jpg", "d3454498593eb4796ecd14b952bdc394": "ovb-hero-03-beneficios.jpg", "21d45547402d76eeea5c287016217d6a": "ovb-hero-04-semanas.jpg", "a40028fa5147a3b04184130a90ad350c": "ovb-hero-05-ingredientes.jpg", "480bb57ce91c493d68046cb1a34af0a6": "ovb-hero-06-comparacion.jpg", "ab48eecb34e9ddd0b123c4491c37474f": "ovb-logo.svg", "f56d63cbab2a4d2f0a5b9766c32a8326": "ovb-ing-mio.jpg", "b3c2910d0a06c257513719dfb4fc0622": "ovb-ing-dchiro.jpg", "b71f7ccea6dc076569a4cd8f564b934d": "ovb-ing-magnesio.jpg", "e73eae9bb55a93aac4981d4c27c7cd26": "ovb-ing-d3.jpg", "5c798a1f65cc3214fd5134201977e4f8": "ovb-ing-b.jpg", "6443f9dcf330490e697f1be12277d162": "ovb-ing-omega.jpg", "cf1d6385f1868c6ddce0582e736b7fb2": "ovb-regalo-asesoria.jpg", "9968797f5a1654cdb2617fcfae5d3f88": "ovb-regalo-guia.png", "bca504f89736f0deb9e3f16fc974ce6b": "ovb-90-dias.jpg", "6e9a1fe3ab92dc55f0a52ddec8de2c50": "ovb-scoops.jpg", "9ce116622a859249f8c71a5ee5edd1eb": "ovb-vaso.jpg", "99408d5b535651db76421d0044405505": "ovb-preparacion.png", "7c7223cdce3695756c56fec7e4c3b57e": "ovb-resena-elena.jpg", "0c40647c9273ddda5e2ec54cf1b4e861": "ovb-resena-mariana.jpg", "77e53e9142caedc3da4b2fdf25d1b849": "ovb-resena-muestra-1.jpg", "9f011330d66cac8d584ce1ed77154b75": "ovb-resena-muestra-2.jpg", "891a498b6b6d16a23c916352e79e77e3": "ovb-resena-muestra-3.jpg", "81208e93cd35d234f419fd2aaf632cd1": "ovb-resena-muestra-4.jpg"};
  function OVB_IMG(id) { return BASE + OVB_FILES[id]; }
  var DCLogic = function (props) { this.props = props || {}; };
  DCLogic.prototype.setState = function (p) { Object.assign(this.state, p); render(); };
  
class Component extends DCLogic {
constructor(props) {
super(props);
this.state = { gi: 0, plan: 2, sub: false, faq: 0, acc: -1, tl: { top: 20, len: 0, fill: 0, act: 0 } };
}
componentDidMount() {
var self = this;
this._raf = 0;
this._h = function () {
if (self._raf) return;
self._raf = requestAnimationFrame(function () { self._raf = 0; self.measure(); });
};
document.addEventListener('scroll', this._h, true);
window.addEventListener('resize', this._h);
this._t = setTimeout(this._h, 300);
}
componentWillUnmount() {
document.removeEventListener('scroll', this._h, true);
window.removeEventListener('resize', this._h);
if (this._raf) cancelAnimationFrame(this._raf);
clearTimeout(this._t);
}
measure() {
var el = document.querySelector('[data-tl="1"]');
if (!el) return;
var dots = el.querySelectorAll('[data-step]');
if (dots.length < 2) return;
var r = el.getBoundingClientRect();
var cs = [];
for (var i = 0; i < dots.length; i++) { var d = dots[i].getBoundingClientRect(); cs.push(d.top + d.height / 2 - r.top); }
var top = Math.round(cs[0]);
var len = Math.round(cs[cs.length - 1] - cs[0]);
var mark = window.innerHeight * 0.6 - r.top;
var fill = Math.round(Math.max(0, Math.min(len, mark - cs[0])));
var act = 0;
for (var j = 0; j < cs.length; j++) { if (mark >= cs[j] - 4) act = j + 1; }
var p = this.state.tl;
if (p.top !== top || p.len !== len || Math.abs(p.fill - fill) > 1 || p.act !== act) this.setState({ tl: { top: top, len: len, fill: fill, act: act } });
}
renderVals() {
var warm = { bg: '#FAF5F0', card: '#FFFFFF', tint: '#FFEDE5', melon: '#FFD0C0', sand: '#F1E6DC', line: '#E7DACE', panel: '#E7DACE', brand: '#EE7F4B', brandSoft: '#FCE6DB', text: '#3A2822', muted: '#6F584A', accent: '#B84E25', dark: '#3A2822', onDark: '#FFE9DF', onDarkMuted: '#EBCBBB', gold: '#FFB892' };
var mono = { bg: '#FFFFFF', card: '#FFFFFF', tint: '#F7ECE7', melon: '#F9E3D9', sand: '#F5F2EE', line: '#E4E2E0', panel: 'transparent', brand: '#EE7F4B', brandSoft: '#FCE6DB', text: '#1A1A1A', muted: '#5F5B58', accent: '#93361A', dark: '#7A2C14', onDark: '#FFFFFF', onDarkMuted: '#F5D6C8', gold: '#FFC9AE' };
var pal = this.props.paleta ?? 'Monocromática (Resilia)';
var base = pal === 'Cálida (Plenara)' ? warm : mono;
var serif = this.props.titularesSerif ?? false;
var t = Object.assign({}, base, { head: serif ? "'Playfair Display', serif" : "'Outfit', sans-serif" });
var s = this.state;
var fmt = function (n) { return '$' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
var compra = { 1: 115000, 2: 198000, 3: 267000 };
var susc = { 1: 92900, 2: 176900, 3: 237900 };
var full = { 1: 115000, 2: 230000, 3: 345000 };
var price = s.sub ? susc[s.plan] : compra[s.plan];
var old = full[s.plan];
var self = this;
var card = function (n) { var on = s.plan === n; return { on: on, aria: on ? 'true' : 'false', border: on ? '#EE7F4B' : '#D9D9D9', bg: on ? '#FEF4EE' : '#FFFFFF' }; };
var saving = old - price;
var pl = function (n) { var pr = s.sub ? susc[n] : compra[n]; var sv = full[n] - pr; return { price: fmt(pr), old: sv > 0 ? fmt(full[n]) : '', save: sv > 0 ? 'Ahorras ' + fmt(sv) : 'Precio regular' }; };
var d = new Date(); var bd = 0;
while (bd < 5) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0 && d.getDay() !== 6) bd++; }
var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
var circ = function (n) { var on = s.tl.act >= n || n === 1; return on ? { bg: t.accent, border: t.brand, fg: '#FFFFFF', op: 1, dot: t.accent, pill: t.accent } : { bg: t.card, border: t.brandSoft, fg: t.muted, op: 0.38, dot: '#D9CDC4', pill: '#C9B8AC' }; };
var row = function (n) { return s.sub && s.plan === n ? t.card : 'transparent'; };
var acc = function (i) { var o = s.acc === i; return { open: o, sign: o ? '−' : '+', aria: o ? 'true' : 'false', toggle: function () { self.setState({ acc: o ? -1 : i }); } }; };
var gImgs = [OVB_IMG('9c525f03788fea850cf313279cc67979'),OVB_IMG('93c6e5c3bfc15eca0a7333be72e9e53f'),OVB_IMG('d3454498593eb4796ecd14b952bdc394'),OVB_IMG('21d45547402d76eeea5c287016217d6a'),OVB_IMG('a40028fa5147a3b04184130a90ad350c'),OVB_IMG('480bb57ce91c493d68046cb1a34af0a6')];
var gAlts = ['OvaBloom más 2 regalos: guía de estilo y asesoría por 3 días. Ofertas de fin de año','Fórmula 40:1: 40 partes de mio-inositol por 1 de d-chiro-inositol','Beneficios de OvaBloom','Tu cambio en 10 a 12 semanas','Lo que hay en cada cucharada','Comparación de OvaBloom con otros inositoles'];
var gi = s.gi || 0;
var thumb = function (i) { var on = gi === i; return { border: on ? t.brand : 'transparent', aria: on ? 'true' : 'false', pick: function () { self.setState({ gi: i }); } }; };
var faq = function (i) { var o = s.faq === i; return { open: o, sign: o ? '−' : '+', aria: o ? 'true' : 'false', toggle: function () { self.setState({ faq: o ? -1 : i }); } }; };
return {
t: t,
g: { src: gImgs[gi], alt: gAlts[gi], prev: function () { self.setState({ gi: (gi + 5) % 6 }); }, next: function () { self.setState({ gi: (gi + 1) % 6 }); } },
th0: thumb(0), th1: thumb(1), th2: thumb(2), th3: thumb(3), th4: thumb(4), th5: thumb(5),
o: { main: '#EE7F4B', deep: '#EE7F4B', light: '#E4E4E4', tint: '#F5F3EF', tint2: '#F3F3F3', text: '#EE7F4B' },
p1: pl(1), p2: pl(2), p3: pl(3),
plansTitle: s.sub ? 'Suscríbete y ahorra' : 'Elige tu plan',
subExtra: fmt(compra[s.plan] - susc[s.plan]),
subRow: { border: s.sub ? '#EE7F4B' : '#D9D9D9', bg: s.sub ? '#FEF4EE' : '#FFFFFF', box: s.sub ? '#EE7F4B' : '#FFFFFF' },
delivery: d.getDate() + ' de ' + meses[d.getMonth()],
tl: { top: s.tl.top + 'px', len: s.tl.len + 'px', fill: s.tl.fill + 'px' },
c1: circ(1), c2: circ(2), c3: circ(3), c4: circ(4),
b1: card(1), b2: card(2), b3: card(3),
s1: row(1), s2: row(2), s3: row(3),
pick1: function () { self.setState({ plan: 1 }); },
pick2: function () { self.setState({ plan: 2 }); },
pick3: function () { self.setState({ plan: 3 }); },
sub: s.sub,
subAria: s.sub ? 'true' : 'false',
sw: { track: s.sub ? t.accent : t.line, knob: s.sub ? '25px' : '3px' },
toggleSub: function () { self.setState({ sub: !s.sub }); },
total: fmt(price),
totalOld: price < old ? fmt(old) : '',
badge: saving > 0 ? 'Rebajas de fin de año · ahorras ' + fmt(saving) : 'Rebajas de fin de año',
a0: acc(0), a1: acc(1), a2: acc(2), a3: acc(3), a4: acc(4),
f0: faq(0), f1: faq(1), f2: faq(2), f3: faq(3), f4: faq(4), f5: faq(5), f6: faq(6), f7: faq(7), f8: faq(8), f9: faq(9)
};
}
}

  var comp = new Component({});
  var vals = {};
  function get(path) { return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, vals); }
  function fill(t) { return t.replace(/\[\[([^\]]+)\]\]/g, function (m, k) { var v = get(k.trim()); return v == null ? '' : v; }); }
  function render() {
    vals = comp.renderVals();
    root.querySelectorAll('[data-ovb]').forEach(function (el) {
      var list = [];
      for (var i = 0; i < el.attributes.length; i++) { var a = el.attributes[i]; if (a.name.indexOf('data-ovt-') === 0) list.push(a); }
      list.forEach(function (a) { el.setAttribute(a.name.slice(9), fill(a.value)); });
    });
    root.querySelectorAll('[data-ovtx]').forEach(function (el) { var v = get(el.getAttribute('data-ovtx')); el.textContent = v == null ? '' : v; });
    root.querySelectorAll('[data-ovif]').forEach(function (el) { el.hidden = !get(el.getAttribute('data-ovif')); });
  }
  root.addEventListener('click', function (e) {
    var el = e.target.closest('[data-ovclick]');
    if (el) { var f = get(el.getAttribute('data-ovclick')); if (typeof f === 'function') { e.preventDefault(); f(); } return; }
    var buy = e.target.closest('[data-ovbuy]');
    if (buy) { e.preventDefault(); comprar(buy); }
  });
  function comprar(btn) {
    var plan = comp.state.plan, sub = comp.state.sub;
    var id = root.getAttribute('data-variant-' + plan);
    var sp = sub ? root.getAttribute('data-selling-plan-' + plan) : '';
    if (!id) { console.warn('OvaBloom: falta el ID de variante del plan ' + plan + ' en la configuración de la sección.'); window.location.href = '/cart'; return; }
    var item = { id: Number(id), quantity: 1 };
    if (sp) item.selling_plan = Number(sp);
    btn.disabled = true;
    fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ items: [item] }) })
      .then(function (r) { if (!r.ok) throw new Error('cart'); window.location.href = '/checkout'; })
      .catch(function () { btn.disabled = false; window.location.href = '/cart'; });
  }
  render();
  if (comp.componentDidMount) comp.componentDidMount();
})();
