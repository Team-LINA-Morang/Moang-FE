export interface CoverageModule {
  name: string
  amount: string
  description: string
  details: {
    coverage: string
    exclusions: string
    claimDocs: string
  }
}

export interface AnimalAnalysis {
  animal: string
  emoji: string
  title: string
  personality: string
  snsFeeds: string
  fact: string
}

export interface InsuranceProduct {
  name: string
  description: string
  price: string
}

export interface PersonaData {
  id: string
  name: string
  category: string
  activityType: string
  productName: string
  coverages: CoverageModule[]
  animal: AnimalAnalysis
  product: InsuranceProduct
  aiAdvice: string
}

export const PERSONAS: PersonaData[] = [
  {
    id: "bong-jaewoo",
    name: "봉재우",
    category: "도시 여행자/자전거",
    activityType: "도심 자전거 라이딩",
    productName: "[AI 맞춤] 도시 탐험가 안심 보험",
    coverages: [
      {
        name: "해외상해",
        amount: "3,000만원",
        description: "해외 여행 중 발생한 상해 보장",
        details: {
          coverage: "해외 체류 중 급격하고 우연한 외래의 사고로 인한 상해 발생 시 가입금액 3,000만원 지급.",
          exclusions: "피보험자의 고의, 자해, 형법상 범죄행위, 위험한 스포츠 활동 중 발생한 사고는 제외됩니다.",
          claimDocs: "진단서, 의료비 영수증, 여권 사본, 항공권 사본",
        },
      },
      {
        name: "일상배상책임",
        amount: "1억원",
        description: "타인에게 손해를 끼쳤을 때 배상 보장",
        details: {
          coverage: "일상생활 중 타인의 신체나 재물에 손해를 끼쳐 법률상 배상책임을 부담할 경우 최대 1억원 지급.",
          exclusions: "계약자나 피보험자의 고의, 직업활동 중 발생한 손해, 자동차 사고는 제외됩니다.",
          claimDocs: "손해배상 청구서, 합의서, 사고 증명서류",
        },
      },
    ],
    animal: {
      animal: "다람쥐",
      emoji: "🐿️",
      title: "자전거 타는 민첩한 다람쥐",
      personality: "도심 속을 누비는 탐험가! 언제 어디서나 새로운 골목과 숨겨진 명소를 찾아다니는 호기심 많은 스타일입니다. 빠르게 움직이지만 안전은 늘 챙기는 센스가 있어요.",
      snsFeeds: "도심 자전거 라이딩 인증샷, 숨은 카페 탐방, 해외 도시 스냅, 새벽 한강 풍경, 감각적인 스트리트 패션.",
      fact: "도시의 모든 길이 당신의 런웨이, 예상치 못한 순간도 보험이 함께합니다.",
    },
    product: {
      name: "[AI 맞춤] 도시 탐험가 안심 보험",
      description: "도심 자전거 라이딩과 해외여행 중 발생할 수 있는 상해와 배상책임을 보장합니다.",
      price: "1,850",
    },
    aiAdvice: "님의 SNS 피드를 분석한 결과, 도심 속 자전거 라이딩과 해외 여행을 즐기시는 것으로 파악됩니다. 이에 맞춰 해외상해와 일상배상책임 보장을 강화한 맞춤 보험을 설계했습니다.",
  },
  {
    id: "han-jaewon",
    name: "한재원",
    category: "고위험 레저/스키",
    activityType: "스키/스노보드",
    productName: "[AI 맞춤] 익스트림 레저 안심 보험",
    coverages: [
      {
        name: "레저상해",
        amount: "5,000만원",
        description: "스키/스노보드 등 레저 활동 중 상해 보장",
        details: {
          coverage: "스키, 스노보드 등 지정 레저 활동 중 발생한 상해 사고로 인한 치료비 및 사망 시 가입금액 5,000만원 지급.",
          exclusions: "음주 상태에서의 활동, 안전수칙 미준수, 지정 구역 외 활동 중 발생한 사고는 제외됩니다.",
          claimDocs: "진단서, 의료비 영수증, 리프트권 사본, 사고 경위서",
        },
      },
      {
        name: "골절강화",
        amount: "100만원",
        description: "골절 진단 시 추가 보장금 지급",
        details: {
          coverage: "레저 활동 중 골절(치아파절 제외) 진단 시 회당 100만원 추가 지급.",
          exclusions: "기존 질환으로 인한 병적 골절, 치아 및 치조골 골절은 보장하지 않습니다.",
          claimDocs: "골절 진단서, X-ray 판독 결과, 의료비 영수증",
        },
      },
    ],
    animal: {
      animal: "설표",
      emoji: "🐆",
      title: "눈 위를 달리는 용맹한 설표",
      personality: "모험을 즐기는 에너지형! 높은 곳에서 내려다보는 짜릿함과 속도감을 사랑하는 당신. 두려움보다 도전이 앞서는 타입이에요.",
      snsFeeds: "스키장 슬로프 영상, 고글 셀카, 설원 위 점프샷, 리프트에서 찍은 풍경, 핫초코와 함께하는 휴식 인증.",
      fact: "스릴을 즐기는 당신, 예상치 못한 부상도 든든하게 보장받으세요.",
    },
    product: {
      name: "[AI 맞춤] 익스트림 레저 안심 보험",
      description: "스키/스노보드 등 고위험 레저 활동 중 발생할 수 있는 상해와 골절을 집중 보장합니다.",
      price: "2,450",
    },
    aiAdvice: "님의 SNS 피드를 분석한 결과, 스키장과 고위험 레저 활동을 자주 즐기시는 것으로 파악됩니다. 이에 맞춰 레저상해와 골절강화 보장을 강화한 맞춤 보험을 설계했습니다.",
  },
  {
    id: "hyun-minseo",
    name: "현민서",
    category: "전문 등산/아웃도어",
    activityType: "고산 등반",
    productName: "[AI 맞춤] 고산 등반 전문 보험",
    coverages: [
      {
        name: "고산등반상해",
        amount: "7,000만원",
        description: "고산 등반 중 발생한 상해 보장",
        details: {
          coverage: "해발 3,000m 이상 고산 등반 중 발생한 급격하고 우연한 외래의 사고로 인한 상해 시 가입금액 7,000만원 지급.",
          exclusions: "전문 산악인 자격으로 활동 중 발생한 사고, 등반 금지 구역 진입 시 사고는 제외됩니다.",
          claimDocs: "진단서, 등반 일정표, 입산 신고서 사본, 구조 기록",
        },
      },
      {
        name: "조난수색비",
        amount: "500만원",
        description: "조난 시 수색/구조 비용 보장",
        details: {
          coverage: "산악 활동 중 조난되어 수색/구조가 필요한 경우 실제 발생한 비용 최대 500만원 지급.",
          exclusions: "고의로 조난 상황을 만든 경우, 음주 상태에서의 활동 중 발생한 조난은 제외됩니다.",
          claimDocs: "구조 비용 영수증, 구조대 출동 확인서, 사고 경위서",
        },
      },
    ],
    animal: {
      animal: "산양",
      emoji: "🐐",
      title: "정상을 정복하는 끈기 있는 산양",
      personality: "한계를 극복하는 열정파! 어떤 험난한 코스도 두렵지 않고, 정상에서 느끼는 성취감을 위해 묵묵히 나아가는 스타일입니다.",
      snsFeeds: "새벽 산행 인증, 정상 도달 인증샷, 등산 장비 리뷰, 산 위에서 끓인 라면 사진, 일출/일몰 타임랩스.",
      fact: "정상을 향한 도전, 만약의 상황에도 안전하게 하산할 수 있도록 보장합니다.",
    },
    product: {
      name: "[AI 맞춤] 고산 등반 전문 보험",
      description: "전문 등산 및 아웃도어 활동 중 발생할 수 있는 고위험 상해와 조난 상황을 보장합니다.",
      price: "3,200",
    },
    aiAdvice: "님의 SNS 피드를 분석한 결과, 고산 등반과 전문 아웃도어 활동을 즐기시는 것으로 파악됩니다. 이에 맞춰 고산등반상해와 조난수색비 보장을 강화한 맞춤 보험을 설계했습니다.",
  },
  {
    id: "kim-gyuri",
    name: "김규리",
    category: "드라이빙/감성여행",
    activityType: "드라이브 여행",
    productName: "[AI 맞춤] 감성 드라이버 안심 보험",
    coverages: [
      {
        name: "교통사고처리지원",
        amount: "2,000만원",
        description: "교통사고 발생 시 합의금/벌금 지원",
        details: {
          coverage: "자동차 운전 중 교통사고로 형사합의금 또는 벌금이 발생한 경우 최대 2,000만원 지급.",
          exclusions: "음주/무면허 운전, 뺑소니, 12대 중과실 사고(단, 피해자 합의 시 일부 보장)는 제외됩니다.",
          claimDocs: "교통사고 사실 확인원, 합의서, 벌금 납부 영수증",
        },
      },
      {
        name: "휴대품손해",
        amount: "100만원",
        description: "여행 중 소지품 분실/파손 보장",
        details: {
          coverage: "여행 중 휴대품의 도난, 분실, 파손 발생 시 실제 손해액 최대 100만원 지급.",
          exclusions: "현금, 유가증권, 콘택트렌즈, 의치 등은 보장 대상에서 제외됩니다.",
          claimDocs: "도난/분실 신고서, 구매 영수증, 파손 사진",
        },
      },
    ],
    animal: {
      animal: "백조",
      emoji: "🦢",
      title: "여유를 즐기는 우아한 백조",
      personality: "일상의 아름다움을 찾는 스타일! 창밖으로 스쳐가는 풍경을 감상하며 여유로운 드라이브를 즐기는 당신. 감성과 안정감을 동시에 추구해요.",
      snsFeeds: "드라이브 스루 카페 인증, 차 안에서 찍은 풍경 사진, 감성 플레이리스트 공유, 소품샵 탐방, 빈티지 소품 컬렉션.",
      fact: "여유로운 여정 속에서도 소중한 것들을 지킬 수 있도록 보장합니다.",
    },
    product: {
      name: "[AI 맞춤] 감성 드라이버 안심 보험",
      description: "드라이빙과 감성 여행 중 발생할 수 있는 교통사고와 휴대품 손해를 보장합니다.",
      price: "1,650",
    },
    aiAdvice: "님의 SNS 피드를 분석한 결과, 감성적인 드라이브 여행과 소품 수집을 즐기시는 것으로 파악됩니다. 이에 맞춰 교통사고처리지원과 휴대품손해 보장을 강화한 맞춤 보험을 설계했습니다.",
  },
  {
    id: "yoon-sohee",
    name: "윤소희",
    category: "페스티벌/소셜",
    activityType: "페스티벌/대규모 행사",
    productName: "[AI 맞춤] 페스티벌 러버 안심 보험",
    coverages: [
      {
        name: "군중밀집사고",
        amount: "3,000만원",
        description: "대규모 행사 중 압사/밀집 사고 보장",
        details: {
          coverage: "페스티벌, 콘서트 등 대규모 행사 참가 중 군중 밀집으로 인한 상해 발생 시 가입금액 3,000만원 지급.",
          exclusions: "불법 집회 참가, 통제 구역 무단 진입 중 발생한 사고는 제외됩니다.",
          claimDocs: "진단서, 행사 티켓 사본, 사고 경위서, 언론 보도 자료",
        },
      },
      {
        name: "행사취소보장",
        amount: "50만원",
        description: "예매한 행사 취소 시 티켓비용 보장",
        details: {
          coverage: "천재지변, 주최측 귀책 사유로 행사가 취소된 경우 티켓 구매 비용 최대 50만원 환급.",
          exclusions: "개인 사정으로 인한 불참, 환불 가능한 티켓은 보장 대상에서 제외됩니다.",
          claimDocs: "티켓 구매 영수증, 행사 취소 공지문, 환불 불가 증빙",
        },
      },
    ],
    animal: {
      animal: "쿼카",
      emoji: "🐨",
      title: "축제를 즐기는 흥 많은 쿼카",
      personality: "사람들과 어울릴 때 가장 빛나는 타입! 음악과 환호 속에서 에너지를 얻고, 어디서든 친구를 만드는 사교적인 스타일이에요.",
      snsFeeds: "페스티벌 현장 영상, 티켓 인증샷, 친구들과의 단체 사진, 굿즈 컬렉션, 공연장 불빛 사진.",
      fact: "흥이 넘치는 순간들, 예상치 못한 상황에서도 안심하고 즐기세요.",
    },
    product: {
      name: "[AI 맞춤] 페스티벌 러버 안심 보험",
      description: "페스티벌과 대규모 행사 참가 중 발생할 수 있는 사고와 행사 취소 상황을 보장합니다.",
      price: "1,450",
    },
    aiAdvice: "님의 SNS 피드를 분석한 결과, 페스티벌과 대규모 행사를 자주 즐기시는 것으로 파악됩니다. 이에 맞춰 군중밀집사고와 행사취소 보장을 강화한 맞춤 보험을 설계했습니다.",
  },
  {
    id: "park-yena",
    name: "박예나",
    category: "국내여행/체험",
    activityType: "국내 여행/체험 활동",
    productName: "[AI 맞춤] 국내여행 체험 안심 보험",
    coverages: [
      {
        name: "국내여행상해",
        amount: "2,000만원",
        description: "국내 여행 중 발생한 상해 보장",
        details: {
          coverage: "국내 여행 중 급격하고 우연한 외래의 사고로 인한 상해 발생 시 가입금액 2,000만원 지급.",
          exclusions: "거주지 반경 50km 이내 활동, 일상 통근/통학 중 발생한 사고는 제외됩니다.",
          claimDocs: "진단서, 숙박 예약 확인서, 교통편 이용 증빙",
        },
      },
      {
        name: "식중독위로금",
        amount: "30만원",
        description: "여행 중 식중독 발생 시 위로금 지급",
        details: {
          coverage: "여행 중 식중독 진단을 받고 입원 또는 통원 치료 시 위로금 30만원 지급.",
          exclusions: "기존 위장 질환 악화, 자가 조리 음식으로 인한 식중독은 제외됩니다.",
          claimDocs: "식중독 진단서, 음식점 영수증, 치료비 영수증",
        },
      },
    ],
    animal: {
      animal: "여우",
      emoji: "🦊",
      title: "지도를 든 똑똑한 여우",
      personality: "꼼꼼하게 일상을 기록하는 체크리스트형! 여행 전 완벽한 계획을 세우고, 숨은 맛집과 체험 프로그램을 놓치지 않는 알뜰한 여행자예요.",
      snsFeeds: "여행 일정표 공유, 숨은 맛집 리뷰, 체험 프로그램 후기, 기념품 하울, 여행 가계부 인증.",
      fact: "완벽한 여행 계획, 예상치 못한 변수까지 대비해두세요.",
    },
    product: {
      name: "[AI 맞춤] 국내여행 체험 안심 보험",
      description: "국내 여행과 다양한 체험 활동 중 발생할 수 있는 상해와 식중독을 보장합니다.",
      price: "1,250",
    },
    aiAdvice: "님의 SNS 피드를 분석한 결과, 국내 여행과 다양한 체험 활동을 즐기시는 것으로 파악됩니다. 이에 맞춰 국내여행상해와 식중독위로금 보장을 강화한 맞춤 보험을 설계했습니다.",
  },
  {
    id: "kim-byul",
    name: "김별",
    category: "시티라이프/전시",
    activityType: "전시 관람/시티라이프",
    productName: "[AI 맞춤] 시티 아티스트 안심 보험",
    coverages: [
      {
        name: "전시장배상책임",
        amount: "5,000만원",
        description: "전시품 파손 시 배상책임 보장",
        details: {
          coverage: "미술관, 박물관 등 전시장에서 실수로 전시품을 파손하여 배상책임이 발생한 경우 최대 5,000만원 지급.",
          exclusions: "고의적인 파손, 음주 상태에서의 사고, 촬영 금지 구역에서의 촬영 중 발생한 사고는 제외됩니다.",
          claimDocs: "배상 청구서, 전시품 감정서, 입장권 사본, 사고 경위서",
        },
      },
      {
        name: "고가디지털기기파손",
        amount: "200만원",
        description: "카메라/태블릿 등 고가 기기 파손 보장",
        details: {
          coverage: "휴대 중인 카메라, 태블릿, 노트북 등 고가 디지털 기기의 파손 시 수리비 또는 대체 비용 최대 200만원 지급.",
          exclusions: "자연 마모, 소프트웨어 손상, 분실/도난은 보장 대상에서 제외됩니다.",
          claimDocs: "파손 사진, 구매 영수증, 수리 견적서",
        },
      },
    ],
    animal: {
      animal: "고양이",
      emoji: "🐱",
      title: "미술관을 거니는 고고한 고양이",
      personality: "나만의 취향이 확실한 예술가! 트렌디한 ��시와 독특한 공간을 찾아다니며 자신만의 감성을 채워가는 스타일이에요.",
      snsFeeds: "전시회 인증샷, 아트북 컬렉션, 감각적인 카페 인테리어, 플리마켓 탐방, 필름 카메라로 찍은 일상.",
      fact: "예술적 감성을 담은 순간들, 소중한 기기와 함께 안전하게 지키세요.",
    },
    product: {
      name: "[AI 맞춤] 시티 아티스트 안심 보험",
      description: "전시 관람과 시티라이프 중 발생할 수 있는 배상책임과 고가 기기 파손을 보장합니다.",
      price: "1,950",
    },
    aiAdvice: "님의 SNS 피드를 분석한 결과, 전시 관람과 감각적인 시티라이프를 즐기시는 것으로 파악됩니다. 이에 맞춰 전시장배상책임과 고가디지털기기파손 보장을 강화한 맞춤 보험을 설계했습니다.",
  },
]

