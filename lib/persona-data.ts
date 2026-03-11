export interface CoverageModule {
  name: string
  amount: string
  description: string
  price: number // Daily price in KRW
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
  recommendedModules: CoverageModule[]
  animal: AnimalAnalysis
  product: InsuranceProduct
  aiAdvice: string
}

// Helper function to calculate total price (separable for future backend integration)
export function calculateTotal(modules: CoverageModule[]): number {
  return modules.reduce((sum, module) => sum + module.price, 0)
}

// Additional recommended modules for 번지점프 (default/direct)
export const BUNGEE_RECOMMENDED_MODULES: CoverageModule[] = [
  {
    name: "치아파절보장",
    amount: "100만원",
    description: "사고로 인한 치아 파절 시 치료비 보장",
    price: 180,
    details: {
      coverage: "상해로 치아 파절 진단 시 치료비 최대 100만원 지급.",
      exclusions: "기존 치과 질환, 충치로 인한 파절은 제외됩니다.",
      claimDocs: "치아 진단서, 치료비 영수증, 사고 경위서",
    },
  },
  {
    name: "트라우마위로금",
    amount: "50만원",
    description: "사고 후 심리적 트라우마 케어 비용",
    price: 120,
    details: {
      coverage: "상해 사고 후 PTSD 등 심리적 트라우마 진단 시 위로금 50만원 지급.",
      exclusions: "기존 정신과 질환 악화, 사고와 무관한 심리적 문제는 제외됩니다.",
      claimDocs: "정신건강의학과 진단서, 상담 기록, 사고 증명서류",
    },
  },
  {
    name: "고도공포증케어",
    amount: "30만원",
    description: "고도공포증 발현 시 상담/치료비 보장",
    price: 90,
    details: {
      coverage: "번지점프 등 고도 활동 후 고도공포증 발현 시 상담/치료비 최대 30만원 지급.",
      exclusions: "기존 공포증 진단자, 활동 전 발현된 증상은 제외됩니다.",
      claimDocs: "정신건강의학과 진단서, 상담 영수증",
    },
  },
  {
    name: "긴급구조비용",
    amount: "300만원",
    description: "사고 시 헬기/특수 구조 비용 보장",
    price: 280,
    details: {
      coverage: "레저 활동 중 사고로 헬기 또는 특수 구조가 필요한 경우 비용 최대 300만원 지급.",
      exclusions: "고의적 위험 행위, 통제 구역 이탈 중 발생한 사고는 제외됩니다.",
      claimDocs: "구조 비용 영수증, 구조대 출동 확인서",
    },
  },
  {
    name: "장비파손보장",
    amount: "50만원",
    description: "레저 장비 파손 시 수리/교체 비용",
    price: 100,
    details: {
      coverage: "활동 중 개인 레저 장비 파손 시 수리비 또는 교체 비용 최대 50만원 지급.",
      exclusions: "자연 마모, 분실/도난, 업체 제공 장비는 제외됩니다.",
      claimDocs: "파손 사진, 구매 영수증, 수리 견적서",
    },
  },
]

