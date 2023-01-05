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
        title: "안녕! 내 당근 밭에 온걸 환영해!",
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
        title: `당근에 물을 줘야하지만 구경하고 주면 되지!`,
      },
      { type: "J", title: "당근에 물을 줘야한다 말하고 약속을 잡는다." },
    ],
  },
  {
    id: 4,
    quest: `구경하고 다시 밭으로...

당근 밭에
의문의 발자국이 있다. 🐾`,
    type: "SN",
    answer: [
      { type: "S", title: "다른 토끼가 다녀갔나?" },
      { type: "N", title: "발자국 모양이 좀 작은데? 혹시 요정? 넝담~ㅎ" },
    ],
  },
  {
    id: 5,
    quest: `	
    누가 당근을 훔쳐갔어! 🚨

    이때 옆집토끼가 하는 말은?`,
    type: "FT",
    answer: [
      { type: "T", title: "발자국을 따라가보면 범인을 찾을 수 있을거야!" },
      { type: "F", title: "괜찮아? 범인은 금방 찾을 수 있을거야!" },
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
        title: "발자국이 구멍 앞에 사라졌어, 함정일 수 있어!",
      },
      {
        type: "S",
        title: "발자국이 구멍 앞에서 사라졌어, 땅을파서 도망갔을거야!",
      },
    ],
  },
  {
    id: 7,
    quest: `범인은 먹깨비 두더지!

두더지가 뽑아먹은 당근밭에
새로운 채소를 심자!`,
    type: "FT",
    answer: [
      {
        type: "F",
        title: `모두가 좋아하는 당근`,
      },
      {
        type: "T",
        title: `금방 자라는 상추`,
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
        title: "모두 모여! 우리가 다같이 모여서 하면 금방 할수있어!",
      },
    ],
  },
  {
    id: 9,
    quest: `씨앗을 심기로한 날
두더지가 당근과 상추씨를
잔뜩 가져왔다`,
    type: "FT",
    answer: [
      {
        type: "F",
        title: `두더지도 마음이 많이 불편했을거야.`,
      },
      {
        type: "T",
        title: `먹었으니까 당연히 가져와야지`,
      },
    ],
  },
  {
    id: 10,
    quest: `우르르 쿵쿵⚡️

곧 비가 내릴거 같아!`,
    type: "PJ",
    answer: [
      { type: "P", title: "비올거 같은데 물은 나중에 줘야지" },
      {
        type: "J",
        title: `비가 안내릴 수도 있으니까 미리 물을 줘야지`,
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
        title: `당근이 많아 올해는 든든하겠군!`,
      },
      {
        type: "N",
        title: `당근 케이크를 할까? 당근 주스를 만들까?`,
      },
    ],
  },
  {
    id: 12,
    quest: `토끼마을 당근축제🎉`,
    type: "PJ",
    answer: [
      {
        type: "P",
        title: `신난다! 여기 내 당근도 맛봐!`,
      },
      {
        type: "J",
        title: `신나지만 지금 당근을 쓰면 다음에 힘들 수 있어`,
      },
    ],
  },
];

