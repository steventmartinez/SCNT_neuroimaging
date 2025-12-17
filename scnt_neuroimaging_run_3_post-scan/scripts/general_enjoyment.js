//----------------------------------------------------------------------------------------------------//
// FULL RANDOMIZATION -- for whatever reason this works but the shuffle() function doesn't?
//----------------------------------------------------------------------------------------------------//
// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  // Create a copy to avoid mutating the original array
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

                                                      
                                                      
                                                      
                                                      //--------------------------------//
                                                      // GENERAL CATEGORY ENJOYMENT
                                                      //-------------------------------//

//-------------------------------------------//
// GENERAL CATEGORY ENJOYMENT -- Instructions
//------------------------------------------//
var general_enjoyment_ratings_instructions = {
  data: {
    trial_id: "general_enjoyment_ratings_instructions",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 5vh;'>The next questions will ask about how much you generally enjoy watching different types of videos on social media.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.7vw;'>Press <b>Next</b> when you are ready to start.</div></p>"

    return [pageOne];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
}



/*Dance enjoyment rating*/
var dance_enjoyment_rating = {
  data: {
    trial_id: "dance_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>dance</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };



/*Kitchen Renovations enjoyment rating*/
var kitchen_renovations_enjoyment_rating = {
  data: {
    trial_id: "kitchen_renovations_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>kitchen renovation</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };



/*Soccer juggling enjoyment rating*/
var soccer_juggling_enjoyment_rating = {
  data: {
    trial_id: "soccer_juggling_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>soccer</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Unboxing enjoyment rating*/
var unboxing_enjoyment_rating = {
  data: {
    trial_id: "unboxing_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>unboxing</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };



/*Contouring enjoyment rating*/
var beauty_contouring_enjoyment_rating = {
  data: {
    trial_id: "beauty_contouring_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>beauty and contouring</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Skateboarding enjoyment rating*/
var skateboarding_enjoyment_rating = {
  data: {
    trial_id: "skateboarding_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>skateboarding</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };



/*Coffee art enjoyment rating*/
var coffee_art_enjoyment_rating = {
  data: {
    trial_id: "coffee_art_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>coffee art</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };



/*Dogs enjoyment rating*/
var dogs_enjoyment_rating = {
  data: {
    trial_id: "dogs_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>dog</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Rock Climbing enjoyment rating*/
var rock_climbing_enjoyment_rating = {
  data: {
    trial_id: "rock_climbing_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>rock climbing</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Ceramics enjoyment rating*/
var ceramics_enjoyment_rating = {
  data: {
    trial_id: "ceramics_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>ceramics</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Art enjoyment rating*/
var art_enjoyment_rating = {
  data: {
    trial_id: "art_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>art</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Cookie Recipes enjoyment rating*/
var cookie_recipes_enjoyment_rating = {
  data: {
    trial_id: "cookie_recipes_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>cookie recipe</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Travel enjoyment rating*/
var travel_enjoyment_rating = {
  data: {
    trial_id: "travel_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>travel</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };



/*DIY Bracelets enjoyment rating*/
var diy_bracelets_enjoyment_rating = {
  data: {
    trial_id: "diy_bracelets_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>DIY bracelet</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Piano enjoyment rating*/
var piano_enjoyment_rating = {
  data: {
    trial_id: "piano_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>piano</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };


/*Workout enjoyment rating*/
var workout_enjoyment_rating = {
  data: {
    trial_id: "workout_enjoyment_rating",
},
  type: jsPsychHtmlSliderResponse,
  stimulus: "<p><div style ='line-height: 1.25; padding-bottom: 6vh; padding-left: 3vw; padding-right: 3vw; font-size:2.5vw;'>How much do you generally enjoy watching <b>workout</b> videos?</div></p>",
  require_movement: true,
  labels: ['<b>No<br>Enjoyment<br>(0)</b>', '<b>Maximum<br>Enjoyment<br>(100)</b>'],
  slider_width: 800,
  };



//---------------------------------------------//
// **** GENERAL ENJOYMENT PROCEDURE ****
//--------------------------------------------//
var general_enjoyment_all = [dance_enjoyment_rating, kitchen_renovations_enjoyment_rating, soccer_juggling_enjoyment_rating, unboxing_enjoyment_rating, beauty_contouring_enjoyment_rating, skateboarding_enjoyment_rating, coffee_art_enjoyment_rating, dogs_enjoyment_rating, rock_climbing_enjoyment_rating, ceramics_enjoyment_rating, art_enjoyment_rating, cookie_recipes_enjoyment_rating, travel_enjoyment_rating, diy_bracelets_enjoyment_rating, piano_enjoyment_rating, workout_enjoyment_rating]
var general_enjoyment_randomized = shuffleArray(general_enjoyment_all)

var general_enjoyment_procedure = {
    timeline: [general_enjoyment_ratings_instructions, general_enjoyment_randomized],
  };



//------------------------------------//
// Transition into Surveys
//------------------------------------//
var transition_surveys = {
  on_start: function() {
    document.body.style.backgroundColor = '#FFFFFF'
  },
  data: {
      trial_id: "transition_surveys"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>Great job!</div></p>" +
    "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>Next, we will ask you to complete a few questionnaires and then the experiment will be complete.</div></p>" +
    "<p><div style ='line-height: 1.25; font-size:2.5vw; margin-bottom: 3vh;'>Press <b>Next</b> when you are ready to begin the questionnaires.</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding']
}



//------------------------------------//
// Organize Enjoyment Ratings
//------------------------------------//
var general_enjoyment = {
    timeline: [general_enjoyment_procedure, transition_surveys]
};