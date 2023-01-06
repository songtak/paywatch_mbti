/**
 * EI, SN, FT, PJ
 */

/**
 * 1 SN
 * 2 EI
 * 3 PJ
 * 4 SN
 * 5 PJ
 * 6 EI
 * 7 FT
 * 8 SN
 * 9 EI
 * 10 FT
 * 11 PJ
 * 12 FT
 */

export const rabbitYearTestListMj = [
  {
    id: 1,
    quest: "나는… 🐰",
    type: "EI",
    answer: [
      {
        type: "E",
        title: "북적북적 친구 토끼들과 함께 ‘집토끼’",
      },
      {
        type: "I",
        title: "인생은 홀로서기의 연속 ‘산토끼’",
      },
    ],
  },
  {
    id: 2,
    quest: `내 당근밭에
처음보는 토끼가 있네?`,
    type: "EI",
    answer: [
      {
        type: "E",
        title: "안녕! 내 당근 밭에 온 걸 환영해!",
      },
      { type: "I", title: "여긴 개인 사유지입니다." },
    ],
  },
  {
    id: 3,
    quest: `옆집토끼였구나!
옆집토끼가
티타임에 초대했다. ☕️`,
    type: "PJ",
    answer: [
      {
        type: "P",
        title: `좋아! 우리 당근케이크도 함께먹는건 어때?`,
      },
      { type: "J", title: "미리 연락을 줬으면 좋았을텐데.." },
    ],
  },
  {
    id: 4,
    quest: `구경하고 다시 밭으로 갔더니 글쎄!
    당근이 사라졌어! 🚨`,
    type: "SN",
    answer: [
      { type: "S", title: "아까운 당근.. 내가 얼마나 열심히 키웠는데" },
      {
        type: "N",
        title: `당근이 왜 사라졌지?
관리를 더 철저히 해야겠어`,
      },
    ],
  },
  {
    id: 5,
    quest: `당근 밭에 의문의 발자국이 있다. 🐾
이때 옆집토끼가 하는 말은?`,
    type: "FT",
    answer: [
      { type: "T", title: "다른 토끼가 다녀갔나? 발자국을 따라가보자" },
      { type: "F", title: "괜찮아? 우선 주인토끼의 기분을 살핀다" },
    ],
  },
  {
    id: 6,
    quest: `촘촘한 발자국과
곳곳에 작은 구멍들,
범인은? 🤨`,
    type: "SN",
    answer: [
      {
        type: "N",
        title: `이 구멍들은 대체 뭘까?
땅이꺼졌나? 기계로 팠을까?`,
      },
      {
        type: "S",
        title: `경찰토끼가 잡아주겠지 신고하자`,
      },
    ],
  },
  {
    id: 7,
    quest: `범인은 먹깨비 두더지!
밭에 새로운 채소를 심자!`,
    type: "FT",
    answer: [
      {
        type: "F",
        title: `내가 좋아하는 당근이랑~
친구가 좋아하는 상추도 심자`,
      },
      {
        type: "T",
        title: `계절별로 잘 자라는 채소는 뭘까?
수확량이 일정한게 좋겠지?`,
      },
    ],
  },
  {
    id: 8,
    quest: "이제 심어볼까?",
    type: "EI",
    answer: [
      { type: "I", title: "시간이 걸리더라도 혼자 해야 마음이 편해" },
      {
        type: "E",
        title: "모두 모여! 다같이 모여서 하면 금방 할수있어",
      },
    ],
  },
  {
    id: 9,
    quest: `씨앗을 심기로 한 날
두더지가 다양한 씨앗을 잔뜩 가져왔다`,
    type: "FT",
    answer: [
      {
        type: "F",
        title: `두더지야 나랑 화해하고싶은거지?`,
      },
      {
        type: "T",
        title: `먹었으니까 당연히 가져와야지`,
      },
    ],
  },
  {
    id: 10,
    quest: `채소밭은 온동네 토끼들과
함께 키우고있다.
오늘은 내 차례`,
    type: "PJ",
    answer: [
      { type: "P", title: "잘자라고 있나 가보자, 물도 줄까?" },
      {
        type: "J",
        title: `오전:해뜨기전에 물주기,
오후:비료주기(혹시 비올수도 있어 날씨 체크)`,
      },
    ],
  },
  {
    id: 11,
    quest: "무럭무럭 당근 풍년 🥕",
    type: "SN",
    answer: [
      {
        type: "S",
        title: `당근이 엄청 많네!
당근 케이크를 할까? 당근 주스를 만들까?`,
      },
      {
        type: "N",
        title: `당근이 산처럼 쌓였어, 모두가 열심히
자기분량을 했기때문에 이런 결과를 얻을 수 있었지`,
      },
    ],
  },
  {
    id: 12,
    quest: `오늘은
토끼마을 당근축제🎉`,
    type: "PJ",
    answer: [
      {
        type: "P",
        title: `당근가야지! 놀다가 시간맞춰서 오지 뭐`,
      },
      {
        type: "J",
        title: `몇시까지 하는거지? 끝나고 돌아오는
마차가 있나 확인하고 놀아야해`,
      },
    ],
  },
];

