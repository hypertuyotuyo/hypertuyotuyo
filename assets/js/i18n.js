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
      /* index — tool（ぺたぬり3D。2026-10-03 発売） */
      'nav.tools':      'ツール',
      'tool.title':     'ツール',
      'tool.status':    'BOOTH で発売中',
      'tool.kind':      'アニメ・イラスト風特化 3D ペイントツール',
      'tool.lead':      'VRChat などで使われる 3D アバターや衣装や小物に、イラストツールの描き味でそのままテクスチャを描けるペイントツールです。UV を探さずに、見たままの場所に塗れます。',
      'tool.p1':        '3D に直接描ける。UV の継ぎ目をまたいでも線が割れない',
      'tool.p2':        'ポーズ・ブレンドシェイプを付けたまま塗れる',
      'tool.p3':        'lilToon 風の見た目で確かめて、そのまま書き出し',
      'tool.free':      '無料の Lite 版もあります',
            'tool.more':      'くわしく見る',
      'tool.x':         'X で最新情報',
      'tool.booth':     'BOOTH で見る',
      /* index — works */
      'works.more':     'Boothでもっと見る',
      /* index — hero（2026-09-29） */
      'hero.catch':     '木の棒が、<br>最強の剣だったころ。',
      'hero.lead':      'あのころの気持ちでもう一度遊べる、VRChat のアバター・衣装・ギミックを作っています。',
      'hero.shop':      'BOOTH のショップ',
      'hero.works':     '作品を見る',
      /* index — about */
      'about.bio':      'VRChatで創作活動しています！！！つよいです！！はいぱーつよつよです！！！可愛いのつくるのだいすきです！！！！！',
      'about.concept':  'VRChatという仮想空間の中で、子どもの頃ただの木の棒が最強の剣に見えていたあの童心や、躊躇なく着ていたあの可愛い衣装を、もう一度体験できるようなギミックや衣装・アバターを作っています！',
      'about.profile':  'VRChat プロフィール',
      /* index — license section */
      'license.title':  '利用規約・使用ガイドライン',
      'license.desc':   'VN3ライセンス Ver.1.10 準拠（バージョン 2.0）',
      'acc.terms':      '許諾範囲の早見表',
      'acc.guidelines': '使用ガイドラインの早見表',
      'btn.terms':      '利用規約 全文を読む',
      'btn.guidelines': '使用ガイドラインを読む',
      /* index — contact */
      'contact.title':  'リンク・連絡先',
      'contact.booth':  'Booth ショップ',
      'contact.discord':'空飛ぶはいぱーつよつよ教',
      'contact.disc.sub':'Discord サーバー',
      /* footer */
      'footer.toolTerms':'ぺたぬり3D ツール利用規約',
      'terms.tool.notice':'ぺたぬり3D の使用条件は、<a href="/petanuri/terms">ツール利用規約</a>をご覧ください。本ページは3Dモデル・衣装・ギミック等の商品用規約です。',
      'footer.vn3':'3Dモデル・衣装・ギミックの商品用規約はVN3ライセンスVer.1.10に準拠しています。',
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
      'terms.vn3note':     '<a href="https://www.vn3.org/" target="_blank" rel="noopener">VN3ライセンス</a>利用規約をベースに、はいぱーつよつよが独自の条件を加えて拡張した規約です。',
      'terms.jaonly':      null,
      /* guidelines page — section titles */
      'gl.h1':             'アセット使用ガイドライン',
      'gl.dates':          '制定日：2024年5月5日　／　最終更新：2026年11月6日',
      'gl.notice':         '利用規約と合わせてご確認ください。他のショップ様のアバターや衣装と合わせて導入する際にも、各規約のうち、より厳しい条件が優先されます。',
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
      'gl.ai.intro1':      '本ガイドラインでいう「生成AI」とは、ディープラーニングなどの機械学習によって、画像・テキスト・音声・3Dモデルなどを新たに生成するAIを指します。分類・判別・認識を目的とした従来型のAI（画像認識・自動補正・ノイズ除去など）は含まず、ほかのソフトウェアと同じように利用します。',
      'gl.ai.intro2':      'なお、本ガイドラインは<strong>はいぱーつよつよとして活動・制作する場合にのみ適用します</strong>。個人として生成AIを使用する場合は対象外です。',
      'gl.ai.intro3':      '生成AIの利用は、<strong>再現性のある使用</strong>（一般的な知識があれば誰でも同様の結果を得られるもの）と、<strong>再現性のない使用</strong>（イラスト・意訳・音声など、個人の創作性に依存するもの）に分けて考えています。',
      'gl.ai.intro4':      '近年は、3Dモデリングやテクスチャ制作においてもAIによる自動化が広く認知されるようになりました。そこで、<strong>テクスチャと3Dモデルについては、下記の条件を満たす場合に限り</strong>作品に使用することがあります。',
      'gl.ai.c1.title':    '再現性のあるもの — 使用して作品に組み込むことがあります',
      'gl.ai.c1.note':     'シェーダー・プログラム・コード・文章・翻訳・作業の自動化 など',
      'gl.ai.c2.title':    '作品の品質を高めるための補助 — 使用して作品に組み込むことがあります',
      'gl.ai.c2.note':     '生成結果をそのまま素材にするのではなく、作品の品質を高めるための補助として使用します。（アップスケール・ブラッシュアップ・色調補正・ノイズ除去・モーション制作の支援・フレーム補間・UV展開・UVパッキングの最適化・トポロジー修正（リトポ）・リギング補助・ウェイト調整・参考ポーズの生成 など）',
      'gl.ai.tex.title':   'テクスチャ — 著作権に影響しない範囲で使用することがあります',
      'gl.ai.tex.note':    '布の織り目・木目・石や金属の質感・汚れ・ノイズなど、特定の作者や作品に依存しない質感素材に限ります。特定の作品・作者・キャラクター・ロゴに似せた生成は行わず、商用利用が認められたサービスのみを使用します。',
      'gl.ai.model.title': '3Dモデル — 実用できる品質まで整備したものに限り使用することがあります',
      'gl.ai.model.note':  '生成AIが出力した3Dモデルを、そのまま（いわゆる「ぽん出し」で）作品にすることはありません。商用利用が認められたサービスで生成したものに限り、形状の修正・トポロジーの作り直し（リトポ）・UV展開・ボーンとウェイトの設定・ポリゴン数の最適化などを行って VRChat で実際に使える品質まで整備し、はいぱーつよつよ自身が品質を確認したものだけを使用します。生成AIを使用した3Dモデルを含む作品は、その旨を商品ページに記載します。',
      'gl.ai.c3.title':    '再現性がなく著作権が不透明なもの — 使用せず作品に組み込みません',
      'gl.ai.c3.note':     'イラスト・商品画像のロゴ・背景画像・動画・効果音・ボイス・BGM・音楽・フォント・意訳や物語性のあるテキストなど、個人の創造性に依存するもの',
      'gl.ai.c3.note2':    '※ 例外：上記の条件を満たすテクスチャ・3Dモデルや、AIエージェントが生成したプログラムによって作成できるもの（例：プログラムで描画するエフェクトや模様など）は、この項目に当たらず使用することがあります。',
      'gl.ai.c5.title':    '創作活動における情報収集・参考としての利用 — 使用しますが、参考にとどめ作品には組み込みません',
      'gl.ai.c5.note':     '再現性の有無を問わず、検索エンジンと同じ用途（情報収集・アイデアの参考・資料探しなど）で利用します。',
      'gl.ai.u1.title':    'スクリーンショット・撮影画像のAIへの読み込み — 問題ありません',
      'gl.ai.u1.note':     'はいぱーつよつよのアセットを使って撮影した画像やスクリーンショットは、AIに読み込ませても構いません。',
      'gl.ai.u2.title':    'AIで作成された素材のAIへの読み込み — 問題ありません',
      'gl.ai.u2.note':     'AIで生成された素材・データをAIに読み込ませることは問題ありません。どの素材に生成AIを使用しているかは、各商品ページをご確認ください。',
      'gl.ai.u3.title':    'スクリーンショットを使った二次創作・動画への生成AIの活用 — 非商用に限り可',
      'gl.ai.u3.note':     'はいぱーつよつよのアセットを使って撮影した画像・スクリーンショットをもとに、生成AIで二次創作や動画を作ることは、非商用目的に限り問題ありません。',
      'gl.ai.u4.title':    '商品内部データのAIへの読み込み — 禁止',
      'gl.ai.u4.note':     '商品に含まれる FBX・テクスチャ・マテリアル・オブジェクト構造・アニメーションなどの内部データを、AIに読み込ませることを禁止します。',
    },

    en: {
      'nav.works':      'Works',
      'nav.license':    'Terms',
      'nav.guidelines': 'Guidelines',
      'nav.contact':    'Links',
      'nav.shop':       'Shop',
      'nav.back':       '← Back to Top',
      'nav.tools':      'Tools',
      'tool.title':     'Tools',
      'tool.status':    'Now on BOOTH',
      'tool.kind':      'A 3D paint tool made for anime & illustration styles',
      'tool.lead':      'A paint tool that lets you draw textures straight onto 3D avatars, outfits and accessories used in VRChat and beyond, with the feel of an illustration app. No hunting for UVs — paint right where you see it.',
      'tool.p1':        'Draw directly in 3D. Strokes stay unbroken across UV seams',
      'tool.p2':        'Paint while the model is posed or has blend shapes applied',
      'tool.p3':        'Preview with a lilToon-style look, then export as is',
      'tool.free':      'A free Lite edition is available',
            'tool.more':      'Learn more',
      'tool.x':         'Updates on X',
      'tool.booth':     'View on BOOTH',
      'works.more':     'View more on Booth',
      'hero.catch':     'Back when a stick<br>was the strongest sword.',
      'hero.lead':      'We make VRChat avatars, outfits and gimmicks that let you play like that again.',
      'hero.shop':      'Shop on BOOTH',
      'hero.works':     'See our works',
      'about.bio':      'Creating in VRChat!!! I\'m strong!! I\'m Hyper TuyoTuyo!!! I love making cute things!!!!!',
      'about.concept':  'In VRChat, I create gimmicks, outfits, and avatars that let you relive the childhood wonder of seeing an ordinary stick as the mightiest sword — or wearing whatever cute thing you wanted without a second thought!',
      'about.profile':  'VRChat Profile',
      'license.title':  'Terms & Guidelines',
      'license.desc':   'VN3 License Ver.1.10 compliant (Version 2.0)',
      'acc.terms':      'License at a glance',
      'acc.guidelines': 'Guidelines at a glance',
      'btn.terms':      'Read Full Terms',
      'btn.guidelines': 'Read Guidelines',
      'contact.title':  'Links & Contact',
      'contact.booth':  'Booth Shop',
      'contact.discord':'Flying Hyper TuyoTuyo Religion',
      'contact.disc.sub':'Discord Server',
      'footer.toolTerms':'PetaNuri3D Software Terms',
      'terms.tool.notice':'For PetaNuri3D, please see the <a href="/petanuri/terms">Software Terms</a>. This page covers 3D models, outfits and avatar gimmicks.',
      'footer.vn3':'The terms for 3D models, outfits and avatar gimmicks are based on VN3 License Ver.1.10.',
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
      'terms.vn3note':     'These terms extend the <a href="https://www.vn3.org/" target="_blank" rel="noopener">VN3 License</a> with Hyper TuyoTuyo\'s own additions.',
      'terms.jaonly':      '⚠️ Headings are translated for reference. The legally binding text remains in Japanese.',
      /* guidelines page — section titles */
      'gl.h1':             'Asset Usage Guidelines',
      'gl.dates':          'Established: May 5, 2024 / Last updated: November 6, 2026',
      'gl.notice':         'Please read these guidelines together with our Terms of Use. This also applies when using assets alongside avatars or outfits from other shops — the strictest condition among all applicable rules takes precedence.',
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
      'gl.ai.intro1':      'In these guidelines, "generative AI" refers to AI that uses machine learning, such as deep learning, to create new content such as images, text, audio, and 3D models. Conventional AI for classification, detection, or recognition (image recognition, auto-correction, noise reduction, etc.) is not included and is used like any other software.',
      'gl.ai.intro2':      'These guidelines apply <strong>only when working and creating as Hyper TuyoTuyo</strong>. Personal use of generative AI is not covered.',
      'gl.ai.intro3':      'We divide generative AI use into <strong>reproducible use</strong> (results anyone with general knowledge could obtain) and <strong>non-reproducible use</strong> (illustration, free translation, voice, and other work that depends on individual creativity).',
      'gl.ai.intro4':      'In recent years, AI automation in 3D modeling and texture creation has become widely recognized. For this reason, <strong>textures and 3D models may be used in our works only when they meet the conditions below</strong>.',
      'gl.ai.c1.title':    'Reproducible use — may be used and incorporated into works',
      'gl.ai.c1.note':     'Shaders, programs, code, text, translation, task automation, etc.',
      'gl.ai.c2.title':    'Assistance to improve quality — may be used and incorporated into works',
      'gl.ai.c2.note':     'Used as assistance to improve the quality of a work, not by using generated output directly as an asset (e.g., upscaling, brush-up, color correction, noise reduction, motion-creation support, frame interpolation, UV unwrapping, UV packing optimization, topology correction (retopology), rigging assistance, weight adjustment, and reference pose generation).',
      'gl.ai.tex.title':   'Textures — may be used within a range that does not affect copyright',
      'gl.ai.tex.note':    'Limited to surface materials that do not depend on any particular artist or work, such as fabric weave, wood grain, stone or metal surfaces, dirt, and noise. We do not generate anything that imitates a specific work, artist, character, or logo, and we only use services that permit commercial use.',
      'gl.ai.model.title': '3D models — may be used only after being refined to a practical, usable quality',
      'gl.ai.model.note':  'We never release a 3D model output by generative AI as-is (so-called "one-click" output). Only models generated with services that permit commercial use are considered, and they are refined by hand (reshaping, rebuilding topology, UV unwrapping, setting up bones and weights, optimizing polygon count, and so on) until they are truly usable in VRChat. Only models whose quality Hyper TuyoTuyo has checked personally are used. Works that include 3D models made with generative AI will say so on the product page.',
      'gl.ai.c3.title':    'Non-reproducible and copyright-unclear — not used or incorporated into works',
      'gl.ai.c3.note':     'Illustrations, product logos, background images, video, sound effects, voices, BGM, music, fonts, free or narrative text, and other content that depends on individual creativity',
      'gl.ai.c3.note2':    '※ Exceptions: textures and 3D models that meet the conditions above, and anything that can be created by programs generated with an AI agent (e.g., effects or patterns drawn by code), do not fall under this item and may be used.',
      'gl.ai.c5.title':    'Information gathering and reference for creative work — used, but only as reference and not incorporated into works',
      'gl.ai.c5.note':     'Used the same way as a search engine (information gathering, idea reference, finding resources, etc.), regardless of reproducibility.',
      'gl.ai.u1.title':    'Feeding screenshots / captured images into AI — permitted',
      'gl.ai.u1.note':     'Photos and screenshots taken with Hyper TuyoTuyo assets may be fed into AI.',
      'gl.ai.u2.title':    'Feeding AI-generated assets into AI — permitted',
      'gl.ai.u2.note':     'Feeding AI-generated assets or data into AI is permitted. Please check each product page to see which assets were made with generative AI.',
      'gl.ai.u3.title':    'Using generative AI for derivative works / videos based on screenshots — non-commercial use only',
      'gl.ai.u3.note':     'Using generative AI to create derivative works or videos based on photos or screenshots taken with Hyper TuyoTuyo assets is permitted for non-commercial purposes only.',
      'gl.ai.u4.title':    'Feeding internal product data into AI — prohibited',
      'gl.ai.u4.note':     'Feeding internal data included in products (FBX, textures, materials, object structure, animations, etc.) into AI is prohibited.',
    },
  };

  // ── Table headers & rows ─────────────────────────────────────
  const TH = {
    ja: ['項目', '可否', '備考'],
    en: ['Item', 'Status', 'Notes'],
  };

  const TERMS_ROWS = {
    ja: [
      ['個人利用',                              'ok',      '✅ 許可',       '営利・非営利を問わず',                                                                                                                        'A_個人利用.png'],
      ['法人利用',                              'ask',     '要確認',         '権利者に個別問い合わせ',                                                                                                                      'B_法人利用.png'],
      ['SNS・VRChat等へのアップロード',         'ok',      '✅ 許可',       '自己利用目的',                                                                                                                                'C_ソーシャルコミュニケーションプラットフォームへのアップロード.png'],
      ['オンラインゲームへのアップロード',      'ok',      '✅ 許可',       '自己利用目的',                                                                                                                                'D_オンラインゲームプラットフォームへのアップロード.png'],
      ['第三者への利用許諾',                    'ng',      '❌ 禁止',       '',                                                                                                                                            'E_オンラインサービス内での第三者への利用の許諾.png'],
      ['性的表現',                              'partial', '⚠️ 条件付き',  '少年・少女向けコンテンツを超える表現は検索できないようにすること。R18相当はガイドライン3条件（棲み分け・ショップ名非表記・非営利）必須',        'F_性的表現.png'],
      ['暴力的表現',                            'partial', '⚠️ 条件付き',  '少年・少女向けコンテンツを超える表現は検索できないようにすること。R18G相当はガイドライン3条件（棲み分け・ショップ名非表記・非営利）必須',       'G_暴力的表現.png'],
      ['文化的祭事（クリスマス・ハロウィン等）','ok',      '✅ 許可',       '',                                                                                                                                            'H_政治活動・宗教活動.png'],
      ['創作上の宗教の布教',                    'ok',      '✅ 許可',       '空飛ぶはいぱーつよつよ教など',                                                                                                                'H_政治活動・宗教活動.png'],
      ['その他の宗教・政治活動',                'ng',      '❌ 禁止',       '',                                                                                                                                            'H_政治活動・宗教活動.png'],
      ['調整・改変',                            'ok',      '✅ 許可',       'ウェイト微修正・テクスチャ変更など',                                                                                                          'J_改変.png'],
      ['他モデルの改変への流用',                'ok',      '✅ 許可',       '',                                                                                                                                            'K_他のデータを改変するための利用.png'],
      ['改変の外部委託',                        'partial', '⚠️ 条件付き',  '本アセット購入者同士のみ許可',                                                                                                                'L_調整・改変の外部委託.png'],
      ['未改変での再配布',                      'ng',      '❌ 禁止',       '',                                                                                                                                            'M_未改変状態での再配布.png'],
      ['改変データの配布',                      'ng',      '❌ 禁止',       '',                                                                                                                                            'N_改変したデータの配布.png'],
      ['映像・配信・放送',                      'ok',      '✅ 許可',       'YouTube等を含む',                                                                                                                             'O_映像作品・配信・放送への利用.png'],
      ['出版物・電子出版物',                    'ok',      '✅ 許可',       '',                                                                                                                                            'P_出版物・電子出版物への利用.png'],
      ['グッズ（有体物）',                      'ok',      '✅ 許可',       '',                                                                                                                                            'Q_有体物（グッズ）への利用.png'],
      ['ソフトウェア・ゲームへの組込み',        'ok',      '✅ 許可',       '',                                                                                                                                            'R_製品開発等のためのソフトウェアへの組み込み.png'],
      ['二次創作（衣装・テクスチャ等）',        'ok',      '✅ 許可',       '営利・非営利問わず配布可',                                                                                                                    'S_メッシュやウェイとを転用した衣装データの作成.png'],
      ['二次創作（ファンアート等）',            'ok',      '✅ 許可',       '営利・非営利問わず配布可',                                                                                                                    'U_データをモチーフにした二次的著作物（いわゆる二次創作）の作成.png'],
      ['クレジット表記',                        'partial', '任意',           '不要だがあると嬉しい',                                                                                                                        'V_クレジット表記.png'],
      ['権利義務の譲渡',                        'ng',      '❌ 禁止',       '',                                                                                                                                            'W_権利義務の譲渡等.png'],
      ['AI学習・トレーニングデータへの利用',    'ng',      '❌ 禁止',       '',                                                                                                                                            'X_特記事項.png'],
    ],
    en: [
      ['Personal use',                           'ok',      '✅ Permitted',   'Commercial & non-commercial',                                                                                                                 'A_個人利用.png'],
      ['Corporate use',                          'ask',     'Inquire',        'Contact rights holder individually',                                                                                                          'B_法人利用.png'],
      ['Upload to SNS / VRChat etc.',            'ok',      '✅ Permitted',   'Personal use only',                                                                                                                           'C_ソーシャルコミュニケーションプラットフォームへのアップロード.png'],
      ['Upload to online games',                 'ok',      '✅ Permitted',   'Personal use only',                                                                                                                           'D_オンラインゲームプラットフォームへのアップロード.png'],
      ['Sublicensing to third parties',          'ng',      '❌ Prohibited',  '',                                                                                                                                            'E_オンラインサービス内での第三者への利用の許諾.png'],
      ['Sexual content',                         'partial', '⚠️ Conditional', 'Beyond youth-appropriate must not be easily searchable. R18: 3 conditions required (age gate, no shop name, non-commercial).',               'F_性的表現.png'],
      ['Violent content',                        'partial', '⚠️ Conditional', 'Beyond youth-appropriate must not be easily searchable. R18G: 3 conditions required (age gate, no shop name, non-commercial).',              'G_暴力的表現.png'],
      ['Cultural events (Christmas, Halloween…)','ok',      '✅ Permitted',   '',                                                                                                                                            'H_政治活動・宗教活動.png'],
      ['Fictional religion promotion',           'ok',      '✅ Permitted',   'Flying Hyper TuyoTuyo Religion, etc.',                                                                                                        'H_政治活動・宗教活動.png'],
      ['Other religious / political activities', 'ng',      '❌ Prohibited',  '',                                                                                                                                            'H_政治活動・宗教活動.png'],
      ['Adjustments / Modifications',            'ok',      '✅ Permitted',   'Weight tweaks, texture changes, etc.',                                                                                                        'J_改変.png'],
      ['Use for modifying other models',         'ok',      '✅ Permitted',   '',                                                                                                                                            'K_他のデータを改変するための利用.png'],
      ['Outsourcing modifications',              'partial', '⚠️ Conditional', 'Between purchasers of this asset only',                                                                                                       'L_調整・改変の外部委託.png'],
      ['Redistribution without modification',    'ng',      '❌ Prohibited',  '',                                                                                                                                            'M_未改変状態での再配布.png'],
      ['Distribution of modified data',          'ng',      '❌ Prohibited',  '',                                                                                                                                            'N_改変したデータの配布.png'],
      ['Video / Streaming / Broadcasting',       'ok',      '✅ Permitted',   'Including YouTube, etc.',                                                                                                                     'O_映像作品・配信・放送への利用.png'],
      ['Publications / Digital publications',    'ok',      '✅ Permitted',   '',                                                                                                                                            'P_出版物・電子出版物への利用.png'],
      ['Merchandise (physical goods)',           'ok',      '✅ Permitted',   '',                                                                                                                                            'Q_有体物（グッズ）への利用.png'],
      ['Software / Game integration',            'ok',      '✅ Permitted',   '',                                                                                                                                            'R_製品開発等のためのソフトウェアへの組み込み.png'],
      ['Fan creation (outfits, textures, etc.)', 'ok',      '✅ Permitted',   'Commercial & non-commercial distribution OK',                                                                                                 'S_メッシュやウェイとを転用した衣装データの作成.png'],
      ['Fan creation (fan art, etc.)',           'ok',      '✅ Permitted',   'Commercial & non-commercial distribution OK',                                                                                                 'U_データをモチーフにした二次的著作物（いわゆる二次創作）の作成.png'],
      ['Credit attribution',                     'partial', 'Optional',       'Not required but appreciated',                                                                                                                'V_クレジット表記.png'],
      ['Transfer of rights / obligations',       'ng',      '❌ Prohibited',  '',                                                                                                                                            'W_権利義務の譲渡等.png'],
      ['Use for AI / machine learning training', 'ng',      '❌ Prohibited',  '',                                                                                                                                            'X_特記事項.png'],
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
      ['生成AI利用（制作者）',            'partial', '⚠️ 一部組み込み',  '再現性・品質を確認できるもののみ作品に組み込み可。テクスチャは著作権に影響しない範囲、3Dモデルは実用できる品質まで整備したもののみ。著作権が不透明なものは組み込まない'],
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
      ['Generative AI (creator)',            'partial', '⚠️ Partial use',      'Only output whose reproducibility and quality can be verified is incorporated. Textures only where copyright is unaffected; 3D models only after refinement to practical quality. Copyright-unclear output is not incorporated.'],
      ['Generative AI (users)',             'partial', '⚠️ Conditional',      'Screenshots & AI-generated assets OK. Internal asset data not allowed.'],
      ['Vigilantism',                       'ng',      '❌ Prohibited',        'Policing / denouncing other users'],
      ['Official store',                    'ng',      'Booth only',           'Non-Booth = no license, copyright violation'],
    ],
  };

  // ── Build table HTML ─────────────────────────────────────────
  function buildTable(rows, lang) {
    const [h0, h1, h2] = TH[lang];
    let html = `<thead><tr><th></th><th>${h0}</th><th>${h1}</th><th>${h2}</th></tr></thead><tbody>`;
    for (const [item, cls, status, note, icon] of rows) {
      const iconCell = icon ? `<td style="text-align:center;width:2.5rem;padding:0.3rem"><img src="data/アイコン100/${icon}" alt="" style="height:2rem;width:2rem;display:inline-block;max-width:none;vertical-align:middle"></td>` : '<td></td>';
      html += `<tr>${iconCell}<td>${item}</td><td class="${cls}" style="white-space:nowrap">${status}</td><td>${note}</td></tr>`;
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