// 봉재우 추천 모듈
export const BONG_JAEWOO_RECOMMENDED: CoverageModule[] = [
  {
    name: "계절성질환진단",
    amount: "50만원",
    description: "열사병 또는 일사병 진단 시 보장",
    price: 700,
    details: {
      coverage: "보험기간 중 열사병 또는 일사병으로 진단된 경우 가입금액 50만원 지급.",
      exclusions: "의료기관의 객관적인 검사(혈액검사 등) 없이 단순 어지러움이나 피로감만 호소하는 경우 제외.",
      claimDocs: "보험금 청구서, 진단서",
    },
  },
  {
    name: "대중교통상해입원",
    amount: "1만원",
    description: "대중교통 이용 중 교통사고 입원비 보장",
    price: 300,
    details: {
      coverage: "대중교통 이용 중 교통사고로 인한 상해로 1일 이상 입원하여 치료를 받은 경우 (1일당 180일 한도) 1만원 지급.",
      exclusions: "무임승차, 부정 승차 중 사고 또는 승하차 질서 위반으로 본인이 사고를 유발한 경우, 렌터카, 전세버스 등 대중교통으로 인정되지 않는 수단 이용 시 제외.",
      claimDocs: "보험금 청구서, 입원치료 확인서",
    },
  },
  {
    name: "장시간착석혈전증",
    amount: "100만원",
    description: "심부정맥혈전증(DVT) 진단 시 보장",
    price: 500,
    details: {
      coverage: "장시간 착석으로 인한 심부정맥혈전증(DVT)을 진단받은 경우 가입금액 100만원 지급.",
      exclusions: "가입 전 진단받은 혈관 질환이나 수술 이력이 있는 경우 제외.",
      claimDocs: "보험금 청구서, 진단서",
    },
  },
  {
    name: "다중이용시설상해",
    amount: "10만원",
    description: "다중이용시설 내 상해 입원비 보장",
    price: 100,
    details: {
      coverage: "보험기간 중 다중이용시설에서 발생한 상해로 1일 이상 입원하여 치료를 받은 경우 가입금액 10만원 지급.",
      exclusions: "시설 내에서 본인의 범죄 행위나 싸움(폭행)으로 인해 상해 사고가 발생한 경우 제외.",
      claimDocs: "보험금 청구서, 입원치료 확인서",
    },
  },
  {
    name: "소음성난청진단",
    amount: "100만원",
    description: "중등도 이상 난청 진단 시 보장",
    price: 300,
    details: {
      coverage: "보험기간 중 소음에 노출되어 중등도 이상 난청을 진단받은 경우 가입금액 100만원 지급.",
      exclusions: "가입 전 이미 진행 중인 청력 손실이 확인되는 경우, 직업적으로 상시 소음에 노출되는 환경에서 직업병 성격의 난청이 발생한 경우 제외.",
      claimDocs: "보험금 청구서, 청력진단서",
    },
  },
  {
    name: "동행자사고배상",
    amount: "1억원",
    description: "외부 활동 중 타인 피해 배상 책임 보장",
    price: 1500,
    details: {
      coverage: "외부 활동 중 동행자 사고로 인해 타인에게 피해를 입힌 경우 가입금액 1억원 지급 (자기부담금 20만원).",
      exclusions: "살인, 폭행, 음주 등 형사 처벌 대상이 되는 고의적인 가해 행위로 인해 배상하는 경우 제외.",
      claimDocs: "보험금 청구서, 손해배상금 및 그 밖의 비용을 지급하였음을 증명하는 서류",
    },
  },
];

// 한재원 추천 모듈
export const HAN_JAEWON_RECOMMENDED: CoverageModule[] = [
  {
    name: "스키장충돌배상",
    amount: "3,000만원",
    description: "스키장에서 타인과 충돌 시 배상 보장",
    price: 350,
    details: {
      coverage: "스키장에서 타인과 충돌하여 배상책임이 발생한 경우 최대 3,000만원 지급.",
      exclusions: "고의적 충돌, 지정 코스 이탈 중 발생한 사고는 제외됩니다.",
      claimDocs: "배상 청구서, 사고 경위서, 리프트권 사본",
    },
  },
  {
    name: "무릎인대손상",
    amount: "200만원",
    description: "무릎 인대 손상 시 수술/치료비 보장",
    price: 280,
    details: {
      coverage: "레저 활동 중 무릎 인대 손상(전방십자인대 등) 진단 시 수술/치료비 최대 200만원 지급.",
      exclusions: "기존 무릎 질환 악화, 비레저 활동 중 발생한 손상은 제외됩니다.",
      claimDocs: "MRI 판독 결과, 진단서, 수술 기록",
    },
  },
  {
    name: "고글/장비분실",
    amount: "80만원",
    description: "스키 고글 및 장비 분실 시 보상",
    price: 120,
    details: {
      coverage: "스키장에서 고글, 장갑 등 개인 장비 분실 시 최대 80만원 보상.",
      exclusions: "보관 부주의, 렌탈 장비 분실은 제외됩니다.",
      claimDocs: "분실 신고서, 구매 영수증",
    },
  },
  {
    name: "저체온증진단",
    amount: "50만원",
    description: "저체온증 진단 시 치료비 및 위로금",
    price: 90,
    details: {
      coverage: "동계 레저 활동 중 저체온증 진단 시 치료비 및 위로금 50만원 지급.",
      exclusions: "적절한 방한 장비 미착용, 음주 상태에서의 활동은 제외됩니다.",
      claimDocs: "진단서, 기상 기록, 리프트권 사본",
    },
  },
  {
    name: "슬로프낙상위로",
    amount: "30만원",
    description: "슬로프 낙상 시 위로금 지급",
    price: 70,
    details: {
      coverage: "스키/보드 슬로프에서 낙상으로 치료가 필요한 경우 위로금 30만원 지급.",
      exclusions: "음주 상태, 상급자 코스 무리한 이용 중 사고는 제외됩니다.",
      claimDocs: "진단서, 리프트권 사본",
    },
  },
]

