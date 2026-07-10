import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4 Rules of Anthropic Engineers — Claude Code",
  description: "How Anthropic engineers actually work with Claude Code. 4 rules that 90% of developers ignore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
