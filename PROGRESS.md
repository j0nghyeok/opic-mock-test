# OPIc Mock Test — 진행 현황

## 파일 구조
- `shell.html` — 앱 구조 (수정 원본)
- `questions.js` — 질문 DB
- `index.html` — shell.html의 단순 복사본 (`questions.js`를 `<script src>`로 외부 로드하므로 별도 merge 스크립트 불필요). shell.html 수정 후 `cp shell.html index.html`로 갱신.

## 실제 OPIc 서베이 구조 (사진 확인)
- **Part 1**: 직업 (사업/회사, 재택근무, 교사/교육자, 일 경험 없음)
- **Part 2**: 학생 여부
- **Part 3**: 거주형태 (5개)
- **Part 4** (총 12개 이상 선택 필요):
  - 4-1 여가활동 (2개 이상) — 26개 항목
  - 4-2 취미/관심사 (1개 이상) — 14개 항목
  - 4-3 운동 (1개 이상) — 24개 항목
  - 4-4 여행/출장 (1개 이상) — 5개 항목

## 앱 문제 구성 — 2026-07-05 최종 (양 모드 15문항 통일)

**최종 근거**: 공식 opic.or.kr 기준 **난이도 3·4·5·6은 모두 동일하게 15문항(60분)**, 난이도 1-2만 12문항(40분)이다. 5-5·6-6은 둘 다 3-6 티어이므로 **실제로는 둘 다 15문항**이 맞다. 따라서 두 모드를 15문항으로 **통일**했다. (앞선 5-5=12/6-6=15 구성은 부정확하여 폐기.) 두 모드의 차이는 문항 수가 아니라 **목표 등급(5-5→IH, 6-6→AL)과 기대 답변 깊이**로만 둔다.

- **5-5 · 6-6 모드 = 난이도 3-6 티어, 둘 다 15문항** (구조 동일)
  - 자기소개 1
  - 콤보1 서베이 (묘사 → 습관 → 경험) 3, 부족하면 돌발로 보완
  - 콤보2 서베이 또는 돌발 (묘사 → 습관 → 비교) 3
  - 콤보3 돌발 (묘사 → 습관 → 비교) 3
  - 롤플레이 2문항 (정보요청 + 문제해결, parts.slice(0,2)) = 2
  - 어드밴스 콤보 3문항 (이슈·의견·비교, 랜덤 1개 주제의 questions 전부) = 3
  - 합계 = 1 + 9 + 2 + 3 = **15**
  - 구현: `buildQuestions`는 `difficulty` 분기 없이 단일 경로로 15문항 생성 (is55 분기 제거).

### 콤보 고정 순서 (구현: `pickCombo` / `takeComboFromTopics` in shell.html)
실제 OPIc은 콤보 내부 문제 유형 순서가 고정이다. 기존 코드는 유형을 랜덤 셔플해서 뽑았는데, 이번에 **고정 순서 선택 헬퍼**로 교체했다.
- Q1: type==='묘사'
- Q2(습관/루틴 슬롯): type==='루틴' 있으면 그것, 없으면 type==='경험'
- Q3: 비교 콤보는 type==='비교', 경험 콤보(콤보1)는 type==='경험'이 남아있으면 그것, 없으면 남은 문항으로 대체
- 3문항을 못 채우면 그 주제는 skip하고 다음 주제로 이동

**알려진 데이터 한계**: `SURVEY_QUESTIONS`의 각 주제는 [묘사, 습관/경험/기타 중 1개, 비교] 총 3문항만 가지고 있어서, 콤보1(묘사→습관→경험)이 요구하는 "습관"과 "경험"을 동시에 서로 다른 문항으로 채울 수 없는 주제가 많다. 이 경우 Q3는 남은 문항(대개 비교 타입)으로 대체되어 실제로는 비교 질문이 나간다 — 문항 수/순서는 항상 보장되지만 콤보1의 3번째 질문이 항상 "경험" 내용은 아닐 수 있음. 향후 개선 시 주제별 전용 "경험" 문항을 추가하면 해결 가능.

