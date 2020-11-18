import { tipsArray } from "./tipDataProvider.js";
import { tipHTML } from "./tip.js";

export const tipList = () => { 

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tankTips")
    const allTheTips = tipsArray()

    for (const tip of allTheTips){

        //The right side of the assignment is always evaluated first
        const tipToPage = tipHTML(tip);

        // Add to the existing HTML in the content element
        contentElement.innerHTML += tipToPage;
    }
}