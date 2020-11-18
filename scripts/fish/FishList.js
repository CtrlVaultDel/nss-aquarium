/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
// Bring in the copied array of fish
import { useFish } from "./fishDataProvider.js";

// Bring in the fish method that will allow us to make a function that puts HTML onto the page when we call it
import { fishHTML } from "./fish.js";

export const fishList = () => { 

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const allTheFish = useFish()

    for (const fishObject of allTheFish){

        //The right side of the assignment is always evaluated first
        const fishToPage = fishHTML(fishObject);

        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishToPage
    }
}