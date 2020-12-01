// This is separated so that the data can be kept safe and separate

const fishCollection = [
    {
        image: "goldfish.jpg",
        name: "Flippers",
        species: "Goldfish",
        diet: "Cooked Rice",
        location: "Backyard Pond",
        size: 2
    },
    {
        image: "blueTang.jpg",
        name: "Dory",
        species: "Blue Tang",
        diet: "Filamentous Algae",
        location: "Amazon Reef",
        size: 15
    },
    {
        image: "clownLoach.jpg",
        name: "Stripes",
        species: "Clown Loach",
        diet: "Flake Food",
        location: "Sumatra",
        size: 5
    }
]

// Allow other modules to have access to this function
export const useFish = () =>{
    // Return a copy of fishCollection array
    // If you don't give any arguments to slice, it copies the entire array
    return fishCollection.slice()
}