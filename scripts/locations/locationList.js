import { locationArray } from "./locationDataProvider.js";
import { locationHTML } from "./location.js";

export const locationList = () => { 

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const locations = locationArray()

    // Returns a new array of all locations as a string and applies it to the DOM.
    contentElement.innerHTML = locations.map(location => locationHTML(location)).join("")
}
