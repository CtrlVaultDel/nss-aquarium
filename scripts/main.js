// Any JS that needs to be pushed when the page loads should be inside of main.js

import { fishList } from "./fish/fishList.js";
import { quoteList } from "./quotes/quoteList.js";
import { locationList } from "./locations/locationList.js";
import { tipList } from "./tips/tipList.js";

// Immediately call these function when the page loads
fishList();
quoteList();
locationList();
tipList();