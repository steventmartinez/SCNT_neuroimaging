//-------------------------------------------//
// Initialize global variables
//------------------------------------------//
var relatedness;
var next_up;
var current_algorithm_icon;


//---------------------------------------------//
// Initialize global variables for trial count
//---------------------------------------------//
var trial_count_run1_practice = 0;

var trial_count_run1_trial_1 = 0;
var trial_count_run1_trial_2 = 0;
var trial_count_run1_trial_3 = 0;
var trial_count_run1_trial_4 = 0;
var trial_count_run1_trial_5 = 0;
var trial_count_run1_trial_6 = 0;





//-----------------------------------------//
// DEFINE PRELOADING TRIALS FOR ALGORITHMS
//----------------------------------------//
var practice_algorithm =   {
    "icon_pathway": "algorithm_icons/icon_13.png",
    "icon_repeated_pathway": "algorithm_icons/icon_13_repeated.png",
  }


/*preload for algorithm_icon_1*/
var preload_algorithm_icon_practice = {
    data: {
        trial_id: 'preload_algorithm_icon_practice'
      },
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      trial.images = [practice_algorithm.icon_pathway, practice_algorithm.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Practice Block:', trial.images);
    }
}


/*preload for algorithm_icon_1*/
var preload_algorithm_icon_1 = {
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_algorithm_icon_1'
    },
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      var icon = run1_stim[0].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 1:', trial.images);
    }
};

/*preload for algorithm_icon_2*/
var preload_algorithm_icon_2 = {
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_algorithm_icon_2'
    },
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      var icon = run1_stim[1].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 2:', trial.images);
    }
};


/*preload for algorithm_icon_3*/
var preload_algorithm_icon_3 = {
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_algorithm_icon_3'
    },
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      var icon = run1_stim[2].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 3:', trial.images);
    }
};

/*preload for algorithm_icon_4*/
var preload_algorithm_icon_4 = {
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_algorithm_icon_4'
    },
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      var icon = run1_stim[3].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 4:', trial.images);
    }
};


/*preload for algorithm_icon_5*/
var preload_algorithm_icon_5 = {
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_algorithm_icon_5'
    },
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      var icon = run1_stim[4].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 5:', trial.images);
    }
};


/*preload for algorithm_icon_6*/
var preload_algorithm_icon_6 = {
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_algorithm_icon_6'
    },
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      var icon = run1_stim[5].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 6:', trial.images);
    }
};


/*preload for algorithm_icon_7*/
var preload_algorithm_icon_7 = {
    type: jsPsychPreload,
    images: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_algorithm_icon_7'
    },
    on_start: function(trial) {
            
      // Get both icon paths and put them in an array
      var icon = run1_stim[6].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 7:', trial.images);
    }
};


var preload_all_algorithm_icons = {
  timeline: [preload_algorithm_icon_practice, preload_algorithm_icon_1, preload_algorithm_icon_2, preload_algorithm_icon_3, preload_algorithm_icon_4, preload_algorithm_icon_5, preload_algorithm_icon_6, preload_algorithm_icon_7]
}




//------------------------------------//
// DEFINE PRELOADING TRIALS FOR VIDEOS
//------------------------------------//

/*preload for run1_trial_1*/
var preload_run1_trial_1 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run1_trial_1'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run1_stim[0].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 1');
    }
};


/*preload for run1_trial_2*/
var preload_run1_trial_2 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run1_trial_2'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run1_stim[1].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 2');
    }
};


/*preload for run1_trial_3*/
var preload_run1_trial_3 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run1_trial_3'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run1_stim[2].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 3');
    }
};


/*preload for run1_trial_4*/
var preload_run1_trial_4 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run1_trial_4'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run1_stim[3].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 4');
    }
};


/*preload for run1_trial_5*/
var preload_run1_trial_5 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run1_trial_5'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run1_stim[4].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 5');
    }
};


/*preload for run1_trial_6*/
var preload_run1_trial_6 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run1_trial_6'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run1_stim[5].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 6');
    }
};



//------------------------------------//
// PRELOAD BATCH ONE
//------------------------------------//
var preload_batch_one = {
  timeline: [preload_run1_trial_1, preload_run1_trial_2]
}

//------------------------------------//
// PRELOAD BATCH TWO
//------------------------------------//
var preload_batch_two = {
  timeline: [preload_run1_trial_3, preload_run1_trial_4]
}


//------------------------------------//
// PRELOAD BATCH THREE
//------------------------------------//
var preload_batch_three = {
  timeline: [preload_run1_trial_5, preload_run1_trial_6]
}




