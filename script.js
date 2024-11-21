const facts = {
    personal: [
        "I love hiking.",
        "I speak three languages fluently.",
        "I’m learning to play the guitar in my free time."
    ],
    funny: [
        "I once cooked a taco and burnt it!",
        "I can mimic a parrot perfectly.",
        "I think pineapple on pizza is underrated."
    ],
    random: [
        "Did you know the Eiffel Tower can grow taller in summer?",
        "Bananas are berries, but strawberries aren't.",
        "Honey never spoils!"
    ]
};

let currentFact = "";

function generateFact(category = 'random') {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts[category].length);
    currentFact = facts[category][randomIndex];
    factDisplay.textContent = currentFact;
}

function saveFact() {
    if (!currentFact) return;
    const favorites = document.getElementById('favorites');
    const listItem = document.createElement('li');
    listItem.textContent = currentFact;
    favorites.appendChild(listItem);
}
