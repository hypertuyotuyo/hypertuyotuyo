// ぺたぬり3D 紹介ページ・マニュアル共通（ライブラリなし）
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.remove('no-js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- ナビ：スクロールで下線、スマホのメニュー ----
  var nav = document.querySelector('.pn-nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 30); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    var burger = nav.querySelector('.pn-burger');
    var links = nav.querySelector('.pn-nav-links');
    if (burger && links) {
      burger.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && links.classList.contains('open')) { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
      });
    }
  }

  // ---- ふわっと出る（同じ親の中で少しずつずらす） ----
  var items = document.querySelectorAll('.pn-reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) {
      var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('pn-reveal'); });
      var i = sibs.indexOf(el);
      el.style.transitionDelay = Math.min(i, 6) * 0.08 + 's';
      io.observe(el);
    });
  }

  // ---- ビフォー／アフターのスライダー ----
  document.querySelectorAll('.pn-compare').forEach(function (box) {
    var input = box.querySelector('input[type=range]');
    if (!input) return;
    var set = function (v) { box.style.setProperty('--pos', v + '%'); };
    var touched = false;
    input.addEventListener('input', function () { touched = true; set(input.value); box.classList.remove('hint'); });
    set(input.value);
    // いちばん上の見本（data-auto）：読み込んだら一度だけ、塗る前から塗った後へ動かして見せる（このページの動きはここだけ）
    if (box.hasAttribute('data-auto') && !reduce) {
      input.value = 100; set(100);
      var t0 = null, from = 100, to = 45, dur = 1400;
      var step = function (t) {
        if (touched) return;
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        var v = from + (to - from) * e;
        input.value = v; set(v);
        if (k < 1) requestAnimationFrame(step);
      };
      setTimeout(function () { requestAnimationFrame(step); }, 500);
      return;
    }
    // 見えたら一度だけ「動かせる」ことを知らせる
    if (!reduce && 'IntersectionObserver' in window) {
      var hio = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { box.classList.add('hint'); hio.disconnect(); }
      }, { threshold: 0.6 });
      hio.observe(box);
    }
  });

  // ---- 機能の一覧：版で絞る ----
  var filter = document.querySelector('.pn-filter');
  if (filter) {
    var rank = { lite: 1, std: 2, pro: 3 };
    filter.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      filter.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var want = b.getAttribute('data-tier');
      document.querySelectorAll('.pn-feat li[data-tier]').forEach(function (li) {
        var t = li.getAttribute('data-tier');
        li.classList.toggle('dim', want !== 'all' && rank[t] > rank[want]);
      });
      var out = document.getElementById('pn-filter-status');
      if (out) out.textContent = b.getAttribute('data-say') || '';
    });
  }

  // ---- マニュアル：スマホでは目次をたたむ ----
  var side = document.querySelector('.mn-side');
  var toggle = side && side.querySelector('.mn-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = side.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
