import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTerritoryById } from '@/lib/territories';
import {
  getOpportunityById,
  OPPORTUNITIES,
  type PersonaField,
} from '@/lib/opportunities';
import { getBrandAssetById } from '@/lib/brand-assets';

export function generateStaticParams() {
  return OPPORTUNITIES.map((o) => ({
    id: o.territoryId,
    oppId: o.id,
  }));
}

export default function PersonaPage({
  params,
}: {
  params: { id: string; oppId: string };
}) {
  const territory = getTerritoryById(params.id);
  const opportunity = getOpportunityById(params.oppId);
  if (!territory || !opportunity) notFound();

  const bridgeAssets = opportunity.bridge.assetIds
    .map((id) => getBrandAssetById(id))
    .filter((a) => a !== undefined);

  const maxVolume = Math.max(...opportunity.keywords.map((k) => k.volumeAnnual));

  return (
    <main className="bg-cream">
      {/* BREADCRUMB */}
      <div className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-2.5">
          <nav className="text-xs text-ink-500 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-ink-900">
              기회 발견
            </Link>
            <span>›</span>
            <Link
              href={`/opportunity/${territory.id}`}
              className="hover:text-ink-900"
            >
              {territory.categoryName}
            </Link>
            <span>›</span>
            <span className="text-ink-900 font-medium line-clamp-1">
              {opportunity.title}
            </span>
          </nav>
        </div>
      </div>

      <GlobalProgress active={2} />

      {/* COMPACT HERO */}
      <section className="relative border-b border-line">
        <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1240px] mx-auto px-6 pt-4 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 items-stretch">
            <div className="rounded-2xl border border-line bg-white p-4 shadow-card relative overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-bithumb" aria-hidden />
              <div className="pl-2">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Link
                    href={`/opportunity/${territory.id}`}
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.22em] text-ink-500 hover:text-bithumb font-semibold"
                  >
                    <span aria-hidden>←</span>
                    <span>{territory.emoji}</span>
                    <span>{territory.categoryName}</span>
                  </Link>
                  <TypeBadge type={opportunity.type} />
                  <span className="text-[9px] font-mono text-ink-300 uppercase">
                    {opportunity.id}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[44px] md:text-[52px] leading-none shrink-0">
                    {opportunity.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-xl md:text-2xl lg:text-[26px] font-bold tracking-tight text-ink-900 text-balance leading-[1.15]">
                      {opportunity.title}
                    </h1>
                    <div className="mt-1 text-[12px] text-ink-500">
                      <span className="font-semibold text-ink-700">WHO ·</span>{' '}
                      {opportunity.who}
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-2 border-bithumb pl-3 py-0.5 text-sm md:text-[15px] text-ink-700 italic text-pretty leading-snug">
                  "{opportunity.quote}"
                </blockquote>

                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    disabled
                    className="px-3.5 py-1.5 rounded-full bg-bithumb text-white text-[12px] font-medium opacity-70 cursor-not-allowed inline-flex items-center gap-1.5 shadow-soft"
                  >
                    <span>🎬</span>
                    <span>AI 숏폼 전략 보기</span>
                    <span className="text-[9px] uppercase tracking-wider opacity-80">soon</span>
                  </button>
                  <button
                    disabled
                    className="px-3.5 py-1.5 rounded-full bg-white border border-line text-[12px] font-medium text-ink-700 opacity-70 cursor-not-allowed inline-flex items-center gap-1.5"
                  >
                    <span>🤝</span>
                    <span>크리에이터 매칭</span>
                    <span className="text-[9px] uppercase tracking-wider opacity-80">soon</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT — hero stats compact */}
            <aside className="rounded-2xl border border-line bg-white p-4 shadow-card flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-1.5">
                <CompactStat
                  label="관심사 풀"
                  value={opportunity.broadContextLabel}
                  tone="bithumb"
                />
                <CompactStat
                  label="코인 매칭"
                  value={opportunity.cryptoConnectionLabel}
                />
                <CompactStat
                  label="키워드"
                  value={`${opportunity.keywordCount}개`}
                />
              </div>
              <div className="rounded-lg bg-cream-3 border border-line px-3 py-2 flex-1">
                <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-bold mb-0.5">
                  WHEN
                </div>
                <p className="text-[11px] text-ink-900 font-medium leading-snug">
                  {opportunity.when}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* DASHBOARD 5 SECTIONS — densified */}
      <section className="max-w-[1240px] mx-auto px-6 py-4 md:py-5 space-y-4">
        {/* Row 1 — 01 Persona (4 small cards) */}
        <DashboardBlock
          eyebrow="01 · 타겟 페르소나"
          title="WHO · PAIN · NEED · WHEN"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            <PersonaMiniCard
              label="WHO"
              tone="indigo"
              field={opportunity.persona.who}
            />
            <PersonaMiniCard
              label="PAIN"
              tone="crimson"
              field={opportunity.persona.pain}
            />
            <PersonaMiniCard
              label="NEED"
              tone="emerald"
              field={opportunity.persona.need}
            />
            <PersonaMiniCard
              label="WHEN"
              tone="amber"
              field={opportunity.persona.when}
            />
          </div>
        </DashboardBlock>

        {/* Row 2 — 02 Keywords + 03 Journey side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DashboardBlock
            eyebrow="02 · 데이터 증명"
            title="KEYWORD EVIDENCE"
          >
            <div className="rounded-xl border border-line bg-white overflow-hidden">
              <div className="px-3 py-1.5 border-b border-line bg-cream-2 grid grid-cols-[1.5fr_0.9fr_1fr] gap-2 text-[10px] uppercase tracking-[0.18em] text-ink-500 font-semibold">
                <div>키워드</div>
                <div className="text-right">연 검색량</div>
                <div>트렌드</div>
              </div>
              <ul>
                {opportunity.keywords.slice(0, 5).map((k, i) => (
                  <li
                    key={i}
                    className="px-3 py-1.5 grid grid-cols-[1.5fr_0.9fr_1fr] gap-2 items-center border-b border-line-soft last:border-b-0"
                  >
                    <div className="text-[12px] font-medium text-ink-900 truncate">
                      {k.keyword}
                    </div>
                    <div className="text-right text-[12px] font-semibold tabular-nums text-ink-900">
                      {k.volumeLabel}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 h-1 rounded-full bg-cream-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-bithumb"
                          style={{
                            width: `${Math.min(100, (k.volumeAnnual / maxVolume) * 100)}%`,
                          }}
                        />
                      </div>
                      <span
                        className={`text-[10px] font-semibold tabular-nums shrink-0 w-10 text-right ${
                          k.trend > 0
                            ? 'text-bithumb-deep'
                            : k.trend < 0
                            ? 'text-accent-blue'
                            : 'text-ink-700'
                        }`}
                      >
                        {k.trend > 0 ? '+' : ''}
                        {k.trend}%
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </DashboardBlock>

          <DashboardBlock
            eyebrow="03 · 소비자 여정"
            title="JOURNEY · INCOMING / OUTGOING"
          >
            <div className="grid grid-cols-2 gap-2 mb-2">
              <MiniJourneyCol
                label="INCOMING"
                items={opportunity.journey.incoming}
                positive
              />
              <MiniJourneyCol
                label="OUTGOING"
                items={opportunity.journey.outgoing}
              />
            </div>
            <div className="rounded-lg border border-gold/40 bg-gold-50 px-3 py-2">
              <div className="text-[9px] uppercase tracking-[0.22em] text-gold-deep font-bold mb-0.5">
                🔍 인식 공백 · THE GAP
              </div>
              <p className="text-[12px] text-ink-900 font-semibold leading-snug">
                {opportunity.journey.gap}
              </p>
            </div>
          </DashboardBlock>
        </div>

        {/* Row 3 — 04 Bridge + 05 Next */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
          <DashboardBlock
            eyebrow="04 · 빗썸 연결"
            title="BRAND BRIDGE"
          >
            <div className="rounded-xl border-2 border-bithumb/40 bg-gradient-to-br from-bithumb-50 via-cream to-cream p-4 shadow-card relative overflow-hidden mb-2">
              <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-bithumb" aria-hidden />
              <div className="pl-2">
                <div className="text-[9px] uppercase tracking-[0.22em] text-bithumb-deep font-bold mb-1.5">
                  + CORE MESSAGE
                </div>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-balance text-ink-900">
                  {opportunity.bridge.message}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="rounded-lg border border-line bg-white px-3 py-2">
                <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-bold mb-1.5">
                  활용 자산
                </div>
                <div className="flex flex-wrap gap-1">
                  {bridgeAssets.map((a) => (
                    <span
                      key={a!.id}
                      className="inline-flex items-center gap-1 bg-cream-2 px-2 py-0.5 rounded-full text-[11px] border border-line"
                    >
                      <span className="text-xs leading-none">{a!.icon}</span>
                      <span className="font-semibold">{a!.label}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-line bg-white px-3 py-2">
                <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-bold mb-1.5">
                  연결 상품
                </div>
                <div className="flex flex-wrap gap-1">
                  {opportunity.bridge.products.map((p, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center bg-bithumb-50 border border-bithumb-100 text-bithumb-deep px-2 py-0.5 rounded-full text-[11px] font-semibold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DashboardBlock>

          <DashboardBlock eyebrow="05 · 다음 단계" title="NEXT · Phase 3 → 4">
            <div className="grid grid-cols-1 gap-2">
              <MiniNextCard
                phase="Phase 3"
                icon="🎬"
                title="AI 숏폼 아이디어"
                desc="이 소구 기회로 15-30초 숏폼 콘셉트 자동 생성"
              />
              <MiniNextCard
                phase="Phase 4"
                icon="🎯"
                title="크리에이터 매칭"
                desc="이 페르소나에 어울리는 한국 크리에이터 자동 매칭"
              />
            </div>
          </DashboardBlock>
        </div>

        {/* FOOTER NAV */}
        <div className="pt-2">
          <Link
            href={`/opportunity/${territory.id}`}
            className="inline-flex items-center gap-1.5 text-xs text-ink-500 hover:text-ink-900 transition-colors"
          >
            ← {territory.categoryName} 영토로 돌아가기
          </Link>
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

function DashboardBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-2 flex-wrap">
        <span className="text-[10px] uppercase tracking-[0.22em] text-bithumb font-bold">
          {eyebrow}
        </span>
        <span className="text-ink-300">·</span>
        <span className="text-sm font-bold tracking-tight text-ink-900">{title}</span>
      </div>
      {children}
    </div>
  );
}

function CompactStat({
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
    <div className={`rounded-lg border ${toneStyles} px-2 py-1.5`}>
      <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-semibold leading-none">
        {label}
      </div>
      <div
        className={`text-sm font-bold tabular-nums leading-tight mt-1 ${
          tone === 'bithumb' ? 'text-bithumb-deep' : 'text-ink-900'
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function PersonaMiniCard({
  label,
  field,
  tone,
}: {
  label: string;
  field: PersonaField;
  tone: 'indigo' | 'crimson' | 'emerald' | 'amber';
}) {
  const tones = {
    indigo: {
      border: 'border-l-accent-blue',
      tint: 'bg-accent-blue-light',
      text: 'text-accent-blue',
    },
    crimson: {
      border: 'border-l-accent-coral',
      tint: 'bg-accent-coral-light',
      text: 'text-accent-coral',
    },
    emerald: {
      border: 'border-l-accent-mint',
      tint: 'bg-accent-mint-light',
      text: 'text-accent-mint',
    },
    amber: {
      border: 'border-l-gold',
      tint: 'bg-gold-50',
      text: 'text-gold-deep',
    },
  } as const;
  const t = tones[tone];
  return (
    <div
      className={`rounded-xl border border-line border-l-4 ${t.border} bg-white p-3 shadow-card`}
    >
      <div className={`text-[10px] font-bold tracking-[0.18em] ${t.text} mb-1.5`}>
        {label}
      </div>
      <p className="text-[12px] text-ink-900 font-medium leading-snug mb-2 line-clamp-3">
        {field.value}
      </p>
      <div className={`-mx-3 -mb-3 px-3 py-1.5 ${t.tint} rounded-b-xl border-t border-line-soft`}>
        <div className="text-[8px] uppercase tracking-[0.22em] text-ink-500 font-bold">
          EVIDENCE
        </div>
        <p className="text-[10px] text-ink-700 leading-snug line-clamp-1">
          {field.evidence}
        </p>
      </div>
    </div>
  );
}

function MiniJourneyCol({
  label,
  items,
  positive,
}: {
  label: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <div className="rounded-lg border border-line bg-white px-3 py-2">
      <div
        className={`text-[9px] uppercase tracking-[0.22em] font-bold mb-1.5 ${
          positive ? 'text-bithumb-deep' : 'text-ink-500'
        }`}
      >
        {label}
      </div>
      <ul className="space-y-1">
        {items.slice(0, 3).map((item, i) => (
          <li
            key={i}
            className={`text-[11px] text-ink-700 pl-3 relative leading-snug line-clamp-1 before:content-[''] before:absolute before:left-0 before:top-[0.45em] before:w-1.5 before:h-1.5 before:rounded-full ${
              positive ? 'before:bg-bithumb' : 'before:bg-ink-300'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniNextCard({
  phase,
  icon,
  title,
  desc,
}: {
  phase: string;
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border border-line bg-white px-3 py-2.5 flex items-start gap-2">
      <span className="text-xl leading-none shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between mb-0.5">
          <h3 className="text-[12px] font-bold tracking-tight text-ink-900">
            {title}
          </h3>
          <span className="text-[8px] uppercase tracking-[0.22em] text-ink-300 font-bold shrink-0 ml-2">
            {phase} · SOON
          </span>
        </div>
        <p className="text-[10px] text-ink-500 leading-snug line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
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
