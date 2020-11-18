import { quoteArray } from "./quoteDataProvider.js";
import { quoteHTML } from "./quote.js";

export const quoteList = () => { 

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".quotes")
    const allTheQuotes = quoteArray()

    for (const quote of allTheQuotes){

        //The right side of the assignment is always evaluated first
        const quoteToPage = quoteHTML(quote);

        // Add to the existing HTML in the content element
        contentElement.innerHTML += quoteToPage;
    }
}