# Claude Code Desktop 작업 지시문 — 빗썸 AAP v1.0 빌드 & 배포

> 이 문서를 Claude Code Desktop에 붙여넣고 "이 지시문대로 실행해줘"라고 말하면 자동으로 진행합니다.

---

## 프로젝트 정보

- **이름**: bithumb AAP v1.0 (Algorithm Performance Platform)
- **클라이언트**: 빗썸 (Bithumb)
- **메시지**: 자산의 한 축, 디지털도 빗썸에서
- **구조**: 10 기회 영토 × 49 소구 기회 × 5섹션 페르소나
- **벤치마크**: cepolab-aap-v2.vercel.app
- **저작자**: Pentacle × ListeningMind × Claude AI
- **GitHub 사용자**: pentacle123
- **타겟 GitHub 리포**: pentacle123/bithumb-aap
- **타겟 배포 URL**: bithumb-aap.vercel.app

---

## 사전 준비 (Danny가 1회만 확인)

다음이 설치돼 있는지 터미널에서 확인:

```bash
node --version    # 18 이상
gh --version      # GitHub CLI
vercel --version  # Vercel CLI
```

설치 안 됐으면:
- Node.js: https://nodejs.org/ (LTS)
- GitHub CLI: `brew install gh` (macOS) / `winget install --id GitHub.cli` (Windows)
- Vercel CLI: `npm install -g vercel`

로그인 (1회만):
```bash
gh auth login    # 브라우저로 GitHub 인증
vercel login     # 이메일로 Vercel 인증
```

---

## Claude Code Desktop 실행 지시

**아래 명령을 순서대로 정확히 실행해줘.** 각 단계마다 결과를 확인하고, 에러 발생 시 멈춰서 어떤 에러인지 알려줘.

---

### STEP 1 · 작업 폴더 확인

데스크탑의 `bithumb-aap` 폴더로 이동:

```bash
cd ~/Desktop/bithumb-aap
ls -la
```

다음 파일·폴더가 존재해야 함:
- `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `postcss.config.js`, `.gitignore`, `README.md`
- `app/` (layout.tsx, page.tsx, globals.css, opportunity/[id]/page.tsx, opportunity/[id]/[oppId]/page.tsx)
- `lib/` (brand-assets.ts, territories.ts, opportunities.ts)
- `CLAUDE_CODE_INSTRUCTIONS.md` (이 파일)

**없으면**: Claude.ai에서 받은 ZIP 파일이 데스크탑 `bithumb-aap` 폴더에 풀려 있는지 확인.

---

### STEP 2 · 의존성 설치

```bash
npm install
```

성공 메시지 확인 (200개 이상의 패키지 설치, 0 vulnerabilities 권장).

---

### STEP 3 · 로컬 빌드 검증

```bash
npm run build
```

기대 결과:
- ✓ Compiled successfully
- 모든 페이지가 정적 생성됨: `/`, `/opportunity/[id]` × 10, `/opportunity/[id]/[oppId]` × 49
- 총 60개 라우트가 생성됨

**에러가 나면**: 어떤 페이지에서 어떤 에러인지 알려줘. 보통 TypeScript 타입 에러나 import 경로 문제임.

---

### STEP 4 · 로컬 프리뷰 (옵션)

```bash
npm run dev
```

→ http://localhost:3000 열기. 확인 항목:
- 메인 페이지: CORE FORMULA + 10 영토 카드 + 7 BRAND ASSETS 사이드바
- 영토 클릭 → HERO + ASIDE + 소구 기회 카드 리스트
- 소구 기회 클릭 → 5섹션 페르소나 페이지

확인 후 `Ctrl+C`로 dev 서버 종료.

---

### STEP 5 · Git 초기화 + 첫 커밋

```bash
git init
git add .
git commit -m "feat: bithumb AAP v1.0 initial — 10 territories × 49 opportunities"
```

---

### STEP 6 · GitHub 리포 생성 + 푸시

```bash
gh repo create pentacle123/bithumb-aap --public --source=. --remote=origin --push
```

이 명령 한 줄이 GitHub에 public 리포 생성 + 원격 등록 + 최초 푸시까지 처리.

**성공 시**: https://github.com/pentacle123/bithumb-aap 접근 가능.

---

### STEP 7 · Vercel 프로젝트 연결 + 배포

```bash
vercel link
```

질문에 답하기:
- Set up "~/Desktop/bithumb-aap"? **Y**
- Which scope? **pentacle123** (또는 Danny의 Vercel team)
- Link to existing project? **N**
- Project name? **bithumb-aap** (또는 엔터로 기본값)
- In which directory is your code located? **./**

연결 후 프로덕션 배포:

```bash
vercel --prod
```

배포 완료 후 출력되는 URL을 알려줘 (예: `https://bithumb-aap-xxx.vercel.app` 또는 `https://bithumb-aap.vercel.app`).