//------------------------------------//
// Pause window
//------------------------------------//
 var pause_window = {
  data: {
    trial_id: "pause_window",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.55; font-size: 3.2vw; margin-bottom: 5vh;'>Please wait for the session to begin.</div></p>" 
    return [pageOne];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
};



//------------------------------------//
// Experiment Instructions
//------------------------------------//
 var exp_instructions_reminder = {
  data: {
    trial_id: "exp_instructions_reminder",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 5vh;'>Next, you will watch multiple video feeds curated by different algorithms.</div></p>" +
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 5vh;'>Some algorithms will display multiple videos from only one category, while other algorithms will display a variety of videos from several different categories.</div></p>" +
    "<p><div style='line-height: 1.55; font-size:2.7vw; margin-bottom: 5vh;'>Each algorithm will be represented by a unique icon that you will see before each video feed starts.</div></p>"

    let pageTwo = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 3vh;'>We will use the button box to use the <b>Skip</b> and <b>Switch</b> buttons.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom: 3vh;'>To skip to the next video, use your index finger to press the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom: 3vh;'>To exit the current video feed and switch to a new video feed, use your middle finger to press the <b>Switch</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 1vh;'>The buttons will appear 5 seconds after each video starts.</div></p>" +
    `<img src="study_design_aesthetics/video_platform_example_skip_exit.png" <div style= "width: 30vw; height: 40vh; margin-bottom: 2vh;"></img>`

    let pageThree = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>As a reminder, you can either watch a video in its entirety, skip a video to watch the next video in the current video feed, or exit the current video feed and switch to a new video feed.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>If you finish all of the videos in the current video feed, the next video feed will automatically start without a delay.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>If you press the exit button and switch to a new video feed, there will be a delay and then the next video feed will start.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>Your decisions about whether to watch videos in their entirety, skip videos, or exit and switch video feeds, will have no effect on the overall duration of the experiment.</div></p>"

    return [pageOne, pageTwo, pageThree];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
};



//------------------------------------//
// In scan practice instructions
//------------------------------------//
var in_scan_practice = {
  data: {
    trial_id: "in_scan_practice",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 5vh;'>Before we start, we will do a short practice round so you can get used to using the button box to watch the videos.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom: 5vh;'>To skip to the next video, use your index finger to press the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom: 5vh;'>To exit the current video feed and switch to a new video feed, use your middle finger to press the <b>Switch</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style='line-height: 1.55; font-size:2.7vw; margin-bottom: 3vh;'>Press <b>Next</b> to start the practice round.</div></p>"

    return [pageOne];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
};




                                                          //------------------------------------//
                                                          // PRACTICE TRIAL
                                                          //------------------------------------//


//---------------------------------------------//
// RUN 1 -- PRACTICE
//----------------------------------------------//
var run1_practice = {
  data: {
          trial_id: "run1_practice",

          conceptual_novelty_level: "low",

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

      },
   on_start: function(data) {
   
    algorithm_icon_practice = practice_algorithm.icon_pathway;
    algorithm_icon_practice_wallpaper = practice_algorithm.icon_repeated_pathway;

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_icon_practice_wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_icon_practice
    
    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_run1_practice++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run1_practice == 6) {
          next_up = true
        } else {
          next_up = false
        }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 500 milliseconds = .5 seconds


      // Show the image after 5 seconds
      setTimeout(function() {
        var img = document.getElementById('buttons-img');
        if (img) {
          img.style.display = 'block';
        }
      }, 5000);

      
    // Disable keyboard responses initially
    this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
    
    // Enable responses after 5 seconds
    setTimeout(() => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: (info) => {
                // Pass the response info when finishing the trial
                this.jsPsych.finishTrial({
                    rt: info.rt,
                    response: info.key
                });
            },
            valid_responses: ["6", "7"],
            persist: false
        });
    }, 5000);

  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' +
                '<img id="buttons-img" src="study_design_aesthetics/exp_buttons.png" <div style= "position: fixed; right: 21vw; bottom: -1vh; width: 11vw; height: 29vh; margin-bottom: 2vh; display: none;"></img>'
                return html;
            },  
    choices: ["6", "7"],
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Clear the background image when the trial ends*/
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_milliseconds = data.rt
      data.rt_milliseconds_adjusted = data.rt_milliseconds - 500

      data.rt_seconds = data.rt/1000
      data.rt_seconds_adjusted = data.rt_seconds - .50


      /*If they press the 'Skip' button*/
      if (data.response == 6) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 7) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 6 && data.response != 7) {
        opportunity_cost = false
        choice = "watched_fully"
      }

      /*Tag choice and relatedness data*/
      data.choice = choice
      data.relatedness = relatedness

      /*If rt == null */
      if (data.rt == null) {
        rt_complete = jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
        rt_complete_seconds = rt_complete/1000
      } else {
        rt_complete = data.rt
        rt_complete_seconds = rt_complete/1000
      }

      /*Tag rt_complete data*/
      data.rt_complete = rt_complete
      data.rt_complete_seconds = rt_complete_seconds
    }
    }




//---------------------------------------------------------//
// RUN 1 -- PRACTICE PROCEDURE
//---------------------------------------------------------//
var run1_practice_procedure = {
    timeline: [run1_practice],
    timeline_variables: run1_practice_stim,
    };





