//------------------------------------//
// Function to Randomize stimuli
//------------------------------------//
/* Randomize array by making a copy of the original array and using Durstenfeld shuffle algorithm */
function shuffle(array) {
    // Create a copy of the array first
    let shuffled = [...array];
    let currentIndex = shuffled.length, randomIndex;
  
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex], shuffled[currentIndex]];
    }
  
    return shuffled;
}

  


//------------------------------------//
// Organize stim based on categories
//------------------------------------//
var art = tiktok_stim.filter(x => x.category === 'art')
var beauty_contouring = tiktok_stim.filter(x => x.category === 'beauty_contouring')
var ceramics = tiktok_stim.filter(x => x.category === 'ceramics')
var coffee_art = tiktok_stim.filter(x => x.category === 'coffee_art')
var cookie_recipes = tiktok_stim.filter(x => x.category === 'cookie_recipes')
var dance = tiktok_stim.filter(x => x.category === 'dance')
var diy_bracelets = tiktok_stim.filter(x => x.category === 'diy_bracelets')
var dogs = tiktok_stim.filter(x => x.category === 'dogs')
var kitchen_renovations = tiktok_stim.filter(x => x.category === 'kitchen_renovations')
var ootd = tiktok_stim.filter(x => x.category === 'ootd')
var piano = tiktok_stim.filter(x => x.category === 'piano')
var rock_climbing = tiktok_stim.filter(x => x.category === 'rock_climbing')
var skateboarding = tiktok_stim.filter(x => x.category === 'skateboarding')
var soccer_juggling = tiktok_stim.filter(x => x.category === 'soccer_juggling')
var travel = tiktok_stim.filter(x => x.category === 'travel')
var unboxing = tiktok_stim.filter(x => x.category === 'unboxing')
var workout = tiktok_stim.filter(x => x.category === 'workout')

var ai_recreation = tiktok_stim.filter(x => x.category === 'ai_recreation')
var plants = tiktok_stim.filter(x => x.category === 'plants')
var forging = tiktok_stim.filter(x => x.category === 'forging')
var ootd = tiktok_stim.filter(x => x.category === 'ootd')
var trapeze = tiktok_stim.filter(x => x.category === 'trapeze')
var squeegee = tiktok_stim.filter(x => x.category === 'squeegee')

var hydrodip = tiktok_stim.filter(x => x.category === 'hydrodip')
var cars = tiktok_stim.filter(x => x.category === 'cars')




//------------------------------------//
// Randomize category arrays
//------------------------------------//
var dance_randomized = shuffle(dance)
var ootd_randomized = shuffle(ootd)

var art_randomized = shuffle(art)
var beauty_contouring_randomized = shuffle(beauty_contouring)
var ceramics_randomized = shuffle(ceramics)
var coffee_art_randomized = shuffle(coffee_art)
var cookie_recipes_randomized = shuffle(cookie_recipes)
var diy_bracelets_randomized = shuffle(diy_bracelets)
var dogs_randomized = shuffle(dogs)
var kitchen_renovations_randomized = shuffle(kitchen_renovations)
var piano_randomized = shuffle(piano)
var rock_climbing_randomized = shuffle(rock_climbing)
var skateboarding_randomized = shuffle(skateboarding)
var soccer_juggling_randomized = shuffle(soccer_juggling)
var travel_randomized = shuffle(travel)
var unboxing_randomized = shuffle(unboxing)
var workout_randomized = shuffle(workout)

var ai_recreation_randomized = shuffle(ai_recreation)
var plants_randomized = shuffle(plants)
var forging_randomized = shuffle(forging)
var ootd_randomized = shuffle(ootd)
var trapeze_randomized = shuffle(trapeze)
var squeegee_randomized = shuffle(squeegee)

var hydrodip_randomized = shuffle(hydrodip)
var cars_randomized = shuffle(cars)




//------------------------------------------//
// ** FIRST DEMO TRIALS ORGANIZATION **
//------------------------------------------//
var first_demo_stim_all = [ai_recreation_randomized, plants_randomized, forging_randomized, ootd_randomized, trapeze_randomized, squeegee_randomized]
var first_demo_stim_randomized = shuffle(first_demo_stim_all)
var first_demo_stim = first_demo_stim_randomized.flat()

/* preload first_demo_stim*/
first_demo_stim_preload = first_demo_stim.map(item => item.video_pathway);

var preload_first_demo_stim = {
    data: {
        trial_id: 'preload_first_demo_stim'
      },
    type: jsPsychPreload,
    video: first_demo_stim_preload,
    max_load_time: 60000,
    show_detailed_errors: true 
}



//------------------------------------------//
// ** SECOND DEMO TRIALS ORGANIZATION **
//------------------------------------------//
/*Randomize the first two arrays*/
var second_demo_stim_all = [hydrodip_randomized, cars_randomized]
var second_demo_stim_all_randomized = shuffle(second_demo_stim_all)

/*Array destructuring*/
var [second_demo_run_one_stim, second_demo_run_two_stim] = second_demo_stim_all_randomized;


/* preload second_demo_run_one_stim*/
second_demo_run_one_stim_preload = second_demo_run_one_stim.map(item => item.video_pathway);

var preload_second_demo_run_one_stim = {
    data: {
        trial_id: 'preload_second_demo_run_one_stim'
      },
    type: jsPsychPreload,
    video: second_demo_run_one_stim_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload second_demo_run_two_stim*/
second_demo_run_two_stim_preload = second_demo_run_two_stim.map(item => item.video_pathway);

var preload_second_demo_run_two_stim = {
    data: {
        trial_id: 'preload_second_demo_run_two_stim'
      },
    type: jsPsychPreload,
    video: second_demo_run_two_stim_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}
