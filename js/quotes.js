const quotes = [
  {
    quote: "미안해하지 마라, 더 나아져라",
    author: "크레토스",
  },
  {
    quote: "고요를 체험하시오.",
    author: "젠야타",
  },
  {
    quote: "Rip and tear until it is done.",
    author: "Doom Slayer",
  },
  {
    quote: "Xxxxxxx! XxxxxxxStation Double Xxxx~! Double Xxxx~!",
    author: "Leonardo Watch",
  },
  {
    quote:
      "진정한 남녀평등주의자인 나는 여자를 상대로서도 드롭킥을 날릴 수 있는 남자, 봐줄 거라고는 생각도 하지 마라!",
    author: "사토 카즈마",
  },
  {
    quote: "진실의 방으로~!",
    author: "마석도",
  },
  {
    quote: "But there was a rose that saved the day, it was delightful.",
    author: "Luis",
  },
  {
    quote: "중구가 시키드나",
    author: "정청",
  },
  {
    quote: "거 죽기 딱 좋은 날씨네",
    author: "이중구",
  },
  {
    quote: "누구인가? 누가 기침소리를 내었는가?",
    author: "궁예",
  },
];

const quotesDiv = document.querySelector("#quotes");

const quote = quotesDiv.querySelector("span:first-child");

const author = quotesDiv.querySelector("span:last-child");

const choseQuote = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[choseQuote].quote;

author.innerText = `- ${quotes[choseQuote].author} -`;
