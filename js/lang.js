const languages = {
  en: {
    editions: "editions",
    controller: "controller",
    about: "about",
    explore: "explore",
    news: "news",
    faq: "faq",
    currentlang: "english",
    release: "Release",
    days: "D",
    hours: "H",
    minutes: "M",
    seconds: "S",
    hero: "God of War Ragnarök",
    text: "Taking place three years following the events of the previous game, Fimbulwinter, a great winter that spans three summers, is drawing to a close which will begin the prophesied Ragnarök.",
    buy: "buy now",
    editionstitle: "Editions",
    standard: "Standard Edition",
    offline: "Offline play enabled",
  },
  uk: {
    editions: "видання",
    controller: "контролер",
    about: "про нас",
    explore: "досліджувати",
    news: "новини",
    faq: "питання",
    currentlang: "Мова",
    release: "випускати",
    days: "Дні",
    hours: "Години",
    minutes: "Хвилини",
    seconds: "Секунди",
    hero: "Бог війни Рагнарек",
    text: "Розгортається через три роки після подій попередньої гри, Фімбулвінтер, велика зима, яка охоплює три літа, наближається до кінця, що почне передбачуваний Рагнарек.",
    buy: "Купити зараз",
    editionstitle: "Видання",
    standard: "Стандартне видання",
    offline: "Увімкнено офлайн-гра",
  },
};

// lang
const language = document.querySelectorAll(".language");

const setTexts = () => {
  const lang = localStorage.getItem("lang") || "en";
  const content = languages[lang];

  if (lang === "uk") {
    // document.body.style.backgroundColor = "#8856d9";
    // document.getElementById("editions").style.backgroundColor = "#8856d9";
    document.getElementById("hero").style.color = "#8856d9";
  } else {
    // document.body.style.backgroundColor = "#1c2023";
    // document.getElementById("editions").style.backgroundColor = "#1c2023";
    document.getElementById("hero").style.color = "#fff";
  }

  Object.entries(content).forEach(([key, value]) => {
    const items = document.querySelectorAll(`[data-text="${key}"]`);
    items.forEach((item) => (item.innerText = value));
  });
};

const toggleLanguage = ({ target }) => {
  const { lang } = target.dataset;

  if (!lang) return;
  localStorage.setItem("lang", lang);
  setTexts();
};

setTexts();

language.forEach((lang) => lang.addEventListener("click", toggleLanguage));
