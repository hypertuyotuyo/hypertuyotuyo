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
      /* guidelines page — section titles */
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
      /* guidelines — 対象コンテンツ */
      'gl.target.intro':   '本ガイドラインは、<strong>はいぱーつよつよ</strong> が制作・販売する以下のすべてのアセットに適用されます。',
      'gl.target.avatar':  'アバター',
      'gl.target.outfit':  'アバター衣装',
      'gl.target.gimmick': 'アバターギミック',
      /* guidelines — 適用対象ユーザー */
      'gl.users.intro':  '本ガイドラインは次のユーザーに適用されます。',
      'gl.users.item1':  '個人、または法人格を持たない団体',
      'gl.users.item2':  '当ショップが販売するアセットの所有者、および当ショップのアセットを用いて二次創作を行う方も含みます',
      'gl.users.item3':  '法人・法人格を有する団体の方は、<a href="https://hyper-tuyotuyo.booth.pm/" target="_blank" rel="noopener" style="color:var(--blue);text-decoration:underline;text-underline-offset:2px">はいぱーつよつよ Booth ショップ</a>のメッセージ機能よりご連絡ください',
      /* guidelines — 公開できないコンテンツ */
      'gl.cond.intro':      '以下に該当するコンテンツは、はいぱーつよつよのアセットを使用して公開することができません。',
      'gl.cond.item1':      'はいぱーつよつよの名誉・品位・尊厳を傷つけるもの',
      'gl.cond.item2':      '反社会的なもの',
      'gl.cond.item3':      '第三者の権利を侵害する、またはその恐れのあるもの',
      'gl.cond.item4':      '当ショップを公式と錯誤させる、またはその恐れのあるもの',
      'gl.cond.item5':      '性的表現・暴力表現を含むコンテンツで、当ショップ名またはアセット名が容易に検索できる状態で公開するもの',
      'gl.cond.item6':      'X（Twitter）や VRChat などの各プラットフォームの利用規約に違反する性的表現・暴力表現を含むもの',
      'gl.cond.item7':      '特定の思想・宗教・政治的メッセージの発信または布教を目的としたもの',
      'gl.cond.item7.note': '※ クリスマス・ハロウィン・バレンタイン・お正月など、一般的な季節行事・文化イベントとして広く認知されているものは問題ありません。また、空飛ぶはいぱーつよつよ教のような創作上の宗教の布教は許可します。',
      'gl.cond.item8':      '本ガイドラインを拡大解釈し、他者に対して私警行為を行う、またはその恐れのあるもの',
      'gl.cond.item8.note': '※ 自己解釈による他のユーザーへの取り締まり・糾弾行為などを指します。ガイドラインの解釈・運用権限は はいぱーつよつよ に帰属します。',
      /* guidelines — 限定的に公開してもよいコンテンツ */
      'gl.limited.intro':       '以下のコンテンツは、<strong>①棲み分け（タグ設定・年齢制限など）を行ったうえで、②当ショップ名・アセット名を表記しない形で、③非営利目的に限り</strong>公開可能です。すべての条件を満たす必要があります。',
      'gl.limited.item1':       'R18 または R18G <span class="gl-badge">R18</span><span class="gl-badge r18g">R18G</span> に該当する性的表現・暴力表現',
      'gl.limited.item1.note':  '※ モザイク・黒塗り等で隠している場合も、その表現を行っているとみなし該当します。',
      'gl.limited.r18.label':   '<span class="gl-badge">R18</span> 棲み分け必須の例',
      'gl.limited.r18g.label':  '<span class="gl-badge r18g">R18G</span> 棲み分け必須の例',
      'gl.limited.r18.item1':   '内性器が見えている状態の露出を含む表現',
      'gl.limited.r18.item2':   '性行為・性交を描写または強く連想させる表現',
      'gl.limited.r18.item3':   '過度に性的な衣装で性的要素を強調したもの',
      'gl.limited.r18.item4':   '性的な体液・行為の痕跡を描写したもの',
      'gl.limited.r18.item5':   '排泄行為またはそれを強く連想させる表現',
      'gl.limited.r18g.item1':  '過度な流血・内臓・身体損壊の描写',
      'gl.limited.r18g.item2':  '切断・解体などの詳細な描写',
      'gl.limited.r18g.item3':  '拷問・虐待の詳細な描写',
      'gl.limited.r18g.item4':  '死体の損壊を強調した表現',
      'gl.limited.r18g.item5':  '重大な病気・負傷に伴う症状をリアルに描写したもの　例：嘔吐・吐血・皮膚病・壊死・腐敗・重度の化膿・重度の火傷など',
      /* guidelines — 公開できるコンテンツ */
      'gl.allowed.intro':  '以下は棲み分けなしで公開できるコンテンツの例です（少年・少女向けコンテンツ程度）。はいぱーつよつよのアセット利用としては問題ありませんが、各プラットフォームの利用規約に従って公開してください。',
      'gl.allowed.item1':  '水着・下着姿（性的強調のないもの）',
      'gl.allowed.item2':  'デフォルメされた性器の表現（少年・少女向けコンテンツに見られる程度の描写）',
      'gl.allowed.item3':  'アバター素体の裸（性的要素を強調していないもの）',
      'gl.allowed.item4':  'キス・抱擁などのスキンシップ表現',
      'gl.allowed.item5':  '戦闘シーンで血がにじむ程度の軽度な暴力表現',
      'gl.allowed.item6':  'ホラー演出（お化け・ゾンビ風など）で過度な損壊を伴わないもの',
      'gl.allowed.item7':  'コミカルな暴力表現（アニメ的なドタバタ・吹き飛びなど）',
      'gl.allowed.item8':  '義手・義足などの補装具表現、幽霊・半透明など足がない表現を含む欠損表現（損壊を強調しないもの）',
      'gl.allowed.item9':  'タバコ・お酒などの嗜好品を伴う表現',
      /* guidelines — 生成AI */
      'gl.ai.intro1':    '本ガイドラインにおける「生成AI」とは、ディープラーニング・機械学習等によって画像・テキスト・音声・3Dモデルなどのコンテンツを新たに生成するAIを指します。分類・判別・認識を目的とした従来型AI（画像認識・自動補正・ノイズ除去など）はこれに含まれず、他のソフトウェアと同じように利用いたします。',
      'gl.ai.intro2':    'なお、本ガイドラインは <strong>はいぱーつよつよとして活動・制作する場合に限り適用されます</strong>。私個人として生成AIを使用することはこれに含まれません。',
      'gl.ai.intro3':    '生成AI の利用については、<strong>再現性のある使用</strong>（一般的な学習で誰でも同様の結果を得られるもの）と<strong>再現性のない使用</strong>（イラスト・特殊表現の翻訳・音声など個人の創作性に依存するもの）に分けて考えています。',
      'gl.ai.c1.title':  '再現性のあるもの — 使用して作品に組み込むことがあります',
      'gl.ai.c1.note':   'シェーダー・プログラム・コード・文章・テキスト翻訳・自動操作 など',
      'gl.ai.c2.title':  '著作権的に問題ないと判断できる簡素なもの — 使用して作品に組み込むことがあります',
      'gl.ai.c2.note':   'メニューアイコン・テクスチャの幾何学模様 など',
      'gl.ai.c3.title':  '再現性がなく著作権が不透明なもの — 使用せず作品に組み込みません',
      'gl.ai.c3.note':   'イラスト・商品画像のロゴ・背景画像・3Dモデル・動画・効果音・ボイス・BGM・音楽・モーション・アニメーション・フォント・意訳や物語性のあるテキストなど個人の創造性に依存するもの など',
      'gl.ai.c3.note2':  '※ ただし、UV展開・ノイズ除去・文字校正ツールなど、生成AI自身が使用して処理すると明言しているものについては使用しています。',
      'gl.ai.c4.title':  '再現性はあるが、クオリティを担保できないもの — 使用せず作品に組み込みません',
      'gl.ai.c4.note':   '品質の確認が困難なもの',
      'gl.ai.c5.title':  '創作活動における情報収集・参考としての利用 — 使用するが参考にとどめ作品に組み込みません',
      'gl.ai.c5.note':   '再現性の有無を問わず、検索エンジンと同列の用途（情報収集・アイデアの参考・資料探しなど）として利用します。',
      'gl.ai.u1.title':  'スクリーンショット・撮影画像の AI 読み込み — 問題ありません',
      'gl.ai.u1.note':   'はいぱーつよつよのアセットを使用した撮影画像・スクリーンショット等は AI に読み込ませても構いません。',
      'gl.ai.u2.title':  'AI で作成した素材の AI 読み込み — 問題ありません',
      'gl.ai.u2.note':   'AI によって生成された素材・データを AI に読み込ませることは問題ありません。どの素材が生成AI で作られたかは商品ページをご覧ください。',
      'gl.ai.u3.title':  'スクリーンショットを使った二次創作・動画への生成AI活用 — 非商用に限り可',
      'gl.ai.u3.note':   'はいぱーつよつよのアセットを使用した撮影画像・スクリーンショットをもとに、生成AIで二次創作や動画を作成することは非商用目的に限り問題ありません。',
      'gl.ai.u4.title':  '商品内部データの AI 読み込み — 禁止',
      'gl.ai.u4.note':   '商品に含まれる FBX・テクスチャ・マテリアル・オブジェクト構造・アニメーション等の内部データを AI に読み込ませることを禁止します。',
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
      /* guidelines page — section titles */
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
      /* guidelines — Target Content */
      'gl.target.intro':   'These guidelines apply to all assets created and sold by <strong>Hyper TuyoTuyo</strong>.',
      'gl.target.avatar':  'Avatar',
      'gl.target.outfit':  'Avatar Outfit',
      'gl.target.gimmick': 'Avatar Gimmick',
      /* guidelines — Applicable Users */
      'gl.users.intro':  'These guidelines apply to the following users.',
      'gl.users.item1':  'Individuals or unincorporated groups',
      'gl.users.item2':  'Includes owners of assets sold by this shop and anyone creating derivative works using this shop\'s assets',
      'gl.users.item3':  'Corporations or incorporated organizations: please contact us via <a href="https://hyper-tuyotuyo.booth.pm/" target="_blank" rel="noopener" style="color:var(--blue);text-decoration:underline;text-underline-offset:2px">Hyper TuyoTuyo Booth Shop</a> messages.',
      /* guidelines — Prohibited Content */
      'gl.cond.intro':      'The following content may not be published using Hyper TuyoTuyo assets.',
      'gl.cond.item1':      'Content that damages the honor, dignity, or reputation of Hyper TuyoTuyo',
      'gl.cond.item2':      'Antisocial content',
      'gl.cond.item3':      'Content that infringes or may infringe third-party rights',
      'gl.cond.item4':      'Content that may be mistaken for official shop content',
      'gl.cond.item5':      'Sexual or violent content published where the shop name or asset name is easily searchable',
      'gl.cond.item6':      'Sexual or violent content that violates the terms of service of platforms such as X (Twitter) or VRChat',
      'gl.cond.item7':      'Content intended to promote a specific ideology, religion, or political message',
      'gl.cond.item7.note': '※ Widely recognized cultural and seasonal events such as Christmas, Halloween, Valentine\'s Day, and New Year\'s are acceptable. Promotion of fictional religions such as the Flying Hyper TuyoTuyo Religion is also permitted.',
      'gl.cond.item8':      'Content that over-interprets these guidelines to take vigilante action against others',
      'gl.cond.item8.note': '※ This refers to self-interpreted policing or denouncing of other users. The authority to interpret and enforce these guidelines belongs to Hyper TuyoTuyo.',
      /* guidelines — Conditionally Permitted Content */
      'gl.limited.intro':       'The following content may be published only if <strong>① age-gating (tags, age restrictions, etc.) is applied, ② the shop name and asset names are not disclosed, and ③ it is for non-commercial purposes</strong>. All conditions must be met.',
      'gl.limited.item1':       'Sexual or violent content classified as <span class="gl-badge">R18</span> or <span class="gl-badge r18g">R18G</span>',
      'gl.limited.item1.note':  '※ Content obscured by mosaic or blacking-out is still considered to depict that expression.',
      'gl.limited.r18.label':   '<span class="gl-badge">R18</span> Examples requiring age gate',
      'gl.limited.r18g.label':  '<span class="gl-badge r18g">R18G</span> Examples requiring age gate',
      'gl.limited.r18.item1':   'Depictions including exposure of internal genitalia',
      'gl.limited.r18.item2':   'Depictions or strong suggestions of sexual acts or intercourse',
      'gl.limited.r18.item3':   'Overly sexual attire emphasizing sexual elements',
      'gl.limited.r18.item4':   'Depictions of sexual bodily fluids or traces of sexual acts',
      'gl.limited.r18.item5':   'Depictions of excretory acts or strong suggestions thereof',
      'gl.limited.r18g.item1':  'Excessive depictions of bleeding, internal organs, or bodily destruction',
      'gl.limited.r18g.item2':  'Detailed depictions of dismemberment or dissection',
      'gl.limited.r18g.item3':  'Detailed depictions of torture or abuse',
      'gl.limited.r18g.item4':  'Depictions emphasizing mutilation of corpses',
      'gl.limited.r18g.item5':  'Realistic depictions of symptoms from serious illness or injury — e.g., vomiting, hematemesis, skin disease, necrosis, decomposition, severe suppuration, severe burns, etc.',
      /* guidelines — Permitted Content */
      'gl.allowed.intro':  'The following are examples of content that may be published without age-gating (youth-appropriate level). This is fine for Hyper TuyoTuyo asset use — please follow each platform\'s terms of service when publishing.',
      'gl.allowed.item1':  'Swimwear or underwear (without sexual emphasis)',
      'gl.allowed.item2':  'Stylized genital depictions (to the extent seen in youth-oriented content)',
      'gl.allowed.item3':  'Nude avatar base (without sexual emphasis)',
      'gl.allowed.item4':  'Physical affection such as kissing or hugging',
      'gl.allowed.item5':  'Mild violence such as slight bleeding in combat scenes',
      'gl.allowed.item6':  'Horror elements (ghosts, zombie-like, etc.) without excessive destruction',
      'gl.allowed.item7':  'Comic violence (anime-style slapstick, being blown away, etc.)',
      'gl.allowed.item8':  'Prosthetic limbs, ghost/semi-transparent depictions, or missing limb expressions (not emphasizing destruction)',
      'gl.allowed.item9':  'Depictions involving tobacco, alcohol, or other recreational items',
      /* guidelines — Generative AI */
      'gl.ai.intro1':    'In these guidelines, "Generative AI" refers to AI that generates new content such as images, text, audio, and 3D models through deep learning and machine learning. Traditional AI for classification, recognition, or detection (image recognition, auto-correction, noise reduction, etc.) is not included and is used the same as any other software.',
      'gl.ai.intro2':    'These guidelines apply <strong>only when acting and creating as Hyper TuyoTuyo</strong>. My personal use of generative AI is not covered.',
      'gl.ai.intro3':    'Generative AI usage is divided into <strong>reproducible use</strong> (results anyone can replicate with general training) and <strong>non-reproducible use</strong> (illustrations, specialized translations, audio, etc. dependent on individual creativity).',
      'gl.ai.c1.title':  'Reproducible — may be used and incorporated into works',
      'gl.ai.c1.note':   'Shaders, programs, code, text, translation, automation, etc.',
      'gl.ai.c2.title':  'Simple elements with no copyright concerns — may be used and incorporated into works',
      'gl.ai.c2.note':   'Menu icons, geometric texture patterns, etc.',
      'gl.ai.c3.title':  'Non-reproducible and copyright-unclear — not used or incorporated into works',
      'gl.ai.c3.note':   'Illustrations, product logos, background images, 3D models, video, sound effects, voices, BGM, music, motion, animations, fonts, paraphrased or narrative text dependent on individual creativity, etc.',
      'gl.ai.c3.note2':  '※ Exception: UV unwrapping, noise reduction, spell-checking tools, and other processing that the generative AI itself explicitly states it performs are used.',
      'gl.ai.c4.title':  'Reproducible but quality cannot be guaranteed — not used or incorporated into works',
      'gl.ai.c4.note':   'Items where quality verification is difficult',
      'gl.ai.c5.title':  'Information gathering and reference for creative work — used as reference only, not incorporated into works',
      'gl.ai.c5.note':   'Used for information gathering, idea reference, and resource searching — the same as a search engine — regardless of reproducibility.',
      'gl.ai.u1.title':  'AI reading of screenshots / captured images — permitted',
      'gl.ai.u1.note':   'Photos and screenshots taken using Hyper TuyoTuyo assets may be fed into AI.',
      'gl.ai.u2.title':  'AI reading of AI-generated assets — permitted',
      'gl.ai.u2.note':   'Feeding AI-generated assets or data into AI is permitted. For which assets are AI-generated, please see the product page.',
      'gl.ai.u3.title':  'Generative AI in derivative works / videos using screenshots — non-commercial use only',
      'gl.ai.u3.note':   'Using generative AI to create derivative works or videos based on photos or screenshots of Hyper TuyoTuyo assets is permitted for non-commercial purposes.',
      'gl.ai.u4.title':  'AI reading of internal product data — prohibited',
      'gl.ai.u4.note':   'Feeding internal data (FBX, textures, materials, object structure, animations, etc.) from products into AI is prohibited.',
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
      ['性的表現',                              'partial', '⚠️ 条件付き',  '少年・少女向けコンテンツを超える表現は検索できないようにすること。R18相当はガイドライン3条件（棲み分け・ショップ名非表記・非営利）必須'],
      ['暴力的表現',                            'partial', '⚠️ 条件付き',  '少年・少女向けコンテンツを超える表現は検索できないようにすること。R18G相当はガイドライン3条件（棲み分け・ショップ名非表記・非営利）必須'],
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
      ['Sexual content',                         'partial', '⚠️ Conditional', 'Beyond youth-appropriate must not be easily searchable. R18: 3 conditions required (age gate, no shop name, non-commercial).'],
      ['Violent content',                        'partial', '⚠️ Conditional', 'Beyond youth-appropriate must not be easily searchable. R18G: 3 conditions required (age gate, no shop name, non-commercial).'],
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
      ['性的表現（R18相当）',            'partial', '⚠️ 3条件必須',    '①棲み分け ②ショップ名・アセット名非表記 ③非営利 — すべて必須'],
      ['暴力表現（少年少女向け程度）',    'ok',      '✅ 棲み分けなし',  ''],
      ['暴力表現（R18G相当）',           'partial', '⚠️ 3条件必須',    '①棲み分け ②ショップ名・アセット名非表記 ③非営利 — すべて必須'],
      ['文化的祭事・季節行事',            'ok',      '✅ 許可',           'クリスマス・ハロウィン・バレンタイン・お正月など'],
      ['創作上の宗教の布教',              'ok',      '✅ 許可',           '空飛ぶはいぱーつよつよ教など'],
      ['実在の宗教・政治活動',            'ng',      '❌ 禁止',           ''],
      ['生成AI利用（制作者）',            'partial', '⚠️ 一部組み込み',  '再現性・品質確認できるもののみ作品に組み込み可。著作権不透明・品質不確かなものは使用せず組み込まない。参考利用は作品に組み込まない'],
      ['生成AI利用（ユーザー）',          'partial', '⚠️ 条件付き',      'スクリーンショット・AI生成素材の読み込みは可。アセット内部データへの読み込みは不可'],
      ['私警行為',                        'ng',      '❌ 禁止',           '他ユーザーへの取り締まり・糾弾行為'],
      ['正規販売店',                      'ng',      'Boothのみ',         '他サイトからの入手はライセンス無効・著作権法違反'],
    ],
    en: [
      ['Target content',                    'ok',      '✅',                   'Avatars, Avatar Outfits, Avatar Gimmicks'],
      ['Applicable users',                  'ok',      '✅',                   'Individuals & unincorporated groups. Fan creators included. Corporations must inquire.'],
      ['Sexual content (youth-appropriate)','ok',      '✅ No age gate',       ''],
      ['Sexual content (R18 equivalent)',   'partial', '⚠️ 3 conditions',      '①Age gate ②No shop/asset name ③Non-commercial — all required'],
      ['Violent content (youth-appropriate)','ok',     '✅ No age gate',       ''],
      ['Violent content (R18G equivalent)', 'partial', '⚠️ 3 conditions',      '①Age gate ②No shop/asset name ③Non-commercial — all required'],
      ['Cultural / seasonal events',        'ok',      '✅ Permitted',         'Christmas, Halloween, Valentine\'s, New Year\'s, etc.'],
      ['Fictional religion promotion',      'ok',      '✅ Permitted',         'Flying Hyper TuyoTuyo Religion, etc.'],
      ['Real religion / political activities','ng',    '❌ Prohibited',        ''],
      ['Generative AI (creator)',            'partial', '⚠️ Partial use',      'Reproducible & quality-verified output may be incorporated. Copyright-unclear or reference-only: not incorporated.'],
      ['Generative AI (users)',             'partial', '⚠️ Conditional',      'Screenshots & AI-generated assets OK. Internal asset data not allowed.'],
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
