//------------------------------------//
// Create all_icons variable
//------------------------------------//
var all_icons = [
  {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_1.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_1_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_2.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_2_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_3.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_3_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_4.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_4_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_5.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_5_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_6.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_6_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_7.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_7_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_8.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_8_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_9.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_9_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_10.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_10_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_11.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_11_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_12.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_12_repeated.png",
  },
    {
    "icon_pathway": "study_design_aesthetics/algorithm_icons/icon_13.png",
    "icon_repeated_pathway": "study_design_aesthetics/algorithm_icons/icon_13_repeated.png",
  }
]

//------------------------------------//
// Function to Randomize stimuli
//------------------------------------//
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



//---------------------------------------//
// Randomize array!
//---------------------------------------//
var all_icons_randomized = shuffle(all_icons)


//---------------------------------------//
// Array destructuring!
//---------------------------------------//
var [algorithm_0_icon, algorithm_1_icon, algorithm_2_icon, algorithm_3_icon, algorithm_4_icon, algorithm_5_icon, algorithm_6_icon, algorithm_7_icon, algorithm_8_icon, algorithm_9_icon, algorithm_10_icon, algorithm_11_icon, algorithm_12_icon] = all_icons_randomized;

/*Put all the algorithm icons into an array so we can preload all algorithms at once*/
var all_algorithm_icons = [algorithm_0_icon, algorithm_1_icon, algorithm_2_icon, algorithm_3_icon, algorithm_4_icon, algorithm_5_icon, algorithm_6_icon, algorithm_7_icon, algorithm_8_icon, algorithm_9_icon, algorithm_10_icon, algorithm_11_icon, algorithm_12_icon]


/* preload all algorithm icons*/
algorithm_icons_shuffled = all_algorithm_icons.map(item => item.icon_pathway);

var preload_algorithm_icons_shuffled = {
    data: {
        trial_id: 'preload_algorithm_icons_shuffled'
      },
    type: jsPsychPreload,
    images: algorithm_icons_shuffled,
    max_load_time: 60000
}

/* preload all algorithm repeated wallpapers */
algorithm_repeated_wallpaper_shuffled = all_algorithm_icons.map(item => item.icon_repeated_pathway);

var preload_algorithm_repeated_wallpaper_shuffled = {
    data: {
        trial_id: 'preload_algorithm_repeated_wallpaper_shuffled'
      },
    type: jsPsychPreload,
    images: algorithm_repeated_wallpaper_shuffled,
    max_load_time: 60000
}