### 롤플레이 (정정)
공식 OPIc 롤플레이는 **정보요청(60초) + 문제해결(90초) 2문항**이 핵심이다. 이전에 추가했던 3번째 part("That's the end of the situation… 관련 경험" 질문)는 공식 구성에 없어 **제거**했다 (이사한 친구/헬스장 가입/카페 방문/여행 계획 4개 시나리오 모두 parts 2개로 환원). `buildQuestions`의 `addRoleplay`는 `scenario.parts.slice(0, 2)`를 사용하도록 수정 (데이터가 이미 2개이므로 안전장치 역할).

### 어드밴스 (정정)
`ADVANCE_TOPICS` (questions.js) — 6-6 티어(15문항) 전용, 콤보3 다음/롤플레이 뒤에 배치. 4개 주제(기술 변화, 환경/기후변화, 재택근무/일자리 변화, 사회 트렌드) 각각 **3문항 콤보**: 이슈(90초) → 의견(110초) → **비교(120초, 신규 추가)** — 과거/현재 비교 + 미래 전망 톤. 랜덤 1개 주제의 questions 3개 전부를 push.

## questions.js 키 → HTML value 매핑 (현재 기준)

### 거주형태 (residence)
| HTML value | questions.js key |
|---|---|
| 개인주택이나 아파트에 홀로 거주 | 개인주택이나 아파트에 홀로 거주 |
| 친구나 룸메이트와 함께 거주 | 친구나 룸메이트와 함께 거주 |
| 가족과 함께 주택이나 아파트에 거주 | 가족과 함께 주택이나 아파트에 거주 |
| 학교 기숙사 | 학교 기숙사 |
| 군대 막사 | 군대 막사 |

### 여가활동 (leisure) — 26개
공원 가기, 영화 보기, 콘서트 보기, 박물관 가기, 캠핑 하기, 해변 가기, 스포츠 관람, 카페/커피 전문점 가기, TV 시청, 쇼핑하기 (기존 10개 rename 포함)
+ 클럽/나이트클럽 가기, 공연 보기, 주거 개선, 요리 관련 프로그램 시청, 게임 하기, SNS 글 올리기, 술집/바에 가기, 친구들과 문자하기, 당구치기, 자원 봉사, 차 드라이브 하기, 시험 대비 과정 수강, 뉴스 보거나 듣기, 체스, 리얼리티 쇼 보기, 구직 활동 (신규 16개)

### 취미/관심사 (hobbies) — 14개
음악 감상하기, 독서, 요리하기, 사진 촬영하기, 그림 그리기, 악기 연주하기, 글쓰기, 애완동물 키우기, 춤추기 (기존 9개 rename 포함)
+ 아이에게 책 읽어주기, 혼자 노래부르거나 합창하기, 여행 관련 잡지나 블로그 글 읽기, 주식 투자, 신문 읽기 (신규 5개)

### 운동 (sports) — 24개
수영, 자전거, 요가, 배드민턴, 걷기, 축구, 농구, 조깅, 헬스 (기존 rename 포함)
+ 야구/소프트볼, 미식축구, 하키, 크리켓, 골프, 배구, 테니스, 탁구, 태권도, 스키/스노우보드, 아이스 스케이트, 하이킹/트레킹, 낚시, 운동 수업 수강하기 (신규 13개)
+ 운동을 전혀 하지 않음 (질문 없음 — buildQuestions에서 skip)

### 여행/출장 (travel) — 5개
국내 출장, 해외 출장, 집에서 보내는 휴가, 국내여행, 해외여행

## index.html 생성 방법 (정정)
merge_script.py 같은 별도 병합 스크립트는 없다. `index.html`은 `shell.html`을 그대로 복사한 파일이며, 두 파일 모두 `<script src="questions.js">`로 질문 DB를 외부 로드한다. shell.html을 수정한 뒤 `cp shell.html index.html`만 실행하면 된다.