---

### STEP 8 · 라이브 검증 체크리스트

라이브 URL 열고 다음 모두 확인:

#### 메인 페이지 (`/`)
- [ ] 헤더 "bithumbAAP v1.0" 표시, 네비 4단계 (① 기회 발견 active / ② 숏폼 전략 soon / ③ 크리에이터 매칭 soon)
- [ ] HERO 좌측: "자산의 한 축, 디지털도 빗썸에서" + CORE FORMULA 박스 + 통계 3개 (10 영토 / 49 소구 / 약 2.5억회/연)
- [ ] HERO 우측: 검은 박스 안에 7 BRAND ASSETS (PQC · AI 검증 · Cold Wallet · 24h 무중단 · 글로벌 자산 · 자산 다각화 · 24h 시장)
- [ ] 10 영토 그리드: 이모지 + MEGA/LARGE/STRATEGIC 배지 + 카테고리명 + 관심사 풀 + 소구 수
- [ ] 영토 카드 호버 시 살짝 떠오름

#### 영토 페이지 (각각 10개 확인)
경로: `/opportunity/ai-automation`, `/opportunity/us-stocks`, `/opportunity/trump-policy`, `/opportunity/salaryman-finance`, `/opportunity/etf-pension`, `/opportunity/quantum-science`, `/opportunity/gold-assets`, `/opportunity/stablecoin`, `/opportunity/global-remittance`, `/opportunity/next-gen-asset`

- [ ] Breadcrumb (기회 발견 › 영토명)
- [ ] HERO 좌측: 이모지 + Tier 배지 + 카테고리명 + 핵심 가설 인용구 + 검은 박스 (Cluster Finder · 발견 맥락)
- [ ] HERO 우측 ASIDE: 관심사 풀 / 자연스러움 / 소구 기회 수 / 인식 공백 / 핵심 자산 / 연결 상품
- [ ] 소구 기회 카드 리스트 (각 영토별 3-6개)

#### 페르소나 페이지 (49개 — 샘플 5개만 확인)
샘플 경로:
- `/opportunity/us-stocks/us-1` (새벽 미장 체크)
- `/opportunity/trump-policy/trump-6` (오피셜 트럼프 코인)
- `/opportunity/etf-pension/etf-1` (ISA 다 채운 사람)
- `/opportunity/stablecoin/stable-2` (USDT 이자 +492%)
- `/opportunity/quantum-science/quantum-1` (양자컴×비트코인)

각각 다음 5섹션이 있어야 함:
- [ ] Breadcrumb 3단 + 5단계 진행 인디케이터 (기회 발견 ✓ / 기회 분석 active / 숏폼 전략 soon / 크리에이터 매칭 soon / 발견 적용 soon)
- [ ] HERO: 영토 링크 + Type A/B 배지 + ID + 이모지 + 제목 + WHO + 인용구 + CTA 2개 (모두 disabled)
- [ ] HERO 우측 ASIDE: 관심사 풀 / 코인 직접 매칭 / 키워드 수 / WHEN
- [ ] **01 타겟 페르소나**: WHO / PAIN / NEED / WHEN 4카드 (좌측 색 띠 + value + DATA EVIDENCE)
- [ ] **02 KEYWORD EVIDENCE**: 키워드 표 (키워드 / 연 검색량 / 막대그래프 + 트렌드%)
- [ ] **03 JOURNEY**: INCOMING + OUTGOING 2열 + 🔍 인식 공백 골드 박스
- [ ] **04 BRAND BRIDGE**: 검은 박스 CORE MESSAGE + 활용 자산 배지 + 연결 상품 배지
- [ ] **05 NEXT**: AI 숏폼 카드 (Phase 3 soon) + 크리에이터 매칭 카드 (Phase 4 soon)

