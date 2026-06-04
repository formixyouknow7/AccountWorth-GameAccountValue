const rates = {
  RUB: 1,
  USD: 0.011,
  EUR: 0.010,
  UAH: 0.45
};

function calculate() {
  let robux = Number(document.getElementById("robux").value);
  let games = Number(document.getElementById("games").value);
  let age = Number(document.getElementById("age").value);
  let currency = document.getElementById("currency").value;

  if (!robux || !games || !age) {
    document.getElementById("result").innerText = "Заполни все поля";
    return;
  }

  let robuxValue = robux * 0.022;
  let gamesValue = Math.pow(games, 1.3) * 420;
  let ageValue = Math.log(age + 1) * 900;

  let riskMultiplier = age < 1 ? 0.75 : age < 2 ? 0.9 : 1;

  let priceRUB = (robuxValue + gamesValue + ageValue) * riskMultiplier;

  let converted = priceRUB * rates[currency];

  let symbol = {
    RUB: "₽",
    USD: "$",
    EUR: "€",
    UAH: "₴"
  };

  document.getElementById("result").innerText =
    "Цена: " + Math.round(converted) + " " + symbol[currency];
}