// 현민서 추천 모듈
export const HYUN_MINSEO_RECOMMENDED: CoverageModule[] = [
  {
    name: "벌쏘임/해충상해",
    amount: "100만원",
    description: "산행 중 벌쏘임/해충 피해 치료비",
    price: 150,
    details: {
      coverage: "등산 중 벌, 진드기 등 해충에 의한 상해 발생 시 치료비 최대 100만원 지급.",
      exclusions: "알레르기 기왕력 미고지, 방충 대비 미흡 시 발생한 피해는 제외됩니다.",
      claimDocs: "진단서, 등산 일정 증빙",
    },
  },
  {
    name: "독사교상치료",
    amount: "300만원",
    description: "독사에 물렸을 때 치료비 보장",
    price: 200,
    details: {
      coverage: "산행 중 독사에 물려 치료가 필요한 경우 치료비 최대 300만원 지급.",
      exclusions: "지정 등산로 이탈, 야간 산행 중 발생한 사고는 제외됩니다.",
      claimDocs: "진단서, 응급처치 기록, 등산 일정 증빙",
    },
  },
  {
    name: "야간산행구조",
    amount: "400만원",
    description: "야간 산행 중 조난 시 구조 비용",
    price: 320,
    details: {
      coverage: "야간 산행 중 조난되어 구조가 필요한 경우 비용 최대 400만원 지급.",
      exclusions: "입산 금지 시간 위반, 기상 경보 무시 중 발생한 조난은 제외됩니다.",
      claimDocs: "구조 비용 영수증, 입산 기록",
    },
  },
  {
    name: "등산화파손",
    amount: "40만원",
    description: "등산화 파손 시 교체 비용 보장",
    price: 60,
    details: {
      coverage: "산행 중 등산화 파손으로 교체가 필요한 경우 최대 40만원 지급.",
      exclusions: "자연 마모, 3년 이상 사용 장비는 제외됩니다.",
      claimDocs: "파손 사진, 구매 영수증",
    },
  },
  {
    name: "탈진/열사병케어",
    amount: "80만원",
    description: "탈진/열사병 발생 시 치료비 보장",
    price: 130,
    details: {
      coverage: "하계 산행 중 탈진 또는 열사병 진단 시 치료비 최대 80만원 지급.",
      exclusions: "폭염 경보 무시, 적절한 수분 섭취 미이행 시 발생한 증상은 제외됩니다.",
      claimDocs: "진단서, 기상 기록, 등산 일정 증빙",
    },
  },
]

