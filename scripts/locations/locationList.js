import { locationArray } from "./locationDataProvider.js";
import { locationHTML } from "./location.js";

export const locationList = () => { 

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const allTheLocations = locationArray()

    for (const location of allTheLocations){

        //The right side of the assignment is always evaluated first
        const locationToPage = locationHTML(location);

        // Add to the existing HTML in the content element
        contentElement.innerHTML += locationToPage;
    }
}