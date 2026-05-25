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
    <main className="min-h-screen bg-cream">
      {/* BREADCRUMB */}
      <div className="border-b border-line bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-3">
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

      {/* GLOBAL 4-STEP PROGRESS — step 2 active here (analysis) */}
      <GlobalProgress active={2} />

      {/* HERO */}
      <section className="border-b border-line bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" aria-hidden />
        <div className="relative max-w-[1240px] mx-auto px-6 py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-10 items-start">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Link
                  href={`/opportunity/${territory.id}`}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-500 hover:text-bithumb font-semibold transition-colors"
                >
                  <span aria-hidden>←</span>
                  <span>{territory.emoji}</span>
                  <span>{territory.categoryName}</span>
                </Link>
                <TypeBadge type={opportunity.type} />
                <span className="text-[10px] font-mono text-ink-300 uppercase">
                  {opportunity.id}
                </span>
              </div>

              <div className="flex items-start gap-5 mb-5">
                <span className="text-[56px] md:text-[68px] leading-none shrink-0">
                  {opportunity.emoji}
                </span>
                <div className="min-w-0">
                  <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold tracking-tight text-ink-900 text-balance leading-[1.15]">
                    {opportunity.title}
                  </h1>
                  <div className="mt-3 text-sm text-ink-500">
                    <span className="font-semibold text-ink-700">WHO ·</span>{' '}
                    {opportunity.who}
                  </div>
                </div>
              </div>

              <blockquote className="border-l-2 border-bithumb pl-5 py-1 text-base md:text-lg text-ink-700 italic text-pretty leading-relaxed">
                "{opportunity.quote}"
              </blockquote>

              {/* CTA — Phase 3/4 placeholders */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  disabled
                  className="px-5 py-2.5 rounded-full bg-bithumb text-white text-sm font-medium opacity-70 cursor-not-allowed inline-flex items-center gap-2 shadow-soft"
                >
                  <span>🎬</span>
                  <span>AI 숏폼 전략 보기</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-80 ml-1">
                    soon
                  </span>
                </button>
                <button
                  disabled
                  className="px-5 py-2.5 rounded-full bg-white border border-line text-sm font-medium text-ink-700 opacity-60 cursor-not-allowed inline-flex items-center gap-2"
                >
                  <span>🤝</span>
                  <span>관심사 크리에이터 매칭</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-70 ml-1">
                    soon
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT: HERO STATS */}
            <aside className="rounded-2xl border border-line bg-cream-3 p-6 space-y-4 shadow-card">
              <HeroStatRow
                label="관심사 풀"
                value={opportunity.broadContextLabel}
                highlight
              />
              <HeroStatRow
                label="코인 직접 매칭"
                value={opportunity.cryptoConnectionLabel}
              />
              <HeroStatRow
                label="키워드 수"
                value={`${opportunity.keywordCount}개`}
              />
              <div className="border-t border-line pt-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-2">
                  WHEN
                </div>
                <div className="rounded-lg bg-white border border-line px-3 py-2.5">
                  <p className="text-xs text-ink-900 font-medium leading-relaxed">
                    {opportunity.when}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 01: PERSONA */}
      <Section
        emoji="🎯"
        eyebrow="01 · 타겟 페르소나"
        title="WHO · PAIN · NEED · WHEN"
        desc="소비자가 누구인지(WHO) · 어떤 페인을 가졌는지(PAIN) · 무엇이 필요한지(NEED) · 언제 만나는지(WHEN)를 ListeningMind 데이터로 분석한 결과입니다."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonaCard
            label="WHO"
            sub="누구인가"
            tone="indigo"
            field={opportunity.persona.who}
          />
          <PersonaCard
            label="PAIN"
            sub="무엇이 불편한가"
            tone="crimson"
            field={opportunity.persona.pain}
          />
          <PersonaCard
            label="NEED"
            sub="무엇을 원하는가"
            tone="emerald"
            field={opportunity.persona.need}
          />
          <PersonaCard
            label="WHEN"
            sub="언제 만나는가"
            tone="amber"
            field={opportunity.persona.when}
          />
        </div>
      </Section>

      {/* SECTION 02: KEYWORD EVIDENCE */}
      <Section
        emoji="📊"
        eyebrow="02 · 데이터 증명"
        title="KEYWORD EVIDENCE"
        desc="소구 기회를 구성하는 검색 키워드의 연 검색량과 트렌드. 검색량 큰 순으로 정렬됨."
      >
        <div className="rounded-2xl border border-line bg-white overflow-hidden shadow-card">
          <div className="px-5 py-3 border-b border-line bg-cream-2 grid grid-cols-[1.5fr_1fr_1.2fr] gap-4 text-[11px] uppercase tracking-[0.18em] text-ink-500 font-semibold">
            <div>키워드</div>
            <div className="text-right">연 검색량</div>
            <div>트렌드</div>
          </div>
          <ul>
            {opportunity.keywords.map((k, i) => (
              <li
                key={i}
                className="px-5 py-4 grid grid-cols-[1.5fr_1fr_1.2fr] gap-4 items-center border-b border-line last:border-b-0 hover:bg-cream-3 transition-colors"
              >
                <div className="text-sm font-medium text-ink-900">{k.keyword}</div>
                <div className="text-right text-sm font-semibold tabular-nums text-ink-900">
                  {k.volumeLabel}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-cream-2 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-bithumb"
                      style={{
                        width: `${Math.min(100, (k.volumeAnnual / maxVolume) * 100)}%`,
                      }}
                    />
                  </div>
                  <span
                    className={`text-[11px] font-semibold tabular-nums shrink-0 w-12 text-right ${
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
      </Section>

      {/* SECTION 03: JOURNEY */}
      <Section
        emoji="🛣️"
        eyebrow="03 · 소비자 여정"
        title="JOURNEY"
        desc="유입(INCOMING) · 이탈(OUTGOING) 검색 경로 분석과 그 사이에 존재하는 인식 공백."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <JourneyCol
            label="INCOMING · 유입 경로"
            items={opportunity.journey.incoming}
            positive
          />
          <JourneyCol
            label="OUTGOING · 이탈 경로"
            items={opportunity.journey.outgoing}
          />
        </div>
        <div className="mt-5 rounded-2xl border-2 border-gold/50 bg-gold-50 p-6 md:p-7 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gold/15 blur-2xl" aria-hidden />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-bold mb-2">
              🔍 인식 공백 · THE GAP
            </div>
            <p className="text-base md:text-lg text-ink-900 font-semibold text-pretty leading-relaxed">
              {opportunity.journey.gap}
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 04: BRAND BRIDGE */}
      <Section
        emoji="🧬"
        eyebrow="04 · 빗썸 연결"
        title="BRAND BRIDGE"
        desc="인식 공백을 빗썸 자산의 차별점으로 자연스럽게 연결하는 핵심 메시지와 활용 자산."
      >
        <div className="rounded-2xl border-2 border-bithumb/40 bg-gradient-to-br from-bithumb-50 via-cream to-cream p-7 md:p-9 shadow-card relative overflow-hidden">
          <span
            className="absolute left-0 top-0 bottom-0 w-1.5 bg-bithumb"
            aria-hidden
          />
          <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-bithumb/10 blur-2xl" aria-hidden />
          <div className="relative pl-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-bithumb-deep font-bold mb-3 flex items-center gap-2">
              <span>+</span>
              <span>CORE MESSAGE</span>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-balance leading-[1.2] text-ink-900">
              {opportunity.bridge.message}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold mb-3">
              활용 자산 · BITHUMB ASSETS
            </div>
            <div className="flex flex-wrap gap-2">
              {bridgeAssets.map((a) => (
                <span
                  key={a!.id}
                  className="inline-flex items-center gap-2 bg-cream-2 px-3 py-1.5 rounded-full text-sm border border-line"
                >
                  <span className="text-base">{a!.icon}</span>
                  <span className="font-semibold">{a!.label}</span>
                  <span className="text-ink-500 text-xs">· {a!.sub}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
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
      <Section
        emoji="🚀"
        eyebrow="05 · 다음 단계"
        title="NEXT · Phase 3 → 4"
        desc="이 페르소나가 받을 다음 두 단계 — 숏폼 콘셉트 생성과 한국 크리에이터 매칭."
      >
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
          className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors"
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

function Section({
  emoji,
  eyebrow,
  title,
  desc,
  children,
}: {
  emoji: string;
  eyebrow: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-10 md:py-12">
      <div className="mb-6 flex items-start gap-4 flex-wrap">
        <span className="text-3xl md:text-4xl leading-none">{emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] uppercase tracking-[0.22em] text-bithumb font-bold">
            {eyebrow}
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-ink-900 mt-0.5">
            {title}
          </h2>
          {desc && (
            <p className="mt-2 text-sm text-ink-500 leading-relaxed max-w-3xl">
              {desc}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
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
          highlight
            ? 'text-2xl md:text-3xl font-bold text-bithumb'
            : 'text-base font-semibold text-ink-900'
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function PersonaCard({
  label,
  sub,
  field,
  tone,
}: {
  label: string;
  sub: string;
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
      className={`rounded-2xl border border-line border-l-4 ${t.border} bg-white p-6 shadow-card`}
    >
      <div className="flex items-baseline gap-2 mb-3">
        <span className={`text-sm font-bold tracking-[0.18em] ${t.text}`}>
          {label}
        </span>
        <span className="text-[10px] text-ink-500">· {sub}</span>
      </div>
      <p className="text-sm md:text-base text-ink-900 font-medium text-pretty leading-relaxed mb-4">
        {field.value}
      </p>
      <div
        className={`pt-3 border-t border-line ${t.tint} -mx-6 -mb-6 px-6 pb-5 rounded-b-2xl`}
      >
        <div className="text-[9px] uppercase tracking-[0.22em] text-ink-500 font-bold mb-1 mt-3">
          DATA EVIDENCE
        </div>
        <p className="text-[11px] text-ink-700 leading-snug">{field.evidence}</p>
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
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <div
        className={`text-[10px] uppercase tracking-[0.22em] font-bold mb-4 ${
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
    <div className="rounded-2xl border border-line bg-white p-6 md:p-7 relative shadow-card hover:shadow-elevated transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-ink-300 font-bold">
          {phase} · SOON
        </span>
      </div>
      <h3 className="text-lg font-bold tracking-tight text-ink-900 mb-2 text-balance">
        {title}
      </h3>
      <p className="text-sm text-ink-500 leading-relaxed text-pretty">{desc}</p>
    </div>
  );
}
