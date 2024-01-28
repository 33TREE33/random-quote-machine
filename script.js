// script.js
const quotes = [
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa" },
    { text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    // ... more quotes
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('text').textContent = quote.text;
    document.getElementById('author').textContent = quote.author;
}

document.getElementById('new-quote').addEventListener('click', displayQuote);

// Initialize with a quote
displayQuote();
