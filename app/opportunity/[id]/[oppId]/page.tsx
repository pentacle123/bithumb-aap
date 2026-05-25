import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTerritoryById } from '@/lib/territories';
import {
  getOpportunityById,
  OPPORTUNITIES,
  type Opportunity,
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
    <main className="min-h-screen bg-cream">
      {/* BREADCRUMB */}
      <div className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-3">
          <nav className="text-xs text-ink-500 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-ink-900">
              기회 발견
            </Link>
            <span>›</span>
            <Link href={`/opportunity/${territory.id}`} className="hover:text-ink-900">
              {territory.categoryName}
            </Link>
            <span>›</span>
            <span className="text-ink-900 font-medium line-clamp-1">{opportunity.title}</span>
          </nav>
        </div>
      </div>

      {/* PROGRESS INDICATOR */}
      <div className="border-b border-line bg-cream-2">
        <div className="max-w-[1240px] mx-auto px-6 py-4">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto">
            <StepBadge label="기회 발견" status="done" num="①" />
            <StepLine />
            <StepBadge label="기회 분석" status="active" num="②" />
            <StepLine />
            <StepBadge label="숏폼 전략" status="soon" num="③" />
            <StepLine />
            <StepBadge label="크리에이터 매칭" status="soon" num="④" />
            <StepLine />
            <StepBadge label="발견 적용" status="soon" num="⑤" />
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-10 items-start">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Link
                  href={`/opportunity/${territory.id}`}
                  className="text-[11px] uppercase tracking-[0.22em] text-ink-500 hover:text-bithumb font-semibold"
                >
                  {territory.emoji} {territory.categoryName}
                </Link>
                <TypeBadge type={opportunity.type} />
                <span className="text-[10px] font-mono text-ink-300 uppercase">
                  {opportunity.id}
                </span>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <span className="text-[44px] md:text-[48px] leading-none shrink-0">
                  {opportunity.emoji}
                </span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink-900 text-balance leading-tight">
                  {opportunity.title}
                </h1>
              </div>
              <div className="text-sm text-ink-500 mb-4">{opportunity.who}</div>
              <blockquote className="border-l-2 border-gold pl-5 py-1 text-base md:text-lg text-ink-700 italic text-pretty leading-relaxed">
                "{opportunity.quote}"
              </blockquote>
              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  disabled
                  className="px-5 py-2.5 rounded-full bg-ink-900 text-cream text-sm font-medium opacity-60 cursor-not-allowed inline-flex items-center gap-2"
                >
                  🚀 AI 숏폼 아이디어 생성
                  <span className="text-[10px] uppercase tracking-wider opacity-70">soon</span>
                </button>
                <button
                  disabled
                  className="px-5 py-2.5 rounded-full bg-white border border-line text-sm font-medium text-ink-700 opacity-60 cursor-not-allowed inline-flex items-center gap-2"
                >
                  🎯 크리에이터 매칭
                  <span className="text-[10px] uppercase tracking-wider opacity-70">soon</span>
                </button>
              </div>
            </div>
            {/* RIGHT: STATS */}
            <aside className="rounded-2xl border border-line bg-cream-2 p-6 space-y-4">
              <HeroStatRow label="관심사 풀" value={opportunity.broadContextLabel} highlight />
              <HeroStatRow label="코인 직접 매칭" value={opportunity.cryptoConnectionLabel} />
              <HeroStatRow label="키워드 수" value={`${opportunity.keywordCount}개`} />
              <div className="border-t border-line pt-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
                  WHEN
                </div>
                <p className="text-xs text-ink-700 leading-relaxed">{opportunity.when}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 01: PERSONA */}
      <Section emoji="🎯" eyebrow="01 · 타겟 페르소나" title="WHO · PAIN · NEED · WHEN">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonaCard label="WHO" tone="indigo" field={opportunity.persona.who} />
          <PersonaCard label="PAIN" tone="crimson" field={opportunity.persona.pain} />
          <PersonaCard label="NEED" tone="emerald" field={opportunity.persona.need} />
          <PersonaCard label="WHEN" tone="amber" field={opportunity.persona.when} />
        </div>
      </Section>

      {/* SECTION 02: KEYWORD EVIDENCE */}
      <Section emoji="📊" eyebrow="02 · 데이터 증명" title="KEYWORD EVIDENCE">
        <div className="rounded-2xl border border-line bg-white overflow-hidden">
          <div className="px-5 py-3 border-b border-line bg-cream-2 grid grid-cols-[1.5fr_1fr_1.2fr] gap-4 text-[11px] uppercase tracking-[0.18em] text-ink-500 font-semibold">
            <div>키워드</div>
            <div className="text-right">연 검색량</div>
            <div>증감률</div>
          </div>
          <ul>
            {opportunity.keywords.map((k, i) => (
              <li
                key={i}
                className="px-5 py-4 grid grid-cols-[1.5fr_1fr_1.2fr] gap-4 items-center border-b border-line last:border-b-0"
              >
                <div className="text-sm font-medium text-ink-900">{k.keyword}</div>
                <div className="text-right text-sm font-semibold tabular-nums text-ink-900">
                  {k.volumeLabel}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-cream-2 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-bithumb"
                      style={{ width: `${Math.min(100, (k.volumeAnnual / maxVolume) * 100)}%` }}
                    />
                  </div>
                  <span
                    className={`text-[11px] font-semibold tabular-nums shrink-0 w-12 text-right ${
                      k.trend > 0 ? 'text-bithumb-deep' : k.trend < 0 ? 'text-ink-500' : 'text-ink-700'
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
      </Section>

      {/* SECTION 03: JOURNEY */}
      <Section emoji="🛣️" eyebrow="03 · 소비자 여정" title="JOURNEY">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <JourneyCol label="INCOMING · 유입 경로" items={opportunity.journey.incoming} positive />
          <JourneyCol label="OUTGOING · 이탈 경로" items={opportunity.journey.outgoing} />
        </div>
        <div className="mt-5 rounded-2xl border-2 border-gold bg-gold-50 p-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-2">
            🔍 인식 공백 · THE GAP
          </div>
          <p className="text-base text-ink-900 font-medium text-pretty leading-relaxed">
            {opportunity.journey.gap}
          </p>
        </div>
      </Section>

      {/* SECTION 04: BRAND BRIDGE */}
      <Section emoji="🧬" eyebrow="04 · 빗썸 연결" title="BRAND BRIDGE">
        <div className="rounded-2xl bg-ink-900 text-cream p-7 md:p-9">
          <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb/90 font-semibold mb-3">
            CORE MESSAGE
          </div>
          <p className="text-xl md:text-2xl font-bold tracking-tight text-balance leading-tight">
            {opportunity.bridge.message}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-3">
              활용 자산 · BITHUMB ASSETS
            </div>
            <div className="flex flex-wrap gap-2">
              {bridgeAssets.map((a) => (
                <span
                  key={a!.id}
                  className="inline-flex items-center gap-2 bg-cream-2 px-3 py-1.5 rounded-full text-sm"
                >
                  <span className="text-base">{a!.icon}</span>
                  <span className="font-semibold">{a!.label}</span>
                  <span className="text-ink-500 text-xs">· {a!.sub}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-3">
              연결 상품 · PRODUCTS
            </div>
            <div className="flex flex-wrap gap-2">
              {opportunity.bridge.products.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center bg-bithumb-50 text-bithumb-deep px-3 py-1.5 rounded-full text-sm font-semibold border border-bithumb-100"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 05: NEXT */}
      <Section emoji="🚀" eyebrow="05 · 다음 단계" title="NEXT">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NextCard
            phase="Phase 3"
            icon="🎬"
            title="AI 숏폼 아이디어 생성"
            desc="이 소구 기회로 15-30초 숏폼 콘셉트 자동 생성 — Hook · Build · Reveal · CTA 4구조"
          />
          <NextCard
            phase="Phase 4"
            icon="🎯"
            title="크리에이터 매칭"
            desc="이 페르소나에 어울리는 한국 크리에이터 자동 매칭 — 채널 데이터·시청자 합치도 기반"
          />
        </div>
      </Section>

      {/* FOOTER NAV */}
      <div className="max-w-[1240px] mx-auto px-6 py-12 border-t border-line">
        <Link
          href={`/opportunity/${territory.id}`}
          className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900"
        >
          ← {territory.categoryName} 영토로 돌아가기
        </Link>
      </div>
    </main>
  );
}

// ──────────────────────────────────────────────────────────
// Components
// ──────────────────────────────────────────────────────────

function Section({
  emoji,
  eyebrow,
  title,
  children,
}: {
  emoji: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-10 md:py-12">
      <div className="mb-6 flex items-baseline gap-3 flex-wrap">
        <span className="text-2xl md:text-3xl leading-none">{emoji}</span>
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-bithumb font-semibold">
            {eyebrow}
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-ink-900">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function StepBadge({
  label,
  status,
  num,
}: {
  label: string;
  status: 'done' | 'active' | 'soon';
  num: string;
}) {
  const styles = {
    done: 'bg-white border border-line text-ink-700',
    active: 'bg-ink-900 text-cream',
    soon: 'bg-cream-2 text-ink-300 border border-line',
  };
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 ${styles[status]}`}
    >
      <span className="text-[10px] opacity-70">{num}</span>
      <span>{label}</span>
      {status === 'done' && <span className="text-bithumb">✓</span>}
      {status === 'soon' && (
        <span className="text-[9px] uppercase tracking-wider opacity-60 ml-1">soon</span>
      )}
    </div>
  );
}

function StepLine() {
  return <div className="h-px w-3 md:w-5 bg-line shrink-0" />;
}

function HeroStatRow({
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

function PersonaCard({
  label,
  field,
  tone,
}: {
  label: string;
  field: PersonaField;
  tone: 'indigo' | 'crimson' | 'emerald' | 'amber';
}) {
  const tones = {
    indigo: 'border-l-[#5B6ABF]',
    crimson: 'border-l-[#C4503A]',
    emerald: 'border-l-[#1F8A55]',
    amber: 'border-l-[#C4963A]',
  };
  return (
    <div className={`rounded-2xl border border-line border-l-4 bg-white p-6 ${tones[tone]}`}>
      <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-3">
        {label}
      </div>
      <p className="text-sm md:text-base text-ink-900 font-medium text-pretty leading-relaxed mb-4">
        {field.value}
      </p>
      <div className="pt-3 border-t border-line">
        <div className="text-[9px] uppercase tracking-[0.22em] text-ink-300 font-semibold mb-1">
          DATA EVIDENCE
        </div>
        <p className="text-[11px] text-ink-500 leading-snug">{field.evidence}</p>
      </div>
    </div>
  );
}

function JourneyCol({
  label,
  items,
  positive,
}: {
  label: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <div
        className={`text-[10px] uppercase tracking-[0.22em] font-semibold mb-4 ${
          positive ? 'text-bithumb-deep' : 'text-ink-500'
        }`}
      >
        {label}
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className={`text-sm text-ink-700 pl-4 relative leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-2 before:h-2 before:rounded-full ${
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

function NextCard({
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
    <div className="rounded-2xl border border-line bg-white p-6 md:p-7 relative opacity-90">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-ink-300 font-semibold">
          {phase} · SOON
        </span>
      </div>
      <h3 className="text-lg font-bold tracking-tight text-ink-900 mb-2 text-balance">{title}</h3>
      <p className="text-sm text-ink-500 leading-relaxed text-pretty">{desc}</p>
    </div>
  );
}
