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
        <SiteFooter />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-baseline gap-3 shrink-0">
          <span className="text-xl font-bold tracking-tight text-ink-900">
            bithumb<span className="text-bithumb">AAP</span>
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] text-bithumb/80">
            v1.0
          </span>
        </Link>
        <div className="hidden md:block text-[11px] tracking-wider text-ink-500 shrink-0">
          Pentacle × ListeningMind × Claude AI
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="max-w-[1240px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 text-sm">
        <div>
          <div className="text-base font-bold tracking-tight text-ink-900">
            bithumb<span className="text-bithumb">AAP</span>
            <span className="ml-2 text-[10px] uppercase tracking-[0.22em] text-bithumb/80">v1.0</span>
          </div>
          <p className="mt-3 text-xs text-ink-500 leading-relaxed">
            Algorithm Performance Platform for Bithumb.<br />
            소비자 관심사 속에서 빗썸을 자연스럽게 발견하기 위한 발견 엔진.
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-3">
            4 Phases
          </div>
          <ul className="space-y-1.5 text-xs text-ink-700">
            <li>① 기회 발견 · 활성</li>
            <li>② 기회 분석 · 활성</li>
            <li className="text-ink-300">③ 숏폼 전략 · 준비 중</li>
            <li className="text-ink-300">④ 크리에이터 매칭 · 준비 중</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-3">
            Credits
          </div>
          <ul className="space-y-1.5 text-xs text-ink-700">
            <li>Pentacle · 발견 설계</li>
            <li>ListeningMind · 데이터</li>
            <li>Claude AI · 합성·구조화</li>
          </ul>
          <div className="mt-4 text-[10px] text-ink-300">© 2026 · v1.0 / 2026.05</div>
        </div>
      </div>
    </footer>
  );
}