---

## 에러 발생 시 대응

### 빌드 에러 (`npm run build`)
- **TypeScript 타입 에러**: 어떤 파일의 어느 줄인지 알려줘. 보통 `lib/opportunities.ts`의 type mismatch.
- **Module not found**: import 경로 (`@/lib/...`) 가 `tsconfig.json` 의 `paths` 설정과 맞는지 확인.

### Tailwind 스타일이 안 나옴
- `tailwind.config.ts` 의 `content` 배열에 `./app/**/*.{tsx,ts}` 가 있는지 확인.
- `app/globals.css` 에 `@tailwind base/components/utilities` 3줄이 있는지 확인.

### Vercel 배포 실패
- 빌드 로그에서 에러 메시지 확인.
- 로컬 `npm run build` 가 성공하는지 먼저 확인.
- Next.js 14 + Node 18+ 환경인지 확인 (Vercel 기본값).

### `generateStaticParams` 관련 에러
- `app/opportunity/[id]/page.tsx` 와 `app/opportunity/[id]/[oppId]/page.tsx` 둘 다 `generateStaticParams` export 있어야 함 (이미 코드에 포함).

---

## 완료 보고

모든 STEP이 통과되면 Danny에게 다음을 알려줘:

1. **GitHub URL**: https://github.com/pentacle123/bithumb-aap
2. **라이브 URL**: https://bithumb-aap.vercel.app (또는 vercel이 발급한 URL)
3. **라우트 수**: 메인 1 + 영토 10 + 페르소나 49 = **총 60 페이지**
4. **검증 통과 항목 요약**: 메인 / 영토 / 페르소나 5섹션 모두 정상 렌더

---

## 부록 · 디자인 토큰 (참고용)

배포 후 디자인 수정 필요 시:

- **CSS 변수**: `tailwind.config.ts` 의 `colors` 객체
  - `cream` `#FAF7F0`, `cream-2` `#F2EDDF`, `line` `#E8E4DA`
  - `ink` 4단계 (300/500/700/900)
  - `bithumb` warm orange (default `#F7951D`, deep `#E07207`)
  - `gold` (default `#C49A3A`, deep `#9B7825`)
- **최대 너비**: `max-w-[1240px]`
- **그림자**: `shadow-card`, `shadow-elevated`
- **폰트**: Pretendard (시스템 폰트로 폴백)

수정 후 `git add . && git commit -m "..." && git push` → Vercel 자동 재배포.

---

## 데이터 수정 가이드

### 소구 기회 추가/수정
파일: `lib/opportunities.ts`

타입 구조:
```typescript
{
  id, territoryId, emoji, title, who, quote,
  broadContext, broadContextLabel, cryptoConnection, cryptoConnectionLabel,
  when, keywordCount, type: 'A' | 'B', tier,
  persona: { who, pain, need, when (각각 {value, evidence}) },
  keywords: [{ keyword, volumeAnnual, volumeLabel, trend }],
  journey: { incoming[], outgoing[], gap },
  bridge: { message, assetIds[], products[] },
}
```

### 영토 메타데이터 수정
파일: `lib/territories.ts`

### 7 BRAND ASSETS 수정
파일: `lib/brand-assets.ts`

---

작업 완료 후 Danny의 다음 단계:
- **Phase 3**: AI 숏폼 아이디어 생성 모듈 (ListeningMind 데이터 → Claude API → 숏폼 스토리보드)
- **Phase 4**: 크리에이터 매칭 모듈 (YouTube API + 페르소나 매칭)

— Pentacle × ListeningMind × Claude AI · 2026.05
