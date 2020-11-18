export const locationHTML = (location) => {
    // Returns a string of HTML
    return `
        <section class="location">
            <div class="location__name"><h2 class="location__name__text>${location.name}</h2></div>
            <div class="location__img><img  class="location__img__src" src="./images/${location.image}"></div>
            <div class="location__desc"><p class="location__desc__text">${location.description}</p></div>
            <div class="location__url"><a href=${location.url}>Visit ${location.name}</a></div>
        </section>
    `
}

// <!-- Locations -->
// <article class="locations">

//     <!-- Great Barrier Reef -->
//     <section class="location">
//         <div class="location__name"><h2>Great Barrier Reef</h2></div>
//         <div class="location__img">
//             <img src="./images/greatBarrierReef.png" alt="The Great Barrier Reef">
//         </div>
//         <div class="location__desc">
//             <p>
//                 One of Australia’s most remarkable natural gifts, the Great Barrier Reef is 
//                 blessed with the breathtaking beauty of the world’s largest coral reef. 
//                 The reef contains an abundance of marine life and comprises of over 3000 
//                 individual reef systems and coral cays and literally hundreds of picturesque 
//                 tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.
//             </p>
//         </div>
//         <div class="location__url"><a href="https://greatbarrierreef.org/">Visit the Great Barrier Reef</a></div>
//     </section>

//     <!-- Barracuda Point -->
//     <section class="location">
//         <div class="location__name"><h2>Barracuda Point</h2></div>
//         <div class="location__img">
//             <img src="./images/barracudaPoint.jpg" alt="Great Barrier Reef">
//         </div>
//         <div class="location__desc">
//             <p>
//                 Barracuda point is quite simply one of the top 5 dive sites of the world, 
//                 making it the most popular dive spot in Sipadan. There is a huge shoal of 
//                 thousands of barracudas often making a tornado and darkening the sun! 
//                 A must do for any underwater photographer! You can also see bumphead parrotfish, 
//                 dozens of turtles and reef sharks patrolling the area. Sometimes there is also 
//                 hammerhead sharks, so keep looking to the blue! The site is composed by a 
//                 steep wall going down to 22 m deep often with strong currents.
//             </p>
//         </div>
//         <div class="location__url"><a href="">Visit Barracuda Point</a></div>
//     </section>

//     <!-- Great Blue Hole -->
//     <section class="location">
//         <div class="location__name"><h2>Great Blue Hole</h2></div>
//         <div class="location__img">
//             <img src="./images/greatBelizeBlueHole.jpg" alt="Great Blue Hole diving spot">
//         </div>
//         <div class="location__desc">
//             <p>
//                 Very deep, wide, hole outlined by coral reef and inhabited by sharks. Is there 
//                 another sight like it? 30 m visibility coming over the bathwater warm reef of 
//                 vibrant colors, descending into a cool, deep blue hole where the water begins 
//                 to waver and shimmer as you enter the transition from salt to fresh water at 
//                 about 15 m. Watching the enormous tuna and other pelagics dive into the hole 
//                 to clean themselves as you briefly remove your octopus to taste the fresh water. 
//                 Then descending another 25 m to explore the stalagtites and stalagmites of ancient caverns.
//             </p> 
//         </div>
//         <div class="location__url"><a href="https://belize.com/belize-blue-hole/">Visit the Great Blue Hole</a></div>
//     </section>
// </article>