//------------------------------------//
// In scan practice is complete
//------------------------------------//
var in_scan_practice_complete = {
      on_start: function(data) {

      document.body.style.backgroundColor = '#F0F0F0'

    },
  data: {
    trial_id: "in_scan_practice_complete",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.55; font-size: 3vw; margin-bottom: 5vh;'>The practice round is complete.</div></p>" +
    "<p><div style='line-height: 1.55; font-size: 3vw; margin-bottom: 5vh;'>The experiment will now begin.</div></p>"

    return [pageOne];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
};




                                            //---------------------------------------------//
                                            // **** START EXPERIMENTAL TRIALS ****
                                            //--------------------------------------------//

var launch_platform = {
    on_start: function(data) {

    },
  data: {
      trial_id: "launch_platform"
  },
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 4vh;'>Please watch the videos as you normally would in real life.</div></p>" +
  "<p><div style='line-height: 1.25; font-size: 2.7vw; margin-bottom: 4vh'>When you are ready to start, press the index finger button to launch the platform.</div></p>" +
  "<p><div style='line-height: 1.25; font-size: 2.7vw; margin-bottom: 10vh'>Once you press the button, the algorithms will start loading and may require a few seconds to complete.</div></p>" +
  "<img src='study_design_aesthetics/social_media_logo.png' <div style= 'width: 17vw; height: 25vh;'></img>",
  choices: ["6"],
css_classes: ['custom_padding'],
};





//------------------------------------//
// Video Platform -- Loading
//------------------------------------//
var video_platform_loading = {
  on_start: function() {

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "video_platform_loading"
  },
  type: jsPsychAudioKeyboardResponse,
  stimulus: 'study_design_aesthetics/intro_sound.mp3',
prompt: function() {
    var html = `
      <p id="progress-percentage" style="color: #00FFFF; text-shadow: 0 0 8px #00BFFF; font-size: 4vw; text-align: center; margin-bottom: 5vh"><b>0%</b></p>
      <div class="progress-container" style="height: 60px; width: 500px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 191, 255, 0.5); display: flex; padding: 0 2px; align-items: center; margin-bottom: 30vh;">
      <div id="progress-segments" style="display: flex; width: 100%; height: 80%; gap: 4px;"></div>
      <img src="study_design_aesthetics/social_media_logo.png" <div class = blur-fade-glow style= "width: 16vw; height: 26vh; position: fixed; left: 42vw; bottom: 20vh; margin-bottom: 2vh;"></img>`;
    return html;
  },
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 10200,  // 9 seconds to match the progress bar duration
  on_load: function() {
    const segmentContainer = document.getElementById('progress-segments');
    const numSegments = 10; // Number of discrete segments
    
    // Create all segments initially (empty)
    for (let i = 0; i < numSegments; i++) {
      const segment = document.createElement('div');
      segment.className = 'progress-segment';
      segment.style.flex = '1';
      segment.style.height = '100%';
      segment.style.background = '#222'; // Start with empty segments
      segment.style.borderRadius = '6px';
      segment.style.transition = 'background 0.3s ease';
      segmentContainer.appendChild(segment);
    }
    
    // Fill segments one by one with a delay
    const segments = document.querySelectorAll('.progress-segment');
    const segmentDuration = 7000 / numSegments; // Time per segment
    const percentageElement = document.getElementById('progress-percentage');
    
    // Update percentage every 1% (every 90ms for 9 seconds)
    let currentPercentage = 0;
    const percentageInterval = setInterval(() => {
      currentPercentage++;
      percentageElement.innerHTML = `<b>${currentPercentage}%</b>`;
      
      if (currentPercentage >= 100) {
        clearInterval(percentageInterval);
      }
    }, 70); // 9000ms / 100 = 90ms per 1%
    
    segments.forEach((segment, index) => {
      setTimeout(() => {
        segment.style.background = 'linear-gradient(90deg, #00BFFF, #00FFFF)';
        segment.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.8)';
      }, segmentDuration * index);
    });
  },
};





//------------------------------------//
// Wait for trigger
//------------------------------------//
var wait_for_trigger = {
     on_start: function(data) {

      /*Initialize the global clock at the start of the first trial*/
      initializeGlobalClock();

      document.body.style.backgroundColor = '#000000'

      /*Record experiment start time*/
      exp_start_time_milliseconds = getExperimentStartTime();

      /*Initialize trial clock AND record trial onset time (one call does both!)*/
      trial_onset_time_milliseconds = startTrialTiming();

      console.log('Recorded trial onset time (ms):', trial_onset_time_milliseconds);

    },
    data: {
      trial_id: "wait_for_trigger"
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<p style="color: white; font-size: 4.5vw;"><b>Waiting for scanner trigger...<b/></p>',
    choices: ["'"],
    css_classes: ['custom_padding'],
      on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

      /*Record extra column just to ensure experiment start time starts here*/
      data.exp_start_time_milliseconds_second_check = getExperimentStartTime(),
      data.exp_start_time_seconds_second_check = getExperimentStartTime() / 1000

      /*Record experiment start time*/
      jsPsych.data.addProperties({
        exp_start_time_milliseconds: getExperimentStartTime(),
        exp_start_time_seconds: getExperimentStartTime() / 1000
        })
  }
};

 



                                                          //------------------------------------//
                                                          // EXPERIMENTAL TRIALS START HERE
                                                          //------------------------------------//




//---------------------------------------------//
// EXP RUN -- TRIAL #1
//----------------------------------------------//
var run1_trial_1 = {
  data: {
          trial_id: "run1_trial_1",

          conceptual_novelty_level: function () {
            return run1_stim[0].conceptual_novelty_level
          },

          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Define algorithm variables*/
    algorithm_icon_1 = run1_stim[0].algorithm_icon.icon_pathway;
    algorithm_icon_1_wallpaper = run1_stim[0].algorithm_icon.icon_repeated_pathway;

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_icon_1_wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_icon_1
    
    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_run1_trial_1++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run1_trial_1 == 6) {
          next_up = true
        } else {
          next_up = false
        }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 500 milliseconds = .5 seconds

    // Show the image after 5 seconds
    setTimeout(function() {
      var img = document.getElementById('buttons-img');
      if (img) {
        img.style.display = 'block';
      }
    }, 5000);
    
    // Disable keyboard responses initially
    this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
    
    // Enable responses after 5 seconds
    setTimeout(() => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: (info) => {
                // Pass the response info when finishing the trial
                this.jsPsych.finishTrial({
                    rt: info.rt,
                    response: info.key
                });
            },
            valid_responses: ["6", "7"],
            persist: false
        });
    }, 5000);

  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' +
                '<img id="buttons-img" src="study_design_aesthetics/exp_buttons.png" <div style= "position: fixed; right: 21vw; bottom: -1vh; width: 11vw; height: 29vh; margin-bottom: 2vh; display: none;"></img>'
                return html;
            }, 
    choices: ["6", "7"],
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Clear the background image when the trial ends*/
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();


      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;


      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_milliseconds = data.rt
      data.rt_milliseconds_adjusted = data.rt_milliseconds - 500

      data.rt_seconds = data.rt/1000
      data.rt_seconds_adjusted = data.rt_seconds - .50


      /*If they press the 'Skip' button*/
      if (data.response == 6) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 7) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 6 && data.response != 7) {
        opportunity_cost = false
        choice = "watched_fully"
      }

      /*Tag choice and relatedness data*/
      data.choice = choice
      data.relatedness = relatedness

      /*If rt == null */
      if (data.rt == null) {
        rt_complete = jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
        rt_complete_seconds = rt_complete/1000
      } else {
        rt_complete = data.rt
        rt_complete_seconds = rt_complete/1000
      }

      /*Tag rt_complete data*/
      data.rt_complete = rt_complete
      data.rt_complete_seconds = rt_complete_seconds
    }
  }




