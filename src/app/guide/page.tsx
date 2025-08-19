"use client";

import Image from "next/image";
import Head from "next/head";

type GuideSection = {
  image: string;
  alt: string;
  title: string;
  description: string | string[];
};

const sections: GuideSection[] = [
  {
    image: "/images/QR.png",
    alt: "Cordely 注文ページのイメージ",
    title: "QRからすぐ注文ページへ",
    description: [
      "店頭ポスターのQRコードを読み取るだけで、注文ページにアクセスできます。",
      "アプリ不要。スマホのブラウザでそのまま利用できます。",
    ],
  },
  {
    image: "/images/tyumon.png",
    alt: "Cordely 商品一覧のイメージ",
    title: "商品を選んで注文",
    description: [
      "見やすい商品カードで迷わず選べます。",
      "オプションや数量の指定もシンプルなUIで完結。",
    ],
  },
  {
    image: "/images/bangou.png",
    alt: "Cordely 順番・呼び出しのイメージ",
    title: "番号でスムーズなお渡し",
    description: [
      "注文後は画面に『注文番号』と『待ち人数』が表示されます。",
      "番号が呼ばれたら受け取りに向かうだけ。列に縛られません。",
    ],
  },
  {
    image: "/images/kanri.png",
    alt: "Cordely 管理画面のイメージ",
    title: "運営向け：簡単注文管理",
    description: [
      "管理画面で新着注文を一覧管理。",
      "準備中→呼び出し→完了の流れをワンタップで更新できます。",
    ],
  },
  {
    image: "/images/nyuuryoku.jpeg",
    alt: "Cordely 商品管理画面のイメージ",
    title: "運営向け：簡単商品管理",
    description: [
      "商品の追加・編集・削除が直感操作でサクッと完了。",
      "説明文はAIが自動生成。数秒で魅力的なテキストに。",
    ],
  },
  {
    image: "/images/nyuuryoku.jpeg",
    alt: "Cordely 商品管理画面のイメージ",
    title: "運営向け：簡単商品管理",
    description: [
      "商品の追加・編集・削除が直感操作でサクッと完了。",
      "説明文はAIが自動生成。数秒で魅力的なテキストに。",
    ],
  },
  {
    image: "/images/uriage.jpeg",
    alt: "Cordely 売上合計ダイアログのイメージ",
    title: "売上：ワンタップ集計",
    description: [
      "その場で売上合計を表示。スマホでサッと確認できます。",
      "点数・金額を自動集計。レジ締めや日報作成がスムーズに。",
    ],
  },
];

