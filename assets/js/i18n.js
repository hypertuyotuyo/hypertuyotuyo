(function () {
  const LANG_KEY = 'ht-lang';

  // ── UI strings ──────────────────────────────────────────────
  const T = {
    ja: {
      /* shared nav */
      'nav.works':      '作品',
      'nav.license':    '利用規約',
      'nav.guidelines': '使用ガイドライン',
      'nav.contact':    'リンク',
      'nav.shop':       'ショップへ',
      'nav.back':       '← トップへ戻る',
      /* index — works */
      'works.more':     'Boothでもっと見る',
      /* index — about */
      'about.bio':      'VRChatで創作活動しています！！！つよいです！！はいぱーつよつよです！！！可愛いのつくるのだいすきです！！！！！',
      'about.profile':  'VRChat プロフィール',
      /* index — license section */
      'license.title':  '利用規約・使用ガイドライン',
      'license.desc':   'VN3ライセンス Ver.1.10 準拠（バージョン 2.0）',
      'acc.terms':      '📋 許諾範囲 簡易一覧',
      'acc.guidelines': '📋 使用ガイドライン 簡易一覧',
      'btn.terms':      '利用規約 全文を読む',
      'btn.guidelines': '使用ガイドラインを読む',
      /* index — contact */
      'contact.title':  'リンク・連絡先',
      'contact.booth':  'Booth ショップ',
      'contact.discord':'空飛ぶはいぱーつよつよ教',
      'contact.disc.sub':'Discord サーバー',
      /* footer */
      'footer.vn3':     '本サイトに掲載の利用規約はVN3ライセンスVer.1.10に準拠しています。',
      /* terms page */
      'terms.h1':       'はいぱーつよつよ 3Dモデル利用規約',
      'terms.ver':      'VN3ライセンスVer.1.10準拠 ／ 規約バージョン 2.0',
      'terms.dates':    '制定日：2024年5月5日　／　最終更新：2026年5月15日',
      'terms.booth.title': '正規販売店について',
      'terms.booth.body':  '当ショップのアセットは <strong>Booth（hyper-tuyotuyo.booth.pm）のみ</strong>で販売しています。Booth 以外のサイト・サービスからダウンロードまたは購入した場合、本利用規約に基づくライセンスは一切付与されず、著作権法違反に該当します。',
      'terms.sec.basic':   '基本条項',
      'terms.art1':        '第１条（語の定義）',
      'terms.art2':        '第２条（利用の許諾）',
      'terms.art3':        '第３条（免責）',
      'terms.art4':        '第４条（権利の帰属・オープンソースソフトウェア等の取り扱い）',
      'terms.art5':        '第５条（禁止行為・許諾の解除）',
      'terms.art6':        '第６条（賠償責任・紛争の解決）',
      'terms.art7':        '第７条（反社会的勢力の排除）',
      'terms.art8':        '第８条（準拠法等）',
      'terms.sec.ind':     '個別条件',
      'terms.ind1':        '1. 許諾対象データ',
      'terms.ind2':        '2. 利用条件',
      'terms.ind3':        '3. 権利者および権利者への問い合わせ先',
      'terms.ind4':        '4. クレジット表記',
      'terms.ind5':        '5. 推奨するハッシュタグ',
      'terms.ind6':        '6. 許諾期間',
      'terms.ind7':        '7. バージョン',
      'terms.vn3note':     'VN3ライセンス利用規約ジェネレータVer.1.11の出力を元に、はいぱーつよつよが独自に作成した規約です。VN3ライセンスVer.1.10に準拠しています。',
      'terms.jaonly':      null,
      /* guidelines page */
      'gl.h1':             'アセット使用ガイドライン',
      'gl.dates':          '制定日：2024年5月5日　／　最終更新：2026年5月15日',
      'gl.notice':         '本ガイドラインは VN3ライセンス Ver.1.10 に基づく利用規約と併せてご確認ください。プラットフォームや他ショップ様の利用規約とも合わせて、各規約のうち、より厳しい条件が優先されます。',
      'gl.notice.contact': 'ご不明な点は',
      'gl.notice.discord': 'Discord（yak555 / 空飛ぶはいぱーつよつよ教）',
      'gl.notice.end':     'までお問い合わせください。',
      'gl.booth.title':    '正規販売店について',
      'gl.booth.body':     '当ショップのアセットは <strong>Booth（hyper-tuyotuyo.booth.pm）のみ</strong>で販売しています。Booth 以外のサイト・サービスからダウンロードまたは購入した場合、ライセンスは一切付与されず、著作権法違反に該当します。',
      'gl.sec.target':     '対象コンテンツ',
      'gl.sec.users':      '適用対象ユーザー',
      'gl.sec.conditions': '利用条件 — 公開できないコンテンツ',
      'gl.sec.limited':    '利用条件 — 限定的に公開してもよいコンテンツ',
      'gl.sec.allowed':    '利用条件 — 公開できるコンテンツ',
      'gl.sec.ai':         '生成AI 利用ガイドライン',
      'gl.sec.ai.creator': '🤖 はいぱーつよつよ自身の 生成AI 使用方針',
      'gl.sec.ai.user':    '📋 ユーザーの 生成AI 使用ルール',
      'gl.link.terms':     '利用規約も確認する',
      'gl.jaonly':         null,
    },

    en: {
      'nav.works':      'Works',
      'nav.license':    'Terms',
      'nav.guidelines': 'Guidelines',
      'nav.contact':    'Links',
      'nav.shop':       'Shop',
      'nav.back':       '← Back to Top',
      'works.more':     'View more on Booth',
      'about.bio':      'Creating in VRChat!!! I\'m strong!! I\'m Hyper TuyoTuyo!!! I love making cute things!!!!!',
      'about.profile':  'VRChat Profile',
      'license.title':  'Terms & Guidelines',
      'license.desc':   'VN3 License Ver.1.10 compliant (Version 2.0)',
      'acc.terms':      '📋 License Summary',
      'acc.guidelines': '📋 Guidelines Summary',
      'btn.terms':      'Read Full Terms',
      'btn.guidelines': 'Read Guidelines',
      'contact.title':  'Links & Contact',
      'contact.booth':  'Booth Shop',
      'contact.discord':'Flying Hyper TuyoTuyo Religion',
      'contact.disc.sub':'Discord Server',
      'footer.vn3':     'The terms on this site comply with VN3 License Ver.1.10.',
      'terms.h1':       'Hyper TuyoTuyo 3D Model Terms of Use',
      'terms.ver':      'VN3 License Ver.1.10 compliant / Version 2.0',
      'terms.dates':    'Established: May 5, 2024 / Last updated: May 15, 2026',
      'terms.booth.title': 'Official Store',
      'terms.booth.body':  'Assets are sold <strong>exclusively on Booth (hyper-tuyotuyo.booth.pm)</strong>. Downloading or purchasing from any other site voids the license and constitutes copyright infringement.',
      'terms.sec.basic':   'Basic Terms',
      'terms.art1':        'Article 1 (Definitions)',
      'terms.art2':        'Article 2 (Grant of License)',
      'terms.art3':        'Article 3 (Disclaimer)',
      'terms.art4':        'Article 4 (Ownership & Open Source)',
      'terms.art5':        'Article 5 (Prohibited Acts & Revocation)',
      'terms.art6':        'Article 6 (Liability & Dispute Resolution)',
      'terms.art7':        'Article 7 (Exclusion of Antisocial Forces)',
      'terms.art8':        'Article 8 (Governing Law)',
      'terms.sec.ind':     'Individual Conditions',
      'terms.ind1':        '1. Licensed Data',
      'terms.ind2':        '2. Terms of Use',
      'terms.ind3':        '3. Rights Holder & Contact',
      'terms.ind4':        '4. Credit Attribution',
      'terms.ind5':        '5. Recommended Hashtags',
      'terms.ind6':        '6. License Period',
      'terms.ind7':        '7. Version',
      'terms.vn3note':     'These terms were independently created by Hyper TuyoTuyo based on the output of the VN3 License Generator Ver.1.11, and comply with VN3 License Ver.1.10.',
      'terms.jaonly':      '⚠️ Headings are translated for reference. The legally binding text remains in Japanese.',
      'gl.h1':             'Asset Usage Guidelines',
      'gl.dates':          'Established: May 5, 2024 / Last updated: May 15, 2026',
      'gl.notice':         'Please read these guidelines together with the VN3 License Ver.1.10 terms. When multiple rules apply, the strictest condition takes precedence.',
      'gl.notice.contact': 'For questions, contact us on',
      'gl.notice.discord': 'Discord (yak555 / Flying Hyper TuyoTuyo Religion)',
      'gl.notice.end':     '.',
      'gl.booth.title':    'Official Store',
      'gl.booth.body':     'Assets are sold <strong>exclusively on Booth (hyper-tuyotuyo.booth.pm)</strong>. Non-Booth purchases void the license and constitute copyright infringement.',
      'gl.sec.target':     'Target Content',
      'gl.sec.users':      'Applicable Users',
      'gl.sec.conditions': 'Usage Conditions — Prohibited Content',
      'gl.sec.limited':    'Usage Conditions — Conditionally Permitted Content',
      'gl.sec.allowed':    'Usage Conditions — Permitted Content',
      'gl.sec.ai':         'Generative AI Usage Guidelines',
      'gl.sec.ai.creator': '🤖 Creator\'s Generative AI Usage Policy',
      'gl.sec.ai.user':    '📋 User Generative AI Usage Rules',
      'gl.link.terms':     'Also check Terms of Use',
      'gl.jaonly':         '⚠️ Section headings are translated for reference. Body text remains in Japanese.',
    },
  };

  // ── Table headers & rows ─────────────────────────────────────
  const TH = {
    ja: ['項目', '可否', '備考'],
    en: ['Item', 'Status', 'Notes'],
  };

  const TERMS_ROWS = {
    ja: [
      ['個人利用',                              'ok',      '✅ 許可',       '営利・非営利を問わず'],
      ['法人利用',                              'ask',     '要確認',         '権利者に個別問い合わせ'],
      ['SNS・VRChat等へのアップロード',         'ok',      '✅ 許可',       '自己利用目的'],
      ['オンラインゲームへのアップロード',      'ok',      '✅ 許可',       '自己利用目的'],
      ['第三者への利用許諾',                    'ng',      '❌ 禁止',       ''],
      ['性的表現',                              'partial', '⚠️ 条件付き',  '少年・少女向けコンテンツを超える表現は容易に検索できないようにすること。R18相当の表現はガイドラインに準ずる'],
      ['暴力的表現',                            'partial', '⚠️ 条件付き',  '少年・少女向けコンテンツを超える表現は容易に検索できないようにすること。R18G相当の表現はガイドラインに準ずる'],
      ['文化的祭事（クリスマス・ハロウィン等）','ok',      '✅ 許可',       ''],
      ['創作上の宗教の布教',                    'ok',      '✅ 許可',       '空飛ぶはいぱーつよつよ教など'],
      ['その他の宗教・政治活動',                'ng',      '❌ 禁止',       ''],
      ['調整・改変',                            'ok',      '✅ 許可',       'ウェイト微修正・テクスチャ変更など'],
      ['他モデルの改変への流用',                'ok',      '✅ 許可',       ''],
      ['改変の外部委託',                        'partial', '⚠️ 条件付き',  'ユーザー間のみ許可'],
      ['未改変での再配布',                      'ng',      '❌ 禁止',       ''],
      ['改変データの配布',                      'ng',      '❌ 禁止',       ''],
      ['映像・配信・放送',                      'ok',      '✅ 許可',       'YouTube等を含む'],
      ['出版物・電子出版物',                    'ok',      '✅ 許可',       ''],
      ['グッズ（有体物）',                      'ok',      '✅ 許可',       ''],
      ['ソフトウェア・ゲームへの組込み',        'ok',      '✅ 許可',       ''],
      ['二次創作（衣装・テクスチャ等）',        'ok',      '✅ 許可',       '営利・非営利問わず配布可'],
      ['二次創作（ファンアート等）',            'ok',      '✅ 許可',       '営利・非営利問わず配布可'],
      ['クレジット表記',                        'partial', '任意',           '不要だがあると嬉しい'],
      ['権利義務の譲渡',                        'ng',      '❌ 禁止',       ''],
    ],
    en: [
      ['Personal use',                           'ok',      '✅ Permitted',   'Commercial & non-commercial'],
      ['Corporate use',                          'ask',     'Inquire',        'Contact rights holder individually'],
      ['Upload to SNS / VRChat etc.',            'ok',      '✅ Permitted',   'Personal use only'],
      ['Upload to online games',                 'ok',      '✅ Permitted',   'Personal use only'],
      ['Sublicensing to third parties',          'ng',      '❌ Prohibited',  ''],
      ['Sexual content',                         'partial', '⚠️ Conditional', 'Content beyond youth-appropriate must not be easily searchable. R18 follows guidelines.'],
      ['Violent content',                        'partial', '⚠️ Conditional', 'Content beyond youth-appropriate must not be easily searchable. R18G follows guidelines.'],
      ['Cultural events (Christmas, Halloween…)','ok',      '✅ Permitted',   ''],
      ['Fictional religion promotion',           'ok',      '✅ Permitted',   'Flying Hyper TuyoTuyo Religion, etc.'],
      ['Other religious / political activities', 'ng',      '❌ Prohibited',  ''],
      ['Adjustments / Modifications',            'ok',      '✅ Permitted',   'Weight tweaks, texture changes, etc.'],
      ['Use for modifying other models',         'ok',      '✅ Permitted',   ''],
      ['Outsourcing modifications',              'partial', '⚠️ Conditional', 'Between users only'],
      ['Redistribution without modification',    'ng',      '❌ Prohibited',  ''],
      ['Distribution of modified data',          'ng',      '❌ Prohibited',  ''],
      ['Video / Streaming / Broadcasting',       'ok',      '✅ Permitted',   'Including YouTube, etc.'],
      ['Publications / Digital publications',    'ok',      '✅ Permitted',   ''],
      ['Merchandise (physical goods)',           'ok',      '✅ Permitted',   ''],
      ['Software / Game integration',            'ok',      '✅ Permitted',   ''],
      ['Fan creation (outfits, textures, etc.)', 'ok',      '✅ Permitted',   'Commercial & non-commercial distribution OK'],
      ['Fan creation (fan art, etc.)',           'ok',      '✅ Permitted',   'Commercial & non-commercial distribution OK'],
      ['Credit attribution',                     'partial', 'Optional',       'Not required but appreciated'],
      ['Transfer of rights / obligations',       'ng',      '❌ Prohibited',  ''],
    ],
  };

  const GL_ROWS = {
    ja: [
      ['対象コンテンツ',                  'ok',      '✅',               'アバター・アバター衣装・アバターギミック'],
      ['適用対象',                        'ok',      '✅',               '個人・法人格なし団体。二次創作利用者にも適用。法人は要問い合わせ'],
      ['性的表現（少年少女向け程度）',    'ok',      '✅ 棲み分けなし',  ''],
      ['性的表現（R18相当）',            'partial', '⚠️ 棲み分け必須', 'タグ設定・年齢制限などを必ず行うこと'],
      ['暴力表現（少年少女向け程度）',    'ok',      '✅ 棲み分けなし',  ''],
      ['暴力表現（R18G相当）',           'partial', '⚠️ 棲み分け必須', 'タグ設定・年齢制限などを必ず行うこと'],
      ['文化的祭事・季節行事',            'ok',      '✅ 許可',           'クリスマス・ハロウィン・バレンタイン・お正月など'],
      ['創作上の宗教の布教',              'ok',      '✅ 許可',           '空飛ぶはいぱーつよつよ教など'],
      ['実在の宗教・政治活動',            'ng',      '❌ 禁止',           ''],
      ['AI利用（制作者）',                'partial', '⚠️ 一部使用',      '再現性・クオリティを確認できるもののみ。商品画像・3Dモデルへの使用はしない'],
      ['AI利用（ユーザー）',              'partial', '⚠️ 条件付き',      'スクリーンショットは可。アセット内部データへの使用は不可'],
      ['私警行為',                        'ng',      '❌ 禁止',           '他ユーザーへの取り締まり・糾弾行為'],
      ['正規販売店',                      'ng',      'Boothのみ',         '他サイトからの入手はライセンス無効・著作権法違反'],
    ],
    en: [
      ['Target content',                    'ok',      '✅',                   'Avatars, Avatar Outfits, Avatar Gimmicks'],
      ['Applicable users',                  'ok',      '✅',                   'Individuals & unincorporated groups. Fan creators included. Corporations must inquire.'],
      ['Sexual content (youth-appropriate)','ok',      '✅ No age gate',       ''],
      ['Sexual content (R18 equivalent)',   'partial', '⚠️ Age gate required', 'Must apply tags / age restrictions'],
      ['Violent content (youth-appropriate)','ok',     '✅ No age gate',       ''],
      ['Violent content (R18G equivalent)', 'partial', '⚠️ Age gate required', 'Must apply tags / age restrictions'],
      ['Cultural / seasonal events',        'ok',      '✅ Permitted',         'Christmas, Halloween, Valentine\'s, New Year\'s, etc.'],
      ['Fictional religion promotion',      'ok',      '✅ Permitted',         'Flying Hyper TuyoTuyo Religion, etc.'],
      ['Real religion / political activities','ng',    '❌ Prohibited',        ''],
      ['AI use (creator)',                  'partial', '⚠️ Partial use',      'Reproducible & quality-verifiable only. Not for product images / 3D models.'],
      ['AI use (users)',                    'partial', '⚠️ Conditional',      'Screenshots OK. Internal asset data not allowed.'],
      ['Vigilantism',                       'ng',      '❌ Prohibited',        'Policing / denouncing other users'],
      ['Official store',                    'ng',      'Booth only',           'Non-Booth = no license, copyright violation'],
    ],
  };

  // ── Build table HTML ─────────────────────────────────────────
  function buildTable(rows, lang) {
    const [h0, h1, h2] = TH[lang];
    let html = `<thead><tr><th>${h0}</th><th>${h1}</th><th>${h2}</th></tr></thead><tbody>`;
    for (const [item, cls, status, note] of rows) {
      html += `<tr><td>${item}</td><td class="${cls}">${status}</td><td>${note}</td></tr>`;
    }
    return html + '</tbody>';
  }

  // ── Apply language ───────────────────────────────────────────
  function apply(lang) {
    const t = T[lang] || T.ja;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    ['terms', 'guidelines'].forEach(id => {
      const el = document.querySelector(`[data-i18n-table="${id}"]`);
      if (!el) return;
      const rows = id === 'terms' ? TERMS_ROWS : GL_ROWS;
      el.innerHTML = buildTable(rows[lang] || rows.ja, lang);
    });

    // ja-only notice on subpages
    document.querySelectorAll('[data-i18n-jaonly]').forEach(el => {
      const msg = t[el.dataset.i18nJaonly];
      el.style.display = (lang === 'ja' || !msg) ? 'none' : 'block';
      if (msg) el.textContent = msg;
    });

    // switcher UI
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const cur = document.getElementById('lang-current');
    if (cur) cur.textContent = { ja: 'JA', en: 'EN' }[lang] || 'JA';

    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
  }

  // ── Init ─────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const btn  = document.getElementById('lang-btn');
    const drop = document.getElementById('lang-dropdown');
    if (btn && drop) {
      btn.addEventListener('click', e => { e.stopPropagation(); drop.classList.toggle('open'); });
      document.addEventListener('click', () => drop.classList.remove('open'));
      drop.addEventListener('click', e => e.stopPropagation());
      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => { apply(opt.dataset.lang); drop.classList.remove('open'); });
      });
    }

    // Detect language: saved → browser → 'ja'
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && T[saved]) {
      apply(saved);
    } else {
      const bl = (navigator.language || navigator.userLanguage || 'ja').toLowerCase();
      apply(bl.startsWith('ja') ? 'ja' : 'en');
    }
  });
})();