//---------------------------------------------------------//
// EXP RUN -- TRIAL #1 -- PROCEDURE
//---------------------------------------------------------//
var run1_trial_1_procedure = {
    timeline: [{
        timeline: [run1_trial_1],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 1
        this.timeline[0].timeline_variables = run1_stim[0].run;
    }
};





//---------------------------------------------//
// EXP RUN -- TRIAL #2
//----------------------------------------------//
var run1_trial_2 = {
  data: {
          trial_id: "run1_trial_2",

          conceptual_novelty_level: function () {
            return run1_stim[1].conceptual_novelty_level
          },
          
          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Define algorithm variables*/
    algorithm_icon_2 = run1_stim[1].algorithm_icon.icon_pathway;
    algorithm_icon_2_wallpaper = run1_stim[1].algorithm_icon.icon_repeated_pathway;

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_icon_2_wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_icon_2
    
    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_run1_trial_2++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run1_trial_2 == 6) {
          next_up = true
        } else {
          next_up = false
        }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 500 milliseconds = .5 seconds

    // Show the image after 5 seconds
    setTimeout(function() {
      var img = document.getElementById('buttons-img');
      if (img) {
        img.style.display = 'block';
      }
    }, 5000);

  
    // Disable keyboard responses initially
    this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
    
    // Enable responses after 5 seconds
    setTimeout(() => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: (info) => {
                // Pass the response info when finishing the trial
                this.jsPsych.finishTrial({
                    rt: info.rt,
                    response: info.key
                });
            },
            valid_responses: ["6", "7"],
            persist: false
        });
    }, 5000);

  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' +
                '<img id="buttons-img" src="study_design_aesthetics/exp_buttons.png" <div style= "position: fixed; right: 21vw; bottom: -1vh; width: 11vw; height: 29vh; margin-bottom: 2vh; display: none;"></img>'
                return html;
            },     
    choices: ["6", "7"],
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Clear the background image when the trial ends*/
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";


      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();


      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_milliseconds = data.rt
      data.rt_milliseconds_adjusted = data.rt_milliseconds - 500

      data.rt_seconds = data.rt/1000
      data.rt_seconds_adjusted = data.rt_seconds - .50


      /*If they press the 'Skip' button*/
      if (data.response == 6) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 7) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 6 && data.response != 7) {
        opportunity_cost = false
        choice = "watched_fully"
      }

      /*Tag choice and relatedness data*/
      data.choice = choice
      data.relatedness = relatedness

      /*If rt == null */
      if (data.rt == null) {
        rt_complete = jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
        rt_complete_seconds = rt_complete/1000
      } else {
        rt_complete = data.rt
        rt_complete_seconds = rt_complete/1000
      }
      /*Tag rt_complete data*/
      data.rt_complete = rt_complete
      data.rt_complete_seconds = rt_complete_seconds
    }
  }




//---------------------------------------------------------//
// EXP RUN -- TRIAL #2 -- PROCEDURE
//---------------------------------------------------------//
var run1_trial_2_procedure = {
    timeline: [{
        timeline: [run1_trial_2],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 2
        this.timeline[0].timeline_variables = run1_stim[1].run;
    }
};




//---------------------------------------------//
// EXP RUN -- TRIAL #3
//----------------------------------------------//
var run1_trial_3 = {
  data: {
          trial_id: "run1_trial_3",

          conceptual_novelty_level: function () {
            return run1_stim[2].conceptual_novelty_level
          },
          
          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Define algorithm variables*/
    algorithm_icon_3 = run1_stim[2].algorithm_icon.icon_pathway;
    algorithm_icon_3_wallpaper = run1_stim[2].algorithm_icon.icon_repeated_pathway;

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_icon_3_wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_icon_3

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_run1_trial_3++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run1_trial_3 == 6) {
          next_up = true
        } else {
          next_up = false
        }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 500 milliseconds = .5 seconds

    // Show the image after 5 seconds
    setTimeout(function() {
      var img = document.getElementById('buttons-img');
      if (img) {
        img.style.display = 'block';
      }
    }, 5000);


    // Disable keyboard responses initially
    this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
    
    // Enable responses after 5 seconds
    setTimeout(() => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: (info) => {
                // Pass the response info when finishing the trial
                this.jsPsych.finishTrial({
                    rt: info.rt,
                    response: info.key
                });
            },
            valid_responses: ["6", "7"],
            persist: false
        });
    }, 5000);
      
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' +
                '<img id="buttons-img" src="study_design_aesthetics/exp_buttons.png" <div style= "position: fixed; right: 21vw; bottom: -1vh; width: 11vw; height: 29vh; margin-bottom: 2vh; display: none;"></img>'
                return html;
            }, 
    choices: ["6", "7"],
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Clear the background image when the trial ends*/
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();


      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_milliseconds = data.rt
      data.rt_milliseconds_adjusted = data.rt_milliseconds - 500

      data.rt_seconds = data.rt/1000
      data.rt_seconds_adjusted = data.rt_seconds - .50


      /*If they press the 'Skip' button*/
      if (data.response == 6) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 7) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 6 && data.response != 7) {
        opportunity_cost = false
        choice = "watched_fully"
      }

      /*Tag choice and relatedness data*/
      data.choice = choice
      data.relatedness = relatedness

      /*If rt == null */
      if (data.rt == null) {
        rt_complete = jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
        rt_complete_seconds = rt_complete/1000
      } else {
        rt_complete = data.rt
        rt_complete_seconds = rt_complete/1000
      }

      /*Tag rt_complete data*/
      data.rt_complete = rt_complete
      data.rt_complete_seconds = rt_complete_seconds
    }
  }




