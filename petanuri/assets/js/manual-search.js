// ぺたぬり3D マニュアルの検索（ライブラリなし）
// 索引は tools/hypertuyotuyo-site/build_manual_search.py が作る /petanuri/assets/data/manual-search.<言語>.json
// 決まり（2026-10-30）：
//  - ひらがな・カタカナ・全角半角・大文字小文字の違いは同じに見る（fold。1 字ずつ置き換えるので位置がずれない）
//  - 言い換え（ミラー → 対称 など）は索引の syn で広げる
//  - 空白で区切った言葉は全部を含む節だけ（AND）。0 件なら「〜で」「〜を」の所で区切り直し、それでも 0 件なら 2 字ずつの近さで探す
//  - 0 件でも行き止まりにしない（近い言葉・やりたいこと・用語集・困ったとき・問い合わせへ）
//  - 英語・韓国語・中国語（2026-10-30）：画面の言葉は索引の ui、言葉の分け方と語幹は索引の lang で RULES から選ぶ
(function () {
  'use strict';
  var forms = document.querySelectorAll('.mn-search');
  var page = document.querySelector('.mn-results-page');
  if (!forms.length && !page) return;

  // 画面の言葉。索引の ui で上書きする（{q} は打った言葉、{n} は件数）。ここは索引を読む前に出す分と、日本語の既定
  var ui = {
    none: '「{q}」は見つかりませんでした。',
    noneHelp: '言葉を短くするか、下の一覧から探してください。',
    tryWords: 'ほかの言い方で探す：',
    near: '同じ言葉は見つからなかったので、近い所を出しています',
    all: '「{q}」の {n} 件の結果をすべて見る',
    count: '{n} 件',
    nearParen: '（{near}）',
    title: '「{q}」の検索結果 | ぺたぬり3D マニュアル',
    sub: ' ／ ',
    wait: '検索の索引を読み込んでいます…',
    fail: '検索の索引を読み込めませんでした。ページを開き直してください。'
  };
  var WAIT = {
    en: ['Loading the search index…', 'Could not load the search index. Please reload the page.'],
    ko: ['검색 색인을 불러오는 중…', '검색 색인을 불러오지 못했습니다. 페이지를 새로 고쳐 주세요.'],
    zh: ['正在加载搜索索引…', '无法加载搜索索引。请重新打开页面。']
  }[(document.documentElement.lang || 'ja').slice(0, 2)];
  if (WAIT) { ui.wait = WAIT[0]; ui.fail = WAIT[1]; }
  function fill(t, v) { return t.replace(/\{(\w+)\}/g, function (m, k) { return v[k] != null ? v[k] : m; }); }
  function plural(key, n) { return ui[key + '1'] && n === 1 ? ui[key + '1'] : ui[key]; }

  // ---- 文字をそろえる（長さは変えない） ----
  function fold(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      if (c >= 0xFF01 && c <= 0xFF5E) c -= 0xFEE0;          // 全角の英数・記号 → 半角
      else if (c === 0x3000) c = 0x20;                       // 全角の空白
      else if (c >= 0x30A1 && c <= 0x30F6) c -= 0x60;        // カタカナ → ひらがな
      if (c >= 0x41 && c <= 0x5A) c += 0x20;                 // 大文字 → 小文字
      out += String.fromCharCode(c);
    }
    return out;
  }
  var HIRA = /^[ぁ-ゟー]+$/;
  var HAS_KANJI_KANA = /[一-鿿々゠-ヿ]/;

  var idx = null, loading = null;
  function load(url) {
    if (idx) return Promise.resolve(idx);
    if (loading) return loading;
    loading = fetch(url, { credentials: 'same-origin' }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (data) {
      data.docs.forEach(function (d) {
        var p = data.pages[d.p];
        d.page = p;
        d.fh = fold(d.h);
        d.fs = fold(d.s || '');
        d.fx = fold(d.x);
        d.fk = fold(d.k || '');
        d.fp = fold(p.t);
      });
      data.synf = (data.syn || []).map(function (g) { return g.map(fold); });
      if (data.ui) Object.keys(data.ui).forEach(function (k) { ui[k] = data.ui[k]; });
      idx = data;
      return data;
    });
    return loading;
  }

  // ---- 言葉を広げる ----
  var ENDINGS = ['できない', 'られない', 'れない', 'したい', 'します', 'したら', 'すると', 'させる', 'ない', 'たい', 'する', 'たら', 'ます'];
  function stemsJa(t) {
    var out = [];
    if (t.length < 2) return out;
    if (HAS_KANJI_KANA.test(t)) {
      // 漢字・カタカナの後ろのひらがな（送り仮名・助動詞）を落とす：描きたい → 描、塗る → 塗
      var m = t.match(/^(.*[^ぁ-ゟ])[ぁ-ゟ]+$/);
      if (m && m[1].length >= 1) out.push(m[1]);
    } else if (HIRA.test(t)) {
      for (var i = 0; i < ENDINGS.length; i++) {
        var e = ENDINGS[i];
        if (t.length > e.length + 1 && t.slice(-e.length) === e) { out.push(t.slice(0, -e.length)); break; }
      }
      if (t.length >= 3 && /[うくぐすつぬぶむるい]$/.test(t)) out.push(t.slice(0, -1)); // ぼかす → ぼか
    }
    return out;
  }
  // 英語：複数形・-ing・-ed を落とす（layers → layer、painting → paint、clipped → clip）。本文は部分一致で引くので、語幹で足りる
  function stemsEn(t) {
    var out = [];
    if (t.length < 4 || !/^[a-z][a-z'-]*$/.test(t)) return out;
    [[/'s$/, ''], [/ies$/, 'y'], [/(ss|sh|ch|x)es$/, '$1'], [/([^s])s$/, '$1'], [/([b-df-hj-np-tv-z])\1(ing|ed)$/, '$1'], [/ing$/, ''], [/ed$/, ''], [/(e)d$/, '$1']].forEach(function (r) {
      if (!r[0].test(t)) return;
      var s = t.replace(r[0], r[1]);
      if (s.length >= 3 && s !== t && out.indexOf(s) < 0) out.push(s);
    });
    return out;
  }
  // 韓国語：語の後ろの助詞・語尾を落とす（레이어를 → 레이어、내보내려면 → 내보내）
  var KO_END = ['에서는', '으로는', '하려면', '하는데', '해야', '에서', '으로', '려면', '하기', '하는', '하고', '해요', '합니다', '하세요', '돼요', '되요', '안돼', '이', '가', '은', '는', '을', '를', '에', '로', '의', '와', '과', '도', '만', '랑'];
  function stemsKo(t) {
    var out = [];
    if (t.length < 2 || !/[가-힣]$/.test(t)) return out;
    for (var i = 0; i < KO_END.length; i++) {
      var e = KO_END[i];
      if (t.length > e.length && t.slice(-e.length) === e) { out.push(t.slice(0, -e.length)); break; }
    }
    return out;
  }
  function stems(t) {
    var lang = idx && idx.lang;
    return lang === 'en' ? stemsEn(t) : lang === 'ko' ? stemsKo(t) : lang === 'zh' ? [] : stemsJa(t);
  }
  function expand(t) {
    var alts = [t];
    stems(t).forEach(function (s) { if (alts.indexOf(s) < 0) alts.push(s); });
    idx.synf.forEach(function (g) {
      var hit = g.some(function (w) { return w.length >= 2 ? t.indexOf(w) >= 0 || (t.length >= 2 && w.indexOf(t) === 0) : t === w; });
      if (hit) g.forEach(function (w) { if (alts.indexOf(w) < 0) alts.push(w); });
    });
    return alts;
  }
  // 「左右対称で描くには」→「左右対称」「描く」
  var PARTICLE = /(?:について|には|では|とは|から|まで|より|って|ので|のに|けど|が|を|に|で|は|の|と|へ|や|も)(?=[^ぁ-ゟ]|$)/g;
  // 英語の「how do I …」、韓国語の「어떻게 …」のような、探す手がかりにならない語
  var STOP_EN = /^(?:how|do|does|did|i|to|the|a|an|can|can't|cant|cannot|my|in|on|of|for|with|is|are|it|its|not|why|what|when|where|which|doesn't|doesnt|don't|dont|won't|wont|isn't|isnt|want|be|and|or|this|that|way|me|you|from|into|at|by|get|make)$/;
  var STOP_KO = /^(?:어떻게|왜|방법|하는|법|안|돼요|안돼요|안됨|안돼|하고|싶어요|싶다|싶은데|수|있나요|없어요|없나요|되나요|하나요|좀|그리고|또는)$/;
  var ZH_FN = /(?:怎么样|怎么|怎样|如何|为什么|为何|什么|哪里|可以|能否|不能|无法|不了|没有|一下|方法|请问|我想|想要|的|了|吗|呢|吧|啊|在|把|用|和|与|跟|我|要|是)/g;
  function resplit(terms) {
    var lang = idx && idx.lang, out = [];
    terms.forEach(function (t) {
      var s = t.replace(/[?？!！、。,.・，；;:：“”"]/g, ' ');
      // 中国語は漢字と英数字の間も切る（导出PSD → 导出 PSD）
      if (lang === 'zh') s = s.replace(ZH_FN, ' ').replace(/([一-鿿])(?=[0-9a-z])|([0-9a-z])(?=[一-鿿])/g, '$1$2 ');
      else if (lang !== 'en' && lang !== 'ko') s = s.replace(PARTICLE, ' ');
      s.split(/\s+/).forEach(function (w) {
        if (lang === 'en') { if (STOP_EN.test(w)) w = ''; }
        else if (lang === 'ko') { if (STOP_KO.test(w)) w = ''; }
        else if (lang !== 'zh') w = w.replace(/^(?:どうやって|どうすれば|やり方|方法)$/, '');
        if (w && !(w.length === 1 && (HIRA.test(w) || /[a-z]/.test(w)))) out.push(w);
      });
    });
    return out;
  }

  function count(hay, needle) {
    if (!needle) return 0;
    var n = 0, i = hay.indexOf(needle);
    while (i >= 0 && n < 9) { n++; i = hay.indexOf(needle, i + needle.length); }
    return n;
  }
  function scoreTerm(d, alts) {
    var best = 0, word = null;
    for (var i = 0; i < alts.length; i++) {
      // 言い換え・語幹は少し下げる。1 字だけの語幹（落ちた → 落）は何にでも当たるので、もっと下げる
      var a = alts[i], w = i === 0 ? 1 : a.length < 2 ? 0.4 : 0.8;
      var s = 0;
      if (d.fh.indexOf(a) >= 0) s += 14;
      if (d.fs.indexOf(a) >= 0) s += 8;
      if (d.fk.indexOf(a) >= 0) s += 11;
      if (d.fp.indexOf(a) >= 0) s += 4;
      var c = count(d.fx, a);
      s += Math.min(c, 5) * 2;
      s *= w;
      if (s > best) { best = s; word = c || d.fh.indexOf(a) >= 0 ? a : word; }
      if (s > 0 && !word) word = a;
    }
    return { s: best, w: word };
  }
  function strict(terms) {
    var groups = terms.map(expand);
    var whole = terms.join('');
    var res = [];
    idx.docs.forEach(function (d) {
      var total = 0, words = [];
      for (var g = 0; g < groups.length; g++) {
        var r = scoreTerm(d, groups[g]);
        if (!r.s) return;
        total += r.s;
        if (r.w) words.push(r.w);
      }
      if (terms.length > 1 && d.fh.indexOf(whole) >= 0) total += 10;
      total += d.boost || 0;
      res.push({ d: d, s: total, words: words });
    });
    return res;
  }
  function grams(t) {
    var g = [];
    for (var i = 0; i + 1 < t.length; i++) {
      var b = t.substr(i, 2);
      if (/\s/.test(b) || HIRA.test(b)) continue; // ひらがなだけの 2 字（には・ので など）は手がかりにしない
      if (g.indexOf(b) < 0) g.push(b);
    }
    return g;
  }
  function fuzzy(q) {
    var g = grams(q);
    if (!g.length) return [];
    var need = Math.max(1, Math.ceil(g.length * 0.6));
    var res = [];
    idx.docs.forEach(function (d) {
      var hit = 0, s = 0, words = [];
      g.forEach(function (b) {
        var inH = d.fh.indexOf(b) >= 0, c = count(d.fx, b);
        if (inH || c || d.fk.indexOf(b) >= 0) { hit++; s += (inH ? 6 : 0) + Math.min(c, 3); words.push(b); }
      });
      if (hit >= need) res.push({ d: d, s: s + hit * 3, words: words });
    });
    return res;
  }
  function search(raw) {
    var q = fold(raw).trim();
    if (!q) return { list: [], near: false };
    var terms = q.split(/\s+/).filter(Boolean);
    var list = strict(terms), near = false;
    // 文のまま入れられたときは、言葉に分けても検索する（「レイヤーが増やせない」→「レイヤー」「増やせない」）。
    // 分けた言葉が全部当たる節は少し上げ、文のままの当たりが少ないときは、分けた方の結果も足す
    var re = resplit(terms);
    if (re.length && re.join(' ') !== terms.join(' ')) {
      var few = list.length < 3;
      strict(re).forEach(function (r) {
        for (var i = 0; i < list.length; i++) if (list[i].d === r.d) { list[i].s += r.s * 0.5; return; }
        if (few) { r.s *= 0.9; list.push(r); }
      });
    }
    // 近さで探す：英語は語の間をつながない（語をまたぐ 2 字を手がかりにしない）
    if (!list.length) { list = fuzzy(terms.join(idx.lang === 'en' ? ' ' : '')); near = list.length > 0; }
    list.sort(function (a, b) { return b.s - a.s || a.d.o - b.d.o; });
    return { list: list, near: near };
  }

  // ---- 表示 ----
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function snippet(d, words, len) {
    var x = d.x, fx = d.fx, at = -1, w = '';
    for (var i = 0; i < words.length; i++) {
      var p = fx.indexOf(words[i]);
      if (p >= 0 && (at < 0 || p < at)) { at = p; w = words[i]; }
    }
    var start = at < 0 ? 0 : Math.max(0, at - Math.floor(len / 3));
    var piece = x.substr(start, len), fpiece = fx.substr(start, len);
    // 抜き出した中の当たった言葉に印を付ける（fold は長さを変えないので位置がそのまま使える）
    var marks = [];
    words.forEach(function (wd) {
      if (!wd) return;
      var j = fpiece.indexOf(wd);
      while (j >= 0) { marks.push([j, j + wd.length]); j = fpiece.indexOf(wd, j + wd.length); }
    });
    marks.sort(function (a, b) { return a[0] - b[0]; });
    var out = '', pos = 0;
    marks.forEach(function (m) {
      if (m[0] < pos) return;
      out += esc(piece.slice(pos, m[0])) + '<mark>' + esc(piece.slice(m[0], m[1])) + '</mark>';
      pos = m[1];
    });
    out += esc(piece.slice(pos));
    return (start > 0 ? '…' : '') + out + (start + len < x.length ? '…' : '');
  }
  function tierBadge(t) {
    if (!t) return '';
    return ' <span class="tier ' + (t === 'Pro' ? 'pro' : 'std') + '">' + t + '</span>';
  }
  function itemHTML(r, i, len) {
    var d = r.d, href = d.page.u + (d.id ? '#' + d.id : '');
    return '<a class="mn-hit" role="option" id="mn-opt-' + i + '" href="' + href + '" data-words="' + esc(r.words.join(' ')) + '">' +
      '<span class="mn-hit-path">' + esc(d.page.t) + (d.page.tier ? tierBadge(d.page.tier) : '') + '</span>' +
      '<span class="mn-hit-title">' + esc(d.h) + (d.s ? '<small>' + esc(ui.sub) + esc(d.s) + '</small>' : '') + (d.tier && !d.page.tier ? tierBadge(d.tier) : '') + '</span>' +
      '<span class="mn-hit-text">' + snippet(d, r.words, len) + '</span></a>';
  }
  function emptyHTML(q) {
    var sug = [];
    if (idx && idx.synf) {
      // 1 字でも重なる言い換えの言葉を出す
      var fq = fold(q);
      idx.syn.forEach(function (g, gi) {
        idx.synf[gi].forEach(function (w, wi) {
          if (sug.length < 6 && w.length >= 2 && grams(w).some(function (b) { return fq.indexOf(b) >= 0; }) && sug.indexOf(g[0]) < 0) sug.push(g[0]);
        });
      });
    }
    var links = (idx && idx.help) || [];
    return '<div class="mn-none"><p><b>' + esc(fill(ui.none, { q: q })) + '</b>' + esc(ui.noneHelp) + '</p>' +
      (sug.length ? '<p class="mn-none-words">' + esc(ui.tryWords) + sug.map(function (w) { return '<button type="button" data-q="' + esc(w) + '">' + esc(w) + '</button>'; }).join('') + '</p>' : '') +
      '<ul>' + links.map(function (l) { return '<li><a href="' + l.u + '">' + esc(l.t) + '</a></li>'; }).join('') + '</ul></div>';
  }

  // 結果から飛んだ先で、当たった言葉に印を付けて節を少し光らせる
  function remember(a) {
    try { sessionStorage.setItem('mn-hl', JSON.stringify({ u: a.pathname + a.hash, w: a.getAttribute('data-words') || '' })); } catch (e) { /* 印が無くても飛べる */ }
  }
  function markArrival() {
    var data;
    try { data = JSON.parse(sessionStorage.getItem('mn-hl') || 'null'); sessionStorage.removeItem('mn-hl'); } catch (e) { return; }
    if (!data || data.u !== location.pathname + location.hash || !location.hash) return;
    var sec = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!sec) return;
    sec.classList.add('mn-arrived');
    setTimeout(function () { sec.classList.remove('mn-arrived'); }, 2400);
    var words = data.w.split(' ').filter(function (w) { return w.length >= 1; });
    if (!words.length) return;
    var walker = document.createTreeWalker(sec, NodeFilter.SHOW_TEXT, null), nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    var done = 0;
    nodes.forEach(function (node) {
      if (done > 12 || !node.nodeValue.trim() || node.parentNode.closest('script,style,mark')) return;
      var f = fold(node.nodeValue), hits = [];
      words.forEach(function (w) { var j = f.indexOf(w); while (j >= 0) { hits.push([j, j + w.length]); j = f.indexOf(w, j + w.length); } });
      if (!hits.length) return;
      hits.sort(function (a, b) { return a[0] - b[0]; });
      var frag = document.createDocumentFragment(), pos = 0, t = node.nodeValue;
      hits.forEach(function (h) {
        if (h[0] < pos) return;
        frag.appendChild(document.createTextNode(t.slice(pos, h[0])));
        var m = document.createElement('mark'); m.className = 'mn-found'; m.textContent = t.slice(h[0], h[1]);
        frag.appendChild(m); pos = h[1]; done++;
      });
      frag.appendChild(document.createTextNode(t.slice(pos)));
      node.parentNode.replaceChild(frag, node);
    });
  }
  markArrival();
  window.addEventListener('hashchange', markArrival);

  // ---- 入力欄（どのページにもある小さい検索） ----
  var MAX = 8;
  forms.forEach(function (form) {
    var input = form.querySelector('input[type=search]');
    var box = form.querySelector('.mn-results');
    var url = form.getAttribute('data-index');
    var active = -1, last = '', timer = 0;
    if (!input || !box) return;
    form.addEventListener('submit', function (e) {
      var opts = box.querySelectorAll('.mn-hit');
      if (active >= 0 && opts[active]) { e.preventDefault(); remember(opts[active]); location.href = opts[active].href; }
      else if (!input.value.trim()) e.preventDefault();
    });
    function close() { box.hidden = true; input.setAttribute('aria-expanded', 'false'); active = -1; input.removeAttribute('aria-activedescendant'); }
    function setActive(i) {
      var opts = box.querySelectorAll('.mn-hit');
      if (!opts.length) return;
      active = (i + opts.length) % opts.length;
      opts.forEach(function (o, j) { o.setAttribute('aria-selected', j === active ? 'true' : 'false'); });
      input.setAttribute('aria-activedescendant', opts[active].id);
      opts[active].scrollIntoView({ block: 'nearest' });
    }
    function run() {
      var q = input.value.trim();
      if (q === last && !box.hidden) return;
      last = q;
      if (!q) { close(); return; }
      // 索引（数百 KB）を初めて読む間は、何も出ないと壊れて見えるので、読み込み中と出す
      if (!idx) { box.innerHTML = '<p class="mn-near">' + ui.wait + '</p>'; box.hidden = false; }
      load(url).then(function () {
        if (input.value.trim() !== q) return;
        var r = search(q), html = '';
        if (!r.list.length) html = emptyHTML(q);
        else {
          if (r.near) html += '<p class="mn-near">' + ui.near + '</p>';
          html += r.list.slice(0, MAX).map(function (x, i) { return itemHTML(x, i, 70); }).join('');
          html += '<a class="mn-all" href="' + form.getAttribute('action') + '?q=' + encodeURIComponent(q) + '">' + esc(fill(plural('all', r.list.length), { q: q, n: r.list.length })) + '</a>';
        }
        box.innerHTML = html;
        box.hidden = false;
        input.setAttribute('aria-expanded', 'true');
        active = -1;
      }).catch(function () { box.innerHTML = '<p class="mn-near">' + ui.fail + '</p>'; box.hidden = false; });
    }
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 90); });
    input.addEventListener('focus', function () { load(url).catch(function () {}); if (input.value.trim()) { last = ''; run(); } });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (box.hidden) run(); else setActive(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
      else if (e.key === 'Escape') { if (!box.hidden) { e.preventDefault(); close(); } else if (input.value) { input.value = ''; } }
    });
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-q]');
      if (b) { input.value = b.getAttribute('data-q'); input.focus(); run(); return; }
      var a = e.target.closest('a.mn-hit');
      if (a) remember(a);
    });
    document.addEventListener('click', function (e) { if (!form.contains(e.target)) close(); });
  });

  // 「/」か Ctrl+K で検索へ（入力中は除く）
  document.addEventListener('keydown', function (e) {
    var t = e.target, typing = t && (t.isContentEditable || /^(input|textarea|select)$/i.test(t.tagName));
    if (typing) return;
    if (e.key === '/' || ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K'))) {
      var input = document.querySelector('.mn-search input[type=search]');
      if (input) { e.preventDefault(); input.focus(); input.select(); }
    }
  });

  // ---- 検索結果のページ（/petanuri/manual/search?q=） ----
  if (page) {
    var pin = page.querySelector('input[type=search]');
    var out = page.querySelector('.mn-results-list');
    var status = page.querySelector('.mn-results-status');
    var q0 = new URLSearchParams(location.search).get('q') || '';
    if (pin) pin.value = q0;
    var render = function (q) {
      if (!q.trim()) { out.innerHTML = ''; status.textContent = ''; return; }
      if (!idx) status.textContent = ui.wait;
      load(page.getAttribute('data-index')).then(function () {
        var r = search(q);
        document.title = fill(ui.title, { q: q });
        if (!r.list.length) { status.textContent = ''; out.innerHTML = emptyHTML(q); return; }
        status.textContent = fill(plural('count', r.list.length), { n: r.list.length }) + (r.near ? fill(ui.nearParen, { near: ui.near }) : '');
        out.innerHTML = r.list.map(function (x, i) { return itemHTML(x, i, 150); }).join('');
      }).catch(function () { status.textContent = ui.fail; });
    };
    render(q0);
    page.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = pin.value.trim();
      history.replaceState(null, '', location.pathname + (q ? '?q=' + encodeURIComponent(q) : ''));
      render(q);
    });
    out.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-q]');
      if (b) { pin.value = b.getAttribute('data-q'); page.dispatchEvent(new Event('submit', { cancelable: true })); return; }
      var a = e.target.closest('a.mn-hit');
      if (a) remember(a);
    });
  }
})();
