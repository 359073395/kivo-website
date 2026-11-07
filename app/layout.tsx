import type { Metadata } from "next";
import "./site.css";

export const metadata: Metadata = {
  title: "Kivo · 让每次创作，都有知识可依",
  description:
    "Kivo 是本地知识驱动的创作工作台。连接资料、方法与灵感，让知识检索、资料学习、内容创作和反馈复盘在一起。",
  metadataBase: new URL(
    "https://kivo-creative-workspace.lhwharvey.chatgpt.site",
  ),
  openGraph: {
    title: "Kivo · 创作工作台",
    description: "把你的积累，写进下一次创作。",
    locale: "zh_CN",
    type: "website",
  },
  icons: {
    icon: "/images/kivo-icon.png",
    shortcut: "/images/kivo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