export const rabbitYearResultList = [
  {
    type: "ESTJ",
    title: `더치`,
    subTitle: `똑 부러지는 반장토끼`,
    result: `당신은 똑부러지는 토끼예요.
뭐든지 확실한 것을 좋아합니다. 주변인들도 나와 같기를 요구하기도 해서 융통성이 없다거나 고집이 세다는 말을 듣기도 해요. 공감하고 위로하기보단 객관적인 판단으로 상황을 보기 때문에 이미 뭐가 맞고 틀렸는지 알고 있어요.
그래서 차라리 앞에서 이야기하죠. 아마도 우리 토끼 마을에서 당신은 잔소리 많은 반장 토끼일 것 같네요. 

당신은 성실하고 정직하기 때문에 꾸준하고 규칙적인 적금을 하면 좋을 것 같아요. 가계부도 잘 써서 월급관리는 미리 계획적으로 나누고 사용하면 통장에 돈이 차곡차곡 쌓일 거예요.`,
  },
  {
    type: "ISFP",
    title: `드워프 토끼`,
    subTitle: `일상의 즐거움을 아는`,
    result: `감수성이 풍부하고 다른 토끼들에게 싫은 소리를 하기 싫어해요. 고집을 부리지 않고 주변에 귀를 잘 기울이며 환경과 사람에게 그때그때 말없이 잘 흡수되어 착하다는 말을 자주 들어요. 당신은 귀가 얇고 결단력이 부족한 면이 있어서 투자는 위험해요.

장기적금도 지루해할 수 있을 것 같아서 1년 단기적금으로 목돈마련을 하거나 월급이 들어온다면 10% 정도 자신을 위해 마음껏 사용하는 용도로 정한다면 효과적인 월급관리를 할 수 있을 거예요.`,
  },
  {
    type: "INTJ",
    title: `멧토끼`,
    subTitle: `혼자서도 잘해요`,
    result: `멧토끼는 사냥하기 좋은 몸 크기로 늘 천적에게 노출되어있어 단체생활을 하지 않고 독립적으로 혼자 움직여요. 천적을 피하기 위한 전략을 늘 세우는 산토끼 같은 당신.
혼자 해결하고 남을 챙기는 것을 잘하지 못해서 무신경하다는 소리를 자주 들어요. 하지만 쓸데없는 빈말은 하지 않고 솔직합니다.
  
두뇌 회전이 빠르고 자신감 넘치는 당신은 쓸데없는곳에 돈을 쓰지 않아요. 하지만 필요하다면 들고파는 스타일이죠. 효율적인 월급관리를 위해서 당신은 이미 계획적으로 투자하고 있을 것 같은데요?`,
  },
  {
    type: "INFP",
    title: `브라운 드워프 토끼`,
    subTitle: `작은 몸집에 앙큼한 속내`,
    result: `처음엔 다가가기 어렵지만, 벽을 넘으면 다 풀어놓는 스타일!
적극적으로 보이지는 않지만 친한 친구에게는 매우 외향적인 사람이 됩니다. 상대방 이야기에 귀를 기울일 줄 알며 공감하기를 즐깁니다. 하지만 그것 때문에 스트레스를 받기도해서 감정기복이 심하고 감수성이 뛰어나 예민하기도 합니다. 

당신은 누군가와 돈거래는 하지 않는 게 좋을 것 같아요. 마음을 연 믿을만한 사람에게 월급을 맡기세요. 그리고 당신은 용돈을 받는 것을 추천해 드려요.`,
  },
  {
    type: "ESFJ",
    title: `친칠라`,
    subTitle: `나도 토끼야!`,
    result: `성품이 온화한 친칠라는 동정심이 많아 도와주기를 좋아하고 거기서 또 기쁨을 얻습니다.
사랑 주기 좋아하고 헌신적이지만 상대방에게도 그만큼을 요구하기 때문에 같은 양이 오지 않으면 낙담합니다. 또분위기 메이커로 단체생활을 잘하는 편이라 주변에 늘 당신에게 호감인 사람들이 있습니다.
  
사람을 좋아하기 때문에 여러 모임으로 돈이 흘러나갈 수 있으니 낮은 한도로 지출카드를 따로 정해두고 계획적인 소비로 월급을 지키세요. 싫은 소리와 부탁을 잘 거절하지 못하니 단호함도 키워보시고요. 

감정이 얼굴에 다 드러나서 큰돈이 들어오면 감추지 못할 테니 로또가 된다면 지구를 떠나야 할지도`,
  },
  {
    type: "ENTP",
    title: `홀랜드롭이어 토끼`,
    subTitle: `나는 이렇게 생각해!`,
    result: `어디에서 또 이야기할 수 있을까??
토론을 좋아하고 자신의 의견에 거침이 없는 아이디어뱅크 홀랜드롭이어인 당신.
지적이고 말을 잘하며 유머감각이 있어 상대방에게 먼저 잘 다가가고 대화도 잘 이끌어갑니다. 하지만 상대방의 기분을 살피는 능력은 조금 부족한 것 같아요.
내가 맞는 것 같아도 한 번쯤은 상대방에게 친절하고 따뜻하게 대하며 내 의견을 꺾을 수 있는 유연함을 키워보세요. 
  
통찰력이 뛰어난 당신은 이미 통장 쪼개기를 하고 있을까요? 그렇다면 정기수입 외에 비상 예비자금을 관리하는 것을 도전해보세요. 예를 들면 CMA나 MMF로 말이에요.`,
  },
  {
    type: "INTP",
    title: `플로리다화이트 토끼`,
    subTitle: `말풍선이 반대야!`,
    result: `평범함을 거부하는 당신.
좋아하는 분야에 대해서는 눈에 불을 키고 팝니다.
그 분야에서 최고가 될 수도 있을 만큼요.
관심 있는 분야가 아니라면 과묵하지만 반대이면 말이 아주 많아집니다. 대화가 통하는 사람을 만나면 너무나 즐거워요. 하지만 그 후에는 꼭 혼자만의 시간이 필요합니다. 약간은 독립적이라 할 수 있어요.
감정에 대한 소모를 피곤해하고 감정표현 또한 잘하지 못하는 편이에요.
    
실용적이며 논리적인 당신은 재테크 통장을 잘 만들어보세요. 월급의 40~50% 정도는 적금, 연금, 펀드등 자동이체로 관리하면 건강한 월급관리를 할 수 있을 거예요.`,
  },
  {
    type: "ENFP",
    title: `앙고라 토끼`,
    subTitle: `성격도 부드러운`,
    result: `앙고라토끼는 활동적이고 장난스럽고 사교적인 성격을 가져서 애완 묘로 인기입니다. 
어디를 가나 금방 친해지며 깊고 의미 있는 관계를 추구하는 당신은 함께하면 부드럽고 따뜻한 앙고라 같아요. 관심 있는 일을 늘 찾는 당신은 아이디어가 넘쳐요. 긍정적인 모습이 주변 사람들을 끌어들여 늘 북적북적하고 힘이 나죠. 하지만 그 열정이 너무 여러 가지라 한 가지를 끝까지 못하는 일이 생겨요.
    
인내심과 계획성이 부족한 당신은 월급이 들어오면 저금이나 필수생활비 같은 경우에 자동이체를 걸어두는 것을 추천해요.
혜택이 좋다고 해서 너무 많은 장기적금은 갖고 있지 마세요. 중간해약하면 본전도 못 찾는 답니다.`,
  },
  {
    type: "ENFJ",
    title: `라이언헤드 토끼`,
    subTitle: `어흥(?)`,
    result: `사자의 갈기를 닮은 머리털을 가진 라이언헤드를 닮은 당신.
저세상 오지랖이란 말을 종종 듣지만, 당신은 세상 모두가 평화롭길 바랄 뿐이에요. 정이 많고 사람을 좋아하고 잘 믿어요. 상대방의 말도 잘 들어주며 공감능력이 높지만 그만큼 믿었던 사람에게나 이별 앞에서 상처치유가 빠르지 않은 편이에요. 내 생각과 다르더라도 이해하려 하며 누구에게나 잘 맞춰주는 편입니다.
  
당신에게 필요한 월급관리로는 생활비통장을 넉넉히 두되 반드시 적당한 한도를 지키는 것을 습관화한다면 퍼주기 좋아하는 당신의 지갑을 조금은 강제로 막아줄 거에요.`,
  },
  {
    type: "ISTP",
    title: `렉스 토끼`,
    subTitle: `너는 너, 나는 나`,
    result: `혼자하는게 빠르고 편하다고 생각하고 또 그렇게 하면 능률이 높습니다.
필요에 의해서만 행동하며 굳이~ 불필요한 일은 하지 않는 편이네요. 집중해서 무언가 만들고 습득하는 것을 잘하지만 여러 가지를 동시에 하는 멀티는 좀 힘들어합니다.
다들 나와 같겠지?하고 행동하고 말을 할 때 주변에서 종종 상처를 입을 수도 있어요. 당신은 솔직하고 직선적이고 돌려 말하기를 잘하지 못합니다.
  
당신은 계획하는 걸 그다지 좋아하지 않지만, 월급만큼은 꼭 계획적으로 관리해보세요.
정기수입의 10%는 예비비 통장, 45% 정도는 제테크 통장 45%는 생활비 통장으로 나누어서 관리하고 꼭 자동이체를 걸어두세요!`,
  },
  {
    type: "ISTJ",
    title: `블랙더치 토끼`,
    subTitle: `너 집에서 첫째야?`,
    result: `신중하고 규칙적인 당신은 남들이 보기에 믿음이 갑니다. 그래서 첫째냐는 소리를 많이 듣죠.
남들에게 관심이 없고 간섭받는 걸 싫어해서  정없다는 소리를 듣기도 하며 무뚝뚝해 보입니다. 계획에 따라 일 처리 하는 것을 좋아하고 공과 사 구분을 잘해서 철벽 잘 치기로 유명합니다. 다 같이 일하는 것보다 혼자 해결하는 것이 더 편하고 인간관계도 비슷해요. 얕고 넓은 관계를 유지하는 게 귀찮지 않다고 생각해요.
    
자신의 행동과 결정에 책임을 지는 일을 두려워하지 않고 실수했을 때 빠르게 인정하는 것이 정직한 당신에게 아주 중요해요.
인내심이 많고 계획적인 당신은 중기 또는 장기목적으로 목표를 정하고 꾸준한 적금으로 목돈마련에 도달해보세요.`,
  },
  {
    type: "ISFJ",
    title: `아메리칸퍼지롭이어 토끼`,
    subTitle: `멍멍(?)`,
    result: `토끼 같지만 강아지 같은 생김새이기도 한 아메리칸퍼지롭이어.
마치 동전의 양면 같은 당신의 성향과 비슷하네요.
외로움을 많이 타지만 많은 무리 속에 있는 건 불편하고 완벽주의자이지만 게으르고 겉으론 무덤덤해 보이지만 속으론 온갖 생각을 다 하고 나서는 건 싫지만 관심받고 싶은? 계획적으로 움직이는 걸 좋아해서 급약속 급만남 급여행은 근심을 피곤해집니다. 표현에 익숙하지 않아서 상대방이 당신의 감정을 알아차리기가 쉽지 않습니다. 하지만 세심한 기억력으로는 당신을 따라올 수가 없네요.

변화를 즐기지 않으며 쓸모없는 낭비를 싫어하고 인내력이 좋은 당신은 월급을 차곡차곡 잘 쌓아둘 수 있을 것 같아요.
재테크통장을 구분하여 장기목적의 저축, 투자를 하시고 그중에서 보장성보단 저축성보험을 추천해 드려요.`,
  },
  {
    type: "ESFP",
    title: `잉글리쉬스팟 토끼`,
    subTitle: `매 순간을 즐거움을 느끼는 당신`,
    result: `에너지가 많고 오늘 다르고 내일 다른 당신은 매력이 넘칩니다.
눈치가 빨라서 상대방의 감정을 잘 읽어내고 공감력도 좋아요. 하지만 갈등이 생기면 그 자리를 피하는 게 먼저이고 진지함과는 거리가 멀어 깊은 대화를 하기는 조금 어려울 때가 있습니다. 당신은 늘 사람들의 중심에서 분위기메이커 역할을 하고 즉흥적이라 같이 있으면 재미있고 처음 본 사람과도 오랜 친구처럼 지낼 수 있는 능력이 있습니다.
그렇게 밝고 즉흥적인 일에 즐거움을 찾는 당신은 그 과정에서 의무와 책임을 무시할 때가 있고 미래 걱정은 지금은 상관없다고 생각합니다.

당신에게 효과적인 월급관리로는 신용카드보다는 체크카드를 사용하고 정해진 금액만 용돈을 받는 것을 추천해 드려요. 한도를 걱정하며 돈을 쓰기 싫겠지만, 당분간은 이렇게 묶어두어야 월급 로그아웃을 벗어날 수 있을 거예요.`,
  },
  {
    type: "ENTJ",
    title: `자이언트 토끼`,
    subTitle: `왕크니까! 왕귀엽다!`,
    result: `대담하며 결단력과 자신감이 넘치는 당신은 타고난 리더입니다.
비능률 비효율적인 일을 싫어하고 답답한 캐릭터가 나오는 드라마는 질색합니다. 어느새 한 달 내내 약속이 가득 차기도 하지만 감정을 표현하고 나누는 것을 잘하는 편은 아닙니다.
굳이 ~ 관심 없는 것에 대해서 하려고 하진 않습니다만 강력한 의지가 생긴다면 다른 사람이 포기하는 상황에도 목표를 추구하며 협력해서 끌어갑니다.
    
목표를 위해 노력하며 계획적인 당신은 중기 또는 장기목적으로 목표를 정하고 꾸준한 적금으로 목돈마련에 도달해보세요.`,
  },
  {
    type: "INFJ",
    title: `잉글리쉬롭이어 토끼`,
    subTitle: `너의 목소리가 들려`,
    result: `큰 귀가 바닥까지 내려온 잉글리쉬롭이어처럼 당신은 상대방의 말을 잘 들어주고 배려가 흘러 넘치네요.
마음맞는 친구와 둘이서 도란도란 이야기를 나누며 진심으로 대화할 때 깊은 행복감을 느끼죠. 좁고 깊은 관계를 만들어가며 새로운 만남은 조금 어색해요. 이불 밖은 위험하다고 생각해요. 눈치가 빠르지만, 생각이 깊어서 상대방의 거짓말을 알고도 모르는 척 해주기도 하며 유행이나 분위기에 흘러가지 않는 자신만의 신념과 고집이 있어요.

자신보다 남을 배려하는 당신은 월급의 40% 정도는 재테크통장을 만들어 저금을 하세요. 비상시나 또 노후대비까지 준비할 수 있으니 남에게 싫은 소리하지 않을 수 있잖아요.`,
  },
  {
    type: "ESTP",
    title: `히말라얀 토끼`,
    subTitle: `불타오르네`,
    result: `특이한 외모의 히말라얀 토끼처럼 어디서나 큰 존재감을 발휘하는 당신.
즉흥적이며 뒤 끝없는 성격으로 앞에서 팀을 이끌거나 주도하는 것을 좋아합니다. 돌려 말하는 법을 모르고 깊게 생각하는 것도 싫죠. 하지만 그런 쿨한당신의 주변엔 늘 사람들이 북적입니다.
생각한것은 즉시 행동으로 옮기지만 당장 눈앞의 즐거움을 쫓다 보니 모든 것을 다 부지런히 해내는 건 아닙니다.

나무를 보지 말고 숲을 보세요! 월급 중 일부는 꼭 재테크통장을 만들어 나중을 대비하시길 바라요. 스릴을 좋아하고 관찰력이 좋으니 자신에게 맞는 안정적인 펀드를 찾아 투자하면 좋을 거예요.`,
  },
];
