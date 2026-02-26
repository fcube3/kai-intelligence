import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: "Kai Intelligence Dashboard",
  description: "Strategic briefing for hard assets",
  icons: {
    icon: '/favicon.ico?v=3',
    apple: '/apple-icon.png?v=3',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Sticky top nav bar */}
        <nav className="sticky top-0 z-50 border-b border-[#30363d]/80 bg-[#0d1117]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 md:px-8">
            <div className="flex items-center gap-2">
              {/* Amber accent dot */}
              <span className="h-2 w-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_rgba(245,166,35,0.7)]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F5A623]">Kai Intelligence</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden text-[10px] font-bold uppercase tracking-widest text-zinc-500 sm:block">
                Hard Assets · Strategic Briefing
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)]" />
              <span className="text-[10px] font-bold uppercase text-green-400">Live</span>
            </div>
          </div>
        </nav>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