// Default persona for "직접 보험 만들기" path
export const DEFAULT_DIRECT_COVERAGES: CoverageModule[] = [
  {
    name: "상해사망",
    amount: "5,000만원",
    description: "번지점프 중 사고로 인한 사망 보장",
    details: {
      coverage: "상해 사고로 사망 시 가입금액 5,000만원 지급.",
      exclusions: "피보험자의 고의, 자해, 형법상 범죄행위, 전문적인 등반이나 번지점프 등을 직업적으로 하는 동안의 사고는 제외됩니다. (단, 본 상품은 원데이 레저 특약으로 번지점프를 명시적으로 보장함)",
      claimDocs: "사망진단서, 사고 증명서류, 수익자 신분증 사본",
    },
  },
  {
    name: "골절진단비",
    amount: "50만원",
    description: "낙상/충격으로 인한 골절 진단 시 지급",
    details: {
      coverage: "상해로 골절(치아파절 제외) 진단 시 회당 50만원 지급.",
      exclusions: "치아, 치조골의 골절 및 병적 골절(골다공증으로 인한 골절 등)은 보장하지 않습니다.",
      claimDocs: "골절 진단서, 의료비 영수증, 신분증 사본",
    },
  },
  {
    name: "응급실 내원비",
    amount: "3만원",
    description: "사고 후 응급실 방문 시 실비 지급",
    details: {
      coverage: "상해로 응급실 내원하여 진료를 받은 경우 내원 1회당 3만원 지급.",
      exclusions: "단순 검진 목적의 응급실 방문, 음주 상태에서의 사고는 제외됩니다.",
      claimDocs: "응급실 진료 기록부, 의료비 영수증, 신분증 사본",
    },
  },
]

export const DEFAULT_DIRECT_PRODUCT: InsuranceProduct = {
  name: "[AI 맞춤] 번지점프 원데이 안심 보험",
  description: "번지점프 중 발생할 수 있는 골절 및 상해를 집중 보장합니다.",
  price: "1,250",
}
