"use client";

import Head from "next/head";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn/ui
import {
  QrCode,
  ShoppingCart,
  BadgeCheck,
  Smartphone,
  Megaphone,
  Package,
  ListChecks,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function IconBadge({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black/10 text-gray-900">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Cordely（コーデリー）｜並ばずに注文できるQRオーダー</title>
        <meta
          name="description"
          content="Cordely（コーデリー）は、屋台やイベント販売に最適なQRオーダー＆順番管理システム。お客さまは並ばずにスマホから注文、店舗は番号でスムーズに呼び出し。運営は商品・注文・売上をかんたん管理。"
        />
        <meta
          name="keywords"
          content="Cordely, コーデリー, QRオーダー, 並ばない, 屋台, キッチンカー, イベント販売, 順番管理, モバイルオーダー"
        />
        <meta
          property="og:title"
          content="Cordely（コーデリー）｜並ばずに注文"
        />
        <meta
          property="og:description"
          content="QRで注文、番号で呼び出し。商品・注文・売上をまとめて簡単管理。屋台・イベントに最適。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cordely.app/" />
      </Head>

      <main
        className="relative min-h-screen bg-gradient-to-br from-green-300 via-rose-300 to-sky-300 overflow-hidden"
        role="main"
      >
        {/* 背景アクセント */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/30 blur-3xl"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/20 blur-3xl"
        />

        <motion.div
          className="max-w-5xl mx-auto px-6 py-16 space-y-16 text-gray-900"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* ロゴ（テキスト版） */}
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={item}
          >
            <Image
              src="/images/cordelyLogo-sk.png" // 画像パス
              alt="Cordely（コーデリー）のロゴ"
              width={240}
              height={240}
              priority
            />
            <p className="text-sm text-gray-700">
              屋台・キッチンカー・学園祭にちょうどいい、並ばない注文体験
            </p>
          </motion.div>

          {/* キャッチコピー */}
          <motion.section
            className="text-center space-y-4"
            variants={item}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="text-2xl md:text-4xl font-extrabold">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                並ばずラクラク、スマホで注文。
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              QRコードを読み取ってスマホから<strong>注文</strong>、
              <strong>番号で呼び出し</strong>。
              <br/>
              混雑時でもスムーズな受け渡しを実現します。
            </p>
          </motion.section>

          {/* 使い方（How it works） */}
          <section id="demo" aria-labelledby="how-title">
            <motion.h2
              id="how-title"
              variants={item}
              className="text-2xl font-semibold text-center mb-8"
            >
              使い方はかんたん、3ステップ
            </motion.h2>

            <motion.div
              className="grid gap-6 sm:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  title: "① QRを読み取る",
                  body: "店頭ポスターのQRコードから注文ページへアクセス。",
                  icon: <QrCode className="h-6 w-6" />,
                },
                {
                  title: "② 商品を注文",
                  body: "スマホ画面で商品を選んで注文できます。",
                  icon: <ShoppingCart className="h-6 w-6" />,
                },
                {
                  title: "③ 番号で受け取り",
                  body: "注文番号と待ち人数を確認。番号が呼ばれたら受け取り。",
                  icon: <BadgeCheck className="h-6 w-6" />,
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group p-6 rounded-xl shadow-lg bg-white/70 backdrop-blur-sm ring-1 ring-black/5"
                >
                  <IconBadge>{card.icon}</IconBadge>
                  <h3 className="font-bold text-lg mb-2 text-center">
                    <span className="group-hover:underline decoration-2 underline-offset-4">
                      {card.title}
                    </span>
                  </h3>
                  <p className="text-gray-800/90 text-center">{card.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* 特長（来場者向け） */}
          <section id="features" aria-labelledby="features-title">
            <motion.h2
              id="features-title"
              variants={item}
              className="text-2xl font-semibold text-center mb-8"
            >
              Cordely の特長
            </motion.h2>

            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  title: "📱 並ばない体験",
                  body: "列に並ばず好きな場所で待機。混雑時の満足度が向上します。",
                  icon: <Smartphone className="h-6 w-6" />,
                },
                {
                  title: "🧾 番号でスムーズ呼び出し",
                  body: "番号で呼び出すだけ。受け渡しミスを軽減できます。",
                  icon: <Megaphone className="h-6 w-6" />,
                },
                {
                  title: "⚡ 注文整理に最適化",
                  body: "ピーク時運用を前提にしたシンプルなUIフロー。",
                  icon: <Package className="h-6 w-6" />,
                },
                {
                  title: "🧰 シンプル導入",
                  body: "印刷用QRポスターと管理画面ですぐに開始できます。",
                  icon: <ListChecks className="h-6 w-6" />,
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group p-6 rounded-xl shadow-lg bg-white/70 backdrop-blur-sm ring-1 ring-black/5"
                >
                  <IconBadge>{card.icon}</IconBadge>
                  <h3 className="font-bold text-lg mb-2 text-center">
                    <span className="group-hover:underline decoration-2 underline-offset-4">
                      {card.title}
                    </span>
                  </h3>
                  <p className="text-gray-800/90 text-center">{card.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* 運営向け：管理セクション（画像なしアイコン版） */}
          <section id="owners" aria-labelledby="owners-title">
            <motion.h2
              id="owners-title"
              variants={item}
              className="text-2xl font-semibold text-center mt-6 mb-8"
            >
              運営向け：商品・注文・売上をかんたん管理
            </motion.h2>

            <motion.div
              className="grid gap-6 md:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* 商品管理 */}
              <motion.article
                variants={item}
                className="rounded-xl bg-white/80 ring-1 ring-black/5 shadow-lg p-5"
              >
                <IconBadge>
                  <Package className="h-6 w-6" />
                </IconBadge>
                <h3 className="font-bold text-center">商品管理</h3>
                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-gray-800/90">
                  <li>追加・編集・削除は直感操作でサクッと完了</li>
                  <li>説明文はAIで自動生成、数秒で魅力的なテキストに</li>
                  <li>ドラッグ&ドロップで表示順を並び替え</li>
                </ul>
              </motion.article>

              {/* 注文管理 */}
              <motion.article
                variants={item}
                className="rounded-xl bg-white/80 ring-1 ring-black/5 shadow-lg p-5"
              >
                <IconBadge>
                  <ListChecks className="h-6 w-6" />
                </IconBadge>
                <h3 className="font-bold text-center">注文管理</h3>
                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-gray-800/90">
                  <li>準備中 → 呼び出し → 完了をワンタップ更新</li>
                  <li>番号で呼び出し、受け渡しミスを軽減</li>
                  <li>混雑時でも見やすいシンプルUI</li>
                </ul>
              </motion.article>

              {/* 売上確認 */}
              <motion.article
                variants={item}
                className="rounded-xl bg-white/80 ring-1 ring-black/5 shadow-lg p-5"
              >
                <IconBadge>
                  <BarChart3 className="h-6 w-6" />
                </IconBadge>
                <h3 className="font-bold text-center">売上確認</h3>
                <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-gray-800/90">
                  <li>ワンタップで合計売上を表示</li>
                  <li>点数・金額を自動集計、日報もスムーズ</li>
                  <li>スマホでその場でサッと確認</li>
                </ul>
              </motion.article>
            </motion.div>
          </section>

          {/* CTA */}
          <motion.div
            className="text-center mt-6"
            variants={item}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button asChild className="px-7 py-6 text-base">
              <a href="/contact">まずは無料相談 →</a>
            </Button>
          </motion.div>

          {/* フッター（簡易） */}
          <motion.footer
            className="pt-6 text-center text-sm text-gray-600"
            variants={item}
          >
            © {new Date().getFullYear()} Cordely
          </motion.footer>
        </motion.div>
      </main>
    </>
  );
}
