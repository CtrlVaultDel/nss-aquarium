// Any JS that needs to be pushed when the page loads should be inside of main.js

import { fishList } from "./fish/fishList.js";
import { tipList } from "./tips/tipList.js";

// Immediately call the FishList function when the page loads
fishList();
tipList();
