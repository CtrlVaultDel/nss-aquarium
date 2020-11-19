/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
// Bring in the copied array of fish
import { useFish } from "./fishDataProvider.js";

// Bring in the fish method that will allow us to make a function that puts HTML onto the page when we call it
import { fishHTML } from "./fish.js";

// Bring in the filtering functions
import { filterHolyFish, filterSoldierFish, filterNormalFish } from "./fishFilter.js";

export const fishList = () => { 

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const finalFishList = [];

    // Pull in and assign the copied array of all the fish (useFish()) to allTheFish
    const allTheFish = useFish()

    // Bring in the Holiest, Soldier and Normal Fish
    const theHoliest = filterHolyFish(allTheFish);
    const theSoldiers = filterSoldierFish(allTheFish);
    const theCitizens = filterNormalFish(allTheFish);

    // Function to push arrays to a final fish list that will be converted to HTML
    const pushArrays = (array) =>{
        for (let i=0; i < array.length; i++){
            finalFishList.push(array[i])
        }
    }
    // Push the contents of these three arrays into finalFishList
    pushArrays(theHoliest);
    pushArrays(theSoldiers);
    pushArrays(theCitizens);
    
    // For each fish object inside of finalFishList, convert it into HTML strings (See fish.js)
    for (const fishObject of finalFishList){

        //The right side of the assignment is always evaluated first
        const fishToPage = fishHTML(fishObject);

        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishToPage
    }
}