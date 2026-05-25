export type BrandAsset = {
  id: number;
  icon: string;
  label: string;
  sub: string;
  detail: string;
  color: string;
};

export const BRAND_ASSETS: BrandAsset[] = [
  {
    id: 1,
    icon: '🔐',
    label: 'PQC',
    sub: '양자내성암호',
    detail: '양자컴퓨터 시대 보안 표준',
    color: '#5B6ABF',
  },
  {
    id: 2,
    icon: '🤖',
    label: 'AI 검증',
    sub: '이상거래 탐지',
    detail: 'AI 시대의 거래 안전',
    color: '#7C5BBF',
  },
  {
    id: 3,
    icon: '❄️',
    label: 'Cold Wallet',
    sub: '분리 보안',
    detail: '해킹 불가 자산 보관',
    color: '#3A85B7',
  },
  {
    id: 4,
    icon: '🌐',
    label: '24h 무중단',
    sub: '거래 시스템',
    detail: '미장 마감 후도 거래',
    color: '#1F8A55',
  },
  {
    id: 5,
    icon: '🌍',
    label: '글로벌 자산',
    sub: '디지털 달러',
    detail: 'USDT·USDC 게이트웨이',
    color: '#C4503A',
  },
  {
    id: 6,
    icon: '💎',
    label: '자산 다각화',
    sub: 'LENS',
    detail: '주식·채권·금 옆 자산',
    color: '#C4963A',
  },
  {
    id: 7,
    icon: '📈',
    label: '24h 시장',
    sub: '변동성 인사이트',
    detail: '실시간 거시·정책 반응',
    color: '#BF5B7C',
  },
];

export function getBrandAssetById(id: number): BrandAsset | undefined {
  return BRAND_ASSETS.find((a) => a.id === id);
}
