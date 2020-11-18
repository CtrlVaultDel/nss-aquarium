const locationCollection =[
    {
        name: "Great Barrier Reef",
        image: "greatBarrierReef.png",
        description:"One of Australia’s most remarkable natural gifts, the Great Barrier Reef is \
                    blessed with the breathtaking beauty of the world’s largest coral reef. \
                    The reef contains an abundance of marine life and comprises of over 3000 \
                    individual reef systems and coral cays and literally hundreds of picturesque \
                    tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.",
        url: "https://greatbarrierreef.org/"
    },
    {
        name: "Barracuda Point",
        image: "barracudaPoint.jpg",
        description:"Barracuda point is quite simply one of the top 5 dive sites of the world, \
                    making it the most popular dive spot in Sipadan. There is a huge shoal of \
                    thousands of barracudas often making a tornado and darkening the sun! \
                    A must do for any underwater photographer! You can also see bumphead parrotfish, \
                    dozens of turtles and reef sharks patrolling the area. Sometimes there is also \
                    hammerhead sharks, so keep looking to the blue! The site is composed by a \
                    steep wall going down to 22 m deep often with strong currents.",
        url: "https://divezone.net/divesite/barracuda-point"
    },
    {
        name: "Great Blue Hole",
        image: "greatBelizeBlueHole.jpg",
        description:"Very deep, wide, hole outlined by coral reef and inhabited by sharks. Is there \
                    another sight like it? 30 m visibility coming over the bathwater warm reef of \
                    vibrant colors, descending into a cool, deep blue hole where the water begins \
                    to waver and shimmer as you enter the transition from salt to fresh water at \
                    about 15 m. Watching the enormous tuna and other pelagics dive into the hole \
                    to clean themselves as you briefly remove your octopus to taste the fresh water. \
                    Then descending another 25 m to explore the stalagtites and stalagmites of ancient caverns.",
        url: "https://belize.com/belize-blue-hole/"
    }
]

export const locationArray = () =>{
    return locationCollection.slice();
}