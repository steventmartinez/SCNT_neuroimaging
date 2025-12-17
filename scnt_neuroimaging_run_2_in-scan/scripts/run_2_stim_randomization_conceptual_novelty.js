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





///////////////////////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------//
// ** PRACTICE TRIALS ORGNIAZATION **
//---------------------------------------------------------------------//
var practice_one_stim_all = dance_randomized
var practice_one_stim = practice_one_stim_all.slice(0,6)

/* preload practice_one_stim*/
practice_one_stim_preload = practice_one_stim.map(item => item.video_pathway);

var preload_practice_one_stim = {
    data: {
        trial_id: 'preload_practice_one_stim'
      },
    type: jsPsychPreload,
    video: practice_one_stim_preload,
    max_load_time: 60000,
    show_detailed_errors: true 
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Performs a sample without replacement on an array and separates the results.
 * The function uses the Fisher-Yates (Knuth) shuffle on the indices to
 * efficiently select 'k' unique elements and identifies the remaining elements.
 *
 * @param {Array<Array<any>>} data - The array of arrays to sample from.
 * @param {number} k - The number of unique elements to select (sample size).
 * @returns {{sampled: Array<Array<any>>, remaining: Array<Array<any>>}} An object containing the sampled and remaining arrays.
 */
function sampleWithoutReplacement(data, k) {
    const n = data.length;
    
    // Check for edge cases
    if (k <= 0) return { sampled: [], remaining: [...data] };
    if (k >= n) return { sampled: [...data], remaining: [] };

    // 1. Create an array of indices [0, 1, 2, ..., n-1]
    let indices = Array.from({ length: n }, (_, i) => i);

    // 2. Perform Fisher-Yates shuffle *only* up to k elements
    // This places the k sample indices at the beginning of the 'indices' array.
    for (let i = 0; i < k; i++) {
        // Generate a random index j between i (inclusive) and n-1 (inclusive)
        const j = i + Math.floor(Math.random() * (n - i));

        // Swap indices[i] and indices[j]
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // 3. The first 'k' elements are the unique sample indices. The rest are the remaining indices.
    const sampleIndices = indices.slice(0, k);
    const remainingIndices = indices.slice(k); // Indices of elements not selected

    // 4. Map the indices back to the original data array
    const sampled = sampleIndices.map(index => data[index]);
    const remaining = remainingIndices.map(index => data[index]);

    return { sampled, remaining };
}


//------------------------------------------//
// ** EXPERIMENTAL TRIALS ORGANIZATION **
//------------------------------------------//

                                                    //-------------------------//
                                                    // LOW CONCEPTUAL NOVELTY 
                                                    //-------------------------//

/********** LOW CONCEPTUAL NOVELTY ORGANIZATION **********/
var all_cats = [kitchen_renovations_randomized, soccer_juggling_randomized, unboxing_randomized, beauty_contouring_randomized, art_randomized, skateboarding_randomized, dogs_randomized, coffee_art_randomized, ceramics_randomized, cookie_recipes_randomized, travel_randomized, rock_climbing_randomized, diy_bracelets_randomized, piano_randomized, workout_randomized]

/* Destructure the object returned by the modified function */
var { sampled: six_low, remaining: high_arrays } = sampleWithoutReplacement(all_cats, 6);

/* Randomize all six low conceptual novelty arrays */
var six_low_randomized = shuffle(six_low)

/* Subset each array and slice the first 6 videos for each array */
var low_conceptual_novelty_1_all = six_low_randomized[0]
var low_conceptual_novelty_1 = low_conceptual_novelty_1_all.slice(0,6)

var low_conceptual_novelty_2_all = six_low_randomized[1]
var low_conceptual_novelty_2 = low_conceptual_novelty_2_all.slice(0,6)

var low_conceptual_novelty_3_all = six_low_randomized[2]
var low_conceptual_novelty_3 = low_conceptual_novelty_3_all.slice(0,6)

var low_conceptual_novelty_4_all = six_low_randomized[3]
var low_conceptual_novelty_4 = low_conceptual_novelty_4_all.slice(0,6)

var low_conceptual_novelty_5_all = six_low_randomized[4]
var low_conceptual_novelty_5 = low_conceptual_novelty_5_all.slice(0,6)

var low_conceptual_novelty_6_all = six_low_randomized[5]
var low_conceptual_novelty_6 = low_conceptual_novelty_6_all.slice(0,6)



                                                    //-------------------------//
                                                    // HIGH CONCEPTUAL NOVELTY 
                                                    //-------------------------//

// A single array to store the 6 sampled videos from each of the 6 cycles.
// This will ultimately contain 6 * 6 = 36 videos.
var all_sampled_videos = [];



// =============================================================
// TOGGLE LOGGING: Set to 'true' to print data, 'false' to silence it.
const LOG_VERIFICATION_DATA = false; 
// =============================================================

// --- Repeat the process 6 times ---
for (let cycle = 0; cycle < 6; cycle++) {
  
  if (LOG_VERIFICATION_DATA) {
      console.log(`\n--- STARTING CYCLE ${cycle + 1} ---`);
  }

  // 1. Randomize the 9 "high_arrays" (subarrays)
  var high_arrays_randomized = shuffle(high_arrays)

  // 2. Subset the first 6 subarrays
  var high_conceptual_novelty_subsets = high_arrays_randomized.slice(0, 6);

  // Array to store the 6 videos sampled in this specific cycle
  var sampled_videos_in_cycle = [];

  // 3. Loop through the 6 subsets, randomize, and sample 
  for (let i = 0; i < high_conceptual_novelty_subsets.length; i++) {
    
    // The current subarray (e.g., cat1_short)
    let video_array = high_conceptual_novelty_subsets[i];

    // --- VERIFICATION LOG 1: Check initial length ---
    if (LOG_VERIFICATION_DATA) {
        console.log(`  Subarray ${i + 1} (before sampling): Length = ${video_array.length}`);
    }

    // Check if the array still has videos to sample from
    if (video_array.length > 0) {
      
      // Randomize the remaining videos in the current subarray
      let randomized_video_array = shuffle(video_array);

      // Crucial Step: Sampling Without Replacement (modifies the array)
      let sampled_video = randomized_video_array.splice(0, 1)[0];

      // --- VERIFICATION LOG 2: Print the selected video name ---
      if (LOG_VERIFICATION_DATA) {
        // We now access the specific key you requested: 'video_name_count_channel'
        console.log(`    -> SELECTED VIDEO: ${sampled_video.video_name_count_channel}`);
      }

      // Store the sampled video for this cycle
      sampled_videos_in_cycle.push(sampled_video);
      
      // Update the original array of 9 subarrays (high_arrays)
      let original_index = high_arrays.findIndex(arr => arr === video_array);
      
      // Update the original array in 'high_arrays' with the shortened, randomized array
      if (original_index !== -1) {
          high_arrays[original_index] = randomized_video_array;
      }
      
      // We also update the reference in the current loop's subset array
      high_conceptual_novelty_subsets[i] = randomized_video_array;

      // --- VERIFICATION LOG 3: Check final length ---
      if (LOG_VERIFICATION_DATA) {
        console.log(`  Subarray ${i + 1} (after sampling): Length = ${randomized_video_array.length}`);
      }

    } else {
      // NOTE: console.warn is still wrapped to control its output
      if (LOG_VERIFICATION_DATA) {
          console.warn("Array is empty in cycle " + (cycle + 1) + " at subarray index " + (i + 1));
      }
    }
  }

  // Add the 6 videos sampled in this cycle to the master list
  all_sampled_videos.push(sampled_videos_in_cycle);
  
  if (LOG_VERIFICATION_DATA) {
      console.log(`--- CYCLE ${cycle + 1} ENDED. ${sampled_videos_in_cycle.length} videos sampled. ---`);
  }
}



/* Destructure the all_sampled_videos returned by the cycling function */
var [high_conceptual_novelty_1, high_conceptual_novelty_2, high_conceptual_novelty_3, high_conceptual_novelty_4, high_conceptual_novelty_5, high_conceptual_novelty_6] = all_sampled_videos;


//---------------------------------------------------------------------//
// ** PRELOAD 12 EXPERIMENTAL VIDEO FEEDS **
//---------------------------------------------------------------------//

/* preload low_conceptual_novelty_1 */
low_conceptual_novelty_1_preload = low_conceptual_novelty_1.map(item => item.video_pathway);

var preload_low_conceptual_novelty_1 = {
    data: {
        trial_id: 'preload_low_conceptual_novelty_1'
      },
    type: jsPsychPreload,
    video: low_conceptual_novelty_1_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload low_conceptual_novelty_2 */
low_conceptual_novelty_2_preload = low_conceptual_novelty_2.map(item => item.video_pathway);

var preload_low_conceptual_novelty_2 = {
    data: {
        trial_id: 'preload_low_conceptual_novelty_2'
      },
    type: jsPsychPreload,
    video: low_conceptual_novelty_2_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload low_conceptual_novelty_3 */
low_conceptual_novelty_3_preload = low_conceptual_novelty_3.map(item => item.video_pathway);

var preload_low_conceptual_novelty_3 = {
    data: {
        trial_id: 'preload_low_conceptual_novelty_3'
      },
    type: jsPsychPreload,
    video: low_conceptual_novelty_3_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload low_conceptual_novelty_4 */
low_conceptual_novelty_4_preload = low_conceptual_novelty_4.map(item => item.video_pathway);

var preload_low_conceptual_novelty_4 = {
    data: {
        trial_id: 'preload_low_conceptual_novelty_4'
      },
    type: jsPsychPreload,
    video: low_conceptual_novelty_4_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload low_conceptual_novelty_5 */
low_conceptual_novelty_5_preload = low_conceptual_novelty_5.map(item => item.video_pathway);

var preload_low_conceptual_novelty_5 = {
    data: {
        trial_id: 'preload_low_conceptual_novelty_5'
      },
    type: jsPsychPreload,
    video: low_conceptual_novelty_5_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload low_conceptual_novelty_6 */
low_conceptual_novelty_6_preload = low_conceptual_novelty_6.map(item => item.video_pathway);

var preload_low_conceptual_novelty_6 = {
    data: {
        trial_id: 'preload_low_conceptual_novelty_6'
      },
    type: jsPsychPreload,
    video: low_conceptual_novelty_6_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}






/* preload high_conceptual_novelty_1 */
high_conceptual_novelty_1_preload = high_conceptual_novelty_1.map(item => item.video_pathway);

var preload_high_conceptual_novelty_1 = {
    data: {
        trial_id: 'preload_high_conceptual_novelty_1'
      },
    type: jsPsychPreload,
    video: high_conceptual_novelty_1_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload high_conceptual_novelty_2 */
high_conceptual_novelty_2_preload = high_conceptual_novelty_2.map(item => item.video_pathway);

var preload_high_conceptual_novelty_2 = {
    data: {
        trial_id: 'preload_high_conceptual_novelty_2'
      },
    type: jsPsychPreload,
    video: high_conceptual_novelty_2_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload high_conceptual_novelty_3 */
high_conceptual_novelty_3_preload = high_conceptual_novelty_3.map(item => item.video_pathway);

var preload_high_conceptual_novelty_3 = {
    data: {
        trial_id: 'preload_high_conceptual_novelty_3'
      },
    type: jsPsychPreload,
    video: high_conceptual_novelty_3_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload high_conceptual_novelty_4 */
high_conceptual_novelty_4_preload = high_conceptual_novelty_4.map(item => item.video_pathway);

var preload_high_conceptual_novelty_4 = {
    data: {
        trial_id: 'preload_high_conceptual_novelty_4'
      },
    type: jsPsychPreload,
    video: high_conceptual_novelty_4_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload high_conceptual_novelty_5 */
high_conceptual_novelty_5_preload = high_conceptual_novelty_5.map(item => item.video_pathway);

var preload_high_conceptual_novelty_5 = {
    data: {
        trial_id: 'preload_high_conceptual_novelty_5'
      },
    type: jsPsychPreload,
    video: high_conceptual_novelty_5_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}


/* preload high_conceptual_novelty_6 */
high_conceptual_novelty_6_preload = high_conceptual_novelty_6.map(item => item.video_pathway);

var preload_high_conceptual_novelty_6 = {
    data: {
        trial_id: 'preload_high_conceptual_novelty_6'
      },
    type: jsPsychPreload,
    video: high_conceptual_novelty_6_preload,
    max_load_time: 60000,
    show_detailed_errors: true
}