// 김규리 추천 모듈
export const KIM_GYURI_RECOMMENDED: CoverageModule[] = [
  {
    name: "주차장문콕보장",
    amount: "50만원",
    description: "주차 중 문콕 피해 수리비 보장",
    price: 100,
    details: {
      coverage: "주차 중 타 차량에 의한 문콕 피해 발생 시 수리비 최대 50만원 지급.",
      exclusions: "가해자 특정 가능한 경우, 자차 보험 처리 가능한 경우는 제외됩니다.",
      claimDocs: "수리 견적서, 피해 사진, 주차 증빙",
    },
  },
  {
    name: "주행중유리파손",
    amount: "100만원",
    description: "주행 중 유리(전면/측면) 파손 보장",
    price: 150,
    details: {
      coverage: "주행 중 돌 튀김 등으로 차량 유리 파손 시 교체비 최대 100만원 지급.",
      exclusions: "고의적 파손, 기존 손상 확대는 제외됩니다.",
      claimDocs: "파손 사진, 수리 영수증",
    },
  },
  {
    name: "견인서비스확장",
    amount: "30만원",
    description: "차량 고장 시 견인 서비스 비용",
    price: 60,
    details: {
      coverage: "여행 중 차량 고장으로 견인이 필요한 경우 비용 최대 30만원 지급.",
      exclusions: "연료 부족, 정기 점검 미이행으로 인한 고장은 제외됩니다.",
      claimDocs: "견인 영수증, 정비 기록",
    },
  },
  {
    name: "졸음운전방지케어",
    amount: "20만원",
    description: "장거리 운전 시 휴게소 숙박비 지원",
    price: 40,
    details: {
      coverage: "장거리(200km 이상) 운전 시 졸음 방지를 위한 휴게소/모텔 숙박비 지원 최대 20만원.",
      exclusions: "음주 운전, 새벽(0시~5시) 의도적 주행은 제외됩니다.",
      claimDocs: "숙박 영수증, 운행 기록",
    },
  },
  {
    name: "차량내소지품도난",
    amount: "80만원",
    description: "차량 내 소지품 도난 시 보상",
    price: 120,
    details: {
      coverage: "차량 내 소지품 도난 피해 발생 시 최대 80만원 보상.",
      exclusions: "차량 미잠금 시 발생한 도난, 현금/유가증권은 제외됩니다.",
      claimDocs: "도난 신고서, 구매 영수증, 피해 사진",
    },
  },
]

// 윤소희 추천 모듈
export const YOON_SOHEE_RECOMMENDED: CoverageModule[] = [
  {
    name: "귀중품도난보장",
    amount: "150만원",
    description: "행사장 내 귀중품 도난 시 보상",
    price: 200,
    details: {
      coverage: "페스티벌/행사장 내에서 귀중품(시계, 액세서리 등) 도난 시 최대 150만원 보상.",
      exclusions: "분실, 놓고 온 경우, 현금/유가증권은 제외됩니다.",
      claimDocs: "도난 신고서, 구매 영수증, 행사 티켓",
    },
  },
  {
    name: "청력손상보호",
    amount: "200만원",
    description: "대음량 노출로 인한 청력 손상 치료비",
    price: 180,
    details: {
      coverage: "페스티벌 등 대음량 환경 노출 후 청력 손상 진단 시 치료비 최대 200만원 지급.",
      exclusions: "기존 청력 질환, 귀마개 미착용 시 발생한 손상은 제외됩니다.",
      claimDocs: "청력 검사 결과, 진단서, 행사 참가 증빙",
    },
  },
  {
    name: "페스티벌우천취소",
    amount: "30만원",
    description: "우천으로 페스티벌 취소 시 보상",
    price: 70,
    details: {
      coverage: "기상 악화로 페스티벌이 취소되어 환불 불가 시 티켓비 최대 30만원 보상.",
      exclusions: "부분 취소, 환불 가능한 경우는 제외됩니다.",
      claimDocs: "티켓 구매 영수증, 취소 공지문",
    },
  },
  {
    name: "심야귀가안심",
    amount: "10만원",
    description: "심야 귀가 시 안전 택시비 지원",
    price: 30,
    details: {
      coverage: "페스티벌 종료 후 심야(23시 이후) 귀가 시 택시비 최대 10만원 지원.",
      exclusions: "대중교통 운행 가능 시간대, 자차 이용 시는 제외됩니다.",
      claimDocs: "택시 영수증, 행사 티켓",
    },
  },
  {
    name: "식중독/배탈위로",
    amount: "20만원",
    description: "행사장 음식으로 인한 식중독 위로금",
    price: 50,
    details: {
      coverage: "페스티벌 음식 섭취 후 식중독/배탈 진단 시 위로금 20만원 지급.",
      exclusions: "기존 위장 질환, 행사장 외 음식 섭취로 인한 증상은 제외됩니다.",
      claimDocs: "진단서, 음식점 영수증, 행사 티켓",
    },
  },
]

