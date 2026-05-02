import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Focus Mode — Block Distracting Channels During Work Hours",
  description: "Browser extension that hides specified Discord channels and servers during your configured focus periods. Built for remote developers and digital nomads.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6262000-0971-495a-8dad-aafbd8979ed5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
