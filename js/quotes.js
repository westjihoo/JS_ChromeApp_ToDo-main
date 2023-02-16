const quotes = [
    {
        num: "1",
        quote: "We do not remember days, we remember moments."
    },
    {
        num: "2",
        quote: "Life is a long lesson in humility."
    },
    {
        num: "3",
        quote: "Don't go through life, grow through life."
    },
    {
        num: "4",
        quote: "Life is what happens while you are busy making other plans."
    },
    {
        num: "5",
        quote: "Each day is the scholar of yesterday."
    },
    {
        num: "6",
        quote: "Every man dies. Not every man really lives."
    },
    {
        num: "7",
        quote: "The purpose of life is a life of purpose."
    },
    {
        num: "8",
        quote: "Beware the barrenness of a busy life."
    },
    {
        num: "9",
        quote: "A life is not important except in the impact it has on other lives."
    },
    {
        num: "10",
        quote: "One way to get the most out of life is to look upon it as an adventure."
    }
]

const quote = document.querySelector("#quote span:first-child");
const num = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
quote.className = "quites";
num.innerText = todaysQuote.num;
num.className = "quites";