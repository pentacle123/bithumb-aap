import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTerritoryById, TERRITORIES } from '@/lib/territories';
import { getOpportunitiesByTerritory } from '@/lib/opportunities';
import { getBrandAssetById } from '@/lib/brand-assets';

export function generateStaticParams() {
  return TERRITORIES.map((t) => ({ id: t.id }));
}

export default function TerritoryPage({ params }: { params: { id: string } }) {
  const territory = getTerritoryById(params.id);
  if (!territory) notFound();

  const opportunities = getOpportunitiesByTerritory(territory.id);
  const coreAssets = territory.coreAssetIds
    .map((id) => getBrandAssetById(id))
    .filter((a) => a !== undefined);

  return (
    <main className="min-h-screen bg-cream">
      {/* BREADCRUMB */}
      <div className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-3">
          <nav className="text-xs text-ink-500 flex items-center gap-2">
            <Link href="/" className="hover:text-ink-900">
              기회 발견
            </Link>
            <span>›</span>
            <span className="text-ink-900 font-medium">{territory.categoryName}</span>
          </nav>
        </div>
      </div>

      {/* GLOBAL 4-STEP PROGRESS */}
      <GlobalProgress active={1} done={[]} />

      {/* HERO */}
      <section className="border-b border-line bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1240px] mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            {/* LEFT: HERO CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-3 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-5">
                <span>AREA</span>
                <span className="text-ink-300">·</span>
                <span className="font-mono text-ink-700">{territory.id}</span>
              </div>
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="text-[44px] md:text-[60px] leading-none">
                  {territory.emoji}
                </span>
                <TierBadge tier={territory.tier} />
                <span className="inline-flex items-center gap-1 text-gold text-sm">
                  <span className="tabular-nums">{'★'.repeat(territory.naturalness)}</span>
                  <span className="text-ink-500 text-xs ml-1">자연스러움</span>
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink-900 text-balance leading-tight">
                {territory.categoryName}
              </h1>
              <blockquote className="mt-6 border-l-2 border-bithumb pl-5 py-1 text-base md:text-lg text-ink-700 italic text-pretty leading-relaxed">
                "{territory.coreHypothesis}"
              </blockquote>

              {/* INLINE AREA TOTALS */}
              <div className="mt-7 grid grid-cols-3 gap-3">
                <AreaStat
                  label="영역 합계 · 관심사 풀"
                  value={territory.broadContextLabel}
                  tone="bithumb"
                />
                <AreaStat
                  label="소구 기회"
                  value={`${territory.subOpportunityCount}개`}
                />
                <AreaStat
                  label="코인 직접 매칭"
                  value={formatCount(territory.cryptoConnection)}
                />
              </div>

              <div className="mt-8 rounded-2xl border border-line bg-white p-5 md:p-7 shadow-card relative overflow-hidden">
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-bithumb"
                  aria-hidden
                />
                <div className="pl-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-bithumb-deep font-bold mb-3">
                    <span>🔭</span>
                    <span>Cluster Finder · 발견 맥락</span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-pretty text-ink-700">
                    {territory.blackBoxContext}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: ASIDE METRICS */}
            <aside className="rounded-2xl border border-line bg-cream-3 p-6 space-y-4 shadow-card">
              <AsideRow
                label="관심사 풀"
                value={territory.broadContextLabel}
                highlight
              />
              <AsideRow
                label="자연스러움"
                value={'★'.repeat(territory.naturalness)}
              />
              <AsideRow
                label="소구 기회 수"
                value={`${territory.subOpportunityCount}개`}
              />
              <div className="border-t border-line pt-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
                  인식 공백 · THE GAP
                </div>
                <div className="rounded-lg bg-gold-50 border border-gold/30 px-3 py-2.5">
                  <p className="text-xs text-ink-900 font-medium leading-relaxed">
                    {territory.recognitionGap}
                  </p>
                </div>
              </div>
              <div className="border-t border-line pt-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
                  핵심 자산
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {coreAssets.map((a) => (
                    <span
                      key={a!.id}
                      className="text-[11px] inline-flex items-center gap-1 bg-white border border-line px-2 py-1 rounded-full"
                    >
                      <span>{a!.icon}</span>
                      <span className="font-medium">{a!.label}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-line pt-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
                  연결 상품
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {territory.relatedProducts.map((p, i) => (
                    <span
                      key={i}
                      className="text-[11px] inline-flex items-center bg-bithumb-50 border border-bithumb-100 text-bithumb-deep font-semibold px-2 py-1 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SUB-OPPORTUNITIES */}
      <section className="max-w-[1240px] mx-auto px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
              SUB · OPPORTUNITIES
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-ink-900">
              소구 기회 · {opportunities.length}개
            </h2>
            <p className="mt-2 text-[11px] text-ink-500">
              · 카드 클릭 → 5섹션 페르소나 페이지 (WHO · PAIN · NEED · WHEN · 키워드 증명 · 여정 · 빗썸 브리지)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {opportunities.map((o) => (
            <Link
              key={o.id}
              href={`/opportunity/${territory.id}/${o.id}`}
              className="group rounded-2xl border border-line bg-white p-5 md:p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{o.emoji}</span>
                <div className="flex items-center gap-2">
                  <TypeBadge type={o.type} />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-ink-300">
                    {o.id}
                  </span>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold tracking-tight text-ink-900 mb-2 leading-snug text-balance">
                {o.title}
              </h3>
              <div className="text-[11px] text-ink-500 mb-3 line-clamp-1">{o.who}</div>
              <blockquote className="border-l-2 border-gold pl-3 text-sm text-ink-700 italic mb-4 line-clamp-2 leading-snug">
                "{o.quote}"
              </blockquote>
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-line">
                <div className="rounded-lg bg-cream-3 px-2.5 py-1.5">
                  <div className="text-[9px] uppercase tracking-[0.18em] text-ink-500 font-semibold">
                    관심사 풀
                  </div>
                  <div className="text-xs font-bold text-ink-900 tabular-nums">
                    {o.broadContextLabel}
                  </div>
                </div>
                <div className="rounded-lg bg-bithumb-50 px-2.5 py-1.5">
                  <div className="text-[9px] uppercase tracking-[0.18em] text-bithumb-deep font-semibold">
                    코인 연결
                  </div>
                  <div className="text-xs font-bold text-bithumb-deep tabular-nums">
                    {o.cryptoConnectionLabel}
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between mt-1">
                  <div className="text-[11px] text-ink-500 line-clamp-1 max-w-[70%]">
                    <span className="font-semibold text-ink-700">WHEN</span> · {o.when}
                  </div>
                  <span className="inline-flex items-center gap-1 text-bithumb font-semibold text-[11px] group-hover:gap-2 transition-all">
                    분석 <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

// ──────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────

function formatCount(n: number): string {
  if (n >= 100_000_000) return `${(n / 100_000_000).toFixed(2)}억회`;
  if (n >= 10_000) return `${Math.round(n / 10_000).toLocaleString()}만회`;
  if (n >= 1000) return `${n.toLocaleString()}회`;
  return `${n}회`;
}

// ──────────────────────────────────────────────────────────
// Components
// ──────────────────────────────────────────────────────────

function GlobalProgress({
  active,
  done,
}: {
  active: 1 | 2 | 3 | 4;
  done: number[];
}) {
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
            const stepNum = i + 1;
            const status =
              done.includes(stepNum)
                ? 'done'
                : stepNum === active
                ? 'active'
                : stepNum < active
                ? 'done'
                : 'soon';
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

function AreaStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: 'bithumb';
}) {
  const toneStyles =
    tone === 'bithumb'
      ? 'bg-bithumb-50 border-bithumb-100'
      : 'bg-cream-3 border-line';
  return (
    <div className={`rounded-xl border ${toneStyles} px-3.5 py-3`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-1">
        {label}
      </div>
      <div
        className={`text-base md:text-lg font-bold tabular-nums ${
          tone === 'bithumb' ? 'text-bithumb-deep' : 'text-ink-900'
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function AsideRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-1">
        {label}
      </div>
      <div
        className={`tabular-nums ${
          highlight ? 'text-2xl font-bold text-bithumb' : 'text-base font-semibold text-ink-900'
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function TierBadge({ tier }: { tier: 'MEGA' | 'LARGE' | 'STRATEGIC' }) {
  const styles = {
    MEGA: 'bg-bithumb text-white',
    LARGE: 'bg-gold text-white',
    STRATEGIC: 'bg-accent-plum text-white',
  };
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.22em] font-semibold px-2.5 py-1 rounded-full ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}

function TypeBadge({ type }: { type: 'A' | 'B' }) {
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.22em] font-semibold px-2.5 py-1 rounded-full ${
        type === 'A' ? 'bg-bithumb text-white' : 'bg-cream-2 text-ink-700 border border-line'
      }`}
    >
      Type {type}
    </span>
  );
}
