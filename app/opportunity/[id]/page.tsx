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
    <main className="bg-cream">
      {/* BREADCRUMB */}
      <div className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-2.5">
          <nav className="text-xs text-ink-500 flex items-center gap-2">
            <Link href="/" className="hover:text-ink-900">
              기회 발견
            </Link>
            <span>›</span>
            <span className="text-ink-900 font-medium">{territory.categoryName}</span>
          </nav>
        </div>
      </div>

      <GlobalProgress active={1} />

      {/* COMPACT HERO — single row, dense */}
      <section className="relative border-b border-line">
        <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1240px] mx-auto px-6 pt-5 pb-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-5 items-stretch">
            {/* LEFT */}
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card relative overflow-hidden">
              <span
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{ backgroundColor: territory.themeColor }}
                aria-hidden
              />
              <div className="pl-2">
                <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream-3 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold">
                    <span>AREA</span>
                    <span className="text-ink-300">·</span>
                    <span className="font-mono text-ink-700">{territory.id}</span>
                  </span>
                  <TierBadge tier={territory.tier} />
                  <span className="inline-flex items-center gap-1 text-gold text-xs">
                    <span className="tabular-nums">{'★'.repeat(territory.naturalness)}</span>
                    <span className="text-ink-500 text-[10px] ml-0.5">자연스러움</span>
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2.5">
                  <span className="text-4xl md:text-[44px] leading-none shrink-0">
                    {territory.emoji}
                  </span>
                  <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold tracking-tight text-ink-900 text-balance leading-tight">
                    {territory.categoryName}
                  </h1>
                </div>

                <blockquote className="border-l-2 border-bithumb pl-3 py-0.5 text-sm md:text-base text-ink-700 italic text-pretty leading-snug mb-3">
                  "{territory.coreHypothesis}"
                </blockquote>

                {/* Cluster Finder context — inline compact */}
                <div className="rounded-lg border border-line bg-cream-3 px-3 py-2.5">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-bithumb-deep font-bold mb-1.5">
                    <span>🔭</span>
                    <span>Cluster Finder · 발견 맥락</span>
                  </div>
                  <p className="text-[12px] text-ink-700 leading-snug line-clamp-3">
                    {territory.blackBoxContext}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — compact stats + meta */}
            <aside className="rounded-2xl border border-line bg-white p-4 shadow-card flex flex-col gap-2.5">
              <div className="grid grid-cols-3 gap-2">
                <AreaStat
                  label="관심사 풀"
                  value={territory.broadContextLabel}
                  tone="bithumb"
                  compact
                />
                <AreaStat
                  label="소구 기회"
                  value={`${territory.subOpportunityCount}개`}
                  compact
                />
                <AreaStat
                  label="코인 매칭"
                  value={formatCount(territory.cryptoConnection)}
                  compact
                />
              </div>
              <div className="rounded-lg bg-gold-50 border border-gold/30 px-3 py-2">
                <div className="text-[9px] uppercase tracking-[0.22em] text-gold-deep font-bold mb-0.5">
                  🔍 인식 공백
                </div>
                <p className="text-[11px] text-ink-900 font-medium leading-snug">
                  {territory.recognitionGap}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-line bg-cream-3 px-2.5 py-2">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-bold mb-1">
                    핵심 자산
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {coreAssets.map((a) => (
                      <span
                        key={a!.id}
                        className="text-[10px] inline-flex items-center gap-0.5 bg-white border border-line px-1.5 py-0.5 rounded-full"
                        title={a!.label}
                      >
                        <span className="text-xs leading-none">{a!.icon}</span>
                        <span className="font-medium">{a!.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-bithumb-100 bg-bithumb-50 px-2.5 py-2">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-bithumb-deep font-bold mb-1">
                    연결 상품
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {territory.relatedProducts.map((p, i) => (
                      <span
                        key={i}
                        className="text-[10px] inline-flex items-center bg-white border border-bithumb-100 text-bithumb-deep font-semibold px-1.5 py-0.5 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SUB-OPPORTUNITIES — compact 3-col grid */}
      <section className="bg-cream-3">
        <div className="max-w-[1240px] mx-auto px-6 py-5 md:py-6">
          <div className="flex items-end justify-between mb-3 flex-wrap gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold">
                SUB · OPPORTUNITIES
              </div>
              <h2 className="text-base md:text-lg font-bold tracking-tight text-ink-900 mt-0.5">
                소구 기회 · {opportunities.length}개
              </h2>
            </div>
            <div className="text-[10px] text-ink-500">
              · 카드 클릭 → 5섹션 페르소나 분석
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {opportunities.map((o) => (
              <Link
                key={o.id}
                href={`/opportunity/${territory.id}/${o.id}`}
                className="group rounded-xl border border-line bg-white p-3.5 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl leading-none">{o.emoji}</span>
                  <div className="flex items-center gap-1.5">
                    <TypeBadge type={o.type} />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-ink-300">
                      {o.id}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-bold tracking-tight text-ink-900 leading-tight line-clamp-2 mb-1.5 min-h-[2.5em]">
                  {o.title}
                </h3>
                <blockquote className="border-l-2 border-gold pl-2 text-[11px] text-ink-700 italic line-clamp-2 leading-snug mb-2.5 min-h-[2em]">
                  "{o.quote}"
                </blockquote>
                <div className="grid grid-cols-2 gap-1.5 mb-2">
                  <div className="rounded bg-cream-3 px-2 py-1">
                    <div className="text-[8px] uppercase tracking-[0.18em] text-ink-500 font-semibold leading-none">
                      관심사 풀
                    </div>
                    <div className="text-[11px] font-bold text-ink-900 tabular-nums leading-tight mt-0.5">
                      {o.broadContextLabel}
                    </div>
                  </div>
                  <div className="rounded bg-bithumb-50 px-2 py-1">
                    <div className="text-[8px] uppercase tracking-[0.18em] text-bithumb-deep font-semibold leading-none">
                      코인 연결
                    </div>
                    <div className="text-[11px] font-bold text-bithumb-deep tabular-nums leading-tight mt-0.5">
                      {o.cryptoConnectionLabel}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-line-soft">
                  <div className="text-[10px] text-ink-500 line-clamp-1 max-w-[70%]">
                    <span className="font-semibold text-ink-700">WHEN ·</span> {o.when}
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-bithumb font-semibold text-[10px] group-hover:gap-1.5 transition-all">
                    분석 <span aria-hidden>→</span>
                  </span>
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
// Helpers
// ──────────────────────────────────────────────────────────

function formatCount(n: number): string {
  if (n >= 100_000_000) return `${(n / 100_000_000).toFixed(2)}억`;
  if (n >= 10_000) return `${Math.round(n / 10_000).toLocaleString()}만`;
  if (n >= 1000) return `${n.toLocaleString()}`;
  return `${n}`;
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
      <div className="max-w-[1240px] mx-auto px-6 py-2.5">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto">
          {steps.map((s, i) => {
            const stepNum = i + 1;
            const status =
              stepNum < active ? 'done' : stepNum === active ? 'active' : 'soon';
            return (
              <div key={s.num} className="flex items-center gap-2 md:gap-3 shrink-0">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
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

function AreaStat({
  label,
  value,
  tone,
  compact,
}: {
  label: string;
  value: string;
  tone?: 'bithumb';
  compact?: boolean;
}) {
  const toneStyles =
    tone === 'bithumb'
      ? 'bg-bithumb-50 border-bithumb-100'
      : 'bg-cream-3 border-line';
  return (
    <div className={`rounded-lg border ${toneStyles} px-2.5 ${compact ? 'py-1.5' : 'py-3'}`}>
      <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-0.5">
        {label}
      </div>
      <div
        className={`${compact ? 'text-sm' : 'text-base md:text-lg'} font-bold tabular-nums leading-none ${
          tone === 'bithumb' ? 'text-bithumb-deep' : 'text-ink-900'
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
      className={`text-[9px] uppercase tracking-[0.22em] font-semibold px-2 py-0.5 rounded-full ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}

function TypeBadge({ type }: { type: 'A' | 'B' }) {
  return (
    <span
      className={`text-[9px] uppercase tracking-[0.22em] font-semibold px-1.5 py-0.5 rounded-full ${
        type === 'A' ? 'bg-bithumb text-white' : 'bg-cream-2 text-ink-700 border border-line'
      }`}
    >
      Type {type}
    </span>
  );
}