## TODO (남은 작업)
- [x] shell.html 서베이 UI 실제 OPIc 항목으로 교체 완료
- [x] questions.js 거주형태/여가활동/취미/운동 키 rename 완료
- [x] questions.js 신규 항목 + 군대막사 추가 완료
- [x] index.html 재생성 (`cp shell.html index.html`) + node 검증
- [x] 5-5/6-6을 난이도 티어(3-4/5-6)로 재정의, 콤보 고정 순서 구현
- [x] ~~롤플레이 3번째 part(관련 과거경험) 추가~~ → **정정 완료**: 공식 기준(2문항)에 맞춰 3번째 part 제거, `addRoleplay`가 `parts.slice(0,2)` 사용
- [x] ~~ADVANCE_TOPICS 2문항, 6-6 전용 14-15번 연결~~ → **정정 완료**: ADVANCE_TOPICS 각 주제 3문항(이슈·의견·비교)으로 확장, 6-6에서 3문항 전부 push
- [x] 문항 수 정정: 5-5=12문항, 6-6=15문항 (기존 13/15 오류 수정), 난이도 카드 UI 및 buildQuestions 주석 동기화
- [x] node 시뮬레이션 1000회: 5-5 항상 12문항, 6-6 항상 15문항, 중복 0건 확인
- [x] (선택 개선) SURVEY_QUESTIONS 주제별 전용 "경험" 문항 추가 — "영화 보기"의 2번째 문항을 묘사→경험(type: "경험")으로 교체하여 [묘사, 경험, 비교] 콤보1이 정상 성립하도록 정정 (questions.js:48-52, 2026-07-05). 다른 주제들은 이미 경험/루틴/계기/준비 등 2번째 슬롯이 채워져 있어 이 문제가 없었음.

## Claude 동적 문제생성 (옵션) — 2026-07-05 추가

기존 OpenAI TTS 키 저장 패턴(`opic_openai_key`, shell.html 340-350 UI / 1045-1058 저장·로드)을 그대로 미러링하여, Anthropic API 키를 입력하면 **매 시험 시작마다 Claude가 15문항을 새로 생성**하도록 확장했다. 키 미입력 시 기존 `buildQuestions` 로컬 문제은행 경로가 그대로 사용된다 (회귀 없음).

- **UI**: TTS 키 패널 바로 아래 "🤖 AI 문제 생성 설정" 토글 패널 추가 (shell.html, screen-intro). password input `#anthropic-key-input`, 저장 버튼 `saveAnthropicKey()`, 모델 select `#anthropic-model-select` (옵션: `claude-opus-4-8`〈기본·selected〉/ `claude-sonnet-5` / `claude-haiku-4-5`, 변경 시 즉시 localStorage 저장). localStorage 키: `opic_anthropic_key`, `opic_anthropic_model`. 페이지 로드시 `initAnthropicKey()`가 `initTtsKey()` 바로 다음에 호출되어 저장된 키/모델을 복원.
- **`generateQuestionsWithClaude(survey, difficulty)`** (async, buildQuestions 함수 앞에 위치): 키 없으면 `null` 반환. 키가 있으면 `buildSurveyText()`로 거주형태+여가/취미/운동/여행 선택 항목을 사람이 읽는 문자열로 합쳐 프롬프트에 삽입하고, 정확히 15문항·고정 순서(자기소개1 → 서베이콤보1(3) → 서베이콤보2(3) → 돌발콤보(3) → 롤플레이(2) → 어드밴스콤보(3))를 요구하는 프롬프트로 Anthropic Messages API를 호출.
  - 엔드포인트: `https://api.anthropic.com/v1/messages`, 헤더 `x-api-key`, `anthropic-version: 2023-06-01`, `anthropic-dangerous-direct-browser-access: true` (공식 direct-browser-access 방식, CORS 우회 전용 헤더).
  - `output_config: { format: { type: 'json_schema', schema: ANTHROPIC_QUESTION_SCHEMA } }`로 구조화 출력 강제. 스키마: `{ questions: [{ text, time, type, category }] }` (additionalProperties:false).
  - 모델 기본값: `claude-opus-4-8` (localStorage `opic_anthropic_model` 없을 시 폴백).
  - 응답 파싱: `!res.ok` 또는 `data.stop_reason === 'refusal'`이면 throw. `data.content.find(b=>b.type==='text').text`를 JSON.parse하여 `parsed.questions` 획득.
  - **검증**: 배열이고 `length===15`이며 각 원소에 `text/time/type/category`가 모두 있어야 함. 아니면 throw. 통과 시 그 배열을 그대로 반환 (buildQuestions와 달리 SELF_INTRO를 별도로 앞에 붙이지 않음 — 프롬프트에서 1번을 자기소개로 생성하도록 이미 지시함).
