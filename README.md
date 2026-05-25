# bithumb AAP v1.0

**Algorithm Performance Platform** for 빗썸 (Bithumb).

> 자산의 한 축, 디지털도 빗썸에서

## CORE FORMULA

```
INPUT (비-코인 소비자 관심사)
        ×
LENS (빗썸 자산 7개)
        ↓
OUTPUT (빗썸 자연 발견)
```

## 구조

- **10 기회 영토** × **49 소구 기회**
- 합산 broadContext: 약 2.5억회/연 (직접 매칭)
- 자연스러움 ★★★★ 이상 영토만 선별

## 데이터 출처

- ListeningMind · Cluster Finder · Path Finder · Keyword Info
- 검증 일자: 2026.05.25

## 페이지 구조

1. **메인 페이지** (`/`): CORE FORMULA + 10 영토 그리드 + 7 BRAND ASSETS 사이드바
2. **영토 페이지** (`/opportunity/[id]`) × 10: HERO + ASIDE + 소구 기회 카드 리스트
3. **페르소나 페이지** (`/opportunity/[id]/[oppId]`) × 49: 5섹션 (타겟 페르소나 / 데이터 증명 / 소비자 여정 / 빗썸 BRIDGE / NEXT)

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## 개발

```bash
npm install
npm run dev
```

→ http://localhost:3000

## 빌드 + 배포

```bash
npm run build
vercel --prod
```

---

Pentacle × ListeningMind × Claude AI
