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
      'gl.sec.ai':         'AI 利用ガイドライン',
      'gl.sec.ai.creator': '🤖 はいぱーつよつよ自身の AI 使用方針',
      'gl.sec.ai.user':    '📋 ユーザーの AI 使用ルール',
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
      'gl.sec.conditions': 'Usage Conditions — Restricted Content',
      'gl.sec.ai':         'AI Usage Guidelines',
      'gl.sec.ai.creator': '🤖 Creator\'s AI Usage Policy',
      'gl.sec.ai.user':    '📋 User AI Usage Rules',
      'gl.link.terms':     'Also check Terms of Use',
      'gl.jaonly':         '⚠️ Section headings are translated for reference. Body text remains in Japanese.',
    },

    ko: {
      'nav.works':      '작품',
      'nav.license':    '이용 약관',
      'nav.guidelines': '사용 가이드라인',
      'nav.contact':    '링크',
      'nav.shop':       '쇼핑몰 바로가기',
      'nav.back':       '← 메인으로',
      'works.more':     'Booth에서 더 보기',
      'about.bio':      'VRChat에서 창작 활동 중!!!!! 강해요!! 하이퍼추요추요입니다!!! 귀여운 거 만드는 거 너무 좋아요!!!!!',
      'about.profile':  'VRChat 프로필',
      'license.title':  '이용 약관・사용 가이드라인',
      'license.desc':   'VN3 라이선스 Ver.1.10 준수 (버전 2.0)',
      'acc.terms':      '📋 허가 범위 요약',
      'acc.guidelines': '📋 사용 가이드라인 요약',
      'btn.terms':      '이용 약관 전문 읽기',
      'btn.guidelines': '사용 가이드라인 읽기',
      'contact.title':  '링크・연락처',
      'contact.booth':  'Booth 쇼핑몰',
      'contact.discord':'하늘을 나는 하이퍼추요추요교',
      'contact.disc.sub':'Discord 서버',
      'footer.vn3':     '이 사이트에 게재된 이용 약관은 VN3 라이선스 Ver.1.10을 준수합니다.',
      'terms.h1':       '하이퍼추요추요 3D 모델 이용 약관',
      'terms.ver':      'VN3 라이선스 Ver.1.10 준수 ／ 약관 버전 2.0',
      'terms.dates':    '제정일：2024년 5월 5일　／　최종 업데이트：2026년 5월 15일',
      'terms.booth.title': '정규 판매처',
      'terms.booth.body':  '해당 쇼핑몰의 에셋은 <strong>Booth（hyper-tuyotuyo.booth.pm）에서만</strong> 판매합니다. Booth 이외의 사이트에서 다운로드 또는 구매한 경우 라이선스가 부여되지 않으며 저작권법 위반에 해당합니다.',
      'terms.sec.basic':   '기본 조항',
      'terms.art1':        '제1조（용어 정의）',
      'terms.art2':        '제2조（이용 허락）',
      'terms.art3':        '제3조（면책）',
      'terms.art4':        '제4조（권리 귀속・오픈소스 소프트웨어 취급）',
      'terms.art5':        '제5조（금지 행위・허락 해제）',
      'terms.art6':        '제6조（배상 책임・분쟁 해결）',
      'terms.art7':        '제7조（반사회적 세력 배제）',
      'terms.art8':        '제8조（준거법 등）',
      'terms.sec.ind':     '개별 조건',
      'terms.ind1':        '1. 허락 대상 데이터',
      'terms.ind2':        '2. 이용 조건',
      'terms.ind3':        '3. 권리자 및 문의처',
      'terms.ind4':        '4. 크레딧 표기',
      'terms.ind5':        '5. 권장 해시태그',
      'terms.ind6':        '6. 허락 기간',
      'terms.ind7':        '7. 버전',
      'terms.vn3note':     '이 약관은 VN3 라이선스 생성기 Ver.1.11의 출력을 바탕으로 하이퍼추요추요가 독자적으로 작성하였으며, VN3 라이선스 Ver.1.10을 준수합니다.',
      'terms.jaonly':      '⚠️ 제목은 참고 번역입니다. 법적 효력이 있는 본문은 일본어로 표시됩니다.',
      'gl.h1':             '에셋 사용 가이드라인',
      'gl.dates':          '제정일：2024년 5월 5일　／　최종 업데이트：2026년 5월 15일',
      'gl.notice':         'VN3 라이선스 Ver.1.10에 근거한 이용 약관과 함께 확인해 주세요. 여러 규약이 적용될 경우, 더 엄격한 조건이 우선됩니다.',
      'gl.notice.contact': '문의는',
      'gl.notice.discord': 'Discord（yak555 / 하늘을 나는 하이퍼추요추요교）',
      'gl.notice.end':     '로 연락해 주세요.',
      'gl.booth.title':    '정규 판매처',
      'gl.booth.body':     '해당 쇼핑몰의 에셋은 <strong>Booth（hyper-tuyotuyo.booth.pm）에서만</strong> 판매합니다. Booth 이외에서 입수한 경우 라이선스 무효・저작권법 위반에 해당합니다.',
      'gl.sec.target':     '대상 콘텐츠',
      'gl.sec.users':      '적용 대상 유저',
      'gl.sec.conditions': '이용 조건 — 공개 불가 콘텐츠',
      'gl.sec.ai':         'AI 이용 가이드라인',
      'gl.sec.ai.creator': '🤖 제작자의 AI 사용 방침',
      'gl.sec.ai.user':    '📋 유저의 AI 사용 규칙',
      'gl.link.terms':     '이용 약관도 확인하기',
      'gl.jaonly':         '⚠️ 섹션 제목은 참고 번역입니다. 본문은 일본어로 표시됩니다.',
    },

    zh: {
      'nav.works':      '作品',
      'nav.license':    '使用条款',
      'nav.guidelines': '使用指南',
      'nav.contact':    '链接',
      'nav.shop':       '前往商店',
      'nav.back':       '← 返回首页',
      'works.more':     '在Booth查看更多',
      'about.bio':      '在VRChat进行创作活动！！！好强哦！！我是超级强！！！超级喜欢做可爱的东西！！！！！',
      'about.profile':  'VRChat 主页',
      'license.title':  '使用条款・使用指南',
      'license.desc':   'VN3许可证 Ver.1.10 合规（版本 2.0）',
      'acc.terms':      '📋 授权范围简览',
      'acc.guidelines': '📋 使用指南简览',
      'btn.terms':      '阅读完整条款',
      'btn.guidelines': '阅读使用指南',
      'contact.title':  '链接・联系方式',
      'contact.booth':  'Booth 商店',
      'contact.discord':'飞天超级强教',
      'contact.disc.sub':'Discord 服务器',
      'footer.vn3':     '本网站刊载的使用条款遵循VN3许可证Ver.1.10。',
      'terms.h1':       '超级强 3D模型使用条款',
      'terms.ver':      'VN3许可证Ver.1.10合规 ／ 条款版本 2.0',
      'terms.dates':    '制定日：2024年5月5日　／　最终更新：2026年5月15日',
      'terms.booth.title': '正规销售渠道',
      'terms.booth.body':  '本店素材<strong>仅在Booth（hyper-tuyotuyo.booth.pm）销售</strong>。通过其他网站下载或购买的，不授予本条款的任何许可，且构成著作权侵权。',
      'terms.sec.basic':   '基本条款',
      'terms.art1':        '第1条（词汇定义）',
      'terms.art2':        '第2条（使用许可）',
      'terms.art3':        '第3条（免责声明）',
      'terms.art4':        '第4条（权利归属・开源软件处理）',
      'terms.art5':        '第5条（禁止行为・许可撤销）',
      'terms.art6':        '第6条（赔偿责任・纠纷解决）',
      'terms.art7':        '第7条（排除反社会势力）',
      'terms.art8':        '第8条（准据法等）',
      'terms.sec.ind':     '个别条件',
      'terms.ind1':        '1. 许可对象数据',
      'terms.ind2':        '2. 使用条件',
      'terms.ind3':        '3. 权利人及联系方式',
      'terms.ind4':        '4. 署名说明',
      'terms.ind5':        '5. 推荐话题标签',
      'terms.ind6':        '6. 许可期间',
      'terms.ind7':        '7. 版本',
      'terms.vn3note':     '本条款由超级强基于VN3许可证生成器Ver.1.11的输出独自制定，遵循VN3许可证Ver.1.10。',
      'terms.jaonly':      '⚠️ 标题为参考翻译。具有法律效力的正文保持日文显示。',
      'gl.h1':             '素材使用指南',
      'gl.dates':          '制定日：2024年5月5日　／　最终更新：2026年5月15日',
      'gl.notice':         '请结合VN3许可证Ver.1.10的使用条款一并确认。多个规则适用时，以最严格的条件优先。',
      'gl.notice.contact': '如有疑问，请通过',
      'gl.notice.discord': 'Discord（yak555 / 飞天超级强教）',
      'gl.notice.end':     '联系我们。',
      'gl.booth.title':    '正规销售渠道',
      'gl.booth.body':     '本店素材<strong>仅在Booth（hyper-tuyotuyo.booth.pm）销售</strong>。通过其他网站获取的，许可证无效，构成著作权侵权。',
      'gl.sec.target':     '目标内容',
      'gl.sec.users':      '适用对象用户',
      'gl.sec.conditions': '使用条件 — 不可公开内容',
      'gl.sec.ai':         'AI使用指南',
      'gl.sec.ai.creator': '🤖 制作者的AI使用方针',
      'gl.sec.ai.user':    '📋 用户的AI使用规则',
      'gl.link.terms':     '同时确认使用条款',
      'gl.jaonly':         '⚠️ 章节标题为参考翻译。正文保持日文显示。',
    },
  };

  // ── Table headers & rows ─────────────────────────────────────
  const TH = {
    ja: ['項目', '可否', '備考'],
    en: ['Item', 'Status', 'Notes'],
    ko: ['항목', '가부', '비고'],
    zh: ['项目', '可否', '备注'],
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
    ko: [
      ['개인 이용',                          'ok',      '✅ 허가',      '영리・비영리 불문'],
      ['법인 이용',                          'ask',     '요확인',        '권리자에게 개별 문의'],
      ['SNS・VRChat 등 업로드',              'ok',      '✅ 허가',      '자기 이용 목적'],
      ['온라인 게임 업로드',                 'ok',      '✅ 허가',      '자기 이용 목적'],
      ['제3자 이용 허락',                    'ng',      '❌ 금지',      ''],
      ['성적 표현',                          'partial', '⚠️ 조건부',   '청소년 수준을 초과하는 표현은 검색되지 않도록 할 것. R18 수준은 가이드라인 준수.'],
      ['폭력적 표현',                        'partial', '⚠️ 조건부',   '청소년 수준을 초과하는 표현은 검색되지 않도록 할 것. R18G 수준은 가이드라인 준수.'],
      ['문화 행사 (크리스마스・할로윈 등)',  'ok',      '✅ 허가',      ''],
      ['창작 종교 홍보',                     'ok',      '✅ 허가',      '하늘을 나는 하이퍼추요추요교 등'],
      ['기타 종교・정치 활동',               'ng',      '❌ 금지',      ''],
      ['조정・개조',                         'ok',      '✅ 허가',      '웨이트 수정・텍스처 변경 등'],
      ['다른 모델 개조에 활용',              'ok',      '✅ 허가',      ''],
      ['개조 외주',                          'partial', '⚠️ 조건부',   '유저 간에만 허가'],
      ['미개조 재배포',                      'ng',      '❌ 금지',      ''],
      ['개조 데이터 배포',                   'ng',      '❌ 금지',      ''],
      ['영상・방송・스트리밍',               'ok',      '✅ 허가',      'YouTube 등 포함'],
      ['출판물・전자출판물',                 'ok',      '✅ 허가',      ''],
      ['굿즈 (유체물)',                      'ok',      '✅ 허가',      ''],
      ['소프트웨어・게임 삽입',              'ok',      '✅ 허가',      ''],
      ['2차 창작 (의상・텍스처 등)',         'ok',      '✅ 허가',      '영리・비영리 불문 배포 가능'],
      ['2차 창작 (팬아트 등)',               'ok',      '✅ 허가',      '영리・비영리 불문 배포 가능'],
      ['크레딧 표기',                        'partial', '임의',          '불필요하지만 있으면 기쁨'],
      ['권리의무 양도',                      'ng',      '❌ 금지',      ''],
    ],
    zh: [
      ['个人使用',                       'ok',      '✅ 许可',     '商业・非商业均可'],
      ['法人使用',                       'ask',     '需确认',       '请单独联系权利人'],
      ['上传至SNS・VRChat等',            'ok',      '✅ 许可',     '仅限个人使用目的'],
      ['上传至在线游戏',                 'ok',      '✅ 许可',     '仅限个人使用目的'],
      ['向第三方转授权',                 'ng',      '❌ 禁止',     ''],
      ['性表现',                         'partial', '⚠️ 有条件',  '超出青少年向水准的内容不得处于易搜索状态。R18水准遵循指南。'],
      ['暴力表现',                       'partial', '⚠️ 有条件',  '超出青少年向水准的内容不得处于易搜索状态。R18G水准遵循指南。'],
      ['文化节日（圣诞节・万圣节等）',   'ok',      '✅ 许可',     ''],
      ['虚构宗教宣传',                   'ok',      '✅ 许可',     '飞天超级强教等'],
      ['其他宗教・政治活动',             'ng',      '❌ 禁止',     ''],
      ['调整・改造',                     'ok',      '✅ 许可',     '权重微调・纹理更改等'],
      ['用于其他模型改造',               'ok',      '✅ 许可',     ''],
      ['外包改造',                       'partial', '⚠️ 有条件',  '仅限用户间'],
      ['未改造再分发',                   'ng',      '❌ 禁止',     ''],
      ['分发改造数据',                   'ng',      '❌ 禁止',     ''],
      ['视频・直播・播出',               'ok',      '✅ 许可',     '含YouTube等'],
      ['出版物・电子出版物',             'ok',      '✅ 许可',     ''],
      ['周边商品（实体）',               'ok',      '✅ 许可',     ''],
      ['软件・游戏内嵌入',               'ok',      '✅ 许可',     ''],
      ['二次创作（服装・贴图等）',       'ok',      '✅ 许可',     '商业・非商业均可分发'],
      ['二次创作（同人画等）',           'ok',      '✅ 许可',     '商业・非商业均可分发'],
      ['署名',                           'partial', '任意',         '无需但欢迎'],
      ['权利义务转让',                   'ng',      '❌ 禁止',     ''],
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
    ko: [
      ['대상 콘텐츠',                    'ok',      '✅',                   '아바타・아바타 의상・아바타 기믹'],
      ['적용 대상',                      'ok',      '✅',                   '개인・법인격 없는 단체. 2차 창작자 포함. 법인은 요문의.'],
      ['성적 표현 (청소년 대상 수준)',  'ok',      '✅ 연령 제한 불필요',  ''],
      ['성적 표현 (R18 수준)',          'partial', '⚠️ 연령 제한 필수',   '태그・연령 제한 설정 필수'],
      ['폭력적 표현 (청소년 대상 수준)','ok',     '✅ 연령 제한 불필요',  ''],
      ['폭력적 표현 (R18G 수준)',       'partial', '⚠️ 연령 제한 필수',   '태그・연령 제한 설정 필수'],
      ['문화 행사・계절 이벤트',         'ok',      '✅ 허가',              '크리스마스・할로윈・밸런타인・새해 등'],
      ['창작 종교 홍보',                 'ok',      '✅ 허가',              '하늘을 나는 하이퍼추요추요교 등'],
      ['실존 종교・정치 활동',           'ng',      '❌ 금지',              ''],
      ['AI 이용 (제작자)',               'partial', '⚠️ 일부 사용',        '재현성・품질 확인 가능한 것만. 상품 이미지・3D 모델에는 미사용.'],
      ['AI 이용 (유저)',                 'partial', '⚠️ 조건부',           '스크린샷 가능. 에셋 내부 데이터에 사용 불가.'],
      ['사적 제재 행위',                 'ng',      '❌ 금지',              '다른 유저를 단속・규탄하는 행위'],
      ['정규 판매처',                    'ng',      'Booth만',              'Booth 외 입수 시 라이선스 무효・저작권법 위반'],
    ],
    zh: [
      ['目标内容',                'ok',      '✅',           '虚拟形象・虚拟形象服装・虚拟形象道具'],
      ['适用对象',                'ok',      '✅',           '个人・无法人资格团体。含二次创作者。法人需另行咨询。'],
      ['性表现（青少年向水准）',  'ok',      '✅ 无需限制',  ''],
      ['性表现（R18水准）',       'partial', '⚠️ 必须限制',  '必须设置标签・年龄限制'],
      ['暴力表现（青少年向水准）','ok',      '✅ 无需限制',  ''],
      ['暴力表现（R18G水准）',    'partial', '⚠️ 必须限制',  '必须设置标签・年龄限制'],
      ['文化节日・季节活动',      'ok',      '✅ 许可',      '圣诞节・万圣节・情人节・新年等'],
      ['虚构宗教宣传',            'ok',      '✅ 许可',      '飞天超级强教等'],
      ['现实宗教・政治活动',      'ng',      '❌ 禁止',      ''],
      ['AI使用（制作者）',        'partial', '⚠️ 部分使用',  '仅限可复现・可确认品质的内容。不用于商品图片・3D模型。'],
      ['AI使用（用户）',          'partial', '⚠️ 有条件',   '截图可用。不得用于素材内部数据。'],
      ['私自执法行为',            'ng',      '❌ 禁止',      '管制・声讨其他用户的行为'],
      ['正规销售渠道',            'ng',      '仅限Booth',    '非Booth获取则无许可证・构成著作权侵权'],
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
    if (cur) cur.textContent = { ja: 'JA', en: 'EN', ko: 'KO', zh: 'ZH' }[lang] || 'JA';

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
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
    if (saved) {
      apply(saved);
    } else {
      const bl = (navigator.language || navigator.userLanguage || 'ja').toLowerCase();
      let detected = 'ja';
      if (bl.startsWith('zh'))      detected = 'zh';
      else if (bl.startsWith('ko')) detected = 'ko';
      else if (!bl.startsWith('ja')) detected = 'en';
      apply(detected);
    }
  });
})();