//---------------------------------------------------------//
// EXP RUN -- TRIAL #3 -- PROCEDURE
//---------------------------------------------------------//
var run1_trial_3_procedure = {
    timeline: [{
        timeline: [run1_trial_3],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 3
        this.timeline[0].timeline_variables = run1_stim[2].run;
    }
};



//---------------------------------------------//
// EXP RUN -- TRIAL #4
//----------------------------------------------//
var run1_trial_4 = {
  data: {
          trial_id: "run1_trial_4",

          conceptual_novelty_level: function () {
            return run1_stim[3].conceptual_novelty_level
          },
          
          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

      },
   on_start: function(data) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Define algorithm variables*/
    algorithm_icon_4 = run1_stim[3].algorithm_icon.icon_pathway;
    algorithm_icon_4_wallpaper = run1_stim[3].algorithm_icon.icon_repeated_pathway;

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_icon_4_wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_icon_4

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_run1_trial_4++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run1_trial_4 == 6) {
          next_up = true
        } else {
          next_up = false
        }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 500 milliseconds = .5 seconds


    // Show the image after 5 seconds
    setTimeout(function() {
      var img = document.getElementById('buttons-img');
      if (img) {
        img.style.display = 'block';
      }
    }, 5000);


    // Disable keyboard responses initially
    this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
    
    // Enable responses after 5 seconds
    setTimeout(() => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: (info) => {
                // Pass the response info when finishing the trial
                this.jsPsych.finishTrial({
                    rt: info.rt,
                    response: info.key
                });
            },
            valid_responses: ["6", "7"],
            persist: false
        });
    }, 5000);

  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' +
                '<img id="buttons-img" src="study_design_aesthetics/exp_buttons.png" <div style= "position: fixed; right: 21vw; bottom: -1vh; width: 11vw; height: 29vh; margin-bottom: 2vh; display: none;"></img>'
                return html;
            },        
    choices: ["6", "7"],
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Clear the background image when the trial ends*/
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";


      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();


      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_milliseconds = data.rt
      data.rt_milliseconds_adjusted = data.rt_milliseconds - 500

      data.rt_seconds = data.rt/1000
      data.rt_seconds_adjusted = data.rt_seconds - .50


      /*If they press the 'Skip' button*/
      if (data.response == 6) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 7) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 6 && data.response != 7) {
        opportunity_cost = false
        choice = "watched_fully"
      }

      /*Tag choice and relatedness data*/
      data.choice = choice
      data.relatedness = relatedness

      /*If rt == null */
      if (data.rt == null) {
        rt_complete = jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
        rt_complete_seconds = rt_complete/1000
      } else {
        rt_complete = data.rt
        rt_complete_seconds = rt_complete/1000
      }

      /*Tag rt_complete data*/
      data.rt_complete = rt_complete
      data.rt_complete_seconds = rt_complete_seconds
    }
  }




//---------------------------------------------------------//
// EXP RUN -- TRIAL #4 -- PROCEDURE
//---------------------------------------------------------//
var run1_trial_4_procedure = {
    timeline: [{
        timeline: [run1_trial_4],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 4
        this.timeline[0].timeline_variables = run1_stim[3].run;
    }
};







//---------------------------------------------//
// EXP RUN -- TRIAL #5
//----------------------------------------------//
var run1_trial_5 = {
  data: {
          trial_id: "run1_trial_5",

          conceptual_novelty_level: function () {
            return run1_stim[4].conceptual_novelty_level
          },
          
          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Define algorithm variables*/
    algorithm_icon_5 = run1_stim[4].algorithm_icon.icon_pathway;
    algorithm_icon_5_wallpaper = run1_stim[4].algorithm_icon.icon_repeated_pathway;

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_icon_5_wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_icon_5

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_run1_trial_5++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run1_trial_5 == 6) {
          next_up = true
        } else {
          next_up = false
        }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 500 milliseconds = .5 seconds

    // Show the image after 5 seconds
    setTimeout(function() {
      var img = document.getElementById('buttons-img');
      if (img) {
        img.style.display = 'block';
      }
    }, 5000);


    // Disable keyboard responses initially
    this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
    
    // Enable responses after 5 seconds
    setTimeout(() => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: (info) => {
                // Pass the response info when finishing the trial
                this.jsPsych.finishTrial({
                    rt: info.rt,
                    response: info.key
                });
            },
            valid_responses: ["6", "7"],
            persist: false
        });
    }, 5000);

  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' +
                '<img id="buttons-img" src="study_design_aesthetics/exp_buttons.png" <div style= "position: fixed; right: 21vw; bottom: -1vh; width: 11vw; height: 29vh; margin-bottom: 2vh; display: none;"></img>'
                return html;
            },  
    choices: ["6", "7"],
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Clear the background image when the trial ends*/
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";


      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();


      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_milliseconds = data.rt
      data.rt_milliseconds_adjusted = data.rt_milliseconds - 500

      data.rt_seconds = data.rt/1000
      data.rt_seconds_adjusted = data.rt_seconds - .50


      /*If they press the 'Skip' button*/
      if (data.response == 6) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 7) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 6 && data.response != 7) {
        opportunity_cost = false
        choice = "watched_fully"
      }

      /*Tag choice and relatedness data*/
      data.choice = choice
      data.relatedness = relatedness

      /*If rt == null */
      if (data.rt == null) {
        rt_complete = jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
        rt_complete_seconds = rt_complete/1000
      } else {
        rt_complete = data.rt
        rt_complete_seconds = rt_complete/1000
      }

      /*Tag rt_complete data*/
      data.rt_complete = rt_complete
      data.rt_complete_seconds = rt_complete_seconds
    }
  }




