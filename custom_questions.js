/* 이 세션 전용 — Claude(구독)가 직접 생성한 1회분 신규 문제 (2026-07-11)
   추천 조합(국룰) 서베이 기준: 영화/공연/콘서트/공원/해변/쇼핑 + 음악감상 + 조깅/걷기 + 여행 3종 */
window.PREGENERATED_QUESTIONS = [
  { text: "Let's start the interview now. Tell me a little bit about yourself.",
    time: 60, type: "자기소개", category: "자기소개" },

  // 콤보1 — 서베이 · 조깅 (묘사 → 루틴 → 경험)
  { text: "You indicated in the survey that you go jogging. Tell me about the route you usually take. Where does it start, what do you pass along the way, and what makes that route better than other places you could run? Describe it in as much detail as possible.",
    time: 90, type: "묘사", category: "서베이 · 조깅" },
  { text: "Walk me through what you do on a typical jogging day, from the moment you decide to go out until you get back home. What do you wear, what do you bring with you, and what do you usually do right after you finish?",
    time: 90, type: "루틴", category: "서베이 · 조깅" },
  { text: "Runners always have one run they can't forget — maybe the weather turned on you, you got lost, or you surprised yourself. Tell me about your most memorable jogging experience. What happened, and why has it stayed with you?",
    time: 100, type: "경험", category: "서베이 · 조깅" },

  // 콤보2 — 서베이 · 해외여행 (묘사 → 루틴 → 비교)
  { text: "You said you like to travel abroad. Tell me about a country or city you have visited that impressed you. What did it look like, what was the atmosphere like, and what could you do there that you can't do at home?",
    time: 90, type: "묘사", category: "서베이 · 해외여행" },
  { text: "Before you leave for an overseas trip, what do you usually do to get ready? Tell me about your preparation process step by step — booking, packing, planning — starting from the moment you pick a destination.",
    time: 90, type: "루틴", category: "서베이 · 해외여행" },
  { text: "Think about traveling abroad on your own versus traveling with family or friends. How are the two experiences different for you — in how you plan, how you spend your days, and how you feel during the trip? Which do you prefer, and why?",
    time: 110, type: "비교", category: "서베이 · 해외여행" },

  // 콤보3 — 돌발 · 재활용 (묘사 → 경험 → 의견)
  { text: "Let's talk about recycling. How does recycling work where you live? Tell me what items get separated, where people take them, and who is responsible for making sure it gets done in your building or neighborhood.",
    time: 90, type: "묘사", category: "돌발 · 재활용" },
  { text: "Have you ever had trouble recycling something — an item you didn't know how to throw away, or a time you got it wrong and someone pointed it out? Tell me what the item was, what you did, and how it turned out.",
    time: 100, type: "경험", category: "돌발 · 재활용" },
  { text: "Some people say strict recycling rules are worth the inconvenience, while others think they put too much burden on ordinary people compared to what companies are asked to do. What is your opinion? Give me specific reasons.",
    time: 110, type: "의견", category: "돌발 · 재활용" },

  // 롤플레이 — 콘서트 티켓 (정보요청 → 문제해결)
  { text: "I'd like to give you a situation and ask you to act it out. A singer you love is holding a concert in your city next month. Call the ticket office and ask three or four questions about the tickets — for example, the dates, the seats, the prices, and how to book.",
    time: 60, type: "정보요청", category: "롤플레이 · 콘서트 티켓" },
  { text: "I'm sorry, but there is a problem I need you to resolve. On the day of the concert, you suddenly have to work late and can't make it. Call your friend who was going with you, explain the situation, and offer two or three alternatives — for example, giving the ticket to someone else, selling it, or going to a different show together.",
    time: 90, type: "문제해결", category: "롤플레이 · 콘서트 티켓" },

  // 어드밴스 — 기술 변화 (이슈 → 의견 → 비교)
  { text: "Let's talk about technology. Smartphones have become something people your age check from the moment they wake up. Why do you think people have become so dependent on their phones, and what problems does this dependence cause in daily life or at work?",
    time: 90, type: "이슈", category: "어드밴스 · 기술 변화" },
  { text: "These days, artificial intelligence tools can write, translate, and even hold conversations. Some people welcome this, while others worry about what it means for jobs and for how people learn. What is your view on AI becoming part of everyday work and study? Support your opinion with examples.",
    time: 110, type: "의견", category: "어드밴스 · 기술 변화" },
  { text: "Compare how people in your country communicated with each other about ten to fifteen years ago with how they communicate now. What has changed the most — the tools, the speed, or the way people treat each other? And how do you expect this to change again in the next ten years?",
    time: 120, type: "비교", category: "어드밴스 · 기술 변화" }
];
