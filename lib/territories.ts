export type Tier = 'MEGA' | 'LARGE' | 'STRATEGIC';

export type Territory = {
  id: string; // URL slug
  emoji: string;
  categoryName: string;
  tier: Tier;
  themeColor: string;
  broadContextLabel: string;
  broadContextValue: number;
  cryptoConnection: number;
  coreHypothesis: string;
  blackBoxContext: string;
  recognitionGap: string;
  coreAssetIds: number[];
  relatedProducts: string[];
  naturalness: 4 | 5;
  subOpportunityCount: number;
};

export const TERRITORIES: Territory[] = [
  {
    id: 'ai-automation',
    emoji: '🤖',
    categoryName: 'AI 일상·자동화',
    tier: 'MEGA',
    themeColor: '#7C5BBF',
    broadContextLabel: '1.05억회',
    broadContextValue: 105000000,
    cryptoConnection: 53988,
    coreHypothesis: '클로드한테 코인 포트폴리오 짜달라고 시켜본 결과 — 자동화 시대의 자산',
    blackBoxContext:
      'AI 투자 검색자는 이미 "클로드 자동매매·클로드 주식 자동매매·AI 코인 분석" 직접 인텐트를 가지고 있다. Claude/GPT 사용자가 이미 자동매매 시도 중. ChatGPT 9,394만회/연 + 클로드 1,042만회/연 시청자 풀.',
    recognitionGap: 'AI 시대의 자산 자동화 — 코인 분야 콘텐츠 부족',
    coreAssetIds: [2, 6],
    relatedProducts: ['비트코인', '이더리움'],
    naturalness: 5,
    subOpportunityCount: 3,
  },
  {
    id: 'us-stocks',
    emoji: '📊',
    categoryName: '미국 주식·글로벌 투자',
    tier: 'MEGA',
    themeColor: '#1F8A55',
    broadContextLabel: '1.18억회',
    broadContextValue: 118000000,
    cryptoConnection: 32256,
    coreHypothesis: '테슬라 보는 사람의 다음 검색이 이미 코인 투자 조언이다 — 빗썸을 자연스럽게 그 자리에',
    blackBoxContext:
      '미국 주식 검색자의 검색 행동에 이미 코인 인접 패턴이 형성. Cluster 2가 "테슬라 → 캐시우드 → 코인 투자 조언 → 업비트 → 직장인 코인"을 한 클러스터로 묶고 있다. 테슬라 2,664만회/연 + 엔비디아 1,148만회/연 + 나스닥 2,123만회/연.',
    recognitionGap: '한국 장 마감 후~미장 개장 사이 자산 갈 곳 없음',
    coreAssetIds: [7, 5, 6],
    relatedProducts: ['비트코인', '이더리움', 'USDT'],
    naturalness: 5,
    subOpportunityCount: 6,
  },
  {
    id: 'trump-policy',
    emoji: '🇺🇸',
    categoryName: '트럼프·미국 정책·시사',
    tier: 'MEGA',
    themeColor: '#C4503A',
    broadContextLabel: '1,360만회',
    broadContextValue: 13600000,
    cryptoConnection: 1820000,
    coreHypothesis: '트럼프 발언 한 마디 → 4 자산 24h 흐름이 빗썸 24h 시장 데이터의 진짜 가치',
    blackBoxContext:
      '트럼프 시청자는 이미 지정학·정책 → 자산 영향 마인드셋. "이스라엘-이란 주식·미국 방산주 전망·미국 이란 전쟁 경제적 영향"이 같은 검색 클러스터에 존재. 오피셜 트럼프 코인 137만회/연 직접 매칭.',
    recognitionGap: '정치 발언과 4 자산 동시 흐름 한눈에 보기 어려움',
    coreAssetIds: [6, 7, 5],
    relatedProducts: ['비트코인', 'USDT', '오피셜 트럼프 코인'],
    naturalness: 5,
    subOpportunityCount: 6,
  },
  {
    id: 'salaryman-finance',
    emoji: '💼',
    categoryName: '직장인 재테크·자산 다각화',
    tier: 'MEGA',
    themeColor: '#5B6ABF',
    broadContextLabel: '500만회',
    broadContextValue: 5000000,
    cryptoConnection: 50000,
    coreHypothesis: '1,000만원으로 1억 만들기의 5번째 옵션 — 사회초년생 자산관리 디시는 이미 코인을 본다',
    blackBoxContext:
      '"사회초년생 자산관리 디시" 클러스터에 "테슬라 코인 디시·비트코인 숏 etf 디시" 직접 존재. "1000만원 굴리기·2030 투자" 인텐트와 코인이 같은 자리. 연말정산 환급 27만회/연 + 청년도약 30만회/연.',
    recognitionGap: '자산 형성 단계별 코인 비중 가이드 부재',
    coreAssetIds: [6],
    relatedProducts: ['비트코인', '이더리움', 'USDT'],
    naturalness: 5,
    subOpportunityCount: 5,
  },
  {
    id: 'etf-pension',
    emoji: '📈',
    categoryName: 'ETF·연금·장기 투자',
    tier: 'LARGE',
    themeColor: '#1F8A55',
    broadContextLabel: '350만회',
    broadContextValue: 3500000,
    cryptoConnection: 372000,
    coreHypothesis: 'ISA·IRP·연금 다 채운 사람의 마지막 5%, 빗썸이 답',
    blackBoxContext:
      'ISA 검색자는 "isa 계좌 채우기·2,000만원 이상 입금·1억·8,000만원·퇴직연금 isa·미국 국채" 인텐트. 한도 초과 후 다음 자산 고민이 명확한 인식 공백. ISA 100만회/연 + 연금저축 50만 + 퇴직연금 80만.',
    recognitionGap: '절세 계좌 한도 초과 후 갈 곳',
    coreAssetIds: [6],
    relatedProducts: ['비트코인', '이더리움'],
    naturalness: 5,
    subOpportunityCount: 6,
  },
  {
    id: 'quantum-science',
    emoji: '🔬',
    categoryName: '과학·양자 시대',
    tier: 'LARGE',
    themeColor: '#5B6ABF',
    broadContextLabel: '290만회',
    broadContextValue: 2900000,
    cryptoConnection: 38316,
    coreHypothesis: '양자컴이 비트코인 해킹할까? 빗썸이 가장 먼저 준비한 PQC의 답',
    blackBoxContext:
      '양자컴퓨터 검색자는 "양자컴퓨터와 비트코인 관계·양자컴퓨터 코인·블록체인 양자 컴퓨터" 직접 인텐트. 양자컴 관련주 시청자 = 관련주 투자자 마인드셋. 양자 컴퓨터 132만 + 양자컴 78만 + 양자컴퓨터 관련주 47만.',
    recognitionGap: '양자컴이 코인을 해킹한다 vs 거래소가 이미 준비했다 인식',
    coreAssetIds: [1, 3],
    relatedProducts: ['비트코인', '이더리움'],
    naturalness: 5,
    subOpportunityCount: 3,
  },
  {
    id: 'gold-assets',
    emoji: '🥇',
    categoryName: '금·원자재·자산 다각화',
    tier: 'LARGE',
    themeColor: '#C4963A',
    broadContextLabel: '270만회',
    broadContextValue: 2700000,
    cryptoConnection: 16140,
    coreHypothesis: '금 1돈 산 사람의 다각화 — 5,000년 자산 옆에 15년 자산 한 자리',
    blackBoxContext:
      '단순 금시세 매매자(1.89억회/연) 제외. "주식 채권 금 포트폴리오·KRX 금현물·금 ETF·토스 금 투자" 시각자만 진입 — 이들은 자산 다각화·재테크·자산 배분 마인드셋. KRX 금현물 105만 + 금 ETF 86만 + 금 투자 41만.',
    recognitionGap: '안전 자산 다각화 = 금만 vs 금+디지털 자산 인식 분기',
    coreAssetIds: [6, 5],
    relatedProducts: ['비트코인', '이더리움'],
    naturalness: 5,
    subOpportunityCount: 6,
  },
  {
    id: 'stablecoin',
    emoji: '💵',
    categoryName: '스테이블코인·디지털 달러',
    tier: 'LARGE',
    themeColor: '#3A85B7',
    broadContextLabel: '120만회',
    broadContextValue: 1200000,
    cryptoConnection: 1200000,
    coreHypothesis: '한국 스테이블코인 5강 + 빗썸 — GENIUS Act 한국판',
    blackBoxContext:
      '스테이블코인 영토는 broadContext = cryptoConnection 직접 매칭 영토. "카카오뱅크 스테이블코인 12,192/연, USDT 이자 +492%, 원화 스테이블 법안 +179%" 폭발 인텐트. USDT 81만 + 원화 스테이블 22만 + USDC 10만.',
    recognitionGap: '스테이블 = 코인 vs 스테이블 = 디지털 달러 인식 분기점',
    coreAssetIds: [5, 4],
    relatedProducts: ['USDT', 'USDC', 'KRWB(원화 스테이블)'],
    naturalness: 5,
    subOpportunityCount: 5,
  },
  {
    id: 'global-remittance',
    emoji: '✈️',
    categoryName: '글로벌 송금·환전',
    tier: 'STRATEGIC',
    themeColor: '#C4503A',
    broadContextLabel: '60만회',
    broadContextValue: 600000,
    cryptoConnection: 12192,
    coreHypothesis: '한패스 +637% 폭증의 다음 — 카카오뱅크 스테이블코인이 가는 길',
    blackBoxContext:
      '"한패스·와이즈·모인·디벙크·utransfer" 핀테크 송금자 시청자 = 글로벌 자산 이동 마인드셋. 카카오뱅크 스테이블코인 12,192/연이 다음 단계 시그널. 한패스 49만(+637%) + 와이즈 29만 + 모인 8.2만.',
    recognitionGap: '핀테크 송금 vs 스테이블코인 차이 인식 부재',
    coreAssetIds: [5, 4],
    relatedProducts: ['USDT', 'USDC', '이더리움'],
    naturalness: 4,
    subOpportunityCount: 5,
  },
  {
    id: 'next-gen-asset',
    emoji: '👶',
    categoryName: '다음 세대·자녀 자산',
    tier: 'STRATEGIC',
    themeColor: '#BF5B7C',
    broadContextLabel: '8만회',
    broadContextValue: 80000,
    cryptoConnection: 4300,
    coreHypothesis: '신생아 적립식 증여의 다음 옵션 — ETF 증여 옆에 디지털 자산 5%',
    blackBoxContext:
      '단순 증여세 계산자 제외. "자녀 주식 계좌(44.6k)·자녀 주식 증여·ETF 증여 +194%·자녀 미국 주식 증여·신생아 주식 증여" 시각자만 진입. 자산 형성 인텐트가 명확. 자녀 주식 계좌 4.5만 + 자녀 주식 증여 1.8만.',
    recognitionGap: '자녀 자산 = 주식·예금 only vs 디지털 자산 5% 인식',
    coreAssetIds: [6, 5],
    relatedProducts: ['비트코인', '이더리움'],
    naturalness: 5,
    subOpportunityCount: 4,
  },
];

export function getTerritoryById(id: string): Territory | undefined {
  return TERRITORIES.find((t) => t.id === id);
}

export const PLATFORM_STATS = {
  territoryCount: 10,
  opportunityCount: 49,
  totalBroadContextLabel: '약 2.5억회/연',
  totalBroadContextValue: 250000000,
  dataSource: 'ListeningMind · Cluster Finder · Path Finder · Keyword Info',
  dataConfirmDate: '2026.05.25',
};
