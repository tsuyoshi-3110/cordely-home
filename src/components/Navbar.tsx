"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ルート遷移や Esc キーで自動クローズ
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ドロワー表示中のスクロールロック
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-amber-300 via-rose-200 to-sky-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Cordely ホーム"
        >
          <Image
            src="/images/logoH.png" // public/images/cordelyLogoH.png に配置
            alt="Cordely"
            width={160}
            height={40}
            className="h-15 w-auto" // ナビの高さにフィット
            priority
            sizes="(max-width: 640px) 128px, 160px"
          />
        </Link>

        {/* ハンバーガー（全デバイス） */}
        <button
          className="text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="メニューを開く"
          aria-expanded={open}
          aria-controls="nav-drawer"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* オーバーレイ */}
      {open && (
        <button
          aria-hidden
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ドロワー */}
      <aside
        id="nav-drawer"
        className={`fixed right-0 top-0 z-50 h-full w-3/4 sm:w-1/3 transform bg-gradient-to-br from-amber-200 via-rose-200 to-sky-200 shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        } rounded-l-2xl`}
        role="dialog"
        aria-modal="true"
      >
        {/* 閉じる */}
        <button
          onClick={() => setOpen(false)}
          className="absolute left-4 top-4 text-2xl text-gray-600 hover:text-gray-900"
          aria-label="メニューを閉じる"
        >
          ×
        </button>

        {/* ナビリンク */}
        <div className="flex h-full flex-col items-center justify-center space-y-6 px-6">
          <Link
            href="/guide"
            onClick={() => setOpen(false)}
            className="w-56 rounded-full bg-rose-500 px-6 py-2 text-center text-lg font-semibold text-white shadow hover:bg-rose-600 transition"
          >
            ご案内
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="w-56 rounded-full bg-rose-500 px-6 py-2 text-center text-lg font-semibold text-white shadow hover:bg-rose-600 transition"
          >
            お問い合わせ
          </Link>
          <Link
            href="/legal"
            onClick={() => setOpen(false)}
            className="w-56 rounded-full bg-rose-500 px-6 py-2 text-center text-lg font-semibold text-white shadow hover:bg-rose-600 transition"
          >
            特定商取引法に基づく表記
          </Link>
        </div>
      </aside>
    </nav>
  );
}