// 박예나 추천 모듈
export const PARK_YENA_RECOMMENDED: CoverageModule[] = [
  {
    name: "한복/의상파손",
    amount: "50만원",
    description: "체험 중 전통 의상 파손 시 배상 보장",
    price: 80,
    details: {
      coverage: "한복 체험 등 전통 의상 대여 중 파손으로 배상 필요 시 최대 50만원 지급.",
      exclusions: "고의적 파손, 대여 규정 위반은 제외됩니다.",
      claimDocs: "배상 청구서, 파손 사진, 대여 계약서",
    },
  },
  {
    name: "지역특산물식중독",
    amount: "40만원",
    description: "여행지 특산물 섭취 후 식중독 보장",
    price: 60,
    details: {
      coverage: "여행지 특산물/해산물 섭취 후 식중독 진단 시 치료비 최대 40만원 지급.",
      exclusions: "유통기한 지난 식품, 개인 조리 음식은 제외됩니다.",
      claimDocs: "진단서, 음식점 영수증, 여행 증빙",
    },
  },
  {
    name: "관광지미끄럼",
    amount: "80만원",
    description: "관광지 미끄러운 바닥 낙상 사고 보장",
    price: 100,
    details: {
      coverage: "관광지 내 미끄러운 바닥(계단, 타일 등)에서 낙상 시 치료비 최대 80만원 지급.",
      exclusions: "음주 상태, 출입 금지 구역 진입 중 사고는 제외됩니다.",
      claimDocs: "진단서, 관광지 입장권, 사고 경위서",
    },
  },
  {
    name: "숙소내기물파손",
    amount: "100만원",
    description: "숙소 내 기물 파손 시 배상 보장",
    price: 130,
    details: {
      coverage: "숙소 내 실수로 기물 파손하여 배상책임 발생 시 최대 100만원 지급.",
      exclusions: "고의적 파손, 음주 상태에서의 파손은 제외됩니다.",
      claimDocs: "배상 청구서, 파손 사진, 숙박 예약 확인서",
    },
  },
  {
    name: "여행지응급실",
    amount: "30만원",
    description: "여행 중 응급실 내원 시 추가 비용 보장",
    price: 70,
    details: {
      coverage: "국내 여행 중 응급실 내원 시 교통비/간병비 등 추가 비용 최대 30만원 지급.",
      exclusions: "거주지 인근(50km 이내) 응급실 내원은 제외됩니다.",
      claimDocs: "응급실 기록, 숙박 예약 확인서, 교통비 영수증",
    },
  },
]