//---------------------------------------------------------//
// EXP RUN -- TRIAL #5 -- PROCEDURE
//---------------------------------------------------------//
var run1_trial_5_procedure = {
    timeline: [{
        timeline: [run1_trial_5],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 5
        this.timeline[0].timeline_variables = run1_stim[4].run;
    }
};





//---------------------------------------------//
// EXP RUN -- TRIAL #6
//----------------------------------------------//
var run1_trial_6 = {
  data: {
          trial_id: "run1_trial_6",

          conceptual_novelty_level: function () {
            return run1_stim[5].conceptual_novelty_level
          },
          
          category_code_alphabetical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_alphabetical')}`
          },

          category_code_numerical: function () {
            return `${jsPsych.evaluateTimelineVariable('category_code_numerical')}`
          },

          video_name_count: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count')}`
          },

          category: function () {
            return `${jsPsych.evaluateTimelineVariable('category')}`
          },

          tiktok_search_prompt: function () {
            return `${jsPsych.evaluateTimelineVariable('tiktok_search_prompt')}`
          },

          link: function () {
            return `${jsPsych.evaluateTimelineVariable('link')}`
          },

          MediaInfo_video_length_seconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_seconds')}`
          },

          MediaInfo_video_length_milliseconds: function () {
            return `${jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds')}`
          },

          channel: function () {
            return `${jsPsych.evaluateTimelineVariable('channel')}`
          },

          video_name_count_channel: function () {
            return `${jsPsych.evaluateTimelineVariable('video_name_count_channel')}`
          },

          video_pathway: function () {
            return `${jsPsych.evaluateTimelineVariable('video_pathway')}`
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Define algorithm variables*/
    algorithm_icon_6 = run1_stim[5].algorithm_icon.icon_pathway;
    algorithm_icon_6_wallpaper = run1_stim[5].algorithm_icon.icon_repeated_pathway;

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_icon_6_wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_icon_6

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_run1_trial_6++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run1_trial_6 == 6) {
          next_up = true
        } else {
          next_up = false
        }

  },
  on_load: function() {

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 500 milliseconds = .5 seconds


    // Show the image after 5 seconds
    setTimeout(function() {
      var img = document.getElementById('buttons-img');
      if (img) {
        img.style.display = 'block';
      }
    }, 5000);


    // Disable keyboard responses initially
    this.jsPsych.pluginAPI.cancelAllKeyboardResponses();
    
    // Enable responses after 5 seconds
    setTimeout(() => {
        this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: (info) => {
                // Pass the response info when finishing the trial
                this.jsPsych.finishTrial({
                    rt: info.rt,
                    response: info.key
                });
            },
            valid_responses: ["6", "7"],
            persist: false
        });
    }, 5000);

  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' +
                '<img id="buttons-img" src="study_design_aesthetics/exp_buttons.png" <div style= "position: fixed; right: 21vw; bottom: -1vh; width: 11vw; height: 29vh; margin-bottom: 2vh; display: none;"></img>'
                return html;
            },       
    choices: ["6", "7"],
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

      /*Clear the background image when the trial ends*/
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";

      /*Destroy video before moving to next trial*/
      global_video.pause();
      global_video.removeAttribute('src'); // empty source
      global_video.load();


      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

      /*Create rt_adjusted variable and subtract 500 ms*/
      data.rt_milliseconds = data.rt
      data.rt_milliseconds_adjusted = data.rt_milliseconds - 500

      data.rt_seconds = data.rt/1000
      data.rt_seconds_adjusted = data.rt_seconds - .50


      /*If they press the 'Skip' button*/
      if (data.response == 6) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 7) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 6 && data.response != 7) {
        opportunity_cost = false
        choice = "watched_fully"
      }

      /*Tag choice and relatedness data*/
      data.choice = choice
      data.relatedness = relatedness

      /*If rt == null */
      if (data.rt == null) {
        rt_complete = jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
        rt_complete_seconds = rt_complete/1000
      } else {
        rt_complete = data.rt
        rt_complete_seconds = rt_complete/1000
      }

      /*Tag rt_complete data*/
      data.rt_complete = rt_complete
      data.rt_complete_seconds = rt_complete_seconds
    }
  }




