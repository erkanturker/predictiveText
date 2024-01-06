const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
let results = [];

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  return fruit.filter((text) => {
    lowerCaseText = text.toLowerCase();
    return lowerCaseText.includes(str.toLowerCase());
  });
}

function searchHandler(e) {
  if (input.value === "") {
    toggleSuggestion(suggestions);
  } else {
    results = search(input.value);
    showSuggestions(results, input.value);
  }
}

function showSuggestions(results, inputVal) {
  const list = getStyledList(results, inputVal);

  suggestions.innerHTML = list.join("");

  if (!suggestions.classList.contains("has-suggestions")) {
    toggleSuggestion(suggestions);
  }
}

function useSuggestion(e) {
  input.value = e.target.textContent;
  toggleSuggestion(suggestions);
}

function toggleSuggestion(element) {
  element.classList.toggle("has-suggestions");
}

function getStyledList(results, inputVal) {
  return results.map((each) => {
    const lowerCaseInput = inputVal.toLowerCase();
    const lowerCaseText = each.toLowerCase();
    const index = lowerCaseText.indexOf(lowerCaseInput);

    if (index !== -1) {
      const beforeMatch = each.substring(0, index);
      const matchedText = each.substring(index, index + inputVal.length);
      const afterMatch = each.substring(index + inputVal.length);
      return `<li>${beforeMatch}<strong>${matchedText}</strong>${afterMatch}</li>`;
    } else {
      return `<li>${each}</li>`;
    }
  });
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
