import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'bithumb AAP v1.0 · 자산의 한 축, 디지털도 빗썸에서',
  description: '소비자 관심사 속에서 빗썸을 자연스럽게 — 10 기회 영토 × 49 소구 기회',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased bg-cream text-ink-900">
        <Header />
        {children}
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center gap-8">
        <Link href="/" className="flex items-baseline gap-3 shrink-0">
          <span className="text-xl font-bold tracking-tight text-ink-900">
            bithumb<span className="text-bithumb">AAP</span>
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-bithumb/80">
            v1.0
          </span>
        </Link>
        <nav className="flex-1 flex items-center gap-1 overflow-x-auto">
          <span className="group relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-ink-900 text-cream">
            <span className="text-[11px] mr-1.5 opacity-70">①</span>기회 발견
          </span>
          <span className="group relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap text-ink-500 cursor-not-allowed">
            <span className="text-[11px] mr-1.5 opacity-70">②</span>숏폼 전략
            <span className="ml-2 text-[10px] uppercase tracking-wider opacity-60">soon</span>
          </span>
          <span className="group relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap text-ink-500 cursor-not-allowed">
            <span className="text-[11px] mr-1.5 opacity-70">③</span>크리에이터 매칭
            <span className="ml-2 text-[10px] uppercase tracking-wider opacity-60">soon</span>
          </span>
        </nav>
        <div className="hidden md:block text-[11px] tracking-wider text-ink-500 shrink-0">
          Pentacle × ListeningMind × Claude AI
        </div>
      </div>
    </header>
  );
}
