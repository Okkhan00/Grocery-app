const input = document.getElementById("itemInput");
const list = document.getElementById("groceryList");
const suggestionsBox = document.getElementById("suggestions");

// List of suggestions
const suggestions = [
  "Apples",
  "Bananas",
  "Bread",
  "Carrots",
  "Cheese",
  "Eggs",
  "Milk",
  "Tomatoes",
  "Yogurt",
  "Potatoes",
  "Mangos",
  "Melons"
];

// Display filtered suggestions based on user input
function showSuggestions(value) {
  suggestionsBox.innerHTML = ""; // Clear previous suggestions
  if (value.trim() === "") return;

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().startsWith(value.toLowerCase())
  );

  filteredSuggestions.forEach((suggestion) => {
    const div = document.createElement("div");
    div.textContent = suggestion;
    div.addEventListener("click", () => {
      input.value = suggestion;
      addItem(); // Add the item immediately on selection
      suggestionsBox.innerHTML = ""; // Clear suggestions
    });
    suggestionsBox.appendChild(div);
  });
}

// Add the item to the list
function addItem() {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      list.removeChild(li);
    });

    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = ""; // Clear input
  }
}

// Event listeners
input.addEventListener("input", (e) => showSuggestions(e.target.value));
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
    suggestionsBox.innerHTML = ""; // Clear suggestions
  }
});