// 김별 추천 모듈
export const KIM_BYUL_RECOMMENDED: CoverageModule[] = [
  {
    name: "작품파손배상",
    amount: "1,000만원",
    description: "전시품 실수 파손 시 배상 보장",
    price: 250,
    details: {
      coverage: "미술관/박물관에서 실수로 전시품 파손 시 배상금 최대 1,000만원 지급.",
      exclusions: "고의적 파손, 촬영 금지 구역 촬영 중 발생한 사고는 제외됩니다.",
      claimDocs: "배상 청구서, 감정서, 입장권",
    },
  },
  {
    name: "디지털카메라파손",
    amount: "150만원",
    description: "미러리스/DSLR 카메라 파손 보장",
    price: 200,
    details: {
      coverage: "휴대 중인 디지털 카메라(미러리스/DSLR) 파손 시 수리비 최대 150만원 지급.",
      exclusions: "자연 마모, 분실/도난, 렌즈 단독 파손(본체 무관)은 제외됩니다.",
      claimDocs: "파손 사진, 구매 영수증, 수리 견적서",
    },
  },
  {
    name: "미술관내낙상",
    amount: "100만원",
    description: "전시장 내 낙상 사고 치료비 보장",
    price: 120,
    details: {
      coverage: "미술관/갤러리 내 계단, 경사로 등에서 낙상 시 치료비 최대 100만원 지급.",
      exclusions: "음주 상태, 출입 금지 구역 진입 중 사고는 제외됩니다.",
      claimDocs: "진단서, 입장권, 사고 경위서",
    },
  },
  {
    name: "전시취소보상",
    amount: "20만원",
    description: "예매 전시 취소 시 티켓비용 보상",
    price: 40,
    details: {
      coverage: "주최측 사유로 전시가 취소되어 환불 불가 시 티켓비 최대 20만원 보상.",
      exclusions: "개인 사정 불참, 환불 가능한 티켓은 제외됩니다.",
      claimDocs: "티켓 구매 영수증, 취소 공지문",
    },
  },
  {
    name: "커피번짐/의류오염",
    amount: "30만원",
    description: "카페에서 의류 오염 시 세탁/배상 보장",
    price: 50,
    details: {
      coverage: "카페 등에서 음료가 쏟아져 의류 오염 시 세탁비 또는 의류 교체비 최대 30만원 지급.",
      exclusions: "본인 부주의, 이미 오염된 의류는 제외됩니다.",
      claimDocs: "오염 사진, 세탁/구매 영수증",
    },
  },
]

