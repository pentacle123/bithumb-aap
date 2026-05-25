export type OpportunityType = 'A' | 'B';

export type PersonaField = {
  value: string;
  evidence: string;
};

export type KeywordRow = {
  keyword: string;
  volumeAnnual: number;
  volumeLabel: string;
  trend: number; // percentage, can be negative
};

export type Journey = {
  incoming: string[];
  outgoing: string[];
  gap: string;
};

export type BrandBridge = {
  message: string;
  assetIds: number[];
  products: string[];
};

export type Opportunity = {
  id: string;
  territoryId: string;
  emoji: string;
  title: string;
  who: string; // hero short who
  quote: string;
  broadContext: number;
  broadContextLabel: string;
  cryptoConnection: number;
  cryptoConnectionLabel: string;
  when: string;
  keywordCount: number;
  type: OpportunityType;
  tier: 'MEGA' | 'LARGE' | 'STRATEGIC';
  persona: {
    who: PersonaField;
    pain: PersonaField;
    need: PersonaField;
    when: PersonaField;
  };
  keywords: KeywordRow[];
  journey: Journey;
  bridge: BrandBridge;
};

export const OPPORTUNITIES: Opportunity[] = [
  // ============================================================
  // 영토 02 — AI 일상·자동화 (3개)
  // ============================================================
  {
    id: 'ai-1',
    territoryId: 'ai-automation',
    emoji: '🧠',
    title: 'AI에게 자산 분석 시켜봤다',
    who: 'ChatGPT/클로드 일상 사용자 (1억회/연 시청자 풀)',
    quote: 'AI에게 자산 분배 시켜본 결과',
    broadContext: 104000000,
    broadContextLabel: '1.04억회',
    cryptoConnection: 53988,
    cryptoConnectionLabel: '약 5.4만회',
    when: 'AI 사용자 일상 콘텐츠 시청',
    keywordCount: 5,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: 'ChatGPT/클로드 일상 사용자, 30-50대 직장인',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'AI에게 자산 분배 시켜봤지만 결과가 너무 일반적임 — 자산별 비중 가이드 부재',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '자산 분배 시 디지털 자산 5%를 어떻게 넣을지 구체적 가이드',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'AI 일상 사용 후 자산 분배 시도 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'chatgpt', volumeAnnual: 93942700, volumeLabel: '9,394만회', trend: 2 },
      { keyword: '클로드', volumeAnnual: 10422900, volumeLabel: '1,042만회', trend: 570 },
      { keyword: 'ai 투자', volumeAnnual: 34860, volumeLabel: '3.5만회', trend: -5 },
      { keyword: 'ai 자동매매', volumeAnnual: 11530, volumeLabel: '1.2만회', trend: 29 },
      { keyword: 'ai 자산관리', volumeAnnual: 5000, volumeLabel: '5천회', trend: 15 },
    ],
    journey: {
      incoming: [
        'ChatGPT 사용 → 자산 분배 프롬프트 → [구체적 비중 가이드]',
        'AI 투자 후기 → 자동매매 시도 → [검증된 거래소]',
      ],
      outgoing: [
        'AI 추천만 받음 → 행동 안 함 → 다음 검색으로 이동',
      ],
      gap: 'AI 자산 추천은 받지만 디지털 자산 5% 비중까지 구체적인 가이드 없음',
    },
    bridge: {
      message: 'AI에게 자산 분배 시켜본 결과 — 디지털 자산 한 줄 추가',
      assetIds: [2, 6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'ai-2',
    territoryId: 'ai-automation',
    emoji: '⚡',
    title: 'AI 투자 프롬프트 +1320% 폭증',
    who: 'AI 투자 프롬프트 / 클로드 자동매매 직접 검색자',
    quote: '프롬프트 5개로 자산 분배 — 그중 한 줄은 빗썸',
    broadContext: 17000,
    broadContextLabel: '1.7만회 (+1320% 폭증)',
    cryptoConnection: 235,
    cryptoConnectionLabel: 'AI 코인 분석 직접',
    when: 'AI 프롬프트 폭증 트렌드',
    keywordCount: 4,
    type: 'A',
    tier: 'MEGA',
    persona: {
      who: {
        value: 'AI 투자 프롬프트·클로드 자동매매 직접 검색자, 20-40대 IT/금융 종사자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'AI에게 자동매매 코드 짜달라고 했지만 어떤 코인에 어떻게 분배해야 할지 모름',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '검증된 코인 시장에서 자동매매 안전하게 시도',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'AI 프롬프트 폭증 트렌드 시청 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'ai 투자 프롬프트', volumeAnnual: 3920, volumeLabel: '3,920회', trend: 1320 },
      { keyword: 'ai 자동매매', volumeAnnual: 11530, volumeLabel: '1.2만회', trend: 29 },
      { keyword: '클로드 자동매매', volumeAnnual: 1130, volumeLabel: '1,130회', trend: 610 },
      { keyword: 'ai 코인 분석', volumeAnnual: 235, volumeLabel: '235회', trend: -50 },
    ],
    journey: {
      incoming: [
        'AI 자동매매 검색 → 클로드 자동매매 → [코인 분석 프롬프트]',
        'GPT 투자법 → AI 코인 자동 분석 → [검증된 거래소]',
      ],
      outgoing: [
        '프롬프트만 돌려봄 → 실제 거래 없음',
      ],
      gap: 'AI 프롬프트로 자동매매 시도자 폭증, 그러나 어떤 거래소에서 실행할지 인식 부재',
    },
    bridge: {
      message: '프롬프트 5개로 자산 분배 — 그중 한 줄은 빗썸',
      assetIds: [2, 6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'ai-3',
    territoryId: 'ai-automation',
    emoji: '🛡️',
    title: 'AI 보이스피싱 vs 빗썸 AI 검증',
    who: 'AI 보이스피싱 걱정자 + 30-50대 자산 보유자',
    quote: 'AI가 위협하는 시대, 빗썸은 AI로 막는다',
    broadContext: 15000,
    broadContextLabel: '1.5만회',
    cryptoConnection: 8000,
    cryptoConnectionLabel: '약 8천회',
    when: 'AI 보이스피싱 뉴스 발표 시',
    keywordCount: 3,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: 'AI 보이스피싱 걱정하는 30-50대 자산 보유자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'AI 시대 자산 안전을 어디서 확보할지 — 거래소별 보안 차이 인식 부재',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: 'AI 위협을 AI로 막는 거래소 — 이상거래 자동 탐지',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'AI 보이스피싱 / AI 사기 뉴스 발표 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'ai 보이스피싱', volumeAnnual: 10760, volumeLabel: '1.1만회', trend: 28 },
      { keyword: '이상거래 탐지', volumeAnnual: 3760, volumeLabel: '3,760회', trend: -16 },
      { keyword: 'ai 사기', volumeAnnual: 2000, volumeLabel: '2,000회', trend: 50 },
    ],
    journey: {
      incoming: [
        'AI 보이스피싱 뉴스 → 자산 안전 걱정 → [거래소 보안]',
      ],
      outgoing: [
        '걱정만 함 → 실제 행동 없음',
      ],
      gap: 'AI 시대 보안 거래소 시각 공백',
    },
    bridge: {
      message: 'AI가 위협하는 시대, 빗썸은 AI로 막는다',
      assetIds: [2, 3],
      products: ['비트코인'],
    },
  },
  // ============================================================
  // 영토 14 — 미국 주식·글로벌 투자 (6개)
  // ============================================================
  {
    id: 'us-1',
    territoryId: 'us-stocks',
    emoji: '⏰',
    title: '새벽 미장 체크하는 사람의 24h 자산',
    who: '한국 시간 새벽 3-5시 미국 주식 체크하는 30-40대 직장인',
    quote: '미장은 새벽, 빗썸은 24시간',
    broadContext: 55000000,
    broadContextLabel: '5,500만회',
    cryptoConnection: 35000,
    cryptoConnectionLabel: '약 3.5만회',
    when: '새벽 3-5시 미장 거래 시간대',
    keywordCount: 5,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '한국 시간 새벽 3-5시 미국 주식 체크하는 30-40대 직장인',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '자고 일어나면 미장 마감 — 다음 거래는 한국 장 열릴 때까지 5시간 대기',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '한국 시간 새벽 4시에도 거래 가능한 자산',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '새벽 3-5시 미장 거래 시간대',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '테슬라 주가', volumeAnnual: 22356900, volumeLabel: '2,236만회', trend: -13 },
      { keyword: '엔비디아 주가', volumeAnnual: 15512500, volumeLabel: '1,551만회', trend: -5 },
      { keyword: '나스닥', volumeAnnual: 21232300, volumeLabel: '2,123만회', trend: 65 },
      { keyword: '미국 주식 시간', volumeAnnual: 470800, volumeLabel: '47만회', trend: -37 },
      { keyword: '미국 주식 마감', volumeAnnual: 80000, volumeLabel: '8만회', trend: 10 },
    ],
    journey: {
      incoming: [
        '테슬라 주가 → 미장 거래 시간 → [한국 시간 거래 가능 자산]',
        '엔비디아 실적 → 새벽 차트 → [다음 거래까지 갈 곳]',
      ],
      outgoing: [
        '미장 마감 → 한국 장 열리기 기다리기 → 다른 콘텐츠 시청',
      ],
      gap: '미장 마감 후~한국 장 개장 사이 5시간, 거래 가능한 자산 없음 인식',
    },
    bridge: {
      message: '미장은 새벽, 빗썸은 24시간',
      assetIds: [4, 7],
      products: ['비트코인', '이더리움', 'USDT'],
    },
  },
  {
    id: 'us-2',
    territoryId: 'us-stocks',
    emoji: '🚀',
    title: '테슬라·엔비디아 옆 5% 자산',
    who: '테슬라·엔비디아 1주 갖고 있는 30대 직장인',
    quote: '테슬라 한 주 옆에, 빗썸의 한 자리',
    broadContext: 65000000,
    broadContextLabel: '6,500만회',
    cryptoConnection: 32256,
    cryptoConnectionLabel: '약 3.2만회',
    when: '새 종목 추가 고민할 때',
    keywordCount: 5,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '테슬라·엔비디아 1주 갖고 있는 30대 직장인',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '테슬라·엔비디아 1주 옆에 다른 종목 추가하고 싶은데, 같은 미국 주식만 더 사면 분산 효과 약함',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '미국 빅테크 옆 다른 카테고리의 자산 한 자리',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '새 종목 추가 고민할 때',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '테슬라', volumeAnnual: 26636700, volumeLabel: '2,664만회', trend: -22 },
      { keyword: '엔비디아', volumeAnnual: 11481600, volumeLabel: '1,148만회', trend: -21 },
      { keyword: '테슬라 주가', volumeAnnual: 22356900, volumeLabel: '2,236만회', trend: -13 },
      { keyword: '엔비디아 주가', volumeAnnual: 15512500, volumeLabel: '1,551만회', trend: -5 },
      { keyword: '캐시우드 테슬라', volumeAnnual: 30000, volumeLabel: '3만회', trend: 8 },
    ],
    journey: {
      incoming: [
        '테슬라 → 엔비디아 → 다음 종목 → [다른 카테고리]',
        '미국 주식 추천 → 분산 효과 → [디지털 자산]',
      ],
      outgoing: [
        '같은 미국 주식 옆 → 분산 효과 약함 → 다른 검색으로 이탈',
      ],
      gap: '미국 주식 옆에 다른 카테고리 자산 = 디지털 자산 시각 부재 (Cluster 2가 "테슬라 → 캐시우드 → 코인 투자 조언" 직접 매칭)',
    },
    bridge: {
      message: '테슬라 한 주 옆에, 빗썸의 한 자리',
      assetIds: [6, 5],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'us-3',
    territoryId: 'us-stocks',
    emoji: '📋',
    title: '5월 양도세 시즌 — 미국 주식 양도세자',
    who: '미국 주식 5천만원 이상 보유 양도세 신고자',
    quote: '5월 신고, 빗썸은 250만원 비과세 별도',
    broadContext: 600000,
    broadContextLabel: '60만회',
    cryptoConnection: 38040,
    cryptoConnectionLabel: '약 3.8만회',
    when: '5월 양도세 신고 시즌',
    keywordCount: 5,
    type: 'A',
    tier: 'MEGA',
    persona: {
      who: {
        value: '미국 주식 5천만원 이상 보유 30-50대 양도세 신고자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '5월 양도세 신고 — 250만원 비과세 외 22% 세율 부담',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '미국 주식 250만원 비과세와 가상자산 250만원 비과세 별도 적용 인식',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '5월 양도세 신고 시즌',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '미국 주식 양도소득세', volumeAnnual: 249090, volumeLabel: '25만회', trend: -19 },
      { keyword: '미국 주식 양도세', volumeAnnual: 96470, volumeLabel: '9.6만회', trend: -15 },
      { keyword: '미국 주식 양도세율', volumeAnnual: 53810, volumeLabel: '5.4만회', trend: -1 },
      { keyword: '미국 주식 양도소득세율', volumeAnnual: 54770, volumeLabel: '5.5만회', trend: 0 },
      { keyword: '가상자산 과세', volumeAnnual: 38040, volumeLabel: '3.8만회', trend: 12 },
    ],
    journey: {
      incoming: [
        '양도세 신고 → 절세 방법 → [250만원 비과세]',
        '미국 주식 매도 → 양도세 계산 → [가상자산 별도 공제]',
      ],
      outgoing: [
        '미국 주식만 신고 → 양도세 22% 부담 → 다음 절세 검색',
      ],
      gap: '미국 주식과 가상자산 모두 250만원 비과세가 별도 적용되는 인식 부재',
    },
    bridge: {
      message: '5월 신고, 빗썸은 250만원 비과세 별도',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'us-4',
    territoryId: 'us-stocks',
    emoji: '💥',
    title: '나스닥 폭락 시 BTC 흐름',
    who: '나스닥 폭락 뉴스 보고 자산 흐름 궁금한 시청자',
    quote: '나스닥 떨어질 때 BTC는 어디로 갔는지',
    broadContext: 21232300,
    broadContextLabel: '2,123만회',
    cryptoConnection: 180000,
    cryptoConnectionLabel: '약 18만회',
    when: '나스닥 폭락 뉴스 직후',
    keywordCount: 5,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '나스닥 폭락 뉴스 보고 자산 흐름 궁금한 30-40대 투자자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '나스닥 폭락 시 BTC도 떨어지는지 같이 떨어지는지 알기 어려움',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '두 자산 동시 흐름 한눈에 보기',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '나스닥 폭락 뉴스 직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '나스닥', volumeAnnual: 21232300, volumeLabel: '2,123만회', trend: 65 },
      { keyword: '나스닥 폭락', volumeAnnual: 250000, volumeLabel: '25만회', trend: 80 },
      { keyword: '비트코인 폭락', volumeAnnual: 180000, volumeLabel: '18만회', trend: 45 },
      { keyword: '나스닥 100', volumeAnnual: 500000, volumeLabel: '50만회', trend: 25 },
      { keyword: 'qqq', volumeAnnual: 2055080, volumeLabel: '206만회', trend: -8 },
    ],
    journey: {
      incoming: [
        '나스닥 폭락 뉴스 → 다른 자산 흐름 → [BTC 함께 폭락?]',
      ],
      outgoing: [
        '나스닥만 봄 → BTC 흐름 모름 → 다음 뉴스로 이동',
      ],
      gap: '나스닥과 BTC 동시 흐름 시각 부재',
    },
    bridge: {
      message: '나스닥 떨어질 때 BTC는 어디로 갔는지',
      assetIds: [7],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'us-5',
    territoryId: 'us-stocks',
    emoji: '🌅',
    title: '미장 마감 후 24h 거래 가능한 자산',
    who: '미장 마감 후~한국 장 개장 사이 5시간 자산 갈 곳 없는 투자자',
    quote: '마감 후의 5시간, 빗썸은 24시간',
    broadContext: 500000,
    broadContextLabel: '50만회',
    cryptoConnection: 35000,
    cryptoConnectionLabel: '약 3.5만회',
    when: '한국 시간 오전 5-9시 (미장 마감 후)',
    keywordCount: 4,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '미장 마감 후~한국 장 개장 사이 5시간 자산 갈 곳 없는 투자자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '한국 시간 오전 5시-9시 — 한국 장도 미장도 닫혀 거래 불가',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '24h 거래 가능한 글로벌 자산',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '한국 시간 오전 5-9시 (미장 마감 후)',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '미국 주식 시간', volumeAnnual: 470800, volumeLabel: '47만회', trend: -37 },
      { keyword: '미국 주식 마감', volumeAnnual: 80000, volumeLabel: '8만회', trend: 10 },
      { keyword: '한국 시간 거래', volumeAnnual: 15000, volumeLabel: '1.5만회', trend: 30 },
      { keyword: '24시간 거래', volumeAnnual: 30000, volumeLabel: '3만회', trend: 45 },
    ],
    journey: {
      incoming: [
        '미장 마감 → 한국 장 열리기 대기 → [중간 5시간 거래 자산]',
      ],
      outgoing: [
        '거래 못 함 → 다른 콘텐츠 시청',
      ],
      gap: '5시간 갭에 거래 가능한 자산이 빗썸이라는 인식 공백',
    },
    bridge: {
      message: '마감 후의 5시간, 빗썸은 24시간',
      assetIds: [4],
      products: ['비트코인', '이더리움', 'USDT'],
    },
  },
  {
    id: 'us-6',
    territoryId: 'us-stocks',
    emoji: '🎯',
    title: 'S&P 500 ETF vs BTC ETF',
    who: 'S&P 500 ETF 시청자 + BTC ETF 비교자',
    quote: '10년 보유 — S&P 500 vs BTC',
    broadContext: 650000,
    broadContextLabel: '65만회',
    cryptoConnection: 200000,
    cryptoConnectionLabel: '약 20만회',
    when: 'S&P ETF 옆 자산 비교할 때',
    keywordCount: 5,
    type: 'A',
    tier: 'MEGA',
    persona: {
      who: {
        value: 'S&P 500 ETF 시청자 + BTC ETF 비교자, 장기 투자 마인드셋',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '미국 S&P 500 ETF 10년 보유 vs BTC 10년 보유 어느 쪽이 나은지 직관적 비교 어려움',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '두 자산 10년 흐름 시각적 비교',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'ETF 비교 검색 시점',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 's&p 500 etf', volumeAnnual: 586620, volumeLabel: '59만회', trend: -30 },
      { keyword: '미국 etf', volumeAnnual: 421050, volumeLabel: '42만회', trend: -50 },
      { keyword: 'qqq', volumeAnnual: 2055080, volumeLabel: '206만회', trend: -8 },
      { keyword: '비트코인 etf', volumeAnnual: 177756, volumeLabel: '17.8만회', trend: 35 },
      { keyword: '미국 비트코인 etf', volumeAnnual: 13152, volumeLabel: '1.3만회', trend: 80 },
    ],
    journey: {
      incoming: [
        'S&P 500 ETF → 10년 수익률 → [BTC와 비교]',
        '미국 ETF 검색 → BTC ETF → [직접 비교]',
      ],
      outgoing: [
        'S&P만 매수 → BTC 시각 부재',
      ],
      gap: '두 ETF 10년 흐름 직접 비교 콘텐츠 부족',
    },
    bridge: {
      message: '10년 보유 — S&P 500 vs BTC',
      assetIds: [6, 7],
      products: ['비트코인', '이더리움'],
    },
  },
  // ============================================================
  // 영토 15 — 트럼프·미국 정책·시사 (6개)
  // ============================================================
  {
    id: 'trump-1',
    territoryId: 'trump-policy',
    emoji: '⏱️',
    title: 'FOMC 발표 30분 — 4 자산 흐름',
    who: '새벽 3시 FOMC 발표 라이브 보는 30-40대',
    quote: '한 마디, 4 자산 30분 흐름',
    broadContext: 900000,
    broadContextLabel: '90만회',
    cryptoConnection: 25000,
    cryptoConnectionLabel: '약 2.5만회',
    when: 'FOMC 발표 새벽 3시 직전·직후',
    keywordCount: 5,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '새벽 3시 FOMC 발표 라이브 보는 30-40대 자산 운용자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'FOMC 발표 한 마디로 주식·달러·금·BTC 4 자산이 동시에 움직이는데 한눈에 못 봄',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '발표 직후 30분 4 자산 흐름 동시 추적',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'FOMC 발표 새벽 3시 직전·직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'fomc', volumeAnnual: 827280, volumeLabel: '83만회', trend: -6 },
      { keyword: '미국 금리 인하', volumeAnnual: 566250, volumeLabel: '57만회', trend: -65 },
      { keyword: 'fomc 시간', volumeAnnual: 80000, volumeLabel: '8만회', trend: 15 },
      { keyword: 'fomc 의사록', volumeAnnual: 50000, volumeLabel: '5만회', trend: 10 },
      { keyword: '미 금리 인하', volumeAnnual: 86770, volumeLabel: '8.7만회', trend: -61 },
    ],
    journey: {
      incoming: [
        'FOMC 일정 → 새벽 3시 라이브 → [발표 후 자산 흐름]',
      ],
      outgoing: [
        '주식만 봄 → 다른 자산 흐름 모름',
      ],
      gap: '4 자산 동시 흐름 시각화 콘텐츠 부족',
    },
    bridge: {
      message: '한 마디, 4 자산 30분 흐름',
      assetIds: [7, 4],
      products: ['비트코인', '이더리움', 'USDT'],
    },
  },
  {
    id: 'trump-2',
    territoryId: 'trump-policy',
    emoji: '📉',
    title: '미국 금리 인하 사이클',
    who: '미국 금리 인하 검색자 = 자산 운용 마인드셋',
    quote: '금리 인하가 4 자산에 미치는 흐름',
    broadContext: 700000,
    broadContextLabel: '70만회',
    cryptoConnection: 18000,
    cryptoConnectionLabel: '약 1.8만회',
    when: 'FOMC 직후 금리 결정 발표',
    keywordCount: 4,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '미국 금리 인하 검색자, 30-50대 자산 운용 마인드셋',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '금리 인하 발표 후 어떤 자산이 오르고 떨어지는지 사이클별로 추적 어려움',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '금리 인하 사이클별 4 자산 패턴',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'FOMC 직후 금리 결정 발표',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '미국 금리 인하', volumeAnnual: 566250, volumeLabel: '57만회', trend: -65 },
      { keyword: '미 금리 인하', volumeAnnual: 86770, volumeLabel: '8.7만회', trend: -61 },
      { keyword: '금리 인하 사이클', volumeAnnual: 30000, volumeLabel: '3만회', trend: 20 },
      { keyword: '금리 동결', volumeAnnual: 25000, volumeLabel: '2.5만회', trend: -10 },
    ],
    journey: {
      incoming: [
        '금리 인하 발표 → 자산 영향 → [4 자산 패턴]',
      ],
      outgoing: [
        '뉴스만 봄 → 자산 행동 없음',
      ],
      gap: '금리 인하 사이클별 자산 흐름 가이드 부재',
    },
    bridge: {
      message: '금리 인하가 4 자산에 미치는 흐름',
      assetIds: [7],
      products: ['비트코인', 'USDT'],
    },
  },
  {
    id: 'trump-3',
    territoryId: 'trump-policy',
    emoji: '🛡️',
    title: '인플레 헤지 5종 (주식·국채·금·달러·BTC)',
    who: '인플레 헤지 자산 찾는 30-50대 자산가',
    quote: '인플레 헤지 5종 — 마지막 자리',
    broadContext: 1000000,
    broadContextLabel: '100만회',
    cryptoConnection: 30000,
    cryptoConnectionLabel: '약 3만회',
    when: '인플레 뉴스 시즌',
    keywordCount: 5,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '인플레 헤지 자산 찾는 30-50대 자산가',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '인플레 헤지 = 주식·국채·금·달러뿐인 줄 알았는데 헷지 옵션이 더 있는지 모름',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '인플레 헤지 5종 (주식·국채·금·달러·BTC) 비교',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '인플레 뉴스 시즌',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '인플레이션', volumeAnnual: 500000, volumeLabel: '50만회', trend: 15 },
      { keyword: '헤지 자산', volumeAnnual: 80000, volumeLabel: '8만회', trend: 25 },
      { keyword: '인플레 자산', volumeAnnual: 50000, volumeLabel: '5만회', trend: 30 },
      { keyword: '인플레 헤지', volumeAnnual: 40000, volumeLabel: '4만회', trend: 35 },
      { keyword: '안전 자산', volumeAnnual: 300000, volumeLabel: '30만회', trend: 8 },
    ],
    journey: {
      incoming: [
        '인플레 뉴스 → 헤지 자산 → [5종 비교]',
      ],
      outgoing: [
        '4종만 분산 → BTC 시각 부재',
      ],
      gap: '인플레 헤지 5종 중 BTC 위치 인식 공백',
    },
    bridge: {
      message: '인플레 헤지 5종 — 마지막 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'trump-4',
    territoryId: 'trump-policy',
    emoji: '🚢',
    title: '트럼프 관세 발표 시 자산',
    who: '트럼프 관세 뉴스 모니터링 시청자',
    quote: '관세 발표 한 마디, 자산 4종 흐름',
    broadContext: 250000,
    broadContextLabel: '25만회',
    cryptoConnection: 15000,
    cryptoConnectionLabel: '약 1.5만회',
    when: '트럼프 관세 발표 직후',
    keywordCount: 4,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '트럼프 관세 뉴스 모니터링 시청자, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '트럼프 관세 발표 한 마디 → 시장 흔들리는데 어떤 자산이 어떻게 반응하는지 추적 어려움',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '관세 발표 후 4 자산 30분 흐름',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '트럼프 관세 발표 직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '트럼프 관세', volumeAnnual: 248170, volumeLabel: '25만회', trend: -96 },
      { keyword: '미 자동차 관세', volumeAnnual: 50000, volumeLabel: '5만회', trend: 80 },
      { keyword: '트럼프 한국 관세', volumeAnnual: 30000, volumeLabel: '3만회', trend: 120 },
      { keyword: '자동차 관세', volumeAnnual: 80000, volumeLabel: '8만회', trend: 60 },
    ],
    journey: {
      incoming: [
        '트럼프 관세 → 시장 충격 → [자산 흐름]',
      ],
      outgoing: [
        '뉴스만 봄 → 자산 행동 없음',
      ],
      gap: '관세 발표 시 디지털 자산 반응 시각 부재',
    },
    bridge: {
      message: '관세 발표 한 마디, 자산 4종 흐름',
      assetIds: [7, 5],
      products: ['비트코인', 'USDT'],
    },
  },
  {
    id: 'trump-5',
    territoryId: 'trump-policy',
    emoji: '📊',
    title: '미 국채 10년물 +152% 시청자',
    who: '미 국채 10년물 검색자 = 자산 운용자',
    quote: '안전 자산 옆 — 디지털 자산 한 자리',
    broadContext: 300000,
    broadContextLabel: '30만회 (+152%)',
    cryptoConnection: 12000,
    cryptoConnectionLabel: '약 1.2만회',
    when: '국채 금리 변동기',
    keywordCount: 3,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '미 국채 10년물 검색자 = 자산 운용자, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '미 국채 10년물 사고 싶은데 한국에서는 어떻게 사야 하는지 + 다음 옵션은 무엇인지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '안전 자산 옆 디지털 자산 한 자리',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '국채 금리 변동기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '미국 국채 10년물', volumeAnnual: 300350, volumeLabel: '30만회', trend: 152 },
      { keyword: '미국 국채', volumeAnnual: 100000, volumeLabel: '10만회', trend: 80 },
      { keyword: '10년물 금리', volumeAnnual: 40000, volumeLabel: '4만회', trend: 45 },
    ],
    journey: {
      incoming: [
        '미 국채 10년물 +152% → 안전 자산 → [디지털 자산 비교]',
      ],
      outgoing: [
        '국채만 매수 → 디지털 자산 시각 부재',
      ],
      gap: '국채 시청자에게 BTC가 다음 자산이라는 시각 공백',
    },
    bridge: {
      message: '안전 자산 옆 — 디지털 자산 한 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'trump-6',
    territoryId: 'trump-policy',
    emoji: '🏛️',
    title: '오피셜 트럼프 코인 직접',
    who: '트럼프 코인 호기심 시청자',
    quote: '트럼프 코인 — 빗썸이 가는 길',
    broadContext: 1800000,
    broadContextLabel: '180만회',
    cryptoConnection: 1820000,
    cryptoConnectionLabel: '180만회 (직접)',
    when: '트럼프 코인 뉴스 발표',
    keywordCount: 4,
    type: 'A',
    tier: 'MEGA',
    persona: {
      who: {
        value: '트럼프 코인 호기심 시청자, 20-50대 코인 입문자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '오피셜 트럼프 코인 어디서 사야 하는지 모름',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '신뢰할 수 있는 거래소에서 직접 매수',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '트럼프 코인 뉴스 발표 직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '오피셜 트럼프', volumeAnnual: 1371950, volumeLabel: '137만회', trend: 3 },
      { keyword: '오피셜 트럼프 코인', volumeAnnual: 437860, volumeLabel: '44만회', trend: -25 },
      { keyword: '트럼프 코인', volumeAnnual: 100000, volumeLabel: '10만회', trend: 50 },
      { keyword: '트럼프 발언', volumeAnnual: 7550, volumeLabel: '7,550회', trend: 100 },
    ],
    journey: {
      incoming: [
        '트럼프 뉴스 → 트럼프 코인 → [구매 거래소]',
      ],
      outgoing: [
        '뉴스만 봄 → 거래소 못 찾음',
      ],
      gap: '오피셜 트럼프 코인 거래소 시각 공백',
    },
    bridge: {
      message: '트럼프 코인 — 빗썸이 가는 길',
      assetIds: [5, 2],
      products: ['오피셜 트럼프 코인', '비트코인'],
    },
  },
  // ============================================================
  // 영토 18 — ETF·연금·장기 투자 (6개)
  // ============================================================
  {
    id: 'etf-1',
    territoryId: 'etf-pension',
    emoji: '🎯',
    title: 'ISA 다 채운 사람의 다음 자산',
    who: 'ISA 한도 채운 30-40대 직장인',
    quote: 'ISA 다 채웠다 — 그 다음 자리',
    broadContext: 1000000,
    broadContextLabel: '100만회',
    cryptoConnection: 220000,
    cryptoConnectionLabel: '약 22만회',
    when: 'ISA 한도 초과 인지 시점',
    keywordCount: 5,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: 'ISA 한도 채운 30-40대 직장인',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'ISA 2,000만원·8,000만원·1억 채운 후 다음 자산을 어디로 분배할지 모름',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: 'ISA 한도 초과 후 다음 자산 옵션 가이드',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'ISA 한도 초과 인지 시점',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'isa 계좌 채우기', volumeAnnual: 400000, volumeLabel: '40만회', trend: 20 },
      { keyword: 'isa 2000만원 이상 입금', volumeAnnual: 200000, volumeLabel: '20만회', trend: 35 },
      { keyword: 'isa 1억', volumeAnnual: 150000, volumeLabel: '15만회', trend: 45 },
      { keyword: 'isa 8000만원', volumeAnnual: 100000, volumeLabel: '10만회', trend: 30 },
      { keyword: '퇴직연금 isa', volumeAnnual: 80000, volumeLabel: '8만회', trend: 25 },
    ],
    journey: {
      incoming: [
        'ISA 한도 → 2,000만원 → 1억 채우기 → [다음 자산]',
        '연금저축 + ISA + IRP 다 채움 → [4번째 자산]',
      ],
      outgoing: [
        'ISA만 채움 → 다음 자산 못 찾음',
      ],
      gap: 'ISA 한도 초과자의 다음 자산이 디지털 자산이라는 인식 부재',
    },
    bridge: {
      message: 'ISA 다 채웠다 — 그 다음 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'etf-2',
    territoryId: 'etf-pension',
    emoji: '🏖️',
    title: '50대 노후 IRP·연금',
    who: '50대 노후 자산 운용자 (IRP·연금 시청자)',
    quote: '노후 다층 자산 — 디지털 자산 5% 한 자리',
    broadContext: 1000000,
    broadContextLabel: '100만회',
    cryptoConnection: 80000,
    cryptoConnectionLabel: '약 8만회',
    when: '50대 IRP 적립 시기',
    keywordCount: 4,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '50대 노후 자산 운용자 (IRP·연금 시청자)',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '50대 노후 자산 = 연금·IRP·예금 only인데 인플레 헷지 안 됨',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '노후 다층 자산 중 5% 디지털 자산 비중',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '50대 IRP 적립 시기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'irp', volumeAnnual: 500000, volumeLabel: '50만회', trend: 8 },
      { keyword: '퇴직연금', volumeAnnual: 800000, volumeLabel: '80만회', trend: 5 },
      { keyword: '연금저축', volumeAnnual: 500000, volumeLabel: '50만회', trend: 12 },
      { keyword: '퇴직연금 isa', volumeAnnual: 80000, volumeLabel: '8만회', trend: 25 },
    ],
    journey: {
      incoming: [
        '50대 노후 자산 → IRP·연금 → [추가 자산]',
      ],
      outgoing: [
        '연금만 운용 → 인플레 헷지 부족',
      ],
      gap: '50대 노후 자산에 디지털 5% 시각 공백',
    },
    bridge: {
      message: '노후 다층 자산 — 디지털 자산 5% 한 자리',
      assetIds: [6, 3],
      products: ['비트코인'],
    },
  },
  {
    id: 'etf-3',
    territoryId: 'etf-pension',
    emoji: '💸',
    title: '연말정산 환급금 5가지 옵션',
    who: '50-100만원 환급금 받은 30-40대 직장인',
    quote: '50만원 환급금의 5가지 선택',
    broadContext: 270000,
    broadContextLabel: '27만회',
    cryptoConnection: 12000,
    cryptoConnectionLabel: '약 1.2만회',
    when: '1-2월 환급금 수령 시기',
    keywordCount: 3,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '50-100만원 환급금 받은 30-40대 직장인',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '연말정산 50만원 환급 → 어디 쓸지 모름 (소비 vs 저축 vs 투자)',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '환급금 5가지 옵션 (소비·예금·주식·ETF·디지털 자산)',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '1-2월 환급금 수령 시기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '연말정산 환급', volumeAnnual: 268310, volumeLabel: '27만회', trend: -91 },
      { keyword: '환급 활용', volumeAnnual: 30000, volumeLabel: '3만회', trend: 20 },
      { keyword: '환급금 사용', volumeAnnual: 20000, volumeLabel: '2만회', trend: 15 },
    ],
    journey: {
      incoming: [
        '환급금 수령 → 활용 방법 → [5가지 옵션]',
      ],
      outgoing: [
        '소비에 쓰임 → 자산 형성 안 됨',
      ],
      gap: '환급금 5번째 옵션 = 디지털 자산 시각 부재',
    },
    bridge: {
      message: '50만원 환급금의 5가지 선택',
      assetIds: [6],
      products: ['비트코인'],
    },
  },
  {
    id: 'etf-4',
    territoryId: 'etf-pension',
    emoji: '📊',
    title: 'S&P 500 ETF vs BTC 10년',
    who: 'S&P 500 ETF 시청자 + 장기 투자 마인드셋',
    quote: '10년 보유 — S&P 500 vs BTC',
    broadContext: 600000,
    broadContextLabel: '60만회',
    cryptoConnection: 178000,
    cryptoConnectionLabel: '약 17.8만회',
    when: 'ETF 비교 검색 시점',
    keywordCount: 3,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: 'S&P 500 ETF 시청자, 장기 투자 마인드셋, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '10년 보유 후 S&P 500 ETF vs BTC 어느 쪽이 나은지 비교 어려움',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '두 자산 10년 흐름 비교 + 분배 가이드',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'ETF 비교 검색 시점',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 's&p 500 etf', volumeAnnual: 586620, volumeLabel: '59만회', trend: -30 },
      { keyword: '미국 etf', volumeAnnual: 421050, volumeLabel: '42만회', trend: -50 },
      { keyword: '비트코인 etf', volumeAnnual: 177756, volumeLabel: '17.8만회', trend: 35 },
    ],
    journey: {
      incoming: [
        'S&P 500 ETF → 10년 수익률 → [BTC 10년 비교]',
      ],
      outgoing: [
        'S&P만 매수 → BTC 시각 부재',
      ],
      gap: '두 ETF 10년 직접 비교 콘텐츠 부족',
    },
    bridge: {
      message: '10년 보유 — S&P 500 vs BTC',
      assetIds: [6],
      products: ['비트코인'],
    },
  },
  {
    id: 'etf-5',
    territoryId: 'etf-pension',
    emoji: '🌙',
    title: '월배당 ETF + BTC 포트폴리오',
    who: '월배당 ETF 시청자 (현금 흐름 마인드셋)',
    quote: '월배당 옆 — 다각화 한 자리',
    broadContext: 500000,
    broadContextLabel: '50만회',
    cryptoConnection: 30000,
    cryptoConnectionLabel: '약 3만회',
    when: '월배당 ETF 구성 검색 시',
    keywordCount: 4,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '월배당 ETF 시청자, 현금 흐름 마인드셋, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '월배당 옆 자산 분배 시 보통 다른 ETF만 추가 → 분산 효과 약함',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '월배당 ETF 옆 다른 카테고리의 분산 자산',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '월배당 ETF 구성 검색 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '월배당 etf', volumeAnnual: 200000, volumeLabel: '20만회', trend: 35 },
      { keyword: 'jepi', volumeAnnual: 120000, volumeLabel: '12만회', trend: 25 },
      { keyword: 'jepq', volumeAnnual: 100000, volumeLabel: '10만회', trend: 40 },
      { keyword: 'schd', volumeAnnual: 80000, volumeLabel: '8만회', trend: 15 },
    ],
    journey: {
      incoming: [
        '월배당 ETF → JEPI·JEPQ → [다음 분산]',
      ],
      outgoing: [
        '비슷한 ETF만 추가 → 분산 효과 약함',
      ],
      gap: '월배당 시청자의 다음 분산 = 디지털 자산 시각 부재',
    },
    bridge: {
      message: '월배당 옆 — 다각화 한 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'etf-6',
    territoryId: 'etf-pension',
    emoji: '🧑‍🏫',
    title: '박곰희 라인업 시청자',
    who: '박곰희 유튜브 구독자 (다층 ETF 라인업)',
    quote: '박곰희 9종 — 그 옆 한 자리',
    broadContext: 50000,
    broadContextLabel: '5만회',
    cryptoConnection: 8000,
    cryptoConnectionLabel: '약 8천회',
    when: '박곰희 신규 영상 발행 시',
    keywordCount: 3,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '박곰희 유튜브 구독자, 다층 ETF 라인업 시청자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '박곰희 9종 라인업 따라서 ETF 다 채웠는데 그 다음은',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '9종 라인업 옆 디지털 자산 1자리',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '박곰희 신규 영상 발행 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '박곰희', volumeAnnual: 30000, volumeLabel: '3만회', trend: 15 },
      { keyword: '박곰희 라인업', volumeAnnual: 15000, volumeLabel: '1.5만회', trend: 25 },
      { keyword: '박곰희 etf', volumeAnnual: 10000, volumeLabel: '1만회', trend: 20 },
    ],
    journey: {
      incoming: [
        '박곰희 영상 → 9종 라인업 → [다음 자산]',
      ],
      outgoing: [
        '9종만 채움 → 디지털 자산 부재',
      ],
      gap: '박곰희 라인업 시청자의 다음 자산 시각 부재',
    },
    bridge: {
      message: '박곰희 9종 — 그 옆 한 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  // ============================================================
  // 영토 16 — 금·원자재·자산 다각화 (6개) — 재정의 (자산 다각화 시각자만)
  // ============================================================
  {
    id: 'gold-1',
    territoryId: 'gold-assets',
    emoji: '🏛️',
    title: 'KRX 금현물 사는 사람',
    who: 'KRX 금현물 직접 매수자 (자산 다각화 시각자)',
    quote: '5천년 자산 옆에, 15년 자산 한 자리',
    broadContext: 1100000,
    broadContextLabel: '110만회',
    cryptoConnection: 30000,
    cryptoConnectionLabel: '약 3만회',
    when: 'KRX 금현물 매수 직후',
    keywordCount: 3,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: 'KRX 금현물 직접 매수자, 자산 다각화 시각자, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'KRX 금현물 사는데 비교 가능한 디지털 안전 자산에 대한 시각 부재',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '금 옆 디지털 자산 비교',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'KRX 금현물 매수 직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'krx 금현물', volumeAnnual: 1046480, volumeLabel: '105만회', trend: -52 },
      { keyword: 'krx 금 투자', volumeAnnual: 60830, volumeLabel: '6만회', trend: -79 },
      { keyword: 'krx 금 시장', volumeAnnual: 20000, volumeLabel: '2만회', trend: 15 },
    ],
    journey: {
      incoming: [
        '금 가격 → KRX 금현물 → [디지털 안전 자산]',
      ],
      outgoing: [
        '금만 매수 → 디지털 자산 시각 부재',
      ],
      gap: '5천년 금 옆 15년 BTC 비교 시각 공백',
    },
    bridge: {
      message: '5천년 자산 옆에, 15년 자산 한 자리',
      assetIds: [6],
      products: ['비트코인'],
    },
  },
  {
    id: 'gold-2',
    territoryId: 'gold-assets',
    emoji: '📊',
    title: '금 ETF vs BTC ETF',
    who: '금 ETF 시청자 (KODEX 골드선물 등)',
    quote: '두 ETF의 5년 성과 — 금 vs BTC',
    broadContext: 860000,
    broadContextLabel: '86만회',
    cryptoConnection: 200000,
    cryptoConnectionLabel: '약 20만회',
    when: '금 ETF 매수 검토 시',
    keywordCount: 4,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: '금 ETF 시청자 (KODEX 골드선물 등), 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '금 ETF vs BTC ETF 5년 성과 비교가 한눈에 안 보임',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '두 ETF 5년 흐름 비교',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '금 ETF 매수 검토 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '금 etf', volumeAnnual: 862020, volumeLabel: '86만회', trend: -80 },
      { keyword: '금 etf 직투', volumeAnnual: 30000, volumeLabel: '3만회', trend: 15 },
      { keyword: '금 etf 투자', volumeAnnual: 20000, volumeLabel: '2만회', trend: 25 },
      { keyword: '비트코인 etf', volumeAnnual: 177756, volumeLabel: '17.8만회', trend: 35 },
    ],
    journey: {
      incoming: [
        '금 ETF → 비교 자산 → [BTC ETF 5년]',
      ],
      outgoing: [
        '금 ETF만 매수 → BTC ETF 시각 부재',
      ],
      gap: '두 ETF 직접 비교 콘텐츠 부족',
    },
    bridge: {
      message: '두 ETF의 5년 성과 — 금 vs BTC',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'gold-3',
    territoryId: 'gold-assets',
    emoji: '📱',
    title: '토스/카뱅으로 금 사는 사람',
    who: '토스·카뱅 사용 핀테크 시각자',
    quote: '토스 옆에, 빗썸',
    broadContext: 17000,
    broadContextLabel: '1.7만회',
    cryptoConnection: 5000,
    cryptoConnectionLabel: '약 5천회',
    when: '토스 금 투자 시작 후',
    keywordCount: 3,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '토스·카뱅 사용 핀테크 시각자, 소액 금 투자자, 20-40대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '토스·카뱅으로 금 1g 사봤는데 그 다음은',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '핀테크 사용자 친화 디지털 자산',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '토스 금 투자 시작 후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '토스 금 투자', volumeAnnual: 15100, volumeLabel: '1.5만회', trend: -66 },
      { keyword: '카카오뱅크 금 투자', volumeAnnual: 1244, volumeLabel: '1,244회', trend: -76 },
      { keyword: '토스 금', volumeAnnual: 5000, volumeLabel: '5천회', trend: 20 },
    ],
    journey: {
      incoming: [
        '토스 금 1g → 다음 자산 → [핀테크 친화 디지털]',
      ],
      outgoing: [
        '금만 보유 → 디지털 자산 시각 부재',
      ],
      gap: '핀테크 시각자에게 빗썸이 다음 단계라는 인식 부재',
    },
    bridge: {
      message: '토스 옆에, 빗썸',
      assetIds: [6, 5],
      products: ['비트코인', 'USDT'],
    },
  },
  {
    id: 'gold-4',
    territoryId: 'gold-assets',
    emoji: '💼',
    title: '주식 채권 금 포트폴리오 + 디지털 5%',
    who: '자산 배분 시각자 (60/40 또는 60/30/10)',
    quote: '주식·채권·금 옆, 디지털 5%',
    broadContext: 5000,
    broadContextLabel: '5천회',
    cryptoConnection: 3000,
    cryptoConnectionLabel: '약 3천회',
    when: '포트폴리오 구성 시기',
    keywordCount: 3,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '자산 배분 시각자 (60/40 또는 60/30/10 포트폴리오), 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '주식·채권·금 포트폴리오 = 3종이 끝인 줄 알았는데 4번째 자산은',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '4번째 자산으로 디지털 자산 5%',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '포트폴리오 구성 시기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '주식 채권 금 포트폴리오', volumeAnnual: 510, volumeLabel: '510회', trend: -40 },
      { keyword: '자산배분', volumeAnnual: 30000, volumeLabel: '3만회', trend: 15 },
      { keyword: '60/40 포트폴리오', volumeAnnual: 5000, volumeLabel: '5천회', trend: 20 },
    ],
    journey: {
      incoming: [
        '자산 배분 → 3종 포트폴리오 → [4번째 자산]',
      ],
      outgoing: [
        '3종만 분배 → 디지털 부재',
      ],
      gap: '자산 배분 시각자의 4번째 자산 = 디지털 시각 공백',
    },
    bridge: {
      message: '주식·채권·금 옆, 디지털 5%',
      assetIds: [6],
      products: ['비트코인'],
    },
  },
  {
    id: 'gold-5',
    territoryId: 'gold-assets',
    emoji: '📈',
    title: '적립식 금 투자자의 다음 자산',
    who: '적립식 금 투자자 (장기 자산 형성)',
    quote: '적립식 금의 다음 자리',
    broadContext: 180000,
    broadContextLabel: '18만회',
    cryptoConnection: 8000,
    cryptoConnectionLabel: '약 8천회',
    when: '적립식 금 1년 적립 후',
    keywordCount: 4,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '적립식 금 투자자, 장기 자산 형성, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '적립식 금 1년 적립했는데 그 다음 자산은',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '적립식 다음 단계 디지털 자산',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '적립식 금 1년 적립 후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '금테크', volumeAnnual: 165590, volumeLabel: '16.5만회', trend: -79 },
      { keyword: '금 재테크', volumeAnnual: 10960, volumeLabel: '1.1만회', trend: -81 },
      { keyword: '적립식 금 투자', volumeAnnual: 232, volumeLabel: '232회', trend: -100 },
      { keyword: '금 장기 투자', volumeAnnual: 2120, volumeLabel: '2,120회', trend: -68 },
    ],
    journey: {
      incoming: [
        '적립식 금 → 1년 후 → [다음 자산]',
      ],
      outgoing: [
        '금만 적립 → 디지털 시각 부재',
      ],
      gap: '장기 적립자의 다음 자산 시각 공백',
    },
    bridge: {
      message: '적립식 금의 다음 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'gold-6',
    territoryId: 'gold-assets',
    emoji: '💎',
    title: '금 vs 비트코인 직접 비교',
    who: '금 vs BTC 직접 비교 시청자',
    quote: '5000년 vs 15년 — 두 안전 자산',
    broadContext: 15000,
    broadContextLabel: '1.5만회',
    cryptoConnection: 12000,
    cryptoConnectionLabel: '약 1.2만회',
    when: '금 vs BTC 검색 시점',
    keywordCount: 3,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: '금 vs BTC 직접 비교 시청자, 30-50대 자산가',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '안전 자산 2종 비교 결과를 빠르게 보고 싶음',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '5000년 자산 vs 15년 자산 직관적 비교',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '금 vs BTC 검색 시점',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '금 비트코인 비교', volumeAnnual: 8000, volumeLabel: '8천회', trend: 25 },
      { keyword: '금 vs 비트코인', volumeAnnual: 5000, volumeLabel: '5천회', trend: 30 },
      { keyword: '안전 자산 비교', volumeAnnual: 2000, volumeLabel: '2천회', trend: 15 },
    ],
    journey: {
      incoming: [
        '안전 자산 비교 → 금 vs BTC → [직관적 비교]',
      ],
      outgoing: [
        '비교만 봄 → 결정 못함',
      ],
      gap: '직관적 비교 콘텐츠 부족',
    },
    bridge: {
      message: '5000년 vs 15년 — 두 안전 자산',
      assetIds: [6],
      products: ['비트코인'],
    },
  },
  // ============================================================
  // 영토 01 — 과학·양자 시대 (3개)
  // ============================================================
  {
    id: 'quantum-1',
    territoryId: 'quantum-science',
    emoji: '⚛️',
    title: '양자컴퓨터 × 비트코인 해킹 가능?',
    who: '양자컴퓨터 관련주 시청자 (양자컴×코인 호기심)',
    quote: '양자컴이 비트코인을 해킹할까? 빗썸 PQC가 답',
    broadContext: 8500,
    broadContextLabel: '8,500회',
    cryptoConnection: 8500,
    cryptoConnectionLabel: '8,500회 (직접)',
    when: '양자컴 뉴스 발표 시기',
    keywordCount: 3,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: '양자컴퓨터 관련주 시청자, 양자컴×코인 호기심자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '양자컴퓨터가 비트코인을 해킹할 수 있다는 우려',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '양자 시대 안전한 거래소 (PQC 준비)',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '양자컴 뉴스 발표 시기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '양자컴퓨터 코인', volumeAnnual: 7170, volumeLabel: '7,170회', trend: -4 },
      { keyword: '양자 컴퓨터와 비트코인', volumeAnnual: 1178, volumeLabel: '1,178회', trend: -50 },
      { keyword: '양자컴 코인 관계', volumeAnnual: 1000, volumeLabel: '1천회', trend: 30 },
    ],
    journey: {
      incoming: [
        '양자컴 뉴스 → 비트코인 해킹 우려 → [PQC 거래소]',
      ],
      outgoing: [
        '우려만 함 → 행동 안 함',
      ],
      gap: 'PQC 준비된 거래소가 빗썸이라는 인식 공백',
    },
    bridge: {
      message: '양자컴이 비트코인을 해킹할까? 빗썸 PQC가 답',
      assetIds: [1, 3],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'quantum-2',
    territoryId: 'quantum-science',
    emoji: '🧬',
    title: '양자물리학자가 보는 디지털 자산',
    who: '양자물리학 시청자 (과학 시각)',
    quote: '과학자가 본 디지털 자산의 미래',
    broadContext: 140000,
    broadContextLabel: '14만회',
    cryptoConnection: 5000,
    cryptoConnectionLabel: '약 5천회',
    when: '양자컴 과학 콘텐츠 시청자',
    keywordCount: 3,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '양자물리학 시청자, 과학 시각자, 20-40대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '양자컴이 모든 암호화를 깰 가능성',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '양자 내성 암호로 보호되는 자산',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '양자컴 과학 콘텐츠 시청자',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '양자물리학', volumeAnnual: 137850, volumeLabel: '13.7만회', trend: -41 },
      { keyword: '양자물리학자', volumeAnnual: 20000, volumeLabel: '2만회', trend: -15 },
      { keyword: '양자역학', volumeAnnual: 80000, volumeLabel: '8만회', trend: 10 },
    ],
    journey: {
      incoming: [
        '양자물리학 → 양자컴 응용 → [디지털 자산 미래]',
      ],
      outgoing: [
        '과학만 봄 → 자산 행동 부재',
      ],
      gap: '과학자 시각의 디지털 자산 콘텐츠 부족',
    },
    bridge: {
      message: '과학자가 본 디지털 자산의 미래',
      assetIds: [1],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'quantum-3',
    territoryId: 'quantum-science',
    emoji: '🛡️',
    title: '양자컴 관련주 — 빗썸 PQC',
    who: '양자컴퓨터 관련주 투자자',
    quote: '양자 시대 보안 표준 — 빗썸 PQC',
    broadContext: 2700000,
    broadContextLabel: '270만회',
    cryptoConnection: 38316,
    cryptoConnectionLabel: '약 3.8만회',
    when: '양자컴 보안 뉴스 발표',
    keywordCount: 5,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '양자컴퓨터 관련주 투자자, 양자컴 기술 변화 모니터링자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '양자컴 기술 변화가 디지털 자산에 미칠 영향',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: 'PQC 준비된 거래소',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '양자컴 보안 뉴스 발표',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '양자 컴퓨터', volumeAnnual: 1324140, volumeLabel: '132만회', trend: 41 },
      { keyword: '양자컴', volumeAnnual: 775590, volumeLabel: '78만회', trend: 50 },
      { keyword: '양자컴퓨터 관련주', volumeAnnual: 470160, volumeLabel: '47만회', trend: 86 },
      { keyword: '트럼프 양자컴', volumeAnnual: 30000, volumeLabel: '3만회', trend: 200 },
      { keyword: '양자 컴퓨터 etf', volumeAnnual: 50000, volumeLabel: '5만회', trend: 150 },
    ],
    journey: {
      incoming: [
        '양자컴 관련주 → 양자 시대 보안 → [PQC 거래소]',
      ],
      outgoing: [
        '관련주만 매수 → 자산 보안 시각 부재',
      ],
      gap: '양자컴 투자자에게 PQC 거래소 시각 공백',
    },
    bridge: {
      message: '양자 시대 보안 표준 — 빗썸 PQC',
      assetIds: [1, 3],
      products: ['비트코인', '이더리움'],
    },
  },
  // ============================================================
  // 영토 06 — 스테이블코인·디지털 달러 (5개)
  // ============================================================
  {
    id: 'stable-1',
    territoryId: 'stablecoin',
    emoji: '🏦',
    title: '한국 스테이블코인 5강 + 빗썸',
    who: '카카오뱅크·카카오페이·네이버페이·토스 사용자 + 스테이블 호기심',
    quote: '5강 + 1 — 빗썸의 자리',
    broadContext: 260000,
    broadContextLabel: '26만회',
    cryptoConnection: 260000,
    cryptoConnectionLabel: '26만회 (직접)',
    when: '원화 스테이블 법안 통과 직후',
    keywordCount: 3,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: '카카오뱅크·카카오페이·네이버페이·토스 사용자 + 스테이블코인 호기심자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '카카오뱅크 스테이블코인 발행 발표 후 어떤 의미인지 모름',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '5강 + 빗썸 6강 구조 이해',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '원화 스테이블 법안 통과 직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '원화 스테이블코인', volumeAnnual: 222900, volumeLabel: '22만회', trend: 179 },
      { keyword: '한국 스테이블코인', volumeAnnual: 33800, volumeLabel: '3.4만회', trend: 95 },
      { keyword: '카카오뱅크 스테이블코인', volumeAnnual: 12192, volumeLabel: '1.2만회', trend: 240 },
    ],
    journey: {
      incoming: [
        '카뱅 스테이블 발표 → 한국 스테이블 시장 → [6강 구조]',
      ],
      outgoing: [
        '뉴스만 봄 → 행동 없음',
      ],
      gap: '한국 스테이블 5강 + 빗썸 6강 구조 시각 부재',
    },
    bridge: {
      message: '5강 + 1 — 빗썸의 자리',
      assetIds: [5, 4],
      products: ['USDT', 'USDC', 'KRWB'],
    },
  },
  {
    id: 'stable-2',
    territoryId: 'stablecoin',
    emoji: '💰',
    title: 'USDT 이자 +492% 폭증',
    who: 'USDT 보유자 + 이자 수익 궁금자',
    quote: 'USDT 보관 — 그 이자가 어디로 가는가',
    broadContext: 810000,
    broadContextLabel: '81만회',
    cryptoConnection: 810000,
    cryptoConnectionLabel: '81만회 (직접)',
    when: 'USDT 보유 시작 후',
    keywordCount: 3,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: 'USDT 보유자, 이자 수익 궁금자, 20-40대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'USDT 가만히 보관하면 이자가 0',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: 'USDT 보관 + 이자 수익 옵션',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'USDT 보유 시작 후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'usdt', volumeAnnual: 813260, volumeLabel: '81만회', trend: 10 },
      { keyword: 'usdt 이자', volumeAnnual: 5800, volumeLabel: '5,800회', trend: 492 },
      { keyword: 'usdc 이자', volumeAnnual: 2400, volumeLabel: '2,400회', trend: 320 },
    ],
    journey: {
      incoming: [
        'USDT 보유 → 이자 수익 → [거래소 옵션]',
      ],
      outgoing: [
        '보관만 함 → 수익 없음',
      ],
      gap: 'USDT 보관 + 이자 수익 거래소 시각 공백',
    },
    bridge: {
      message: 'USDT 보관 — 그 이자가 어디로 가는가',
      assetIds: [5],
      products: ['USDT', 'USDC'],
    },
  },
  {
    id: 'stable-3',
    territoryId: 'stablecoin',
    emoji: '⚖️',
    title: '원화 스테이블 법안 +179%',
    who: '원화 스테이블 법안 시청자 + 정책 모니터링자',
    quote: '법안 통과 — 빗썸이 가장 먼저',
    broadContext: 220000,
    broadContextLabel: '22만회 (+179%)',
    cryptoConnection: 220000,
    cryptoConnectionLabel: '22만회 (직접)',
    when: '법안 발의·통과 시기',
    keywordCount: 3,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: '원화 스테이블 법안 시청자 + 정책 모니터링자, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '법안 통과 시 한국 디지털 달러 시장이 어떻게 바뀌는지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '법안 통과 직후 거래소 시각',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '법안 발의·통과 시기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '원화 스테이블코인', volumeAnnual: 222900, volumeLabel: '22만회', trend: 179 },
      { keyword: '원화 스테이블 법안', volumeAnnual: 15000, volumeLabel: '1.5만회', trend: 220 },
      { keyword: 'krwb', volumeAnnual: 3000, volumeLabel: '3,000회', trend: 350 },
    ],
    journey: {
      incoming: [
        '법안 발의 뉴스 → 시장 영향 → [거래소 대응]',
      ],
      outgoing: [
        '뉴스만 봄 → 행동 없음',
      ],
      gap: '법안 통과 직후 어떤 거래소가 가장 먼저 대응하는지 시각 부재',
    },
    bridge: {
      message: '법안 통과 — 빗썸이 가장 먼저',
      assetIds: [5],
      products: ['KRWB', 'USDT'],
    },
  },
  {
    id: 'stable-4',
    territoryId: 'stablecoin',
    emoji: '🏪',
    title: '강남 환전소 vs USDT',
    who: '강남 환전소 사용자 + 글로벌 자산 이동자',
    quote: '환전소 옆 — USDT의 길',
    broadContext: 10000,
    broadContextLabel: '1만회',
    cryptoConnection: 10000,
    cryptoConnectionLabel: '1만회',
    when: '해외 출장·자산 이동 직전',
    keywordCount: 3,
    type: 'B',
    tier: 'LARGE',
    persona: {
      who: {
        value: '강남 환전소 사용자 + 글로벌 자산 이동자, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '강남 환전소 환전 수수료 + 24시간 안 됨',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '24h USDT 환전',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '해외 출장·자산 이동 직전',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '강남 환전소', volumeAnnual: 7310, volumeLabel: '7,310회', trend: 15 },
      { keyword: '환전소', volumeAnnual: 30000, volumeLabel: '3만회', trend: 8 },
      { keyword: '명동 환전소', volumeAnnual: 5000, volumeLabel: '5천회', trend: 5 },
    ],
    journey: {
      incoming: [
        '강남 환전소 → 환율 비교 → [USDT 환전]',
      ],
      outgoing: [
        '환전소만 사용 → 24h 거래 부재',
      ],
      gap: '환전소 사용자에게 USDT가 24h 환전 솔루션이라는 시각 부재',
    },
    bridge: {
      message: '환전소 옆 — USDT의 길',
      assetIds: [5, 4],
      products: ['USDT'],
    },
  },
  {
    id: 'stable-5',
    territoryId: 'stablecoin',
    emoji: '🇺🇸',
    title: 'GENIUS Act — 한국 빗썸이 가는 길',
    who: '미국 정책 모니터링자 + 글로벌 시각자',
    quote: '미국 입법, 한국 빗썸이 가는 길',
    broadContext: 30000,
    broadContextLabel: '3만회',
    cryptoConnection: 30000,
    cryptoConnectionLabel: '3만회',
    when: 'GENIUS Act 통과 직후',
    keywordCount: 2,
    type: 'A',
    tier: 'LARGE',
    persona: {
      who: {
        value: '미국 정책 모니터링자 + 글로벌 시각자, 30-50대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '미국 GENIUS Act 통과 후 한국은 어떻게 따라가는지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '한국 빗썸이 가는 길',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'GENIUS Act 통과 직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'genius act', volumeAnnual: 26800, volumeLabel: '2.7만회', trend: 320 },
      { keyword: '미국 스테이블 법안', volumeAnnual: 3500, volumeLabel: '3,500회', trend: 280 },
    ],
    journey: {
      incoming: [
        'GENIUS Act → 미국 입법 → [한국 대응]',
      ],
      outgoing: [
        '뉴스만 봄 → 행동 없음',
      ],
      gap: '미국 입법 → 한국 빗썸 대응 연결 콘텐츠 부족',
    },
    bridge: {
      message: '미국 입법, 한국 빗썸이 가는 길',
      assetIds: [5],
      products: ['USDT', 'USDC', 'KRWB'],
    },
  },
  // ============================================================
  // 영토 08 — 직장인 재테크·자산 다각화 (5개)
  // ============================================================
  {
    id: 'salary-1',
    territoryId: 'salaryman-finance',
    emoji: '💰',
    title: '13월 월급 5가지 선택',
    who: '50-100만원 환급금 받은 30-40대 직장인',
    quote: '13월 월급의 5가지 선택 — 그중 한 자리는 빗썸',
    broadContext: 270000,
    broadContextLabel: '27만회',
    cryptoConnection: 10000,
    cryptoConnectionLabel: '약 1만회',
    when: '1-2월 환급금 수령 시',
    keywordCount: 3,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '50-100만원 환급금 받은 30-40대 직장인',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '13월 월급 받았는데 옷·여행에 쓸지 자산에 넣을지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '환급금 5가지 옵션 (소비·예금·주식·ETF·디지털)',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '1-2월 환급금 수령 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '연말정산 환급', volumeAnnual: 268310, volumeLabel: '27만회', trend: -91 },
      { keyword: '13월 월급', volumeAnnual: 1830, volumeLabel: '1,830회', trend: -50 },
      { keyword: '환급금 사용', volumeAnnual: 20000, volumeLabel: '2만회', trend: 15 },
    ],
    journey: {
      incoming: [
        '환급금 수령 → 활용 방법 → [5가지 옵션]',
      ],
      outgoing: [
        '소비에만 쓰임 → 자산 형성 안 됨',
      ],
      gap: '환급금 5번째 옵션 = 디지털 자산 시각 부재',
    },
    bridge: {
      message: '13월 월급의 5가지 선택 — 그중 한 자리는 빗썸',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'salary-2',
    territoryId: 'salaryman-finance',
    emoji: '🎯',
    title: '청년도약 5년 만기 5천만원',
    who: '청년도약 가입 4-5년차',
    quote: '5년 모은 5천만원, 그 다음 자리',
    broadContext: 300000,
    broadContextLabel: '30만회',
    cryptoConnection: 12000,
    cryptoConnectionLabel: '약 1.2만회',
    when: '청년도약 만기 4-5년차',
    keywordCount: 3,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '청년도약 가입 4-5년차, 20-30대',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '5년 모은 5천만원 — 그 다음 자산은',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '만기 자금 다각화 옵션',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '청년도약 만기 4-5년차',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '청년도약', volumeAnnual: 250000, volumeLabel: '25만회', trend: 20 },
      { keyword: '청년도약 만기', volumeAnnual: 30000, volumeLabel: '3만회', trend: 80 },
      { keyword: '청년도약 5천만원', volumeAnnual: 10000, volumeLabel: '1만회', trend: 60 },
    ],
    journey: {
      incoming: [
        '청년도약 만기 → 5천만원 → [다음 자산]',
      ],
      outgoing: [
        '예금만 → 인플레 부담',
      ],
      gap: '만기 자금의 디지털 자산 비중 시각 부재',
    },
    bridge: {
      message: '5년 모은 5천만원, 그 다음 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'salary-3',
    territoryId: 'salaryman-finance',
    emoji: '📊',
    title: '월급 5분할 — 디지털 5%',
    who: '월급 분배 검색자 (30대 직장인)',
    quote: '월급 5분할 — 디지털 자산 5%',
    broadContext: 2000,
    broadContextLabel: '2,000회',
    cryptoConnection: 800,
    cryptoConnectionLabel: '약 800회',
    when: '월급 분배 새 가이드 검색 시',
    keywordCount: 3,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '월급 분배 검색자, 30대 직장인',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '월급 분배 4분할 (생활비·예금·주식·여행) → 다각화 부족',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '5분할 (생활비·예금·주식·ETF·디지털)',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '월급 분배 새 가이드 검색 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '월급 분배', volumeAnnual: 1790, volumeLabel: '1,790회', trend: 15 },
      { keyword: '월급 5분할', volumeAnnual: 500, volumeLabel: '500회', trend: 80 },
      { keyword: '가계부 분배', volumeAnnual: 3000, volumeLabel: '3,000회', trend: 25 },
    ],
    journey: {
      incoming: [
        '월급 분배 → 4분할 → [5번째 자산]',
      ],
      outgoing: [
        '4분할에서 멈춤 → 디지털 부재',
      ],
      gap: '5번째 자산 = 디지털 시각 부재',
    },
    bridge: {
      message: '월급 5분할 — 디지털 자산 5%',
      assetIds: [6],
      products: ['비트코인'],
    },
  },
  {
    id: 'salary-4',
    territoryId: 'salaryman-finance',
    emoji: '💬',
    title: '블라인드 자산 인증',
    who: '블라인드 사용 30-40대 자산 인증/자랑 시청자',
    quote: '블라인드 자산 게시판의 빗썸 자리',
    broadContext: 500000,
    broadContextLabel: '50만회',
    cryptoConnection: 20000,
    cryptoConnectionLabel: '약 2만회',
    when: '자산 자랑 콘텐츠 시청',
    keywordCount: 3,
    type: 'B',
    tier: 'MEGA',
    persona: {
      who: {
        value: '블라인드 사용 30-40대 자산 인증/자랑 시청자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '자산 자랑할 때 부동산·주식만 인증 — 디지털 자산 시각 부재',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '디지털 자산 포함 다각화 자산 인증',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '자산 자랑 콘텐츠 시청',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '블라인드 자산', volumeAnnual: 300000, volumeLabel: '30만회', trend: 12 },
      { keyword: '직장인 자산', volumeAnnual: 150000, volumeLabel: '15만회', trend: 15 },
      { keyword: '자산 인증', volumeAnnual: 50000, volumeLabel: '5만회', trend: 8 },
    ],
    journey: {
      incoming: [
        '블라인드 자산 게시판 → 자산 비교 → [디지털 자산 포함]',
      ],
      outgoing: [
        '부동산·주식만 자랑 → 디지털 부재',
      ],
      gap: '자산 인증에 디지털 자산 포함 시각 부재',
    },
    bridge: {
      message: '블라인드 자산 게시판의 빗썸 자리',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'salary-5',
    territoryId: 'salaryman-finance',
    emoji: '🎓',
    title: '사회초년생 자산관리 디시',
    who: '20-30대 사회초년생 자산 형성자',
    quote: '사회초년생 디시는 이미 코인을 본다',
    broadContext: 8000,
    broadContextLabel: '8천회 (디시 광범위 50만회 풀)',
    cryptoConnection: 6000,
    cryptoConnectionLabel: '약 6천회',
    when: '사회초년생 자산 형성 시작',
    keywordCount: 3,
    type: 'A',
    tier: 'MEGA',
    persona: {
      who: {
        value: '20-30대 사회초년생 자산 형성자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '사회초년생 1000만원으로 1억 만들기 — 코인 무서움 vs 옆 사람들은 다 하고 있음',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '안전한 거래소에서 5% 비중 시작',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '사회초년생 자산 형성 시작',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '사회초년생 재테크', volumeAnnual: 2430, volumeLabel: '2,430회', trend: 15 },
      { keyword: '1000만원 굴리기', volumeAnnual: 4708, volumeLabel: '4,708회', trend: 40 },
      { keyword: '사회초년생 자산관리 디시', volumeAnnual: 1000, volumeLabel: '1,000회', trend: 60 },
    ],
    journey: {
      incoming: [
        '사회초년생 재테크 → 1000만원 굴리기 → [디시 코인]',
        '디시 자산관리 → 테슬라 코인 디시 → [거래소]',
      ],
      outgoing: [
        '예금만 → 자산 형성 느림',
      ],
      gap: '사회초년생 디시 클러스터에 이미 "테슬라 코인 디시·비트코인 숏 ETF 디시" 존재, 빗썸 거래소 시각 공백',
    },
    bridge: {
      message: '사회초년생 디시는 이미 코인을 본다',
      assetIds: [2, 3],
      products: ['비트코인', '이더리움'],
    },
  },
  // ============================================================
  // 영토 10 — 글로벌 송금·환전 (5개)
  // ============================================================
  {
    id: 'remit-1',
    territoryId: 'global-remittance',
    emoji: '🎒',
    title: '워홀러 100만원 송금 4경로',
    who: '워킹홀리데이 가는 20대 + 100만원 송금자',
    quote: '워홀 100만원, 4가지 경로 — 그중 USDT',
    broadContext: 15000,
    broadContextLabel: '1.5만회',
    cryptoConnection: 5000,
    cryptoConnectionLabel: '약 5천회',
    when: '워홀 출국 직전 송금',
    keywordCount: 3,
    type: 'B',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '워킹홀리데이 가는 20대 + 100만원 송금자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '100만원 워홀 송금 — 와이즈·한패스·은행·USDT 어떤 경로가 빠르고 싼지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '4경로 수수료·시간 비교',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '워홀 출국 직전 송금',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '워홀러 송금', volumeAnnual: 8000, volumeLabel: '8천회', trend: 25 },
      { keyword: '워홀 자산', volumeAnnual: 3000, volumeLabel: '3,000회', trend: 30 },
      { keyword: '100만원 송금', volumeAnnual: 5000, volumeLabel: '5,000회', trend: 15 },
    ],
    journey: {
      incoming: [
        '워홀 출국 → 송금 경로 → [4가지 비교]',
      ],
      outgoing: [
        '은행만 사용 → 수수료 부담',
      ],
      gap: 'USDT가 4번째 경로라는 시각 부재',
    },
    bridge: {
      message: '워홀 100만원, 4가지 경로 — 그중 USDT',
      assetIds: [5, 4],
      products: ['USDT'],
    },
  },
  {
    id: 'remit-2',
    territoryId: 'global-remittance',
    emoji: '🚀',
    title: '한패스 +637% 폭증 다음',
    who: '한패스 신규 사용자',
    quote: '한패스 +637% 폭증 — 다음은 스테이블코인',
    broadContext: 489000,
    broadContextLabel: '49만회 (+637%)',
    cryptoConnection: 30000,
    cryptoConnectionLabel: '약 3만회',
    when: '한패스 사용 직후',
    keywordCount: 3,
    type: 'B',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '한패스 신규 사용자, 20-40대 글로벌 송금자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '한패스 +637% 폭증 후 다음 자산 이동 옵션',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '핀테크 송금 다음 단계 = 스테이블코인',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '한패스 사용 직후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '한패스', volumeAnnual: 489320, volumeLabel: '49만회', trend: 637 },
      { keyword: '한패스 송금', volumeAnnual: 50000, volumeLabel: '5만회', trend: 280 },
      { keyword: '한패스 환율', volumeAnnual: 20000, volumeLabel: '2만회', trend: 180 },
    ],
    journey: {
      incoming: [
        '한패스 신규 → 송금 사용 → [다음 단계]',
      ],
      outgoing: [
        '한패스만 사용 → 스테이블 시각 부재',
      ],
      gap: '핀테크 송금 다음 단계가 스테이블코인이라는 인식 부재',
    },
    bridge: {
      message: '한패스 +637% 폭증 — 다음은 스테이블코인',
      assetIds: [5],
      products: ['USDT', 'USDC'],
    },
  },
  {
    id: 'remit-3',
    territoryId: 'global-remittance',
    emoji: '🏦',
    title: '카카오뱅크 스테이블코인 + 빗썸',
    who: '카카오뱅크 사용자 + 한국 핀테크 미래 시각자',
    quote: '카뱅 스테이블코인 + 빗썸 — 한국 핀테크의 미래',
    broadContext: 44000,
    broadContextLabel: '4.4만회',
    cryptoConnection: 12192,
    cryptoConnectionLabel: '1.2만회',
    when: '카뱅 스테이블 발표 시기',
    keywordCount: 2,
    type: 'A',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '카카오뱅크 사용자 + 한국 핀테크 미래 시각자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '카카오뱅크 스테이블코인 발행 발표 후 어떻게 사용하는지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '카뱅 스테이블 + 빗썸 사용법',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '카뱅 스테이블 발표 시기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '카카오뱅크 해외송금', volumeAnnual: 31000, volumeLabel: '3.1만회', trend: 35 },
      { keyword: '카카오뱅크 스테이블코인', volumeAnnual: 12192, volumeLabel: '1.2만회', trend: 240 },
    ],
    journey: {
      incoming: [
        '카뱅 스테이블 뉴스 → 사용 방법 → [빗썸 연결]',
      ],
      outgoing: [
        '뉴스만 봄 → 행동 없음',
      ],
      gap: '카뱅 스테이블과 빗썸 연결 시각 부재',
    },
    bridge: {
      message: '카뱅 스테이블코인 + 빗썸 — 한국 핀테크의 미래',
      assetIds: [5, 4],
      products: ['USDT', 'USDC', 'KRWB'],
    },
  },
  {
    id: 'remit-4',
    territoryId: 'global-remittance',
    emoji: '🎓',
    title: '유학생 글로벌 자산',
    who: '유학 가는 20-30대 + 가족 송금자',
    quote: '유학생 자산 — 4국 통화 한 곳에',
    broadContext: 3000,
    broadContextLabel: '3,000회',
    cryptoConnection: 1000,
    cryptoConnectionLabel: '약 1천회',
    when: '유학 출국 직전 + 정기 송금',
    keywordCount: 3,
    type: 'B',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '유학 가는 20-30대 + 가족 송금자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '4국 통화 가족·유학생 자산 한 곳에 안 모임',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '4국 통화 한 곳 자산 운용',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '유학 출국 직전 + 정기 송금',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '유학생 송금', volumeAnnual: 2070, volumeLabel: '2,070회', trend: 25 },
      { keyword: '유학생 자산', volumeAnnual: 1500, volumeLabel: '1,500회', trend: 35 },
      { keyword: '유학생 환전', volumeAnnual: 5000, volumeLabel: '5,000회', trend: 15 },
    ],
    journey: {
      incoming: [
        '유학 송금 → 4국 통화 → [한 곳 운용]',
      ],
      outgoing: [
        '은행 송금만 → 4국 분산',
      ],
      gap: '4국 통화 한 곳 운용 솔루션 시각 부재',
    },
    bridge: {
      message: '유학생 자산 — 4국 통화 한 곳에',
      assetIds: [5],
      products: ['USDT', 'USDC'],
    },
  },
  {
    id: 'remit-5',
    territoryId: 'global-remittance',
    emoji: '⚡',
    title: '빗썸 → 바이낸스 USDT 송금',
    who: '빗썸 사용자 → 해외 거래소 자산 이동자',
    quote: '빗썸에서 바이낸스로 — USDT 즉시',
    broadContext: 10000,
    broadContextLabel: '1만회',
    cryptoConnection: 10000,
    cryptoConnectionLabel: '1만회 (직접)',
    when: '해외 거래소 자산 이동 시',
    keywordCount: 3,
    type: 'A',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '빗썸 사용자 → 해외 거래소 자산 이동자, 코인 중급자',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '한국 거래소 → 해외 거래소 자산 이동 시 USDT가 가장 빠른지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: 'USDT 즉시 송금',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '해외 거래소 자산 이동 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '빗썸 바이낸스', volumeAnnual: 5000, volumeLabel: '5,000회', trend: 50 },
      { keyword: '거래소 usdt 송금', volumeAnnual: 3000, volumeLabel: '3,000회', trend: 80 },
      { keyword: '거래소 출금', volumeAnnual: 30000, volumeLabel: '3만회', trend: 15 },
    ],
    journey: {
      incoming: [
        '한국 거래소 → 해외 거래소 → [USDT 송금]',
      ],
      outgoing: [
        '은행 송금만 → 시간 지연',
      ],
      gap: 'USDT 즉시 송금 시각 공백',
    },
    bridge: {
      message: '빗썸에서 바이낸스로 — USDT 즉시',
      assetIds: [5, 4],
      products: ['USDT'],
    },
  },
  // ============================================================
  // 영토 09 — 다음 세대·자녀 자산 (4개) — 재정의 (자산 운용자만)
  // ============================================================
  {
    id: 'kid-1',
    territoryId: 'next-gen-asset',
    emoji: '👨‍👩‍👧',
    title: '자녀 주식 계좌 운용자',
    who: '자녀 명의 주식 계좌 운용 30-40대 부모',
    quote: '자녀 주식 계좌 — 5번째 자산',
    broadContext: 62000,
    broadContextLabel: '6.2만회',
    cryptoConnection: 3000,
    cryptoConnectionLabel: '약 3천회',
    when: '자녀 주식 계좌 운용 시작 후',
    keywordCount: 3,
    type: 'B',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '자녀 명의 주식 계좌 운용 30-40대 부모',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '자녀 주식 계좌 운용하는데 미국 주식·ETF 외 다른 자산은',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '자녀 자산 5번째 옵션',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '자녀 주식 계좌 운용 시작 후',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '자녀 주식 계좌', volumeAnnual: 44600, volumeLabel: '4.5만회', trend: 25 },
      { keyword: '자녀 주식 증여', volumeAnnual: 18000, volumeLabel: '1.8만회', trend: 35 },
      { keyword: '자녀 증권계좌 증여', volumeAnnual: 790, volumeLabel: '790회', trend: 60 },
    ],
    journey: {
      incoming: [
        '자녀 주식 계좌 → 운용 → [5번째 자산]',
      ],
      outgoing: [
        '주식만 운용 → 디지털 부재',
      ],
      gap: '자녀 자산 5번째 옵션 = 디지털 시각 부재',
    },
    bridge: {
      message: '자녀 주식 계좌 — 5번째 자산',
      assetIds: [6],
      products: ['비트코인', '이더리움'],
    },
  },
  {
    id: 'kid-2',
    territoryId: 'next-gen-asset',
    emoji: '📈',
    title: 'ETF 증여 +194% 폭증',
    who: 'ETF 증여 검색자',
    quote: 'ETF 증여 +194% — 다음은 디지털 자산',
    broadContext: 2200,
    broadContextLabel: '2,200회 (+194%)',
    cryptoConnection: 500,
    cryptoConnectionLabel: '약 500회',
    when: 'ETF 증여 검색 시',
    keywordCount: 3,
    type: 'B',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: 'ETF 증여 검색자, 30-40대 부모',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: 'ETF 증여 가능 → 디지털 자산도 증여 가능한지',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '디지털 자산 증여 가이드',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: 'ETF 증여 검색 시',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: 'etf 증여', volumeAnnual: 1760, volumeLabel: '1,760회', trend: 80 },
      { keyword: '자녀 etf 증여', volumeAnnual: 466, volumeLabel: '466회', trend: 194 },
      { keyword: 'isa 계좌 증여', volumeAnnual: 360, volumeLabel: '360회', trend: 120 },
    ],
    journey: {
      incoming: [
        'ETF 증여 +194% → 다음 자산 증여 → [디지털 가이드]',
      ],
      outgoing: [
        'ETF만 증여 → 디지털 부재',
      ],
      gap: 'ETF 증여 다음 = 디지털 자산 증여 시각 부재',
    },
    bridge: {
      message: 'ETF 증여 +194% — 다음은 디지털 자산',
      assetIds: [6],
      products: ['비트코인 ETF'],
    },
  },
  {
    id: 'kid-3',
    territoryId: 'next-gen-asset',
    emoji: '👶',
    title: '부모급여·아동수당 자녀 자산화',
    who: '부모급여·아동수당 받는 30대 초보 부모',
    quote: '한 달 부모급여 — 자녀 디지털 자산 한 자리',
    broadContext: 15000,
    broadContextLabel: '1.5만회',
    cryptoConnection: 500,
    cryptoConnectionLabel: '약 500회',
    when: '부모급여 수령 시기',
    keywordCount: 3,
    type: 'B',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '부모급여·아동수당 받는 30대 초보 부모',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '한 달 부모급여 80만원 — 통장에만 두지 않고 자녀 자산화',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '자녀 명의 디지털 자산 적립',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '부모급여 수령 시기',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '부모급여 증여세', volumeAnnual: 4070, volumeLabel: '4,070회', trend: 35 },
      { keyword: '아동수당 증여세', volumeAnnual: 10570, volumeLabel: '1.1만회', trend: 45 },
      { keyword: '양육수당 증여세', volumeAnnual: 257, volumeLabel: '257회', trend: 60 },
    ],
    journey: {
      incoming: [
        '부모급여 수령 → 자산화 → [디지털 자산]',
      ],
      outgoing: [
        '통장에만 보관 → 자산 형성 부재',
      ],
      gap: '부모급여의 자녀 디지털 자산화 시각 부재',
    },
    bridge: {
      message: '한 달 부모급여 — 자녀 디지털 자산 한 자리',
      assetIds: [6, 3],
      products: ['비트코인'],
    },
  },
  {
    id: 'kid-4',
    territoryId: 'next-gen-asset',
    emoji: '🌍',
    title: '자녀 미국 주식 증여자',
    who: '자녀에게 미국 주식 증여하는 30-40대 부모',
    quote: '자녀 미국 주식 옆 — 글로벌 디지털 자산',
    broadContext: 1400,
    broadContextLabel: '1,400회',
    cryptoConnection: 300,
    cryptoConnectionLabel: '약 300회',
    when: '자녀 미국 주식 증여 시점',
    keywordCount: 3,
    type: 'B',
    tier: 'STRATEGIC',
    persona: {
      who: {
        value: '자녀에게 미국 주식 증여하는 30-40대 부모',
        evidence: 'Cluster Finder · 페르소나 클러스터링',
      },
      pain: {
        value: '자녀에게 글로벌 자산 시각 가르치고 싶음 — 미국 주식 외',
        evidence: 'Path Finder · 검색 경로 분석',
      },
      need: {
        value: '자녀 글로벌 자산 시각 5번째 옵션',
        evidence: 'Cluster Finder · 의도 클러스터링',
      },
      when: {
        value: '자녀 미국 주식 증여 시점',
        evidence: 'Keyword Info · 시즌·맥락 패턴',
      },
    },
    keywords: [
      { keyword: '자녀 미국 주식 증여', volumeAnnual: 240, volumeLabel: '240회', trend: 80 },
      { keyword: '자녀 해외주식 증여', volumeAnnual: 385, volumeLabel: '385회', trend: 65 },
      { keyword: '신생아 주식 증여', volumeAnnual: 510, volumeLabel: '510회', trend: 90 },
    ],
    journey: {
      incoming: [
        '자녀 미국 주식 증여 → 글로벌 자산 → [디지털 자산]',
      ],
      outgoing: [
        '미국 주식만 증여 → 디지털 부재',
      ],
      gap: '글로벌 자산 시각 5번째 = 디지털 자산 부재',
    },
    bridge: {
      message: '자녀 미국 주식 옆 — 글로벌 디지털 자산',
      assetIds: [5, 6],
      products: ['비트코인', '이더리움'],
    },
  },
];

export function getOpportunityById(id: string): Opportunity | undefined {
  return OPPORTUNITIES.find((o) => o.id === id);
}

export function getOpportunitiesByTerritory(territoryId: string): Opportunity[] {
  return OPPORTUNITIES.filter((o) => o.territoryId === territoryId);
}
