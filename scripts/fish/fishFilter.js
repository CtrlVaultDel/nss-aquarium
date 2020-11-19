export const filterHolyFish = (fishToFilter) => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for(const fish of fishToFilter){
        if((fish.size % 3) === 0){
            holyFish.push(fish);
        }
    }
    
    return holyFish;
}

export const filterSoldierFish = (fishToFilter) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = [];
    for(const fish of fishToFilter){
        if(fish.size % 5 === 0 && fish.size % 3 !== 0){
            soldierFish.push(fish);
        }
    }
    return soldierFish;
}

export const filterNormalFish = (fishToFilter) => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];
    for(const fish of fishToFilter){
        if(fish.size % 3 !== 0 && fish.size % 5 !== 0){
            regularFish.push(fish);
        }
    }
    return regularFish;
}
