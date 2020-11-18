const quoteCollection=[
    {
        text: "The best way to observe a fish is to become a fish.",
        author: "Jacques Coursteau"
    },
    {
        text:   "Every time you dive, you hope you'll see something new --\
                some new species. Sometimes the ocean gives you a gift, sometimes it doesn't",
        author: "James Cameron"
    },
    {
        text:   "I love all the unique things you see on each dive. Millions \
                of little aquatic soap operas playing out between all the creatures. \
                And the silence. Well, it's not really silent down there, but \
                the roar of bubbles blocks any other sound.",
        author: "Kirsten Hubbard"
    }
]

// Returns a copy of tipCollection (An array full of tips)
export const quoteArray = () =>{
    return quoteCollection.slice();
}