// OPIc Practice App - Question Database
// All questions in English (authentic to real OPIc exam format)
// Question types: 묘사(describe), 경험(experience), 비교(compare)
// Times in seconds

// Self Introduction
const SELF_INTRO = {
  text: "Let's start the interview now. Tell me a little bit about yourself.",
  time: 60
};

// Survey-based questions
// key는 아래 서베이 항목의 value와 정확히 일치해야 함
const SURVEY_QUESTIONS = {
  // ===== 거주형태 =====
  "개인주택이나 아파트에 홀로 거주": [
    { text: "You indicated that you live alone. Tell me about your home. What does it look like? How many rooms does it have, and which room is your favorite? Please describe your place in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while living on your own. Maybe something unexpected happened, or you had to deal with a problem by yourself. What happened, and how did you handle the situation?", time: 90, type: "경험" },
    { text: "How has your life changed since you started living alone compared to when you lived with others? Compare the advantages and disadvantages of living by yourself, and explain which living arrangement you prefer.", time: 110, type: "비교" }
  ],
  "친구나 룸메이트와 함께 거주": [
    { text: "You indicated that you live with a roommate. Tell me about your living space and your roommate. What is your roommate like, and how do you divide the household chores? Please describe everything in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had with your roommate. Perhaps you had a fun time together or a disagreement that you needed to resolve. What happened, and how did things turn out?", time: 90, type: "경험" },
    { text: "Compare living with a roommate to living alone. What are the good and bad points of each? Which arrangement do you find more comfortable, and why?", time: 110, type: "비교" }
  ],
  "가족과 함께 주택이나 아파트에 거주": [
    { text: "You indicated that you live with your family. Tell me about your home and the family members you live with. Who are they, and what is your home like? Please describe it in as much detail as you can.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had at home with your family recently. What did you do together, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "How has living with your family changed over the years? Compare what it was like in the past to how it is now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "학교 기숙사": [
    { text: "You indicated that you live in a dormitory. Tell me about your dormitory. What does your room look like, what facilities are available, and how do you like living there? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while living in the dormitory. Maybe you met new people or dealt with an unexpected situation. What happened, and how did you feel about it?", time: 90, type: "경험" },
    { text: "Compare living in a dormitory to living at home. What are the main differences? Which one do you prefer, and what are the pros and cons of each?", time: 110, type: "비교" }
  ],

  // ===== 여가활동 =====
  "공원 가기": [
    { text: "You indicated that you like going to parks. Tell me about a park you usually visit. What does it look like, what facilities does it have, and what do you usually do there? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy visiting parks. Walk me through what you do from the moment you arrive. What does a typical visit look like for you, from beginning to end?", time: 90, type: "루틴" },
    { text: "How have the parks you visit changed over the years? Compare the parks you went to as a child with the ones you go to now, and explain the differences.", time: 110, type: "비교" }
  ],
  "카페/커피 전문점 가기": [
    { text: "You indicated that you enjoy going to cafes. Tell me about your favorite cafe. What does it look like, what kind of drinks do they serve, and why do you like going there? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy going to cafés. How do you usually spend your time when you visit one? Tell me about your routine from when you walk in to when you leave.", time: 90, type: "루틴" },
    { text: "Compare the cafes that are popular now to the ones that were popular in the past. How have cafes and coffee culture changed over time?", time: 110, type: "비교" }
  ],
  "영화 보기": [
    { text: "You indicated that you like watching movies. Tell me about the kinds of movies you enjoy. What is your favorite genre, and where do you usually watch movies? Please describe your movie-watching habits in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had watching a movie — perhaps at a theater or at home. What movie was it, who were you with, and why does it stand out in your memory? Give me all the details.", time: 90, type: "경험" },
    { text: "How has the way people watch movies changed over the years? Compare watching movies at the theater to watching them at home through streaming services.", time: 110, type: "비교" }
  ],
  "쇼핑하기": [
    { text: "You indicated that you enjoy shopping. Tell me about the places where you usually go shopping. What kinds of stores do you visit, and what do you usually buy? Please describe your shopping routine in detail.", time: 90, type: "묘사" },
    { text: "What is your typical shopping routine like? Where do you usually go first, and how do you decide what to buy?", time: 90, type: "루틴" },
    { text: "Compare shopping in physical stores to shopping online. What are the advantages and disadvantages of each, and which do you prefer these days?", time: 110, type: "비교" }
  ],
  "TV 시청": [
    { text: "You indicated that you like watching TV. Tell me about the kinds of TV programs you enjoy. What are your favorite shows, and when do you usually watch them? Please describe your TV-watching habits in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable TV program or episode you watched. What was it about, and why did it stay in your memory?", time: 90, type: "경험" },
    { text: "How have your TV-watching habits changed over the years? Compare the way you watched TV in the past to the way you watch it now.", time: 110, type: "비교" }
  ],
  "콘서트 보기": [
    { text: "You indicated that you enjoy going to concerts. Tell me about the kinds of concerts you like to attend. What type of music do you enjoy, and what are the venues usually like? Please describe everything in detail.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy attending concerts. What is it about being at a live performance that you find so appealing? Tell me more about what the experience means to you.", time: 90, type: "이유" },
    { text: "Compare attending a live concert to listening to music at home. What is special about a live performance, and which experience do you prefer?", time: 110, type: "비교" }
  ],
  "해변 가기": [
    { text: "You indicated that you like going to the beach. Tell me about a beach you usually visit. What does it look like, what is the atmosphere like, and what do you usually do there? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "What do you usually do when you visit the beach? Describe your typical beach day from start to finish.", time: 90, type: "루틴" },
    { text: "Compare going to the beach in the summer to going in other seasons. How is the experience different, and which do you enjoy more?", time: 110, type: "비교" }
  ],
  "캠핑 하기": [
    { text: "You indicated that you enjoy camping. Tell me about the places where you usually go camping. What is the setting like, what equipment do you bring, and what do you do there? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy camping. Before heading out on a trip, what kind of preparation do you typically do? What are the key things you make sure to arrange in advance?", time: 90, type: "준비" },
    { text: "How has camping changed compared to the past? Compare the camping experience or equipment people use now to what they used before.", time: 110, type: "비교" }
  ],
  "박물관 가기": [
    { text: "You indicated that you like visiting museums. Tell me about a museum you have visited. What kinds of exhibits did it have, and what was the building like? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had at a museum. What did you see, who were you with, and why was the visit so memorable?", time: 90, type: "경험" },
    { text: "Compare visiting a museum in person to viewing exhibits online. What are the benefits of each, and which do you prefer?", time: 110, type: "비교" }
  ],
  "스포츠 관람": [
    { text: "You indicated that you enjoy watching sports. Tell me about the sports you like to watch. Which sports or teams do you follow, and where do you usually watch the games? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable sporting event you watched, either in person or on TV. What happened during the game, and why was it so exciting?", time: 90, type: "경험" },
    { text: "Compare watching a sports game live at the stadium to watching it on TV at home. What are the pros and cons of each, and which do you prefer?", time: 110, type: "비교" }
  ],

  // ===== 취미/관심사 =====
  "음악 감상하기": [
    { text: "You indicated that you enjoy listening to music. Tell me about the kinds of music you like. What are your favorite genres or artists, and when do you usually listen to music? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "When and where do you usually listen to music? Do you have a favorite playlist or artist you listen to regularly?", time: 90, type: "루틴" },
    { text: "How has the way you listen to music changed over the years? Compare how you listened to music in the past to how you do it now.", time: 110, type: "비교" }
  ],
  "독서": [
    { text: "You indicated that you enjoy reading. Tell me about the kinds of books you like to read. What is your favorite genre, and where and when do you usually read? Please describe your reading habits in detail.", time: 90, type: "묘사" },
    { text: "Tell me about your typical reading routine. When and where do you usually read? How do you choose what to read next?", time: 90, type: "루틴" },
    { text: "Compare reading paper books to reading e-books or digital content. What are the advantages of each, and which do you prefer these days?", time: 110, type: "비교" }
  ],
  "요리하기": [
    { text: "You indicated that you enjoy cooking. Tell me about the kinds of dishes you usually cook. What is your specialty, and what does your kitchen look like? Please describe everything in detail.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy cooking. Tell me about the kinds of meals you tend to make. What do you like to prepare most often, and how do you fit cooking into your day?", time: 90, type: "루틴" },
    { text: "How have your cooking skills or habits changed over the years? Compare how you cooked when you first started to how you cook now.", time: 110, type: "비교" }
  ],
  "사진 촬영하기": [
    { text: "You indicated that you enjoy taking photos. Tell me about the kinds of pictures you like to take. What subjects do you usually photograph, and what equipment do you use? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "What do you usually photograph, and how do you approach taking a good shot? What is your process like?", time: 90, type: "루틴" },
    { text: "Compare taking photos with a smartphone to taking them with a dedicated camera. What are the strengths of each, and which do you prefer?", time: 110, type: "비교" }
  ],
  "그림 그리기": [
    { text: "You indicated that you enjoy drawing or painting. Tell me about the kind of art you like to create. What do you usually draw, what materials do you use, and where do you do it? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience related to drawing or painting. Maybe you created something you were proud of, or you took a class. What happened, and why was it memorable?", time: 90, type: "경험" },
    { text: "How have your drawing skills or interests changed over time? Compare the way you used to draw to the way you draw now.", time: 110, type: "비교" }
  ],
  "악기 연주하기": [
    { text: "You indicated that you play a musical instrument. Tell me about the instrument you play. What is it, how long have you been playing, and where do you usually practice? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while playing your instrument. Maybe you performed in front of others or learned a difficult piece. What happened, and how did you feel?", time: 90, type: "경험" },
    { text: "Compare how you played your instrument when you first started to how you play now. How have your skills and feelings about it changed?", time: 110, type: "비교" }
  ],
  "글쓰기": [
    { text: "You indicated that you enjoy writing. Tell me about the kind of writing you do. What do you usually write about, and when and where do you write? Please describe your writing habits in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had related to writing. Maybe you wrote something you were proud of, or your writing was shared with others. What happened, and why was it meaningful?", time: 90, type: "경험" },
    { text: "How has your writing changed over the years? Compare the way you used to write to the way you write now, and explain what has improved.", time: 110, type: "비교" }
  ],
  "애완동물 키우기": [
    { text: "You indicated that you have a pet. Tell me about your pet. What kind of animal is it, what does it look like, and what is its personality like? Please describe your pet in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had with your pet. What happened, and why does this moment stand out in your memory?", time: 90, type: "경험" },
    { text: "How has your life changed since you got your pet? Compare your daily routine before and after having a pet.", time: 110, type: "비교" }
  ],
  "춤추기": [
    { text: "You indicated that you enjoy dancing. Tell me about the kind of dancing you like to do. What style of dance is it, and where do you usually dance? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while dancing. Maybe you performed, took a class, or danced at a special event. What happened, and why was it memorable?", time: 90, type: "경험" },
    { text: "Compare how you danced when you first started to how you dance now. How have your skills and enthusiasm changed over time?", time: 110, type: "비교" }
  ],

  // ===== 운동 =====
  "조깅": [
    { text: "You indicated that you enjoy jogging or running. Tell me about where and when you usually run. What is your running route like, and how often do you go? Please describe your running routine in detail.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy jogging. Tell me about how running became part of your life. What first got you started, and what has kept you going since then?", time: 90, type: "계기" },
    { text: "How has your running changed since you first started? Compare your early days of running to how you run now in terms of distance, pace, or habits.", time: 110, type: "비교" }
  ],
  "헬스": [
    { text: "You indicated that you work out with weights. Tell me about the gym you go to and your workout routine. What does the gym look like, and what exercises do you usually do? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "How did you first get into weightlifting or going to the gym? What motivated you to start?", time: 90, type: "계기" },
    { text: "How has your fitness or your body changed since you started working out? Compare how you were before to how you are now.", time: 110, type: "비교" }
  ],
  "수영": [
    { text: "You indicated that you enjoy swimming. Tell me about where you usually swim. What does the pool or place look like, and how often do you go? Please describe your swimming routine in detail.", time: 90, type: "묘사" },
    { text: "How did you first learn to swim? Was there a specific reason you started?", time: 90, type: "계기" },
    { text: "Compare your swimming skills when you first learned to how they are now. How have you improved over time?", time: 110, type: "비교" }
  ],
  "자전거": [
    { text: "You indicated that you enjoy cycling. Tell me about where and when you usually ride your bike. What is your route like, and what kind of bike do you have? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy cycling. Tell me about your usual cycling routine. How often do you ride, where do you typically go, and do you usually head out alone or with someone?", time: 90, type: "루틴" },
    { text: "How has cycling changed for you over the years? Compare how and where you used to ride to how you ride now.", time: 110, type: "비교" }
  ],
  "요가": [
    { text: "You indicated that you practice yoga. Tell me about where and when you usually do yoga. What is the studio or place like, and what kind of yoga do you practice? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while practicing yoga. Maybe you mastered a difficult pose or felt a real change. What happened, and how did you feel?", time: 90, type: "경험" },
    { text: "How has yoga affected your life since you started? Compare how you felt physically and mentally before yoga to how you feel now.", time: 110, type: "비교" }
  ],
  "배드민턴": [
    { text: "You indicated that you play badminton. Tell me about where and when you usually play. Who do you play with, and what is the court like? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable badminton game you played. What happened during the match, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "Compare how you played badminton when you first started to how you play now. How have your skills changed over time?", time: 110, type: "비교" }
  ],
  "걷기": [
    { text: "You indicated that you enjoy walking or hiking. Tell me about where you usually go. What are the trails or routes like, and how often do you go? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy walking or hiking. When you plan an outing, what do you typically do to get ready? How do you go about deciding on a destination and the right time to go?", time: 90, type: "준비" },
    { text: "Compare walking or hiking in different seasons or locations. How is the experience different, and which do you enjoy the most?", time: 110, type: "비교" }
  ],
  "축구": [
    { text: "You indicated that you play soccer. Tell me about where and when you usually play. Who do you play with, and what is the field like? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable soccer game you played in. What happened during the match, and why was it so unforgettable?", time: 90, type: "경험" },
    { text: "How has your involvement in soccer changed over the years? Compare how you played in the past to how you play now.", time: 110, type: "비교" }
  ],
  "농구": [
    { text: "You indicated that you play basketball. Tell me about where and when you usually play. Who do you play with, and what is the court like? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable basketball game you played in. What happened during the game, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "Compare how you played basketball when you first started to how you play now. How have your skills and your love for the game changed?", time: 110, type: "비교" }
  ],

  // ===== 여행/출장 =====
  "국내여행": [
    { text: "You indicated that you enjoy domestic travel. Tell me about a place in your country that you like to visit. What is it like, and what can you do there? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable domestic trip you took. Where did you go, who were you with, and what made the trip so special?", time: 90, type: "경험" },
    { text: "How has domestic travel changed over the years? Compare the way people traveled within the country in the past to how they travel now.", time: 110, type: "비교" }
  ],
  "해외여행": [
    { text: "You indicated that you enjoy traveling abroad. Tell me about a foreign country you have visited or would like to visit. What is it like, and what can you do there? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable trip you took abroad. Where did you go, what did you do, and why was it so unforgettable?", time: 90, type: "경험" },
    { text: "Compare traveling abroad to traveling within your own country. What are the advantages and disadvantages of each, and which do you prefer?", time: 110, type: "비교" }
  ],
  "집에서 보내는 휴가": [
    { text: "You indicated that you enjoy spending your vacation at home. Tell me about what you usually do during a stay-at-home vacation. How do you spend your time, and what makes it relaxing? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "You indicated that you enjoy spending your vacation at home. What do you find appealing about staying in rather than going somewhere? What makes it a good option for you?", time: 90, type: "의견" },
    { text: "Compare spending a vacation at home to traveling somewhere. What are the benefits of each, and which do you prefer these days?", time: 110, type: "비교" }
  ],
  "국내 출장": [
    { text: "You indicated that you go on domestic business trips. Tell me about where you usually travel for work and what you do there. What is a typical business trip like for you? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable domestic business trip you took. Where did you go, what was the purpose, and what made it memorable?", time: 90, type: "경험" },
    { text: "Compare a business trip to a leisure trip. How are they different in terms of preparation and experience, and which do you find more demanding?", time: 110, type: "비교" }
  ],
  "해외 출장": [
    { text: "You indicated that you go on overseas business trips. Tell me about the countries you travel to for work and what you do there. What is a typical overseas business trip like? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable overseas business trip you took. Where did you go, what happened, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "Compare an overseas business trip to a domestic one. What are the main differences and challenges, and which do you find more difficult?", time: 110, type: "비교" }
  ],

  // ===== 거주형태 신규 =====
  "군대 막사": [
    { text: "You indicated that you live in military barracks. Tell me about where you live. What does your room and the surrounding facilities look like, and what is life in the barracks like day to day? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while living in the barracks. Maybe something unexpected happened, or you had a particularly meaningful moment with your fellow soldiers. What happened?", time: 90, type: "경험" },
    { text: "Compare life in the military barracks to living in a regular home. What are the biggest differences, and how have you adjusted to the military lifestyle?", time: 110, type: "비교" }
  ],

  // ===== 여가활동 신규 16개 =====
  "클럽/나이트클럽 가기": [
    { text: "You indicated that you enjoy going to clubs. Tell me about a club you usually go to. What does it look like inside, what kind of music do they play, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had at a club. Maybe you had a great time on the dance floor or something unexpected happened. What happened, who were you with, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "How has clubbing changed over the years? Compare the clubs you used to go to in the past with the ones you go to now, and explain how the music, the crowds, or the atmosphere have changed.", time: 110, type: "비교" }
  ],
  "공연 보기": [
    { text: "You indicated that you enjoy watching performances. Tell me about the kinds of performances you like to see. What type of shows do you attend, and what are the venues usually like? Please describe everything in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable performance you attended. What kind of show was it, who did you go with, and why does it stand out in your memory? Describe what made the experience special.", time: 90, type: "경험" },
    { text: "How has the way people enjoy performances changed over the years? Compare attending live performances in the past to the way people watch them now, and explain the main differences.", time: 110, type: "비교" }
  ],
  "주거 개선": [
    { text: "You indicated that you are interested in home improvement. Tell me about a space in your home that you have improved or want to improve. What does it look like, and what changes did you make or plan to make? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable home improvement project you worked on. What did you want to change, what steps did you take, and how did it turn out in the end? Describe the whole experience.", time: 90, type: "경험" },
    { text: "How has the way people improve their homes changed over the years? Compare how people decorated or renovated their homes in the past to how they do it now, and explain the differences.", time: 110, type: "비교" }
  ],
  "요리 관련 프로그램 시청": [
    { text: "You indicated that you enjoy watching cooking programs. Tell me about the kinds of cooking shows you like to watch. What are your favorite programs, and what makes them interesting? Please describe them in as much detail as possible.", time: 90, type: "묘사" },
    { text: "When and how do you usually watch cooking programs? Walk me through your typical routine, from choosing what to watch to what you do while watching them.", time: 90, type: "루틴" },
    { text: "How have cooking programs changed over the years? Compare the cooking shows that were popular in the past to the ones that are popular now, and explain how they are different.", time: 110, type: "비교" }
  ],
  "게임 하기": [
    { text: "You indicated that you enjoy playing games. Tell me about the kinds of games you like to play. What are your favorite games, what devices do you use, and where do you usually play? Please describe everything in detail.", time: 90, type: "묘사" },
    { text: "Walk me through your typical gaming routine. When do you usually play, how long do you play for, and what do you do from the moment you start until you finish?", time: 90, type: "루틴" },
    { text: "How has gaming changed over the years? Compare the games you used to play in the past with the ones you play now, and explain how the technology or the games themselves have changed.", time: 110, type: "비교" }
  ],
  "SNS 글 올리기": [
    { text: "You indicated that you enjoy posting on social media. Tell me about how you use social media. Which platforms do you use, and what kinds of things do you usually post? Please describe your social media habits in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through what you usually do when you post on social media. From the moment you decide to post something to when you share it, what does your routine look like?", time: 90, type: "루틴" },
    { text: "How has the way people use social media changed over the years? Compare how people used social media in the past to how they use it now, and explain the biggest differences.", time: 110, type: "비교" }
  ],
  "술집/바에 가기": [
    { text: "You indicated that you enjoy going to bars. Tell me about a bar you usually visit. What does it look like, what drinks do they serve, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had at a bar. Maybe you celebrated something special or had a great time with friends. What happened, who were you with, and why was it memorable?", time: 90, type: "경험" },
    { text: "How has bar culture changed over the years? Compare the bars you used to go to in the past with the ones you go to now, and explain how the atmosphere or the drinks have changed.", time: 110, type: "비교" }
  ],
  "친구들과 문자하기": [
    { text: "You indicated that you enjoy texting with friends. Tell me about how you usually communicate with your friends through text. Which apps do you use, and what kinds of things do you talk about? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through a typical day of texting with your friends. When do you usually message them, how often do you check your phone, and what do your conversations look like?", time: 90, type: "루틴" },
    { text: "How has the way people text and communicate changed over the years? Compare how you kept in touch with friends in the past to how you do it now, and explain the main differences.", time: 110, type: "비교" }
  ],
  "당구치기": [
    { text: "You indicated that you enjoy playing billiards. Tell me about the place where you usually play. What does it look like, what equipment is there, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How did you first get into playing billiards? Tell me about what made you start, who introduced you to it, and how your interest in the game developed over time.", time: 90, type: "계기" },
    { text: "How has your interest in billiards changed over the years? Compare how you played when you first started to how you play now, and explain how your skills or habits have changed.", time: 110, type: "비교" }
  ],
  "자원 봉사": [
    { text: "You indicated that you do volunteer work. Tell me about the kind of volunteer work you do. Where do you usually volunteer, what activities are involved, and who do you work with? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable volunteering experience you had. What did you do, who did you help, and why does it stand out in your memory? Describe what made the experience meaningful.", time: 90, type: "경험" },
    { text: "How has volunteering changed for you over the years? Compare the volunteer work you did in the past to what you do now, and explain how your involvement has changed.", time: 110, type: "비교" }
  ],
  "차 드라이브 하기": [
    { text: "You indicated that you enjoy going for drives. Tell me about a route or place you usually drive to. What does the scenery look like, and what do you enjoy about driving there? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through a typical drive you take. When do you usually go, where do you head, and what do you do along the way from start to finish?", time: 90, type: "루틴" },
    { text: "How has driving for leisure changed for you over the years? Compare the drives you used to take in the past with the ones you take now, and explain the differences.", time: 110, type: "비교" }
  ],
  "시험 대비 과정 수강": [
    { text: "You indicated that you take test preparation courses. Tell me about a course you are taking or have taken. Where is it held, what is the classroom like, and what does the course cover? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How do you usually prepare for a test when you take these courses? Walk me through the preparations you make and the steps you follow to get ready for the exam.", time: 90, type: "준비" },
    { text: "How has the way you prepare for tests changed over the years? Compare how you studied for exams in the past to how you do it now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "뉴스 보거나 듣기": [
    { text: "You indicated that you watch or listen to the news. Tell me about how you usually get your news. What sources do you use, what kinds of news do you follow, and when do you check it? Please describe your habits in detail.", time: 90, type: "묘사" },
    { text: "Walk me through your typical routine for following the news. When during the day do you usually check it, what platforms do you use, and how much time do you spend on it?", time: 90, type: "루틴" },
    { text: "How has the way people get their news changed over the years? Compare how people followed the news in the past to how they do it now, and explain the main differences.", time: 110, type: "비교" }
  ],
  "체스": [
    { text: "You indicated that you enjoy playing chess. Tell me about how and where you usually play. Do you play in person or online, what does your set look like, and who do you usually play with? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "How did you first get into playing chess? Tell me about what made you start, who taught you, and how your interest in the game developed over time.", time: 90, type: "계기" },
    { text: "How has your interest in chess changed over the years? Compare how you played when you first started to how you play now, and explain how your skills or strategies have changed.", time: 110, type: "비교" }
  ],
  "리얼리티 쇼 보기": [
    { text: "You indicated that you enjoy watching reality shows. Tell me about the kinds of reality shows you like. What are your favorite programs, and what makes them entertaining? Please describe them in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through your typical routine for watching reality shows. When do you usually watch them, where do you watch, and what do you do while watching?", time: 90, type: "루틴" },
    { text: "How have reality shows changed over the years? Compare the reality programs that were popular in the past to the ones that are popular now, and explain how they are different.", time: 110, type: "비교" }
  ],
  "구직 활동": [
    { text: "You indicated that you are involved in job searching. Tell me about how you usually look for jobs. What websites or methods do you use, and what kind of position are you looking for? Please describe your job search in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had during your job search. Maybe you had an interesting interview or an unexpected situation came up. What happened, and how did you handle it?", time: 90, type: "경험" },
    { text: "How has job searching changed over the years? Compare the way people looked for jobs in the past to how they do it now, and explain the biggest differences.", time: 110, type: "비교" }
  ],

  // ===== 취미/관심사 신규 5개 =====
  "아이에게 책 읽어주기": [
    { text: "You indicated that you enjoy reading books to children. Tell me about how you usually do this. What kinds of books do you read, where do you do it, and what is the setting like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through your typical routine when you read to a child. When do you usually do it, how do you choose the book, and what do you do from beginning to end?", time: 90, type: "루틴" },
    { text: "How has reading to children changed over the years? Compare the kinds of books or the way people read to children in the past to how it is done now, and explain the differences.", time: 110, type: "비교" }
  ],
  "혼자 노래부르거나 합창하기": [
    { text: "You indicated that you enjoy singing alone or in a choir. Tell me about how and where you usually sing. What kind of songs do you sing, and what is the setting like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How did you first get into singing? Tell me about what made you start, who or what inspired you, and how your interest in singing developed over time.", time: 90, type: "계기" },
    { text: "How has your interest in singing changed over the years? Compare how you sang when you first started to how you sing now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "여행 관련 잡지나 블로그 글 읽기": [
    { text: "You indicated that you enjoy reading travel magazines or blogs. Tell me about the kinds of travel content you like to read. What topics interest you most, and where do you usually read them? Please describe it in detail.", time: 90, type: "묘사" },
    { text: "Walk me through your typical routine for reading travel magazines or blogs. When do you usually read them, what platforms do you use, and what do you do while reading?", time: 90, type: "루틴" },
    { text: "How has the way people read travel content changed over the years? Compare how people got travel information in the past to how they do it now, and explain the main differences.", time: 110, type: "비교" }
  ],
  "주식 투자": [
    { text: "You indicated that you are interested in investing in stocks. Tell me about how you usually manage your investments. What tools or apps do you use, and what kind of information do you look at? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How did you first get into stock investing? Tell me about what made you start, who or what introduced you to it, and how your interest developed over time.", time: 90, type: "계기" },
    { text: "How has stock investing changed over the years? Compare how people invested in stocks in the past to how they do it now, and explain the biggest differences.", time: 110, type: "비교" }
  ],
  "신문 읽기": [
    { text: "You indicated that you enjoy reading newspapers. Tell me about how you usually read the news. Which newspapers do you read, what sections do you prefer, and when do you read them? Please describe your habits in detail.", time: 90, type: "묘사" },
    { text: "Walk me through your typical routine for reading the newspaper. When during the day do you usually read it, which sections do you start with, and how much time do you spend?", time: 90, type: "루틴" },
    { text: "How has reading newspapers changed over the years? Compare how people read newspapers in the past to how they read the news now, and explain the main differences.", time: 110, type: "비교" }
  ],

  // ===== 운동 신규 13개 + 하이킹/트레킹 =====
  "하이킹/트레킹": [
    { text: "You indicated that you enjoy hiking or trekking. Tell me about a trail or mountain you usually visit. What does the scenery look like, how long is the trail, and what do you bring with you? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Before you go hiking, what do you usually do to prepare? Walk me through your preparations, from choosing your destination to getting your gear and supplies ready.", time: 90, type: "준비" },
    { text: "How has hiking changed for you over the years? Compare the trails you used to hike when you first started to the ones you hike now, and explain how your fitness or approach has changed.", time: 110, type: "비교" }
  ],
  "야구/소프트볼": [
    { text: "You indicated that you play baseball or softball. Tell me about where you usually play. What does the field look like, what equipment do you use, and who do you play with? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while playing baseball or softball. Maybe you had a great game or an unexpected moment. What happened, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "How has your involvement in baseball or softball changed over the years? Compare how you played when you first started to how you play now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "미식축구": [
    { text: "You indicated that you play American football. Tell me about where you usually play. What does the field look like, what equipment do you wear, and who do you play with? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while playing football. Maybe you had a great play or an exciting game. What happened, who were you with, and why was it memorable?", time: 90, type: "경험" },
    { text: "How has your involvement in football changed over the years? Compare how you played when you first started to how you play now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "하키": [
    { text: "You indicated that you play hockey. Tell me about where you usually play. What does the rink or field look like, what equipment do you use, and who do you play with? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while playing hockey. Maybe you had a great game or an unexpected moment. What happened, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "How has your involvement in hockey changed over the years? Compare how you played when you first started to how you play now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "크리켓": [
    { text: "You indicated that you play cricket. Tell me about where you usually play. What does the pitch or field look like, what equipment do you use, and who do you play with? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while playing cricket. Maybe you had a great match or a memorable moment. What happened, who were you with, and why was it memorable?", time: 90, type: "경험" },
    { text: "How has your involvement in cricket changed over the years? Compare how you played when you first started to how you play now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "골프": [
    { text: "You indicated that you play golf. Tell me about the course or place where you usually play. What does it look like, what equipment do you use, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through your typical golf routine. When do you usually play, how do you prepare, and what do you do from the first hole to the last?", time: 90, type: "루틴" },
    { text: "How has your involvement in golf changed over the years? Compare how you played when you first started to how you play now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "배구": [
    { text: "You indicated that you play volleyball. Tell me about where you usually play. What does the court look like, what equipment do you use, and who do you play with? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while playing volleyball. Maybe you had a great match or an exciting moment. What happened, who were you with, and why was it memorable?", time: 90, type: "경험" },
    { text: "How has your involvement in volleyball changed over the years? Compare how you played when you first started to how you play now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "테니스": [
    { text: "You indicated that you play tennis. Tell me about the court where you usually play. What does it look like, what equipment do you use, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through your typical tennis routine. When do you usually play, how do you warm up, and what do you do from the start of a session to the end?", time: 90, type: "루틴" },
    { text: "How has your involvement in tennis changed over the years? Compare how you played when you first started to how you play now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "탁구": [
    { text: "You indicated that you play table tennis. Tell me about where you usually play. What does the place look like, what equipment do you use, and who do you play with? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How did you first get into playing table tennis? Tell me about what made you start, who introduced you to it, and how your interest in the game developed over time.", time: 90, type: "계기" },
    { text: "How has your involvement in table tennis changed over the years? Compare how you played when you first started to how you play now, and explain how your skills or habits have changed.", time: 110, type: "비교" }
  ],
  "태권도": [
    { text: "You indicated that you practice taekwondo. Tell me about where you usually train. What does the place look like, what equipment do you wear, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How did you first get into practicing taekwondo? Tell me about what made you start, who or what inspired you, and how your interest developed over time.", time: 90, type: "계기" },
    { text: "How has your involvement in taekwondo changed over the years? Compare how you trained when you first started to how you train now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "스키/스노우보드": [
    { text: "You indicated that you enjoy skiing or snowboarding. Tell me about a place where you usually go. What does the slope or resort look like, what equipment do you use, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How do you usually prepare before going skiing or snowboarding? Walk me through the preparations you make, from getting your gear ready to planning the trip.", time: 90, type: "준비" },
    { text: "How has skiing or snowboarding changed for you over the years? Compare how you did it when you first started to how you do it now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "아이스 스케이트": [
    { text: "You indicated that you enjoy ice skating. Tell me about the rink where you usually skate. What does it look like, what equipment do you use, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Tell me about a memorable experience you had while ice skating. Maybe you learned something new or had a fun time with others. What happened, and why does it stand out in your memory?", time: 90, type: "경험" },
    { text: "How has your involvement in ice skating changed over the years? Compare how you skated when you first started to how you skate now, and explain what has changed the most.", time: 110, type: "비교" }
  ],
  "낚시": [
    { text: "You indicated that you enjoy fishing. Tell me about a place where you usually go fishing. What does the setting look like, what equipment do you use, and what is the atmosphere like? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "Walk me through your typical fishing trip. When do you usually go, how do you prepare, and what do you do from the moment you arrive until you leave?", time: 90, type: "루틴" },
    { text: "How has fishing changed for you over the years? Compare how you fished when you first started to how you do it now, and explain how your equipment or habits have changed.", time: 110, type: "비교" }
  ],
  "운동 수업 수강하기": [
    { text: "You indicated that you take fitness classes. Tell me about a class you usually attend. Where is it held, what does the place look like, and what kind of activities are involved? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
    { text: "How did you first get into taking fitness classes? Tell me about what made you start, who or what motivated you, and how your interest developed over time.", time: 90, type: "계기" },
    { text: "How has the way you take fitness classes changed over the years? Compare how you worked out when you first started to how you do it now, and explain what has changed the most.", time: 110, type: "비교" }
  ]
};

// Surprise/돌발 topics
const SURPRISE_TOPICS = [
  {
    key: "날씨",
    questions: [
      { text: "Tell me about the weather and seasons in your country. What is the climate like throughout the year, and which season do you like the most? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a memorable experience you had related to the weather. Maybe there was a storm, a heat wave, or unusually beautiful weather. What happened, and how did it affect you?", time: 90, type: "경험" },
      { text: "Think about your favorite season and the season you like the least. Compare what you typically do during each one — the activities, the mood, and how you spend your time. Which season do you prefer overall, and why?", time: 110, type: "비교" },
      { text: "Some people say that weather has a big influence on people's mood and daily life, while others disagree. What is your opinion on this? Do you believe weather really affects how people feel and behave? Please explain your opinion in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think weather patterns seem to be changing in recent years, with more extreme heat, cold, or unpredictable conditions? What problems does this cause for people in their daily lives, and why do you think this is happening?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "건강",
    related: ["헬스", "운동 수업 수강하기", "요가", "조깅", "걷기"],
    questions: [
      { text: "Tell me about how you take care of your health. What do you usually do to stay healthy, and how often do you visit the doctor or hospital? Please describe your habits in detail.", time: 90, type: "묘사" },
      { text: "Have you ever had a memorable experience at a hospital or clinic? Why did you go, what happened, and how did everything turn out?", time: 90, type: "경험" },
      { text: "Compare how younger people in your country generally take care of their health to how older generations, such as your parents, tend to do it. What differences do you notice in their habits, attitudes, or the kinds of exercise and diet they follow?", time: 110, type: "비교" },
      { text: "Some people believe that staying healthy is entirely a personal responsibility, while others think society and the government should play a bigger role in promoting health. What is your opinion on this issue? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think so many people struggle to maintain healthy habits, such as exercising regularly or eating well? What problems get in the way, and why do you think these obstacles are so common?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "은행",
    related: ["주식 투자"],
    questions: [
      { text: "Tell me about a typical bank employee or banker in Korea. What do they look like, and what kinds of tasks are they responsible for? Please describe in detail.", time: 90, type: "묘사" },
      { text: "Tell me about a memorable experience you had at a bank or while handling a financial matter. What happened, and how did you deal with it?", time: 90, type: "경험" },
      { text: "Compare visiting a bank branch in person to using a mobile banking app. What are the advantages and disadvantages of each, and which method do you personally prefer for handling your banking?", time: 110, type: "비교" },
      { text: "Some people think banks should focus more on providing in-person service, while others believe everything should be handled digitally. What is your opinion about how banks should operate? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think many people find dealing with banks or financial institutions stressful or confusing? What kinds of problems do people commonly face, and what do you think causes them?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "재활용",
    questions: [
      { text: "Tell me about how recycling works where you live. How do people sort and dispose of their waste, and what rules do you follow? Please describe the process in detail.", time: 90, type: "묘사" },
      { text: "Think back to a time when something memorable happened related to recycling or protecting the environment. What did you do, and why does it stand out in your memory?", time: 90, type: "경험" },
      { text: "Compare how recycling and waste separation are handled in your country to how they are done in another country you know about. What are the biggest differences in the rules, the habits of the people, or how strictly they are enforced?", time: 110, type: "비교" },
      { text: "Some people say that individuals cannot make a real difference with recycling unless companies and governments also change their practices. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think many people fail to recycle properly, even when the rules are explained clearly? What problems or obstacles do people face, and why do you think this happens?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "테크놀로지",
    questions: [
      { text: "Tell me about the role technology plays in your everyday life. What devices or digital tools do you find yourself relying on, and how have they become part of your daily routine?", time: 90, type: "묘사" },
      { text: "Tell me about a memorable experience you had related to technology or the internet. Maybe a new device changed your life, or you faced a technical problem. What happened?", time: 90, type: "경험" },
      { text: "Compare your everyday life before smartphones and high-speed internet became common to your life now. What are the biggest differences you notice, and would you say the changes have mostly made life better or more complicated?", time: 110, type: "비교" },
      { text: "Some people think technology has made people's lives easier and more convenient, while others believe it has created more stress and new problems. What is your opinion on this issue? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think some people struggle to keep up with rapidly changing technology? What kinds of problems do they face, and what do you think is causing this gap?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "대중교통",
    related: ["차 드라이브 하기"],
    questions: [
      { text: "Tell me about the public transportation system where you live. What options are available to people, and which form do most people tend to use? Please give me a detailed description.", time: 90, type: "묘사" },
      { text: "What happened the last time something memorable occurred while you were using public transportation? Maybe something unexpected happened on your commute. What was it, and how did you handle it?", time: 90, type: "경험" },
      { text: "Compare taking public transportation to driving your own car to get around your area. What are the benefits and drawbacks of each option, and which one do you usually choose?", time: 110, type: "비교" },
      { text: "Some people believe that using public transportation is better for society than driving a personal car, while others disagree. What is your opinion on this issue? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think public transportation can be crowded or unreliable at certain times? What problems does this cause for commuters, and what do you think is the main cause?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "외식/식당",
    related: ["요리하기", "카페/커피 전문점 가기"],
    questions: [
      { text: "Tell me about a restaurant you like to go to. What kind of food do they serve, what is the atmosphere like, and why do you enjoy going there? Please describe it in detail.", time: 90, type: "묘사" },
      { text: "Tell me about a memorable dining experience you had at a restaurant. Who were you with, what did you eat, and why was it so special?", time: 90, type: "경험" },
      { text: "Compare eating at an upscale, expensive restaurant to eating at a small, casual local eatery. What is different about the food, the atmosphere, and the overall experience, and which type of place do you prefer?", time: 110, type: "비교" },
      { text: "Some people think eating out often is a waste of money and unhealthy, while others see it as an important part of enjoying life. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think some restaurants struggle to stay in business or provide poor service? What problems do customers commonly face at restaurants, and what do you think causes them?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "명절",
    questions: [
      { text: "Tell me about an important holiday or traditional celebration in your country. When is it, and how do people usually celebrate it? Please describe it in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a memorable experience you had during a holiday or traditional celebration. What did you do, who were you with, and why was it memorable?", time: 90, type: "경험" },
      { text: "Compare how your grandparents' or parents' generation traditionally celebrated this holiday to how your generation celebrates it today. What customs have stayed the same, and what has changed?", time: 110, type: "비교" },
      { text: "Some people think traditional holiday customs should be preserved exactly as they are, while others believe they should change with the times. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think many people find holidays stressful, even though they are meant for celebration and relaxation? What kinds of problems commonly arise during holidays, and why?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "병원",
    related: ["헬스", "운동 수업 수강하기", "요가", "조깅", "걷기"],
    questions: [
      { text: "Describe a clinic or hospital that you visit regularly. What does it look like inside, and what kinds of services does it offer? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a time when you had to visit a hospital or clinic unexpectedly. What was wrong, how did the visit go, and how did the experience affect you?", time: 90, type: "경험" },
      { text: "Compare going to a large general hospital to visiting a small neighborhood clinic when you are not feeling well. What are the differences in waiting times, cost, and the quality of care, and which do you usually choose?", time: 110, type: "비교" },
      { text: "Some people believe healthcare should be free and provided by the government, while others think it should remain a private business. What is your opinion on this issue? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think people sometimes have to wait a long time to see a doctor or receive treatment? What problems does this create, and what do you think are the main causes?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "패션",
    related: ["쇼핑하기"],
    questions: [
      { text: "Describe your personal sense of style and the kinds of clothing you typically wear. What brands, colors, or styles do you prefer, and why? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Have you ever had a memorable experience while shopping for clothes? What were you looking for, what happened during the trip, and what made that experience stand out? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare fashion trends in your country to fashion trends in another country you are familiar with. What are the biggest differences in style, colors, or what people consider fashionable? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think following fashion trends is important for making a good impression, while others believe it does not matter at all. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think the fashion industry is often criticized for problems like overproduction or unfair labor practices? What issues do you think are most serious, and why do they happen?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "가구",
    related: ["주거 개선"],
    questions: [
      { text: "Describe the furniture in your home or the room you spend the most time in. What pieces do you have, how are they arranged, and what do you like about them? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a time when you bought a new piece of furniture or rearranged your living space. What did you get or change, and how did it affect the feel of your home? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare buying furniture at a physical furniture store to buying it online. What are the advantages and disadvantages of each method, and which one would you choose the next time you need a new piece of furniture? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think it's better to buy expensive, high-quality furniture that lasts a long time, while others prefer cheaper furniture that can be replaced often. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think people sometimes have trouble finding furniture that fits their space or needs? What problems commonly come up when choosing or buying furniture, and why?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "여가시간",
    questions: [
      { text: "Describe how you typically spend your free time. What activities do you enjoy most, and who do you usually spend your leisure time with? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a particularly enjoyable leisure activity you took part in recently. What did you do, where did you go, and what made it so memorable? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare how you spend your free time on weekdays to how you spend it on weekends. What kinds of activities do you do differently, and which do you enjoy more? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people believe having a lot of free time is essential for happiness, while others think being busy and productive matters more. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think many people feel they don't have enough leisure time these days? What problems does this cause, and what do you think is the main reason for it?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "인터넷 서핑",
    related: ["SNS 글 올리기"],
    questions: [
      { text: "Describe your typical internet browsing habits. What kinds of websites or apps do you visit most often, and what do you usually look for or do online? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a time when you found something particularly useful or surprising while browsing the internet. What were you searching for, what did you discover, and how did it impact you? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare how you browsed the internet ten or fifteen years ago — the sites you visited, the devices you used — to how you use the internet today. What has changed the most about your online habits?", time: 110, type: "비교" },
      { text: "Some people think spending a lot of time browsing the internet is a waste of time, while others see it as valuable for learning and relaxation. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think people sometimes come across false or misleading information while browsing the internet? What problems can this cause, and why do you think it happens so often?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "호텔",
    related: ["국내여행", "해외여행", "집에서 보내는 휴가", "국내 출장", "해외 출장"],
    questions: [
      { text: "Describe your ideal hotel stay. What kind of hotel do you prefer, and what amenities, services, or features are most important to you? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Think back to a memorable hotel stay you have had. Where was the hotel, what was it like, and what made that stay stand out — whether for a good reason or a bad one? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare staying at a hotel to staying at a guesthouse or an Airbnb-style rental when you travel. What are the benefits of each option, and which do you usually choose for your trips? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think it's worth paying extra for a luxury hotel, while others believe a basic, affordable hotel is just as good. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think travelers sometimes run into problems with hotel reservations or service? What kinds of issues commonly occur, and what do you think causes them?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "약속",
    questions: [
      { text: "Describe how you typically make plans or appointments with your friends, family, or colleagues. What methods or tools do you use to arrange meetings, and how do you keep track of your commitments? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a time when you made plans with someone and things did not go as expected — perhaps the appointment was cancelled, you were late, or something unexpected came up. What happened, and how did you handle it? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare how older generations, like your parents, typically arranged plans and appointments to how people your age do it today. What are the biggest differences in the methods or tools they use? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think being punctual and sticking strictly to plans is very important, while others believe being flexible matters more. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think people sometimes cancel or change plans at the last minute? What problems does this cause for the people involved, and what do you think is the main reason?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "유명인사",
    questions: [
      { text: "Describe a celebrity or well-known public figure that you find interesting or admire. Who are they, what are they famous for, and what qualities or achievements make them stand out to you? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Have you ever had a memorable experience related to a celebrity — such as attending their performance, watching a documentary about them, or following an important moment in their career? What happened, and why was it meaningful to you? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare the kind of celebrities that are popular in your country to the kind of celebrities that are popular internationally, such as in Hollywood. What differences do you notice in how they are perceived or how fans interact with them? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think celebrities have too much influence on young people's opinions and behavior, while others disagree. What is your opinion on this issue? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think celebrities are often the subject of rumors or controversy? What kinds of problems does this create for them and their fans, and why do you think this happens?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "전화통화",
    related: ["친구들과 문자하기"],
    questions: [
      { text: "Describe your typical phone call habits. How often do you make or receive calls, who do you usually talk to, and what kinds of topics do you discuss? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a memorable phone call you once had — perhaps one that brought surprising news, was emotionally difficult, or turned out to be especially important. What was the call about, and how did it affect you? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare how people made phone calls twenty years ago — using landlines or pay phones — to how people communicate by phone today. What has changed the most about the role phone calls play in daily life?", time: 110, type: "비교" },
      { text: "Some people prefer making phone calls to communicate, while others think texting or messaging apps are better. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think fewer people make phone calls compared to the past, relying instead on texting or messaging apps? What problems, if any, does this cause, and what do you think is behind this change?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "지리",
    questions: [
      { text: "Describe the geography of the region or country where you live. What are the major geographical features — such as mountains, rivers, coastlines, or plains — that define the landscape? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "What happened the last time you took a trip or journey within your own country where the natural scenery or geography made a strong impression on you? Where did you go, what did you see, and why was it so impactful? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare the geography of the area where you currently live to the geography of another region or city in your country. What are the biggest differences in the landscape, climate, or natural surroundings? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think geography and natural surroundings have a big influence on a region's culture and lifestyle, while others believe it matters very little. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think certain regions experience problems like natural disasters or environmental damage more often than others? What do you think causes these issues?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "음식 배달",
    questions: [
      { text: "Describe how you typically order food for delivery. What kinds of food do you order most often, which apps or services do you use, and what is your usual routine when placing an order? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a particularly memorable food delivery experience — either an especially satisfying one or a time when something went wrong. What did you order, what happened, and how did it turn out? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare ordering food for delivery through an app to going out and eating at a restaurant in person. What are the advantages and disadvantages of each, and which do you prefer when you don't feel like cooking? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think food delivery apps have made life much more convenient, while others believe they have created new problems for society. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think people sometimes have problems with food delivery, such as late arrivals or incorrect orders? What do you think are the main causes of these issues?", time: 110, type: "이슈" }
    ]
  },
  {
    key: "지역 축제",
    questions: [
      { text: "Describe a local festival or community event that takes place in your area. What is it called, when does it happen, and what kinds of activities, performances, or food are featured? Please describe in as much detail as possible.", time: 90, type: "묘사" },
      { text: "Tell me about a memorable experience you had at a local festival or community event. What event did you attend, what did you do or see there, and why was it a memorable occasion for you? Please describe in as much detail as possible.", time: 90, type: "경험" },
      { text: "Compare attending a local festival in the summer to attending one in the winter. How does the atmosphere, the food, or the activities differ depending on the season, and which type of festival do you enjoy more? Please explain in as much detail as possible.", time: 110, type: "비교" },
      { text: "Some people think local festivals are important for preserving culture and bringing communities together, while others see them as unnecessary or outdated. What is your opinion on this? Please explain in as much detail as possible.", time: 110, type: "의견" },
      { text: "Why do you think some local festivals struggle to attract visitors or maintain popularity over the years? What problems do organizers commonly face, and why?", time: 110, type: "이슈" }
    ]
  }
];

// Role-play scenarios
const ROLEPLAY_SCENARIOS = [
  {
    key: "이사한 친구",
    parts: [
      { text: "I'd like to give you a role-play situation.\n\nA friend of yours has just moved into a new apartment and invited you to a housewarming party. Call your friend and ask three or four questions to find out the details you need to know before you go.", time: 60 },
      { text: "I'm sorry, but there is a problem I need you to resolve.\n\nOn the day of the party, you suddenly realize you cannot make it because of an urgent personal matter. Call your friend, explain the situation, ask two or three questions, and then suggest two or three ways to make up for missing the party.", time: 90 }
    ]
  },
  {
    key: "헬스장 가입",
    parts: [
      { text: "I'd like to give you a role-play situation.\n\nYou want to sign up for a membership at a new gym near your home. Call the gym and ask three or four questions about their membership plans, hours, and facilities.", time: 60 },
      { text: "I'm sorry, but there is a problem I need you to resolve.\n\nAfter signing up, you discover that the gym is much more crowded than you expected and the equipment you wanted to use is always taken. Call the gym, explain the problem, ask two or three questions, and then suggest two or three possible solutions.", time: 90 }
    ]
  },
  {
    key: "카페 방문",
    parts: [
      { text: "I'd like to give you a role-play situation.\n\nYou want to reserve a table at a popular cafe for a meeting with some friends. Call the cafe and ask three or four questions about availability, seating, and the menu.", time: 60 },
      { text: "I'm sorry, but there is a problem I need you to resolve.\n\nWhen you arrive at the cafe, you find that your reservation was not recorded and there are no available tables. Talk to the staff, explain the situation, ask two or three questions, and then suggest two or three ways to solve the problem.", time: 90 }
    ]
  },
  {
    key: "여행 계획",
    parts: [
      { text: "I'd like to give you a role-play situation.\n\nYou are planning a trip and want to book a hotel for your stay. Call the hotel and ask three or four questions about room availability, rates, and the services they offer.", time: 60 },
      { text: "I'm sorry, but there is a problem I need you to resolve.\n\nWhen you arrive at the hotel, you find that the room you booked is not ready and there has been a mix-up with your reservation. Talk to the front desk, explain the problem, ask two or three questions, and then suggest two or three ways to resolve the situation.", time: 90 }
    ]
  }
];

// Advance topics (5-6 tier only, questions 14-15)
const ADVANCE_TOPICS = [
  {
    key: "기술 변화",
    questions: [
      { text: "Technology has changed rapidly in recent years. Tell me about a technology or device that has had a big impact on people's daily lives. What is it, and how has it changed the way people live and work? Please explain in detail.", time: 90, type: "이슈" },
      { text: "Some people believe this technology has made life better, while others worry about its negative effects. What is your opinion? Discuss both the advantages and disadvantages, and explain what you think the future holds.", time: 110, type: "의견" },
      { text: "Now, let's compare generations. How differently do younger people and older generations, such as your parents, use or adapt to this technology? Describe the biggest differences you have noticed between how each generation approaches it, and explain what might account for these differences.", time: 120, type: "비교" },
      { text: "Let's talk about the future. How do you think this technology will continue to develop over the next five or ten years? Describe what changes you expect to see, and explain what impact you think they will have on people's daily lives.", time: 120, type: "전망" }
    ]
  },
  {
    key: "환경/기후변화",
    questions: [
      { text: "Environmental issues, such as climate change, have become a major concern around the world. Tell me about an environmental problem that affects your country. What is causing it, and how is it affecting people's lives? Please explain in as much detail as possible.", time: 90, type: "이슈" },
      { text: "What do you think should be done about this problem? Discuss what individuals, companies, and the government could do differently, and explain what kind of impact you think these changes would have in the future.", time: 110, type: "의견" },
      { text: "Now, let's compare countries. How does your country's approach to this environmental issue compare to the approach taken by another country you are familiar with? Describe the biggest differences in policies, public awareness, or results, and explain which approach you think is more effective.", time: 120, type: "비교" },
      { text: "Let's talk about the future. If nothing changes, how do you think this environmental problem will affect your country over the next few decades? Describe what you expect to happen, and explain what would need to change to prevent it.", time: 120, type: "전망" }
    ]
  },
  {
    key: "재택근무/일자리 변화",
    questions: [
      { text: "The way people work has changed a great deal in recent years, with more people working remotely or in flexible arrangements. Tell me about how work has changed in your country. What are the main differences compared to the past? Please explain in detail.", time: 90, type: "이슈" },
      { text: "Some people think these changes in the way we work are positive, while others think they create new problems. What is your opinion on this trend? Discuss both sides and explain how you think work will continue to change in the future.", time: 110, type: "의견" },
      { text: "Now, let's compare working in an office to working remotely from home. What are the advantages and disadvantages of each arrangement, and which do you think is more effective for productivity and well-being?", time: 120, type: "비교" },
      { text: "Let's talk about the future. How do you think the way people work will continue to change over the next decade? Describe what you expect a typical workplace to look like, and explain what is driving these changes.", time: 120, type: "전망" }
    ]
  },
  {
    key: "사회 트렌드",
    questions: [
      { text: "Societies change over time, and new social trends often emerge. Tell me about a social trend that has become popular in your country recently. What is it, and why do you think it has become so popular? Please explain in as much detail as possible.", time: 90, type: "이슈" },
      { text: "Do you think this trend is a positive or a negative development for society? Explain your opinion, comparing how things were before this trend appeared to how they are now, and discuss what effect you think it will have going forward.", time: 110, type: "의견" },
      { text: "Now, let's compare the past and the present more closely. How was this area of life different ten or twenty years ago compared to today? Describe the biggest changes you have noticed, and explain what you expect this trend to look like in the future.", time: 120, type: "비교" },
      { text: "Let's talk about the future. Do you think this trend will continue to grow, fade away, or change into something else over the next several years? Describe what you expect to happen, and explain your reasoning.", time: 120, type: "전망" }
    ]
  }
];

// Exports (CommonJS + browser global)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SELF_INTRO, SURVEY_QUESTIONS, SURPRISE_TOPICS, ROLEPLAY_SCENARIOS, ADVANCE_TOPICS };
}
