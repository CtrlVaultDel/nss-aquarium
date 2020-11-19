export const filterHolyFish = (fishToFilter) => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for(let i = 0; i < fishToFilter.length; i++){
        if((fishToFilter[i].size % 3) === 0){
            holyFish.push(fishToFilter[i]);
        }
    }
    
    return holyFish;
}

export const filterSoldierFish = (fishToFilter) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = [];
    for(let i = 0; i < fishToFilter.length; i++){
        if((fishToFilter[i].size % 5) === 0){
            soldierFish.push(fishToFilter[i]);
        }
    }
    return soldierFish;
}

export const filterNormalFish = (fishToFilter) => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];
    for(let i = 0; i < fishToFilter.length; i++){
        if((fishToFilter[i].size % 3) !== 0 && (fishToFilter[i].size % 5) !== 0){
            regularFish.push(fishToFilter[i]);
        }
    }
    return regularFish;
}
