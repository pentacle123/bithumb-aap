import Link from 'next/link';
import { TERRITORIES, PLATFORM_STATS } from '@/lib/territories';
import { BRAND_ASSETS } from '@/lib/brand-assets';

export default function MainPage() {
  return (
    <main className="bg-cream">
      <GlobalProgress active={1} />

      {/* HERO — meant to fit single viewport along with the grid below */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1240px] mx-auto px-6 pt-8 pb-6">
          {/* CARD HEADER */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 shadow-soft mb-5">
            <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-bithumb">
              BITHUMB × PENTACLE
            </span>
            <span className="text-ink-300">·</span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-700">
              AI Algorithm Performance Engine
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 items-start lg:items-stretch">
            {/* LEFT */}
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-bithumb font-semibold mb-2.5">
                ① 기회 발견 · OPPORTUNITY DISCOVERY
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-ink-900 text-balance leading-[1.12]">
                빗썸, 소비자의 관심사 속에
                <br />
                <span className="text-bithumb">자연스럽게 스며들다</span>
              </h1>
              <p className="mt-4 text-sm md:text-base text-ink-700 leading-relaxed max-w-xl">
                소비자가 검색하고 시청하는 모든 관심사의 흐름 속에서 빗썸을 자연 발견하게 만드는{' '}
                <span className="font-semibold text-ink-900">49개 진입로</span>.
                코인을 따로 떨어진 자산으로 두지 않고, 일상의 관심사 옆자리에 놓는 발견 엔진.
              </p>

              {/* CATEGORY badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-bithumb-50 border border-bithumb-100 px-3.5 py-1.5">
                <span className="text-bithumb-deep text-[10px] font-bold uppercase tracking-[0.22em]">
                  CATEGORY
                </span>
                <span className="text-ink-700 text-xs font-medium">
                  비-코인 관심사 → 빗썸 자연 진입로
                </span>
              </div>

              {/* CORE FORMULA — compact one-line */}
              <div className="mt-5 rounded-2xl border border-line bg-white px-5 py-4 shadow-card">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 mb-3 font-semibold">
                  CORE FORMULA
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <FormulaPill tag="INPUT" tone="blue" primary="비-코인 관심사" />
                  <span className="formula-arrow text-ink-500">×</span>
                  <FormulaPill tag="LENS" tone="bithumb" primary="빗썸 자산 7개" />
                  <span className="formula-arrow text-ink-500">=</span>
                  <FormulaPill tag="OUTPUT" tone="mint" primary="빗썸 자연 발견" />
                </div>
              </div>

              {/* Inline stats */}
              <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <InlineStat
                  value={String(PLATFORM_STATS.territoryCount)}
                  unit="개"
                  label="기회 영토"
                />
                <span className="text-ink-300 text-lg">·</span>
                <InlineStat
                  value={String(PLATFORM_STATS.opportunityCount)}
                  unit="개"
                  label="소구 기회"
                />
                <span className="text-ink-300 text-lg">·</span>
                <InlineStat
                  value={PLATFORM_STATS.totalBroadContextLabel}
                  label="연 관심사 풀"
                  highlight
                />
              </div>
              <div className="mt-2 text-[11px] text-ink-500 leading-relaxed">
                {PLATFORM_STATS.dataSource} · 검증 {PLATFORM_STATS.dataConfirmDate}
              </div>
            </div>

            {/* RIGHT — 7 BRAND ASSETS as white card (no black box) */}
            <aside className="rounded-2xl border border-line bg-white p-5 shadow-card h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb-deep font-bold">
                    BRAND ASSETS · LENS
                  </div>
                  <h2 className="text-base font-bold tracking-tight text-ink-900 mt-0.5">
                    빗썸 자산 7개
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-semibold">
                    자연 발견
                  </div>
                  <div className="text-[10px] text-ink-700 font-semibold">LENS</div>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 flex-1 auto-rows-fr">
                {BRAND_ASSETS.map((a, i) => (
                  <li
                    key={a.id}
                    className="flex items-start gap-2 rounded-lg border border-line-soft bg-cream-3 px-2.5 py-2"
                  >
                    <span
                      className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bithumb-50 text-bithumb-deep text-[9px] font-bold tabular-nums shrink-0 mt-0.5"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base shrink-0 leading-none mt-0.5">{a.icon}</span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-ink-900 leading-tight">{a.label}</div>
                      <div className="text-[10px] text-ink-500 leading-tight mt-0.5 truncate">
                        {a.sub}
                      </div>
                    </div>
                  </li>
                ))}
                {/* 8th cell: small summary stat */}
                <li className="flex items-center gap-2 rounded-lg border border-bithumb-100 bg-bithumb-50 px-2.5 py-2">
                  <span className="text-base shrink-0 leading-none">🔍</span>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-bithumb-deep font-bold leading-tight">
                      LENS 통과
                    </div>
                    <div className="text-xs font-bold text-bithumb-deep tabular-nums leading-tight mt-0.5">
                      49 소구 기회
                    </div>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* TERRITORIES — compact 5x2 grid below the fold edge */}
      <section className="bg-cream-3 border-t border-line">
        <div className="max-w-[1240px] mx-auto px-6 py-6 md:py-8">
          <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold">
                10 OPPORTUNITY TERRITORIES
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-ink-900 mt-0.5">
                10개 영토에서 빗썸이 자연스럽게 만나는 자리
              </h2>
              <p className="text-[11px] text-ink-500 mt-1">
                · 카드 클릭 → 영토 상세 분석 · 자연스러움 ★★★★ 이상 검증 영토만
              </p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-4 py-1.5 text-xs shadow-soft">
              <span>
                <span className="font-bold text-bithumb tabular-nums">
                  {PLATFORM_STATS.territoryCount}
                </span>
                <span className="text-ink-500"> 영토</span>
              </span>
              <span className="text-ink-300">·</span>
              <span>
                <span className="font-bold text-bithumb tabular-nums">
                  {PLATFORM_STATS.opportunityCount}
                </span>
                <span className="text-ink-500"> 소구</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {TERRITORIES.map((t) => (
              <Link
                key={t.id}
                href={`/opportunity/${t.id}`}
                className="group relative rounded-xl border border-line bg-white p-3 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                {/* Left color rail */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: t.themeColor }}
                  aria-hidden
                />
                <div className="pl-1.5">
                  <div className="flex items-start justify-between mb-1.5">
                    <span className="text-xl leading-none">{t.emoji}</span>
                    <MiniTierBadge tier={t.tier} />
                  </div>
                  <h3 className="text-[12px] font-bold tracking-tight text-ink-900 leading-tight line-clamp-2 min-h-[2.4em]">
                    {t.categoryName}
                  </h3>
                  <div className="mt-1 text-[10px] text-ink-500">
                    {t.subOpportunityCount} 소구 기회
                  </div>
                  <div className="mt-2 pt-2 border-t border-line-soft flex items-center justify-between">
                    <div className="text-[12px] font-bold text-ink-900 tabular-nums leading-none">
                      {t.broadContextLabel}
                      <span className="text-[9px] font-normal text-ink-500 ml-0.5">/연</span>
                    </div>
                    <span className="text-[10px] text-bithumb font-semibold inline-flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                      분석 <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ──────────────────────────────────────────────────────────
// Components
// ──────────────────────────────────────────────────────────

function GlobalProgress({ active }: { active: 1 | 2 | 3 | 4 }) {
  const steps: Array<{ num: string; label: string }> = [
    { num: '①', label: '기회 발견' },
    { num: '②', label: '기회 분석' },
    { num: '③', label: '숏폼 전략' },
    { num: '④', label: '크리에이터 매칭' },
  ];
  return (
    <div className="border-b border-line bg-cream-2">
      <div className="max-w-[1240px] mx-auto px-6 py-3">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto">
          {steps.map((s, i) => {
            const stepNum = i + 1;
            const status =
              stepNum < active ? 'done' : stepNum === active ? 'active' : 'soon';
            return (
              <div key={s.num} className="flex items-center gap-2 md:gap-3 shrink-0">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
                    status === 'active'
                      ? 'bg-bithumb text-white'
                      : status === 'done'
                      ? 'bg-white border border-line text-ink-700'
                      : 'bg-white/60 border border-line text-ink-300'
                  }`}
                >
                  <span className="text-[10px] opacity-80">{s.num}</span>
                  <span>{s.label}</span>
                  {status === 'done' && <span className="text-bithumb">✓</span>}
                  {status === 'soon' && (
                    <span className="text-[9px] uppercase tracking-wider opacity-70 ml-0.5">
                      soon
                    </span>
                  )}
                </span>
                {i < steps.length - 1 && (
                  <span className="h-px w-3 md:w-5 bg-line shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FormulaPill({
  tag,
  primary,
  tone,
}: {
  tag: string;
  primary: string;
  tone: 'blue' | 'bithumb' | 'mint';
}) {
  const tones = {
    blue: {
      bg: 'bg-accent-blue-light',
      border: 'border-accent-blue/30',
      tag: 'text-accent-blue',
    },
    bithumb: {
      bg: 'bg-bithumb-50',
      border: 'border-bithumb/40',
      tag: 'text-bithumb-deep',
    },
    mint: {
      bg: 'bg-accent-mint-light',
      border: 'border-accent-mint/30',
      tag: 'text-accent-mint',
    },
  } as const;
  const t = tones[tone];
  return (
    <span className={`inline-flex items-center gap-2 rounded-lg border ${t.border} ${t.bg} px-3 py-1.5`}>
      <span className={`text-[9px] uppercase tracking-[0.22em] font-bold ${t.tag}`}>{tag}</span>
      <span className="text-sm font-bold tracking-tight text-ink-900">{primary}</span>
    </span>
  );
}

function InlineStat({
  value,
  unit,
  label,
  highlight,
}: {
  value: string;
  unit?: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span
        className={`text-2xl font-bold tabular-nums leading-none ${
          highlight ? 'text-bithumb' : 'text-ink-900'
        }`}
      >
        {value}
        {unit && <span className="text-sm font-semibold text-ink-700 ml-0.5">{unit}</span>}
      </span>
      <span className="text-[11px] text-ink-500 font-medium">{label}</span>
    </span>
  );
}

function MiniTierBadge({ tier }: { tier: 'MEGA' | 'LARGE' | 'STRATEGIC' }) {
  const styles = {
    MEGA: 'bg-bithumb text-white',
    LARGE: 'bg-gold text-white',
    STRATEGIC: 'bg-ink-300 text-white',
  };
  return (
    <span
      className={`text-[8px] uppercase tracking-[0.18em] font-semibold px-1.5 py-0.5 rounded-full ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}