export const rabbitYearTestList = [
  {
    id: 1,
    quest: "내가 토끼로 살아야 한다면?",
    type: "EI",
    answer: [
      {
        type: "E",
        title: "따뜻하고 아늑한 땅굴을 파고 집단 생활하는 '집토끼'",
      },
      {
        type: "I",
        title: "인생은~ 굴을 파지 않고 야산에서 혼자 생활하는 '산토끼'",
      },
    ],
  },
  {
    id: 2,
    quest: "뒷동산에서 풀을 뜯어 먹고있을때 누군가 다가왔다. 왜지???",
    type: "EI",
    answer: [
      {
        type: "E",
        title: "동그란 눈, 부드럽고 앙증맞은 내 꼬리가 귀여운가? 다가가보자",
      },
      { type: "I", title: "경계발령! 어서 돔황챠! 사냥꾼이야!!" },
    ],
  },
  {
    id: 3,
    quest: `어라 옆집토끼였네? 
    새로 생긴 당근밭에 함께 놀러가기로 했다`,
    type: "PJ",
    answer: [
      {
        type: "P",
        title: `음.. 좋아, 당근밭도 재미있겠다,
        근데 당근케이크도 먹고싶어`,
      },
      { type: "J", title: "미리 연락을 줬다면 내가 준비를 하고있었을텐데" },
    ],
  },
  {
    id: 4,
    quest: `당근밭에 놀러갔더니 글쎄
    누군가가 당근을 다 뽑아서 가져갔다`,
    type: "SN",
    answer: [
      { type: "S", title: "경찰에 연락하자" },
      { type: "N", title: "당근으로 뭘 하려고 이렇게 많이 가져갔을까?" },
    ],
  },
  {
    id: 5,
    quest: `도대체 그 많던 당근은 어디 간거야?
    저기! 발자국이 사라진곳이 있어`,
    type: "FT",
    answer: [
      { type: "T", title: "발자국을 따라가보면 범인을 찾을수 있지않아?" },
      { type: "F", title: " 저런.. 당근밭 주인이 너무 슬플것같아" },
    ],
  },
  {
    id: 6,
    quest: `촘촘한 발자국과 곳곳에 작은 구멍들,
    범인은?`,
    type: "SN",
    answer: [
      {
        type: "N",
        title:
          "이 당근밭은 매년 당근이 아주 많이 자라지. 비옥한 땅에만 산다는 두더지라면 그럴수 있지",
      },
      {
        type: "S",
        title:
          "발자국이 구멍 앞에서 사라졌어, 땅을파서 도망갔다니..  두더지 같아!",
      },
    ],
  },
  {
    id: 7,
    quest: `범인은 먹깨비 두더지, 
    두더지가 다 뽑아먹은 당근밭에 새로운 채소밭을 만들기로 했다`,
    type: "FT",
    answer: [
      {
        type: "F",
        title: `어떤 채소를 심을까?
      친구들이 무슨 채소를 좋아하는지 설문조사를 해보자`,
      },
      {
        type: "T",
        title: `어떤 채소를 심을까?
      계절별로 잘 자라는 채소는 뭘까? 수확량이 일정한게 좋겠지?`,
      },
    ],
  },
  {
    id: 8,
    quest: "채소밭을 만들어보자!",
    type: "EI",
    answer: [
      { type: "I", title: "나는 가서 필요한 물건들을 사올게" },
      {
        type: "E",
        title:
          "모두 모여! 밭을 먼저 갈고 그다음 씨를 뿌리고 물을 주면 되지. 우리가 다같이 모여서 하면 금방 할수있어",
      },
    ],
  },
  {
    id: 9,
    quest: "채소밭에 씨앗을 심기로한날 두더지가 당근과 배추씨를 잔뜩 가져왔다",
    type: "FT",
    answer: [
      {
        type: "F",
        title: `두더지야 우리와 화해하고싶은거지?
      두더지도 마음이 많이 불편했을거야. `,
      },
      {
        type: "T",
        title: `	
      어디봐, 음~ 밭의 2분의1은 배추씨,
      나머지는 당근씨를 심으면 딱 좋겠어, 고마워!`,
      },
    ],
  },
  {
    id: 10,
    quest:
      "채소밭은 온동네 토끼들과 함께 키우고 있다. 오늘은 내가 물을 주러 가는 날이다",
    type: "PJ",
    answer: [
      { type: "P", title: "비가 오면 온땅이 촉촉해지니까 오늘은 패스하자" },
      {
        type: "J",
        title: `오후에 비가 내린다고 했어,
      얼마나 내릴지 모르니 우선 물을 조금 주고 오후에 다시 가보자`,
      },
    ],
  },
  {
    id: 11,
    quest: "채소밭에 풍년이 들었다",
    type: "SN",
    answer: [
      {
        type: "S",
        title: `좋은 햇빛과 비가 적당히 내려서 올해는 풍년이 되었구나`,
      },
      {
        type: "N",
        title: `	
      에헤~ 금수강산에 가을이 왔네 풍년이 들었네 경사로다~`,
      },
    ],
  },
  {
    id: 12,
    quest:
      "2023 토끼해를 맞이하여 온 동네토끼들이 모여 회의를 하였다. 주요안건은?",
    type: "PJ",
    answer: [
      {
        type: "P",
        title: `	
      지금은 토끼풀이 제철이기 때문에 제절음식을 많이드시고 내일은 날이 따뜻할 예정이니 모두 토끼털 관리를 잘 해주세요. 아 반장토끼를 뽑아야하는데 언제뽑을까요?`,
      },
      {
        type: "J",
        title: `2023년 새로운 반장토끼를 뽑을거에요. 그리고
      올 한해 채소밭 관리는 반장토끼가 맡아서 하게될겁니다`,
      },
    ],
  },
];

export const rabbitYearResultList = [
  { type: "ESTJ", title: `더치`, subTitle: ``, result: "결과내용" },
  { type: "ISFP", title: `드워프 토끼`, subTitle: ``, result: "결과내용" },
  { type: "INTJ", title: `멧토끼`, subTitle: ``, result: "결과내용" },
  {
    type: "INFP",
    title: `브라운 드워프 토끼`,
    subTitle: ``,
    result: "결과내용",
  },
  { type: "ESFJ", title: `친칠라`, subTitle: ``, result: "결과내용" },
  {
    type: "ENTP",
    title: `홀랜드롭이어 토끼`,
    subTitle: ``,
    result: "결과내용",
  },
  {
    type: "INTP",
    title: `플로리다화이트 토끼`,
    subTitle: ``,
    result: "결과내용",
  },
  { type: "ENFP", title: `앙고라 토끼`, subTitle: ``, result: "결과내용" },
  { type: "ENFJ", title: `라이언헤드 토끼`, subTitle: ``, result: "결과내용" },
  { type: "ISTP", title: `렉스 토끼`, subTitle: ``, result: "결과내용" },
  { type: "ISTJ", title: `블랙더치 토끼`, subTitle: ``, result: "결과내용" },
  {
    type: "ISFJ",
    title: `아메리칸퍼지롭이어 토끼`,
    subTitle: ``,
    result: "결과내용",
  },
  {
    type: "ESFP",
    title: `잉글리쉬스팟 토끼`,
    subTitle: ``,
    result: "결과내용",
  },
  { type: "ENTJ", title: `자이언트 토끼`, subTitle: ``, result: "결과내용" },
  {
    type: "INFJ",
    title: `잉글리쉬롭이어 토끼`,
    subTitle: ``,
    result: "결과내용",
  },
  { type: "ESTP", title: `히말라얀 토끼`, subTitle: ``, result: "결과내용" },
];
