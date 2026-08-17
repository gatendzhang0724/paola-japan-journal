import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paola的日本旅行手记",
  description: "记录日本旅行、Vlog、摄影、美食与城市生活的个人网站。",
  keywords: ["日本旅行", "旅行Vlog", "旅行摄影", "京都", "东京", "Paola"],
  openGraph: { title: "Paola的日本旅行手记", description: "把旅途写成一封很长的信。", type: "website" },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
