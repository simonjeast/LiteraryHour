const entries = [
  {
    quote:
      "\"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\"",
    author: "Jane Austen",
    source: "Pride and Prejudice",
    url: "https://www.gutenberg.org/ebooks/1342",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote: "\"I am no bird; and no net ensnares me.\"",
    author: "Charlotte Bronte",
    source: "Jane Eyre",
    url: "https://www.gutenberg.org/ebooks/1260",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote:
      "\"All happy families are alike; each unhappy family is unhappy in its own way.\"",
    author: "Leo Tolstoy",
    source: "Anna Karenina",
    url: "https://www.gutenberg.org/ebooks/1399",
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote: "\"Call me Ishmael.\"",
    author: "Herman Melville",
    source: "Moby-Dick",
    url: "https://www.gutenberg.org/ebooks/2701",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote: "\"Whatever our souls are made of, his and mine are the same.\"",
    author: "Emily Bronte",
    source: "Wuthering Heights",
    url: "https://www.gutenberg.org/ebooks/768",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote: "\"There is no charm equal to tenderness of heart.\"",
    author: "Jane Austen",
    source: "Sense and Sensibility",
    url: "https://www.gutenberg.org/ebooks/161",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote:
      "\"It was the best of times, it was the worst of times.\"",
    author: "Charles Dickens",
    source: "A Tale of Two Cities",
    url: "https://www.gutenberg.org/ebooks/98",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote:
      "\"All that we see or seem is but a dream within a dream.\"",
    author: "Edgar Allan Poe",
    source: "A Dream Within a Dream",
    url: "https://www.gutenberg.org/ebooks/2147",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote:
      "\"All the world's a stage, and all the men and women merely players.\"",
    author: "William Shakespeare",
    source: "As You Like It",
    url: "https://www.gutenberg.org/ebooks/1121",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote: "\"Brevity is the soul of wit.\"",
    author: "William Shakespeare",
    source: "Hamlet",
    url: "https://www.gutenberg.org/ebooks/1524",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    quote: "\"The course of true love never did run smooth.\"",
    author: "William Shakespeare",
    source: "A Midsummer Night's Dream",
    url: "https://www.gutenberg.org/ebooks/1514",
    image:
      "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "\"There is nothing more deceptive than an obvious fact.\"",
    author: "Arthur Conan Doyle",
    source: "The Boscombe Valley Mystery",
    url: "https://www.gutenberg.org/ebooks/1661",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
  },
];

let currentIndex = 0;

function setTime() {
  const timeElement = document.getElementById("time");
  if (!timeElement) return;

  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function renderEntry(index) {
  const entry = entries[index];
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const quoteLink = document.getElementById("quote-link");

  if (!entry || !quoteText || !quoteAuthor || !quoteLink) return;

  quoteText.textContent = entry.quote;
  quoteAuthor.textContent = `- ${entry.author}`;
  quoteLink.href = entry.url;
  quoteLink.textContent = entry.source;

  document.body.style.setProperty("--scene-url", `url("${entry.image}")`);
}

function setEntryForCurrentHour() {
  currentIndex = new Date().getHours() % entries.length;
  renderEntry(currentIndex);
}

function goToNextEntry() {
  currentIndex = (currentIndex + 1) % entries.length;
  renderEntry(currentIndex);
}

function scheduleTopOfHourRefresh() {
  const now = new Date();
  const nextHour = new Date(now);
  nextHour.setHours(now.getHours() + 1, 0, 0, 0);
  const msUntilNextHour = nextHour - now;

  setTimeout(() => {
    window.location.reload();
  }, msUntilNextHour);
}

function init() {
  const refreshButton = document.getElementById("refresh-btn");
  if (refreshButton) {
    refreshButton.addEventListener("click", () => {
      goToNextEntry();
      setTime();
    });
  }

  setEntryForCurrentHour();
  setTime();
  setInterval(setTime, 1000);
  scheduleTopOfHourRefresh();
}

init();
