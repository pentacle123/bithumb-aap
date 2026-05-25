import Link from 'next/link';
import { TERRITORIES, PLATFORM_STATS } from '@/lib/territories';
import { BRAND_ASSETS } from '@/lib/brand-assets';

export default function MainPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* HERO */}
      <section className="border-b border-line bg-gradient-to-b from-white to-cream">
        <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-12 items-start">
            {/* LEFT: CORE FORMULA + STATS */}
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-bithumb font-semibold mb-4">
                ① 기회 발견 · OPPORTUNITY DISCOVERY
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink-900 text-balance leading-[1.15]">
                자산의 한 축,
                <br />
                <span className="text-bithumb">디지털도 빗썸에서</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-ink-700 text-pretty max-w-xl leading-relaxed">
                소비자 관심사 속에서 빗썸을 자연스럽게 — 10 기회 영토 × 49 소구 기회.
              </p>

              {/* CORE FORMULA */}
              <div className="mt-10 rounded-2xl border border-line bg-white p-6 md:p-8 shadow-card">
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500 mb-4 font-semibold">
                  CORE FORMULA
                </div>
                <div className="space-y-2 font-mono text-sm md:text-base text-ink-900">
                  <div>
                    <span className="text-ink-500">INPUT</span> · 비-코인 소비자 관심사
                  </div>
                  <div className="text-ink-300 text-center">×</div>
                  <div>
                    <span className="text-bithumb">LENS</span> · 빗썸 자산 7개
                  </div>
                  <div className="text-ink-300 text-center">↓</div>
                  <div className="font-semibold">
                    <span className="text-ink-500">OUTPUT</span> · 빗썸 자연 발견
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Stat label="기회 영토" value={PLATFORM_STATS.territoryCount.toString()} />
                <Stat label="소구 기회" value={PLATFORM_STATS.opportunityCount.toString()} />
                <Stat label="총 관심사 풀" value={PLATFORM_STATS.totalBroadContextLabel} small />
              </div>
              <div className="mt-3 text-[11px] text-ink-500">
                데이터: {PLATFORM_STATS.dataSource} · 검증 {PLATFORM_STATS.dataConfirmDate}
              </div>
            </div>

            {/* RIGHT: 7 BRAND ASSETS */}
            <aside className="rounded-2xl bg-ink-900 text-cream p-6 md:p-7 shadow-elevated">
              <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb/90 font-semibold mb-1">
                BRAND ASSETS · LENS
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight mb-5">
                빗썸 자산 7개
              </h2>
              <ul className="space-y-3">
                {BRAND_ASSETS.map((a) => (
                  <li
                    key={a.id}
                    className="flex items-start gap-3 rounded-lg border border-ink-700/40 px-3 py-2.5"
                  >
                    <span className="text-xl shrink-0 leading-none mt-0.5">{a.icon}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">
                        {a.label}{' '}
                        <span className="font-normal text-ink-300 text-xs">· {a.sub}</span>
                      </div>
                      <div className="text-[11px] text-ink-300 mt-0.5">{a.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* TERRITORIES GRID */}
      <section className="max-w-[1240px] mx-auto px-6 py-14 md:py-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
              10 기회 영토 · OPPORTUNITY TERRITORIES
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink-900">
              비-코인 관심사 속, 빗썸을 자연스럽게
            </h2>
          </div>
          <div className="text-xs text-ink-500">
            자연스러움 ★★★★ 이상 검증 영토만
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TERRITORIES.map((t) => (
            <Link
              key={t.id}
              href={`/opportunity/${t.id}`}
              className="group relative rounded-2xl border border-line bg-white p-5 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{t.emoji}</span>
                <TierBadge tier={t.tier} />
              </div>
              <h3 className="text-base font-bold tracking-tight text-ink-900 mb-1.5 leading-snug text-balance">
                {t.categoryName}
              </h3>
              <p className="text-xs text-ink-500 mb-4 line-clamp-2 leading-relaxed">
                {t.coreHypothesis}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-line text-[11px]">
                <div>
                  <span className="text-ink-500">관심사 풀</span>{' '}
                  <span className="font-semibold text-ink-900 tabular-nums">
                    {t.broadContextLabel}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-bithumb tabular-nums">
                    {t.subOpportunityCount}
                  </span>
                  <span className="text-ink-500"> 소구</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div className={small ? 'text-lg font-bold tabular-nums text-ink-900' : 'text-2xl font-bold tabular-nums text-ink-900'}>
        {value}
      </div>
      <div className="text-[11px] text-ink-500 mt-1">{label}</div>
    </div>
  );
}

function TierBadge({ tier }: { tier: 'MEGA' | 'LARGE' | 'STRATEGIC' }) {
  const styles = {
    MEGA: 'bg-bithumb text-white',
    LARGE: 'bg-gold text-white',
    STRATEGIC: 'bg-ink-700 text-cream',
  };
  return (
    <span
      className={`text-[9px] uppercase tracking-[0.18em] font-semibold px-2 py-1 rounded-full ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}