- **`startTest()`를 async로 전환**: 키가 있으면 시작 버튼(`#btn-start`)을 disabled 처리하고 텍스트를 "🤖 Claude가 문제를 생성 중..."으로 바꾼 뒤 `generateQuestionsWithClaude` 호출 → 성공 시 그 결과를 `state.questions`에 사용, 실패(네트워크 오류/CORS/검증 실패 등 어떤 예외든) 시 `catch`에서 `console.warn`으로 원인과 "file:// 환경에서 CORS 차단 시 `python3 -m http.server`로 열어보라"는 안내를 남기고 `alert('AI 생성 실패 — 내장 문제로 진행합니다')` 후 기존 `buildQuestions(state.survey, state.difficulty)`로 폴백, `finally`에서 버튼 원상복구. 키가 없으면 기존과 동일하게 바로 `buildQuestions` 사용. 이후 로직(currentIndex 초기화, `q-total` 갱신, `goTo('screen-test')`, `startTotalTimer()`, `renderQuestion()`)은 기존과 동일.
- **file:// 주의사항**: 브라우저에서 file://로 직접 열면 CORS 정책상 `api.anthropic.com` 호출이 차단될 수 있다. 이 경우도 앱은 절대 멈추지 않고 항상 위 폴백 경로로 진행되며, 콘솔에 로컬 서버 안내가 남는다.
- **검증 완료**: (1) `node -e "require('./questions.js')"` 로드 OK, "영화 보기" 타입 `[묘사, 경험, 비교]` 확인. (2) shell.html의 `<script>` 블록을 `new Function()`으로 파싱 — 문법 오류 없음. (3) Node `vm` 컨텍스트에서 실제 스크립트를 실행해 `buildQuestions`가 5-5/6-6 서베이 모두 여전히 15문항을 생성함을 재확인 (회귀 없음). (4) `generateQuestionsWithClaude`가 키 없을 때 `null` 반환 확인. (5) 가짜 키 + `fetch` 강제 실패 시나리오로 `startTest()`를 직접 실행 — 콘솔 경고/CORS 안내/alert가 순서대로 발생하고 `state.questions`가 여전히 15문항(buildQuestions 폴백)으로 채워짐을 확인. (6) `diff -q shell.html index.html` → identical.

## 녹음 전사 + 다시듣기/녹음 버그 수정 — 2026-07-05

