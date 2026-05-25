import Link from 'next/link';
import { TERRITORIES, PLATFORM_STATS } from '@/lib/territories';
import { BRAND_ASSETS } from '@/lib/brand-assets';

export default function MainPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* GLOBAL 4-STEP PROGRESS */}
      <GlobalProgress active={1} />

      {/* HERO */}
      <section className="border-b border-line bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-50 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1240px] mx-auto px-6 py-14 md:py-20">
          {/* CARD HEADER */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 shadow-soft mb-7">
            <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-bithumb">
              BITHUMB × PENTACLE
            </span>
            <span className="text-ink-300">·</span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-700">
              AI Algorithm Performance Engine
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-12 items-start">
            {/* LEFT: HERO CONTENT */}
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-bithumb font-semibold mb-4">
                ① 기회 발견 · OPPORTUNITY DISCOVERY
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-ink-900 text-balance leading-[1.1]">
                자산의 한 축,
                <br />
                <span className="text-bithumb">디지털도 빗썸에서</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-ink-700 text-pretty max-w-xl leading-relaxed">
                코인은 별도 자산이 아니다 — 주식·채권·금 옆에 놓인 디지털 자산의 한 축.
                <br />
                빗썸은 그 자리를 가장 자연스럽게 차지하는 디지털 자산 거래소.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-bithumb-50 border border-bithumb-100 px-3.5 py-1.5">
                <span className="text-bithumb-deep text-[10px] font-bold uppercase tracking-[0.22em]">
                  CATEGORY
                </span>
                <span className="text-ink-700 text-xs font-medium">
                  주식·채권·금 다음 — 자산의 4번째 옵션
                </span>
              </div>

              {/* CORE FORMULA */}
              <div className="mt-10 rounded-2xl border border-line bg-white p-6 md:p-8 shadow-card">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-500 mb-5 font-semibold">
                  CORE FORMULA
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 md:gap-4 items-center">
                  <FormulaBox
                    tag="INPUT"
                    tone="blue"
                    primary="비-코인 관심사"
                    sub="소비자 검색·시청 행동"
                  />
                  <span className="formula-arrow mx-auto">×</span>
                  <FormulaBox
                    tag="LENS"
                    tone="bithumb"
                    primary="빗썸 자산 7개"
                    sub="PQC · AI · Cold · 24h ·…"
                  />
                  <span className="formula-arrow mx-auto">=</span>
                  <FormulaBox
                    tag="OUTPUT"
                    tone="mint"
                    primary="빗썸 자연 발견"
                    sub="49개 소구 기회"
                  />
                </div>
              </div>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Stat label="기회 영토" value={PLATFORM_STATS.territoryCount.toString()} />
                <Stat label="소구 기회" value={PLATFORM_STATS.opportunityCount.toString()} />
                <Stat
                  label="총 관심사 풀"
                  value={PLATFORM_STATS.totalBroadContextLabel}
                  small
                />
              </div>
              <div className="mt-3 text-[11px] text-ink-500">
                데이터: {PLATFORM_STATS.dataSource} · 검증 {PLATFORM_STATS.dataConfirmDate}
              </div>
            </div>

            {/* RIGHT: 7 BRAND ASSETS */}
            <aside className="rounded-2xl bg-ink-900 text-cream p-6 md:p-7 shadow-elevated">
              <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb font-semibold mb-1">
                BRAND ASSETS · LENS
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight mb-1">
                빗썸 자산 7개
              </h2>
              <div className="text-[11px] text-ink-300 mb-5">
                기존 자산이 못 가진 차별점이 곧 자연 발견의 LENS
              </div>
              <ul className="space-y-2.5">
                {BRAND_ASSETS.map((a, i) => (
                  <li
                    key={a.id}
                    className="flex items-start gap-3 rounded-lg border border-ink-700/40 bg-ink-700/10 px-3 py-2.5"
                  >
                    <span
                      className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-bithumb/20 text-bithumb text-[10px] font-bold tabular-nums"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
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

      {/* BRAND CORE — RFP keyword + core message */}
      <section className="border-b border-line bg-gradient-to-br from-bithumb-50 via-cream to-cream">
        <div className="max-w-[1240px] mx-auto px-6 py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 items-center">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb-deep font-bold mb-3">
                BRAND CORE · RFP KEYWORD
              </div>
              <div className="text-[11px] text-ink-500 leading-relaxed">
                빗썸이 풀어야 할 단 하나의 핵심 인식 과제 — 모든 49개 소구 기회가 이 한 줄로 수렴한다.
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-2 shadow-soft">
                <span className="w-2 h-2 rounded-full bg-bithumb" />
                <span className="text-sm font-bold tracking-tight text-ink-900">
                  디지털 자산의 한 축
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-ink-900 text-cream p-7 md:p-9 shadow-elevated relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-bithumb/15 blur-2xl" aria-hidden />
              <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb font-bold mb-3">
                + CORE MESSAGE
              </div>
              <p className="text-xl md:text-3xl font-bold tracking-tight leading-[1.2] text-balance">
                "주식·채권·금 다음 옵션은 더 이상 새로운 자산이 아니다.{' '}
                <span className="text-bithumb">이미 빗썸에 있다.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT LINEUP — 빗썸 코인/자산 카테고리 */}
      <section className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-12 md:py-16">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
                PRODUCT LINEUP · 빗썸 자산 카테고리
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink-900">
                49개 소구 기회가 향하는 8 자산 카테고리
              </h2>
            </div>
            <div className="text-[11px] text-ink-500 max-w-sm text-right">
              발견 LENS가 통과한 빗썸의 실제 자산 라인업 — 각 영토·소구가 향하는 종착지
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PRODUCT_LINEUP.map((p) => (
              <div
                key={p.label}
                className={`rounded-xl border ${p.featured ? 'border-bithumb/30 bg-bithumb-50' : 'border-line bg-cream-3'} p-5 hover:shadow-soft transition-shadow`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl leading-none">{p.icon}</span>
                  {p.tag && (
                    <span className="text-[9px] uppercase tracking-[0.18em] font-bold px-2 py-0.5 rounded-full bg-ink-900 text-cream">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="text-sm font-bold tracking-tight text-ink-900">{p.label}</div>
                <div className="text-[11px] text-ink-500 mt-1 leading-relaxed">{p.desc}</div>
              </div>
            ))}
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
            <p className="mt-2 text-sm text-ink-500">
              · 카드를 클릭하면 영토 상세 분석 페이지로 이동 · 자연스러움 ★★★★ 이상 검증 영토만
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-line bg-cream-3 px-4 py-2 text-xs">
            <span>
              <span className="font-bold text-bithumb tabular-nums">{PLATFORM_STATS.territoryCount}</span>
              <span className="text-ink-500"> 영토</span>
            </span>
            <span className="text-ink-300">·</span>
            <span>
              <span className="font-bold text-bithumb tabular-nums">{PLATFORM_STATS.opportunityCount}</span>
              <span className="text-ink-500"> 소구</span>
            </span>
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

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="rounded-lg bg-cream-3 border border-line px-2.5 py-2">
                  <div className="text-[9px] uppercase tracking-[0.18em] text-ink-500 font-semibold">
                    관심사 풀
                  </div>
                  <div className="text-sm font-bold text-ink-900 tabular-nums">
                    {t.broadContextLabel}
                  </div>
                </div>
                <div className="rounded-lg bg-bithumb-50 border border-bithumb-100 px-2.5 py-2">
                  <div className="text-[9px] uppercase tracking-[0.18em] text-bithumb-deep font-semibold">
                    소구 기회
                  </div>
                  <div className="text-sm font-bold text-bithumb-deep tabular-nums">
                    {t.subOpportunityCount}개
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-line text-[11px]">
                <div className="inline-flex items-center gap-1 text-gold">
                  <span className="tabular-nums tracking-tight">{'★'.repeat(t.naturalness)}</span>
                  <span className="text-ink-500 ml-1">자연스러움</span>
                </div>
                <span className="inline-flex items-center gap-1 text-bithumb font-semibold group-hover:gap-2 transition-all">
                  분석 <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

// ──────────────────────────────────────────────────────────
// Data (page-local)
// ──────────────────────────────────────────────────────────

const PRODUCT_LINEUP: Array<{
  icon: string;
  label: string;
  desc: string;
  tag?: string;
  featured?: boolean;
}> = [
  { icon: '₿', label: '비트코인 · BTC', desc: '디지털 자산의 기축', tag: 'MAIN', featured: true },
  { icon: 'Ξ', label: '이더리움 · ETH', desc: '스마트 컨트랙트 표준', tag: 'MAIN', featured: true },
  { icon: '💵', label: 'USDT · USDC', desc: '디지털 달러 · 글로벌', tag: 'STABLE' },
  { icon: '🇰🇷', label: 'KRWB · 원화 스테이블', desc: 'GENIUS Act 한국판', tag: 'NEW' },
  { icon: '🔥', label: '주요 알트코인', desc: 'SOL · XRP · ADA 등', },
  { icon: '🇺🇸', label: '오피셜 트럼프 코인', desc: '정책 시그널 자산', tag: 'EVENT' },
  { icon: '🌐', label: '글로벌 게이트웨이', desc: '24h · 해외 송금 인접', },
  { icon: '🛡️', label: 'PQC · Cold Wallet', desc: '양자내성 · 보안 인프라', tag: 'TRUST' },
];

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
      <div className="max-w-[1240px] mx-auto px-6 py-3.5">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto">
          {steps.map((s, i) => {
            const status =
              i + 1 < active ? 'done' : i + 1 === active ? 'active' : 'soon';
            return (
              <div key={s.num} className="flex items-center gap-2 md:gap-3 shrink-0">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
                    status === 'active'
                      ? 'bg-ink-900 text-cream'
                      : status === 'done'
                      ? 'bg-white border border-line text-ink-700'
                      : 'bg-white/60 border border-line text-ink-300'
                  }`}
                >
                  <span className="text-[10px] opacity-70">{s.num}</span>
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

function FormulaBox({
  tag,
  primary,
  sub,
  tone,
}: {
  tag: string;
  primary: string;
  sub: string;
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
      border: 'border-bithumb/30',
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
    <div className={`rounded-xl border ${t.border} ${t.bg} px-3.5 py-3`}>
      <div
        className={`text-[10px] uppercase tracking-[0.22em] font-bold mb-1 ${t.tag}`}
      >
        {tag}
      </div>
      <div className="text-sm font-bold tracking-tight text-ink-900">{primary}</div>
      <div className="text-[10px] text-ink-500 mt-0.5">{sub}</div>
    </div>
  );
}

function Stat({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div
        className={
          small
            ? 'text-lg font-bold tabular-nums text-ink-900'
            : 'text-2xl font-bold tabular-nums text-ink-900'
        }
      >
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