//---------------------------------------------------------//
// EXP RUN -- TRIAL #6 -- PROCEDURE
//---------------------------------------------------------//
var run1_trial_6_procedure = {
    timeline: [{
        timeline: [run1_trial_6],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 6
        this.timeline[0].timeline_variables = run1_stim[5].run;
    }
};




                                                      //------------------------------------//
                                                      // NEXT UP: ALGORITHM [X]
                                                      //------------------------------------//
//---------------------------------------------//
// RUN 1 PRACTICE -- NEXT UP ALGORITHM
//---------------------------------------------//
var run1_practice_algorithm = {
  on_start: function(trial) {

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_practice = practice_algorithm.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_practice}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;


  },
  data: {
    trial_id: "run1_practice_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
}




//------------------------------------------------------------//
// EXP RUN --- TRIAL #1 -- NEXT UP ALGORITHM (PRACTICE)
//------------------------------------------------------------//
var run1_practice_next_algorithm = {
  on_start: function(trial) {
        
    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_1 = run1_stim[0].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_1}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_practice_next_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
}




//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #1 -- NEXT UP ALGORITHM (PRACTICE)
//---------------------------------------------------------------------------//
var run1_practice_next_algorithm_conditional = {
    timeline: [run1_practice_next_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }


















//------------------------------------------------------------//
// EXP RUN --- TRIAL #1 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run1_trial_1_algorithm = {
  on_start: function(trial) {
        
    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_1 = run1_stim[0].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_1}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_1_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
}




//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #1 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var run1_trial_1_algorithm_conditional = {
    timeline: [run1_trial_1_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }







//------------------------------------------------------------//
// EXP RUN --- TRIAL #2 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run1_trial_2_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_2 = run1_stim[1].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_2}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_2_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}



//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #2 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var run1_trial_2_algorithm_conditional = {
    timeline: [run1_trial_2_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }






//------------------------------------------------------------//
// EXP RUN --- TRIAL #3 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run1_trial_3_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_3 = run1_stim[2].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_3}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_3_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}



//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #3 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var run1_trial_3_algorithm_conditional = {
    timeline: [run1_trial_3_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }







//------------------------------------------------------------//
// EXP RUN --- TRIAL #4 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run1_trial_4_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_4 = run1_stim[3].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_4}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_4_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #4 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var run1_trial_4_algorithm_conditional = {
    timeline: [run1_trial_4_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }







//------------------------------------------------------------//
// EXP RUN --- TRIAL #5 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run1_trial_5_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_5 = run1_stim[4].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_5}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_5_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #5 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var run1_trial_5_algorithm_conditional = {
    timeline: [run1_trial_5_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }






//------------------------------------------------------------//
// EXP RUN --- TRIAL #6 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run1_trial_6_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_6 = run1_stim[5].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_6}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_6_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}



//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #6 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var run1_trial_6_algorithm_conditional = {
    timeline: [run1_trial_6_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }





//------------------------------------------------------------//
// EXP RUN --- TRIAL #7 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run1_trial_7_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_7 = run1_stim[6].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_7}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_7_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}



//---------------------------------------------------------------------------//
// CONDITIONAL FOR EXP RUN --- TRIAL #6 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var run1_trial_7_algorithm_conditional = {
    timeline: [run1_trial_7_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }








                                                        //------------------------------------//
                                                        // LOADING BARS FOR ALGORITHM SWITCHES!
                                                        //------------------------------------//


//-----------------------------------------------------------------------//
// Loading bar -- Algorithm 1 (PRACTICE)
//-----------------------------------------------------------------------//
var loading_bar_run1_practice = {
  on_start: function(trial) {

    document.body.style.backgroundColor = '#000000'

      /* Get current and next algorithm icons */
      var current_icon = practice_algorithm.icon_pathway;
      var next_icon = run1_stim[0].algorithm_icon.icon_pathway;
      
      trial.stimulus = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
            <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
              <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
              </div>
            </div>
          </div>`;
    },
  data: {
      trial_id: "loading_bar_run1_practice"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- PRACTICE
//------------------------------------------------------------------------------------------//
var loading_bar_run1_practice_conditional = {
    timeline: [loading_bar_run1_practice],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }
                                                      









//-----------------------------------------------------------------------//
// Loading bar -- run1_trial_1 -- Algorithm 1
//-----------------------------------------------------------------------//
var loading_bar_run1_trial_1_algorithm1 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

      /* Get current and next algorithm icons */
      var current_icon = practice_algorithm.icon_pathway;
      var next_icon = run1_stim[0].algorithm_icon.icon_pathway;
      
      trial.stimulus = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
            <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
              <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
              </div>
            </div>
          </div>`;
    },
  data: {
      trial_id: "loading_bar_run1_trial_1_algorithm1"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- run1_trial_1 -- Algorithm 1
//------------------------------------------------------------------------------------------//
var loading_bar_run1_trial_1_algorithm1_conditional = {
    timeline: [loading_bar_run1_trial_1_algorithm1],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- run1_trial_2 -- Algorithm 2
//-----------------------------------------------------------------------//
var loading_bar_run1_trial_2_algorithm2 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run1_stim[0].algorithm_icon.icon_pathway;
    var next_icon = run1_stim[1].algorithm_icon.icon_pathway;
    
    trial.stimulus = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
          <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
          <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>
          </div>
        </div>`;
  },
  data: {
      trial_id: "loading_bar_run1_trial_2_algorithm2"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- run1_trial_2 -- Algorithm 2
//------------------------------------------------------------------------------------------//
var loading_bar_run1_trial_2_algorithm2_conditional = {
    timeline: [loading_bar_run1_trial_2_algorithm2],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- run1_trial_3 -- Algorithm 3
//-----------------------------------------------------------------------//
var loading_bar_run1_trial_3_algorithm3 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run1_stim[1].algorithm_icon.icon_pathway;
    var next_icon = run1_stim[2].algorithm_icon.icon_pathway;
    
    trial.stimulus = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
          <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
          <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>
          </div>
        </div>`;

  },
  data: {
      trial_id: "loading_bar_run1_trial_3_algorithm3"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- run1_trial_3 -- Algorithm 3
//------------------------------------------------------------------------------------------//
var loading_bar_run1_trial_3_algorithm3_conditional = {
    timeline: [loading_bar_run1_trial_3_algorithm3],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- run1_trial_4 -- Algorithm 4
//-----------------------------------------------------------------------//
var loading_bar_run1_trial_4_algorithm4 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run1_stim[2].algorithm_icon.icon_pathway;
    var next_icon = run1_stim[3].algorithm_icon.icon_pathway;
    
    trial.stimulus = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
          <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
          <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>
          </div>
        </div>`;
        
  },
  data: {
      trial_id: "loading_bar_run1_trial_4_algorithm4"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- run1_trial_4 -- Algorithm 4
//------------------------------------------------------------------------------------------//
var loading_bar_run1_trial_4_algorithm4_conditional = {
    timeline: [loading_bar_run1_trial_4_algorithm4],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- run1_trial_5 -- Algorithm 5
//-----------------------------------------------------------------------//
var loading_bar_run1_trial_5_algorithm5 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run1_stim[3].algorithm_icon.icon_pathway;
    var next_icon = run1_stim[4].algorithm_icon.icon_pathway;
    
    trial.stimulus = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
          <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
          <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>
          </div>
        </div>`;

  },
  data: {
      trial_id: "loading_bar_run1_trial_5_algorithm5"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- run1_trial_5 -- Algorithm 5
//------------------------------------------------------------------------------------------//
var loading_bar_run1_trial_5_algorithm5_conditional = {
    timeline: [loading_bar_run1_trial_5_algorithm5],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- run1_trial_6 -- Algorithm 6
//-----------------------------------------------------------------------//
var loading_bar_run1_trial_6_algorithm6 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run1_stim[4].algorithm_icon.icon_pathway;
    var next_icon = run1_stim[5].algorithm_icon.icon_pathway;
    
    trial.stimulus = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
          <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
          <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>
          </div>
        </div>`;

  },
  data: {
      trial_id: "loading_bar_run1_trial_6_algorithm6"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- run1_trial_6 -- Algorithm 6
//------------------------------------------------------------------------------------------//
var loading_bar_run1_trial_6_algorithm6_conditional = {
    timeline: [loading_bar_run1_trial_6_algorithm6],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }





//-----------------------------------------------------------------------//
// Loading bar -- run1_trial_7 -- Algorithm 7
//-----------------------------------------------------------------------//
var loading_bar_run1_trial_7_algorithm7 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run1_stim[5].algorithm_icon.icon_pathway;
    var next_icon = run1_stim[6].algorithm_icon.icon_pathway;
    
    trial.stimulus = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
          <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${next_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
          <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>
          </div>
        </div>`;

  },
  data: {
      trial_id: "loading_bar_run1_trial_7_algorithm7"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the loading bar duration
  on_load: function() {
    // Force the browser to reflow and make the CSS transition work
    document.getElementById('progress-bar').getBoundingClientRect();
    document.getElementById('progress-bar').style.width = '100%';
  },
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}


//------------------------------------------------------------------------------------------//
// Conditional for Loading bar -- run1_trial_7 -- Algorithm 7
//------------------------------------------------------------------------------------------//
var loading_bar_run1_trial_7_algorithm7_conditional = {
    timeline: [loading_bar_run1_trial_7_algorithm7],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




/*Combine "Next up" array with corresponding experimental trial*/
var run1_all = [run1_trial_1_algorithm_conditional, loading_bar_run1_trial_1_algorithm1_conditional, run1_trial_1_procedure]
var run2_all = [run1_trial_2_algorithm_conditional, loading_bar_run1_trial_2_algorithm2_conditional, run1_trial_2_procedure]
var run3_all = [run1_trial_3_algorithm_conditional, loading_bar_run1_trial_3_algorithm3_conditional, run1_trial_3_procedure]
var run4_all = [run1_trial_4_algorithm_conditional, loading_bar_run1_trial_4_algorithm4_conditional, run1_trial_4_procedure]
var run5_all = [run1_trial_5_algorithm_conditional, loading_bar_run1_trial_5_algorithm5_conditional, run1_trial_5_procedure]
var run6_all = [run1_trial_6_algorithm_conditional, loading_bar_run1_trial_6_algorithm6_conditional, run1_trial_6_procedure]


/*First run*/
var [run1_feed_1_algorithm, run1_feed_1_loading_bar, run1_feed_1_trials] = run1_all
var [run1_feed_2_algorithm, run1_feed_2_loading_bar, run1_feed_2_trials] = run2_all
var [run1_feed_3_algorithm, run1_feed_3_loading_bar, run1_feed_3_trials] = run3_all
var [run1_feed_4_algorithm, run1_feed_4_loading_bar, run1_feed_4_trials] = run4_all
var [run1_feed_5_algorithm, run1_feed_5_loading_bar, run1_feed_5_trials] = run5_all
var [run1_feed_6_algorithm, run1_feed_6_loading_bar, run1_feed_6_trials] = run6_all


/*Use same naming syntax for run1_trial_7 algorithm and loading bar*/
var run1_feed_7_algorithm = run1_trial_7_algorithm_conditional
var run1_feed_7_loading_bar = loading_bar_run1_trial_7_algorithm7_conditional



//------------------------------------//
// Round 1 is finished
//------------------------------------//
var round_1_finished = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#F0F0F0'

  },
    data: {
      trial_id: "round_1_finished"
  },
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p><div style ='font-size:4vw; line-height: 1.8em'>Round 1 is finished.</div></p>",
  choices: "NO_KEYS",
  trial_duration: 12000,
  on_finish: function(data) {

    /*Record trial onset*/
    data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
    data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

    /*Record trial duration*/
    data.trial_duration_milliseconds = getTrialDuration();
    data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
};




//-------------------------------------------------------------------------------------------------------//
// DUPLICATE RUN 1 ALGORITHM AND MAKE IT UNCONDITIONAL USING THE SAME ALGORITHM ICON AND TRIAL ID
//-------------------------------------------------------------------------------------------------------//
var run1_feed_1_algorithm_repeated = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_1 = run1_stim[0].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_1}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run1_trial_1_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 5000,
  css_classes: ['custom_padding'],
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
}



//---------------------------------------------//
// Organize practice run and exp_run1
//--------------------------------------------//
practice_run = [run1_practice_algorithm, run1_practice_procedure, loading_bar_run1_practice_conditional, run1_practice_next_algorithm_conditional]
exp_run1 = [run1_feed_1_algorithm_repeated, run1_feed_1_trials, run1_feed_2_algorithm, run1_feed_2_loading_bar, run1_feed_2_trials, run1_feed_3_algorithm, run1_feed_3_loading_bar, run1_feed_3_trials, run1_feed_4_algorithm, run1_feed_4_loading_bar, run1_feed_4_trials, run1_feed_5_algorithm, run1_feed_5_loading_bar, run1_feed_5_trials, run1_feed_6_algorithm, run1_feed_6_loading_bar, run1_feed_6_trials, run1_feed_7_algorithm, run1_feed_7_loading_bar, round_1_finished]




//--------------------------------------------//
// Organize conceptual Novelty Task -- RUN 1
//--------------------------------------------//
var conceptual_novelty_task_run1 = {
    timeline: [pause_window, exp_instructions_reminder, in_scan_practice, practice_run, in_scan_practice_complete, launch_platform, video_platform_loading, wait_for_trigger, exp_run1]
};