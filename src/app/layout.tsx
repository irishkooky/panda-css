import "./index.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panda Next",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