export const PERSONAS: PersonaData[] = [
  {
    id: "bong-jaewoo",
    name: "임별",
    category: "익사이팅 아웃도어/직관",
    activityType: "도심 자전거 라이딩",
    productName: "[AI 맞춤] 도시 탐험가 안심 보험",
    coverages: [
      {
        name: "야구공 직격 상해 진단비",
        amount: "1,000만원",
        description: "야구장 관람 중 홈런볼·파울볼 직격을 직접적인 원인으로 상해 사고를 입은 경우",
        price: 300,
        details: {
          coverage: "야구장 관람 중 홈런볼·파울볼 직격을 직접적인 원인으로 상해 사고를 입은 경우 가입금액 1천만원 지급",
          exclusions: "경기장 내 안전펜스를 무단으로 넘어가거나 금지 구역에 진입하여 사고가 발생한 경우, 파울볼을 잡기 위해 타 관중과 물리적 충돌을 일으키는 등 본인의 과실이 경합된 경우",
          claimDocs: "야구장 이용 증명서, 야구공 직격 확인서, 보험금 청구서",
        },
      },
      {
        name: "시력저하 위로금",
        amount: "10만원",
        description: " 보험기간 중 교정시력이 0.5 이상 저하된 경우",
        price: 500,
        details: {
          coverage: "보험기간 중 교정시력이 0.5 이상 저하된 경우 가입금액 1십만원 지급",
          exclusions: "기존에 앓고 있던 안과 질환으로 시력이 저하된 경우",
          claimDocs: "보험금 청구서, 시력 진단서",
        },
      },
    ],
    recommendedModules: BONG_JAEWOO_RECOMMENDED,
    animal: {
      animal: "수달",
      emoji: "🦦",
      title: "놀 줄 아는 활동형 수달",
      personality: "문화생활을 즐기는 활동형 취미러! 언제 어디서나 새로운 취미를 찾아나서는 장난기 있는 스타일입니다. 문화생활을 즐기면서 가끔 액티비티도 즐기는 도시형 취미부자입니다.",
      snsFeeds: "야구 관람 인증샷, 숨은 카페 탐방, 맛집 방문, 영화 관람 인증샷.",
      fact: "야구장 함성부터 번지점프, 영화 관람까지 당신의 모든 취미가 안심이 되도록 항상 보험이 함께 합니다.",
    },
    product: {
      name: "[AI 맞춤] 열정 직관러를 위한 안심 보험",
      description: "야구장 내 상해와 열사병은 물론, 외부 활동 중 타인에 대한 배상책임까지 꼼꼼하게 보장합니다.",
      price: "1,850",
    },
    aiAdvice: "SNS 분석 결과, 야구 직관 및 여행 등 외부 활동 비중이 높으신 것으로 나타났습니다. 활동 반경이 넓으신 만큼 발생할 수 있는 리스크를 고려하여, 다중이용시설(야구장) 상해와 해외 여행 중 사고를 집중 보장하는 최적의 보험을 설계했습니다.",
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
        price: 1500,
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
        price: 950,
        details: {
          coverage: "레저 활동 중 골절(치아파절 제외) 진단 시 회당 100만원 추가 지급.",
          exclusions: "기존 질환으로 인한 병적 골절, 치아 및 치조골 골절은 보장하지 않습니다.",
          claimDocs: "골절 진단서, X-ray 판독 결과, 의료비 영수증",
        },
      },
    ],
    recommendedModules: HAN_JAEWON_RECOMMENDED,
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
        price: 2000,
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
        price: 1200,
        details: {
          coverage: "산악 활동 중 조난되어 수색/구조가 필요한 경우 실제 발생한 비용 최대 500만원 지급.",
          exclusions: "고의로 조난 상황을 만든 경우, 음주 상태에서의 활동 중 발생한 조난은 제외됩니다.",
          claimDocs: "구조 비용 영수증, 구조대 출동 확인서, 사고 경위서",
        },
      },
    ],
    recommendedModules: HYUN_MINSEO_RECOMMENDED,
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
        price: 900,
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
        price: 750,
        details: {
          coverage: "여행 중 휴대품의 도난, 분실, 파손 발생 시 실제 손해액 최대 100만원 지급.",
          exclusions: "현금, 유가증권, 콘택트렌즈, 의치 등은 보장 대상에서 제외됩니다.",
          claimDocs: "도난/분실 신고서, 구매 영수증, 파손 사진",
        },
      },
    ],
    recommendedModules: KIM_GYURI_RECOMMENDED,
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
        price: 850,
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
        price: 600,
        details: {
          coverage: "천재지변, 주최측 귀책 사유로 행사가 취소된 경우 티켓 구매 비용 최대 50만원 환급.",
          exclusions: "개인 사정으로 인한 불참, 환불 가능한 티켓은 보장 대상에서 제외됩니다.",
          claimDocs: "티켓 구매 영수증, 행사 취소 공지문, 환불 불가 증빙",
        },
      },
    ],
    recommendedModules: YOON_SOHEE_RECOMMENDED,
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
        price: 700,
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
        price: 550,
        details: {
          coverage: "여행 중 식중독 진단을 받고 입원 또는 통원 치료 시 위로금 30만원 지급.",
          exclusions: "기존 위장 질환 악화, 자가 조리 음식으로 인한 식중독은 제외됩니다.",
          claimDocs: "식중독 진단서, 음식점 영수증, 치료비 영수증",
        },
      },
    ],
    recommendedModules: PARK_YENA_RECOMMENDED,
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
        price: 1100,
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
        price: 850,
        details: {
          coverage: "휴대 중인 카메라, 태블릿, 노트북 등 고가 디지털 기기의 파손 시 수리비 또는 대체 비용 최대 200만원 지급.",
          exclusions: "자연 마모, 소프트웨어 손상, 분실/도난은 보장 대상에서 제외됩니다.",
          claimDocs: "파손 사진, 구매 영수증, 수리 견적서",
        },
      },
    ],
    recommendedModules: KIM_BYUL_RECOMMENDED,
    animal: {
      animal: "고양이",
      emoji: "🐱",
      title: "미술관을 거니는 고고한 고양이",
      personality: "나만의 취향이 확실한 예술가! 트렌디한 전시와 독특한 공간을 찾아다니며 자신만의 감성을 채워가는 스타일이에요.",
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
    price: 500,
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
    price: 450,
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
    price: 300,
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