export default function GuidePage() {
  return (
    <>
      <Head>
        <title>Cordely ご案内｜QRで並ばずに注文・番号で受け取り</title>
        <meta
          name="description"
          content="Cordely（コーデリー）の機能紹介ページ。QRコードから注文ページへアクセス、スマホで商品を選んで注文、番号表示でスムーズなお渡し。屋台・キッチンカー・学園祭・イベントに最適です。"
        />
        <meta
          name="keywords"
          content="Cordely, コーデリー, モバイルオーダー, QR注文, 屋台, キッチンカー, 学園祭, イベント, 行列対策, 注文整理"
        />
        <meta
          property="og:title"
          content="Cordely ご案内｜QR注文 & 番号呼び出し"
        />
        <meta
          property="og:description"
          content="QRで注文、番号で受け取り。イベントの行列をスマートに。"
        />
        <meta
          property="og:image"
          content="https://www.cordely.app/images/ogpImage.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <link rel="canonical" href="https://www.cordely.app/guide" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-amber-200 via-rose-200 to-sky-200 py-16 px-4">
        {/* トップ：動画（任意・縦長最適化） */}
        <section className="mx-auto mb-16 max-w-5xl" id="how">
          <section className="mb-10 space-y-4 text-center text-gray-800">
            <h1 className="text-4xl font-bold">Cordely ご案内</h1>
            <p className="mx-auto max-w-3xl text-lg">
              Cordely（コーデリー）は、QRコードから注文ページにアクセスして、
              スマホで商品を選んで簡単に注文できるサービスです。
              番号が表示されるので、呼ばれたタイミングでスムーズに受け取れます。
            </p>
          </section>

          {/* <div
            className={[
              "relative mx-auto overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/40",
              videoMeta.portrait ? "max-w-[260px]" : "max-w-xl",
            ].join(" ")}
            style={{ aspectRatio: `${videoMeta.w} / ${videoMeta.h}` }}
          >
            <div className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-2xl" />
            <video
              src="/cordely-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                const w = v.videoWidth || 9;
                const h = v.videoHeight || 16;
                setVideoMeta({ w, h, portrait: h >= w, ready: true });
              }}
              className={[
                "absolute inset-0 h-full w-full",
                videoMeta.portrait ? "object-contain" : "object-cover",
              ].join(" ")}
              aria-label="Cordely 紹介動画"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />
          </div> */}
        </section>

        <div className="mx-auto max-w-5xl space-y-16">
          {/* 各機能セクション */}
          {sections.map((section, index) => (
            <section
              key={index}
              className="flex flex-col items-center gap-6 rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-md md:flex-row md:p-10"
            >
              <div className="flex-shrink-0">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover shadow-md"
                />
              </div>
              <div className="flex-1 space-y-3 text-gray-800">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                {Array.isArray(section.description) ? (
                  <ul className="list-disc space-y-1 pl-5 text-base">
                    {section.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.description}</p>
                )}
              </div>
            </section>
          ))}

          {/* よくある課題 */}
          <section className="space-y-4 rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-md md:p-10">
            <h2 className="text-2xl font-semibold">
              こんな課題、ありませんか？
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-base">
              <li>行列が長くなり、機会損失が発生してしまう</li>
              <li>受け渡しの呼び出しが伝わりづらく、遅延が起きる</li>
              <li>混雑時のオペレーションが複雑になりやすい</li>
            </ul>
            <p className="mt-4 text-gray-800">
              Cordely は「並ばずに注文」「番号で受け取り」という運用により、
              混雑タイムの体験をシンプルにします。
            </p>
          </section>

          {/* 導入理由・CTA */}
          <section className="space-y-6 rounded-xl bg-white/70 p-8 text-center text-gray-800 shadow-md backdrop-blur-md">
            <h2 className="text-2xl font-bold">Cordely が選ばれる理由</h2>
            <ul className="mx-auto list-disc list-inside max-w-2xl space-y-2 text-left">
              <li>QRからすぐに注文でき、行列によるストレスを軽減</li>
              <li>番号表示で受け渡しがスムーズ、呼び出しミスを削減</li>
              <li>管理画面はシンプル操作、現場でも迷わない</li>
            </ul>

            {/* 料金 */}
            <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-300 shadow-sm max-w-md mx-auto">
              <p className="font-semibold text-lg text-blue-800">
                導入料金（キャンペーン中）
              </p>
              <p className="text-gray-700">
                <span className="font-bold">通常価格：</span>
                <br />
                初期費用：
                <span className="line-through text-red-500">100,000円</span>
                （税別）
                <br />
                月額費用：
                <span className="line-through text-red-500">3,000円</span>
                （税別）
                <br />
                <br />
                <span className="font-bold text-blue-700">
                  ▼ 今だけの実績づくりキャンペーン ▼
                </span>
                <br />
                初期費用：
                <span className="text-green-600 font-bold">30,000円</span>
                （税別）
                <br />
                月額費用：
                <span className="text-green-600 font-bold">1,500円</span>
                （税別）
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* 自己撮影プラン */}
                <div className="border p-4 rounded shadow">
                  <h3 className="font-bold text-blue-700">📸 自己撮影プラン</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    お客様ご自身で動画や画像などの素材をご用意いただき、弊社にお渡しいただくプランです。
                    撮影や編集は含まれておらず、コストを抑えたい方におすすめです。
                  </p>
                  <p className="mt-4">
                    初期費用：<strong>30,000円</strong>
                    <br />
                    月額：<strong>1,500円</strong>
                  </p>
                </div>

                {/* おまかせプラン */}
                <div className="border p-4 rounded shadow bg-blue-50">
                  <h3 className="font-bold text-pink-700">🎥 おまかせプラン</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    弊社スタッフが直接訪問し、トップ動画・画像・商品写真などを撮影。
                    編集・セットアップまでを一括でお任せいただける安心プランです。
                  </p>
                  <p className="mt-4">
                    初期費用：<strong>80,000円</strong>（撮影＋編集込み）
                    <br />
                    月額：<strong>1,500円</strong>
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                ※キャンペーンは予告なく終了する場合があります
              </p>
              <p className="text-sm text-gray-500 mt-2">
                ※撮影編集代行50,000円
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto text-center">
              <p className="font-semibold text-gray-700 mb-1">
                なぜ他社より安いの？
              </p>
              <p>
                Pageitは、開発者がすべての設計・運用を一人で行っているため、
                <br />
                大手のような人件費・管理コストが不要です。
                <br />
                またテンプレート化された仕組みにより、
                <br />
                スピーディかつ効率的に制作できるため、
                <span className="font-medium text-blue-800">
                  高品質かつ低価格
                </span>
                を実現しています。
              </p>
            </div>

            <div className="mt-6 text-center">
              <a
                href="/contact"
                className="inline-block rounded-md bg-gradient-to-r from-rose-500 to-sky-500 px-6 py-3 text-white shadow transition hover:opacity-90"
              >
                導入の相談をする →
              </a>
            </div>

            <div className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
              <p className="font-semibold text-gray-700 mb-1">導入ステップ</p>
              <p>
                お問い合わせ → ヒアリング → 初期設定 → ポスター準備 →
                運用スタート
              </p>
            </div>

            <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 md:p-10 mt-16 space-y-6">
              <h2 className="text-2xl font-bold text-center">お客様の声</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-gray-800">
                    「行列ができても、お客さんはスマホから注文。
                    <br />
                    受け取りは番号でスムーズに進み、呼び出しの声掛けが減りました。
                    <br />
                    受け渡しミスもほぼゼロに。」
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ― フードトラック K様
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <p className="text-gray-800">
                    「ピーク時でも順番が見えるので混乱なし。
                    <br />
                    注文状況を一目で把握でき、スタッフも初日から迷わず運用できました。」
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ― 学園祭実行委員会 M様
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <p className="text-gray-800">
                    「売上の合計がワンタップで出せて締め作業がラクに。
                    <br />
                    商品の追加や“売り切れ”切替もその場でできて助かります。」
                  </p>
                  <p className="text-sm text-gray-500 mt-1">― 屋台 S様</p>
                </div>
              </div>
            </section>
             <section className="bg-white/60 backdrop-blur-md rounded-xl shadow p-6 md:p-10 space-y-4 text-center">
            <h2 className="text-2xl font-bold">導入はかんたん3ステップ</h2>
            <ol className="list-decimal list-inside md:text-left text-center max-w-2xl mx-auto space-y-2">
              <li>お問い合わせフォームからご連絡ください</li>
              <li>ヒアリング後、すぐに初期設定開始</li>
              <li>ご希望の内容を反映後、すぐに公開スタート！</li>
            </ol>

            <a
              href="/contact"
             className="inline-block rounded-md bg-gradient-to-r from-rose-500 to-sky-500 px-6 py-3 text-white shadow transition hover:opacity-90"
            >
              お問い合わせはこちら
            </a>
          </section>
          </section>
        </div>
      </main>
    </>
  );
}
