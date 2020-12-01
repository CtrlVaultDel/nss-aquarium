import { quoteArray } from "./quoteDataProvider.js";
import { quoteHTML } from "./quote.js";

export const quoteList = () => { 

    // // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".quotes")
    const quotes = quoteArray()

    // Returns a new array of all quotes as a string and applies it to the DOM.
    contentElement.innerHTML = quotes.map(quote => quoteHTML(quote)).join("");
}