- **#4 (버그): 녹음버튼이 이유없이 비활성화** — 원인: TTS `onended` 미발생(재생 실패·autoplay 차단·디코드 오류) 시 `autoStartRecording()` 미호출로 마이크가 계속 disabled → 문항 녹음 누락(실제 세션에서 문항10 녹음 유실). 수정: `state._answerStarted` 멱등 가드(check→set 사이 await 없음=원자적) + `renderQuestion` 워치독 `setTimeout`(상한 60s, 텍스트 길이 비례) 백스톱 + OpenAI TTS `play().catch(()=>_done())` + 브라우저 speech `utt.onerror=()=>_done()`. 워치독은 `autoStartRecording`/`stopPrepCountdown`/`forceStopRecording`에서 clear. → 어떤 TTS 상황에서도 마이크 정확히 1회 활성, 이중 녹음 없음.
- **#2 다시듣기 문항당 1회** — `btn-tts` onclick을 `manualReplay()`로 교체. 1회 후 `btn-tts.disabled=true`. `renderQuestion`에서 `_replayCount=0` 리셋. 초기 리딩 중 다시듣기 시 `speakQuestion(_answerStarted?undefined:autoStartRecording)`로 마이크 트리거 유지.
- **#3 리딩 종료 5초 후 다시듣기 비활성(횟수 무관)** — 기존 `autoStartRecording`의 5초 타이머 유지. #2와 독립적으로 먼저 오는 조건에서 비활성.
- **#1 녹음→텍스트 다운로드** — 결과화면 "🎤 전사본 다운로드" 버튼 + `downloadTranscript()`. OpenAI 키(`opic_openai_key`) 있으면 Whisper(`whisper-1`, en)로 각 녹음 전사→문제+답변 결합 `.txt`(파일 확장자는 blob.type로 파생: webm/m4a/ogg, Safari 대응; HTTP 실패는 `(전사 실패 HTTP N)`; 개별 실패는 continue). 키 없으면 오디오(base64)+문제 단일 번들 `.json`(다중 다운로드 차단 회피) + 안내 alert. 전체 try/catch/finally로 버튼 복구.
- 검증: `<script>` `new Function` 문법 OK, `diff -q shell.html index.html` identical. code-reviewer COMMENT(Critical/High 0, #4 견고성 SOUND) → MEDIUM 2건(Safari 확장자·초기재생 다시듣기 마이크 지연)+LOW 반영 완료.

### 참고: 로컬 whisper 전사 절차(키 없을 때) — 구버전, 아래 브라우저 내 전사로 대체됨
번들 대신 개별 오디오를 받았거나 키가 없을 때: 브라우저에서 오디오+questions.json 저장 → macOS TCC로 `~/Downloads` 직접접근 불가 시 Finder(osascript)로 접근가능 폴더 복사 → `whisper <file> --model medium --language en --output_format txt`(파일당 개별 호출; 다중 인자 동시 전달은 실패) → questions.json과 짝지어 결합.

## 키 없음 전사 경로를 브라우저 내 Whisper(WASM)로 교체 — 2026-07-05

기존에는 OpenAI 키가 없으면 오디오+문제 번들(`.json`)만 저장하고 끝났다(로컬 whisper CLI로 수동 전사 필요). 이제 키가 없어도 **브라우저 안에서 transformers.js(Xenova/whisper-base.en, WASM)로 직접 전사**하여 키 있음 경로와 동일한 결합 `.txt`를 바로 다운로드한다.

- **`blobToPCM16k(blob)`** (신규, shell.html:1487-1512, `downloadTranscript` 바로 앞): 오디오 Blob → `AudioContext.decodeAudioData` → 모노 다운믹스(2채널 평균) → 선형보간으로 16kHz 리샘플 → `Float32Array` 반환. Whisper 파이프라인 입력 규격에 맞춤.
- **`downloadTranscript()` else 분기 교체** (shell.html:1573-1671, 키 없음 경로): 우선순위 (a) 키 있음→기존 OpenAI Whisper API(무변경) → (b) 키 없음→브라우저 Whisper 전사 → (c) 브라우저 전사 자체가 실패(CDN/네트워크/WASM 초기화 등)하면 기존 번들 `.json` 폴백.
  - `state.recordings`에 녹음이 하나라도 있을 때만 `https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2`를 동적 `import()`(앱 로드 시엔 미로드, 필요할 때만 fetch). `env.allowLocalModels = false`로 HF Hub에서만 모델 로드.
  - 파이프라인은 `window._asr`에 캐시(`if (!window._asr) window._asr = await pipeline('automatic-speech-recognition','Xenova/whisper-base.en',{progress_callback})`) — 같은 세션에서 재실행해도 모델 재다운로드 없음.
  - 진행 표시: 모델 다운로드 중 `progress_callback`이 버튼 텍스트를 `🤖 모델 준비 중… NN%`로 갱신(`p.progress`를 그때그때 반영, 별도 누적/최댓값 로직 없이 단순화). 전사 단계는 문항별로 `🎤 전사 중… (i/총)`.
  - 각 녹음은 `blobToPCM16k` → `asr(pcm, {language:'english', task:'transcribe'})` → `res.text.trim()` (빈 문자열이면 `(전사 실패)`). 문항별 전사 실패는 `(전사 오류: …)`로 표기하고 `continue`(전체 중단 안 함). 녹음 없는 문항은 `(녹음 없음)`. 결합 텍스트 포맷·구분선·헤더는 키 있음 경로와 완전히 동일 → `opic_전사_<stamp>.txt`.
  - 이 내부 로직 전체를 자체 `try/catch`로 감싸 실패 시(트랜스포머 CDN 로드 실패, WASM 초기화 실패, decode 실패 등) 기존 번들 `.json` 저장 경로로 폴백하고, 안내 문구를 "브라우저 내 전사에 실패하여 오디오+문제 묶음(.json)을 대신 저장했습니다. 인터넷 연결/브라우저를 확인하거나 로컬 Whisper로 전사하세요."로 변경. 바깥쪽 최상위 try/catch/finally(버튼 텍스트/disabled 복구)는 기존 그대로 유지·확장.
  - 키 있음 경로(OpenAI API 호출부), TTS, 녹음, 결과화면 로직은 전혀 손대지 않음(회귀 없음).
- **검증**: `<script>` 블록을 node `new Function`으로 문법 검사 — 오류 0. `diff -q shell.html index.html` → identical (`cp shell.html index.html` 수행).
