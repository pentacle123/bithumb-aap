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

      {/* HERO */}
      <section className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            {/* LEFT: HERO CONTENT */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[40px] md:text-[56px] leading-none">{territory.emoji}</span>
                <TierBadge tier={territory.tier} />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink-900 text-balance leading-tight">
                {territory.categoryName}
              </h1>
              <blockquote className="mt-6 border-l-2 border-gold pl-5 py-1 text-base md:text-lg text-ink-700 italic text-pretty leading-relaxed">
                "{territory.coreHypothesis}"
              </blockquote>
              <div className="mt-8 rounded-2xl bg-ink-900 text-cream p-5 md:p-6 shadow-elevated">
                <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb/90 font-semibold mb-2">
                  Cluster Finder · 발견 맥락
                </div>
                <p className="text-sm md:text-base leading-relaxed text-pretty">
                  {territory.blackBoxContext}
                </p>
              </div>
            </div>

            {/* RIGHT: ASIDE METRICS */}
            <aside className="rounded-2xl border border-line bg-cream-2 p-6 space-y-4">
              <AsideRow label="관심사 풀" value={territory.broadContextLabel} highlight />
              <AsideRow label="자연스러움" value={'★'.repeat(territory.naturalness)} />
              <AsideRow label="소구 기회 수" value={`${territory.subOpportunityCount}개`} />
              <div className="border-t border-line pt-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
                  인식 공백
                </div>
                <p className="text-xs text-ink-700 leading-relaxed">{territory.recognitionGap}</p>
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
                <div className="text-xs text-ink-700">{territory.relatedProducts.join(' · ')}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SUB-OPPORTUNITIES */}
      <section className="max-w-[1240px] mx-auto px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-ink-900">
            소구 기회 · {opportunities.length}개
          </h2>
          <div className="text-[11px] text-ink-500">
            소구 기회 클릭 → 5섹션 페르소나 페이지
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
                <span
                  className={`text-[9px] uppercase tracking-[0.18em] font-semibold px-2 py-1 rounded-full ${
                    o.type === 'A'
                      ? 'bg-bithumb text-white'
                      : 'bg-cream-2 text-ink-700 border border-line'
                  }`}
                >
                  Type {o.type}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-bold tracking-tight text-ink-900 mb-2 leading-snug text-balance">
                {o.title}
              </h3>
              <div className="text-[11px] text-ink-500 mb-3 line-clamp-1">{o.who}</div>
              <blockquote className="border-l-2 border-gold pl-3 text-sm text-ink-700 italic mb-4 line-clamp-2 leading-snug">
                "{o.quote}"
              </blockquote>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-line text-[11px]">
                <div>
                  <div className="text-ink-500">관심사 풀</div>
                  <div className="font-semibold text-ink-900 tabular-nums">{o.broadContextLabel}</div>
                </div>
                <div>
                  <div className="text-ink-500">코인 연결</div>
                  <div className="font-semibold text-ink-900 tabular-nums">
                    {o.cryptoConnectionLabel}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-ink-500">WHEN</div>
                  <div className="text-ink-700 line-clamp-1">{o.when}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
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
          highlight ? 'text-xl font-bold text-bithumb' : 'text-base font-semibold text-ink-900'
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
    STRATEGIC: 'bg-ink-700 text-cream',
  };
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.22em] font-semibold px-2.5 py-1 rounded-full ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}
