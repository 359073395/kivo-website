import type { Metadata } from "next";
import "./site.css";
import "./motion.css";

export const metadata: Metadata = {
  title: "Kivo · 让每次创作，都有知识可依",
  description:
    "Kivo 一站式创作工作台，连接热点雷达、选题策划、内容制作、发布准备与反馈复盘，让本地知识参与每一步创作。",
  metadataBase: new URL(
    "https://kivo-creative-workspace.lhwharvey.chatgpt.site",
  ),
  openGraph: {
    title: "Kivo · 创作工作台",
    description: "从一个好选题，到一份好内容。",
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
