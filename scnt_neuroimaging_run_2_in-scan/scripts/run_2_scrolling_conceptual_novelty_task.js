//-------------------------------------------//
// Initialize global variables
//------------------------------------------//
var relatedness;
var next_up;
var current_algorithm_icon;


//---------------------------------------------//
// Initialize global variables for trial count
//---------------------------------------------//
var trial_count_exp_run_practice_one = 0;

var trial_count_exp_run_low_conceptual_novelty_1 = 0;
var trial_count_exp_run_low_conceptual_novelty_2 = 0;
var trial_count_exp_run_low_conceptual_novelty_3 = 0;
var trial_count_exp_run_low_conceptual_novelty_4 = 0;
var trial_count_exp_run_low_conceptual_novelty_5 = 0;
var trial_count_exp_run_low_conceptual_novelty_6 = 0;

var trial_count_exp_run_high_conceptual_novelty_1 = 0;
var trial_count_exp_run_high_conceptual_novelty_2 = 0;
var trial_count_exp_run_high_conceptual_novelty_3 = 0;
var trial_count_exp_run_high_conceptual_novelty_4 = 0;
var trial_count_exp_run_high_conceptual_novelty_5 = 0;
var trial_count_exp_run_high_conceptual_novelty_6 = 0;


//------------------------------------//
// PRELOAD BATCH ONE
//------------------------------------//
var preload_batch_one = {
  timeline: [preload_low_conceptual_novelty_1, preload_low_conceptual_novelty_2]
}

//------------------------------------//
// PRELOAD BATCH TWO
//------------------------------------//
var preload_batch_two = {
  timeline: [preload_low_conceptual_novelty_3, preload_low_conceptual_novelty_4]
}


//------------------------------------//
// PRELOAD BATCH THREE
//------------------------------------//
var preload_batch_three = {
  timeline: [preload_low_conceptual_novelty_5, preload_low_conceptual_novelty_6]
}


//------------------------------------//
// PRELOAD BATCH FOUR
//------------------------------------//
var preload_batch_four = {
  timeline: [preload_high_conceptual_novelty_1, preload_high_conceptual_novelty_2]
}


//------------------------------------//
// PRELOAD BATCH FIVE
//------------------------------------//
var preload_batch_five = {
  timeline: [preload_high_conceptual_novelty_3, preload_high_conceptual_novelty_4]
}


//------------------------------------//
// PRELOAD BATCH SIX
//------------------------------------//
var preload_batch_six = {
  timeline: [preload_high_conceptual_novelty_5, preload_high_conceptual_novelty_6]
}




//------------------------------------//
// Wait for trigger
//------------------------------------//
var wait_for_trigger = {
     on_start: function(data) {

      /*Initialize the global clock at the start of the first trial*/
      initializeGlobalClock();  /*

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
    stimulus: '<p style="color: black; font-size: 2.7vw;">Waiting for scanner trigger...</p>',
    choices: ["'"],
    css_classes: ['custom_padding'],
      on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

      /*Record experiment start time*/
      jsPsych.data.addProperties({
        exp_start_time_milliseconds: getExperimentStartTime(),
        exp_start_time_seconds: getExperimentStartTime() / 1000
        })
  }
};




//------------------------------------//
// First Fixation Cross
//------------------------------------//
var first_fixation_cross = {
    on_start: function(data) {

      /*Initialize trial clock AND record trial onset time (one call does both!)*/
      trial_onset_time_milliseconds = startTrialTiming();

      console.log('Recorded trial onset time (ms):', trial_onset_time_milliseconds);

    },
    data: {
      trial_id: "first_fixation_cross"
    },
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:160px;">+</div>',
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




//------------------------------------//
// Experiment Instructions
//------------------------------------//
 var exp_instructions_reminder = {
      on_start: function(data) {

      /*Initialize trial clock AND record trial onset time (one call does both!)*/
      trial_onset_time_milliseconds = startTrialTiming();

      console.log('Recorded trial onset time (ms):', trial_onset_time_milliseconds);

    },
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
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
};



//------------------------------------//
// In scan practice instructions
//------------------------------------//
var in_scan_practice = {
      on_start: function(data) {

      /*Initialize trial clock AND record trial onset time (one call does both!)*/
      trial_onset_time_milliseconds = startTrialTiming();

    },
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
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
};




                                                          //------------------------------------//
                                                          // PRACTICE TRIAL
                                                          //------------------------------------//


//---------------------------------------------//
// EXP RUN -- PRACTICE 1
//----------------------------------------------//
var exp_run_practice_one = {
  data: {
          trial_id: "exp_run_practice_one",

          conceptual_novelty_level: "low",

          exp_run_length: "NA",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },
      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_0_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_0_icon.icon_pathway
    
    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_exp_run_practice_one++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_practice_one == 6) {
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
// EXP RUN -- PRACTICE 1
//---------------------------------------------------------//
var exp_run_practice_one_procedure = {
    timeline: [exp_run_practice_one],
    timeline_variables: practice_one_stim,
    };





//------------------------------------//
// In scan practice is complete
//------------------------------------//
var in_scan_practice_complete = {
      on_start: function(data) {

      /*Initialize trial clock AND record trial onset time (one call does both!)*/
      trial_onset_time_milliseconds = startTrialTiming();

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
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
};




                                            //---------------------------------------------//
                                            // **** START EXPERIMENTAL TRIALS ****
                                            //--------------------------------------------//

var launch_platform = {
    on_start: function(data) {

      /*Initialize trial clock AND record trial onset time (one call does both!)*/
      trial_onset_time_milliseconds = startTrialTiming();

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
  on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
};





//------------------------------------//
// Video Platform -- Loading
//------------------------------------//
var video_platform_loading = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

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
    on_finish: function(data) {

      /*Record trial onset*/
      data.trial_onset_time_milliseconds = trial_onset_time_milliseconds;
      data.trial_onset_time_seconds = trial_onset_time_milliseconds/1000;

      /*Record trial duration*/
      data.trial_duration_milliseconds = getTrialDuration();
      data.trial_duration_seconds = data.trial_duration_milliseconds/1000;

  }
};




 



                                                          //------------------------------------//
                                                          // EXPERIMENTAL TRIALS START HERE
                                                          //------------------------------------//




//---------------------------------------------//
// EXP RUN -- LOW CONCEPTUAL NOVELTY #1
//----------------------------------------------//
var exp_run_low_conceptual_novelty_1 = {
  data: {
          trial_id: "exp_run_low_conceptual_novelty_1",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "low_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_1_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_1_icon.icon_pathway
    
    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_low_conceptual_novelty_1++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_low_conceptual_novelty_1 == 6) {
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
// EXP RUN -- LOW CONCEPTUAL NOVELTY #1 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_low_conceptual_novelty_1_procedure = {
    timeline: [exp_run_low_conceptual_novelty_1],
    timeline_variables: low_conceptual_novelty_1,
    };





//---------------------------------------------//
// EXP RUN -- LOW CONCEPTUAL NOVELTY #2
//----------------------------------------------//
var exp_run_low_conceptual_novelty_2 = {
  data: {
          trial_id: "exp_run_low_conceptual_novelty_2",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "low_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_2_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_2_icon.icon_pathway
    
    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_exp_run_low_conceptual_novelty_2++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_low_conceptual_novelty_2 == 6) {
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
// EXP RUN -- LOW CONCEPTUAL NOVELTY #2 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_low_conceptual_novelty_2_procedure = {
    timeline: [exp_run_low_conceptual_novelty_2],
    timeline_variables: low_conceptual_novelty_2,
    };





//---------------------------------------------//
// EXP RUN -- LOW CONCEPTUAL NOVELTY #3
//----------------------------------------------//
var exp_run_low_conceptual_novelty_3 = {
  data: {
          trial_id: "exp_run_low_conceptual_novelty_3",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "low_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_3_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_3_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_low_conceptual_novelty_3++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_low_conceptual_novelty_3 == 6) {
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
// EXP RUN -- LOW CONCEPTUAL NOVELTY #3 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_low_conceptual_novelty_3_procedure = {
    timeline: [exp_run_low_conceptual_novelty_3],
    timeline_variables: low_conceptual_novelty_3,
    };



//---------------------------------------------//
// EXP RUN -- LOW CONCEPTUAL NOVELTY #4
//----------------------------------------------//
var exp_run_low_conceptual_novelty_4 = {
  data: {
          trial_id: "exp_run_low_conceptual_novelty_4",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "low_" + length_group;
          },

      },
   on_start: function(data) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_4_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_4_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_exp_run_low_conceptual_novelty_4++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_low_conceptual_novelty_4 == 6) {
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
// EXP RUN -- LOW CONCEPTUAL NOVELTY #4 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_low_conceptual_novelty_4_procedure = {
    timeline: [exp_run_low_conceptual_novelty_4],
    timeline_variables: low_conceptual_novelty_4,
    };








//---------------------------------------------//
// EXP RUN -- LOW CONCEPTUAL NOVELTY #5
//----------------------------------------------//
var exp_run_low_conceptual_novelty_5 = {
  data: {
          trial_id: "exp_run_low_conceptual_novelty_5",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "low_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_5_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_5_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_low_conceptual_novelty_5++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_low_conceptual_novelty_5 == 6) {
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
// EXP RUN -- LOW CONCEPTUAL NOVELTY #5 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_low_conceptual_novelty_5_procedure = {
    timeline: [exp_run_low_conceptual_novelty_5],
    timeline_variables: low_conceptual_novelty_5,
    };





//---------------------------------------------//
// EXP RUN -- LOW CONCEPTUAL NOVELTY #6
//----------------------------------------------//
var exp_run_low_conceptual_novelty_6 = {
  data: {
          trial_id: "exp_run_low_conceptual_novelty_6",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "low_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_6_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_6_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_low_conceptual_novelty_6++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_low_conceptual_novelty_6 == 6) {
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
// EXP RUN -- LOW CONCEPTUAL NOVELTY #6 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_low_conceptual_novelty_6_procedure = {
    timeline: [exp_run_low_conceptual_novelty_6],
    timeline_variables: low_conceptual_novelty_6,
    };





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//---------------------------------------------//
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #1
//----------------------------------------------//
var exp_run_high_conceptual_novelty_1 = {
  data: {
          trial_id: "exp_run_high_conceptual_novelty_1",

          conceptual_novelty_level: "high",

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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "high_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_7_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_7_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_high_conceptual_novelty_1++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_high_conceptual_novelty_1 == 6) {
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
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #1 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_high_conceptual_novelty_1_procedure = {
    timeline: [exp_run_high_conceptual_novelty_1],
    timeline_variables: high_conceptual_novelty_1,
    };





//---------------------------------------------//
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #2
//----------------------------------------------//
var exp_run_high_conceptual_novelty_2 = {
  data: {
          trial_id: "exp_run_high_conceptual_novelty_2",

          conceptual_novelty_level: "high",
          
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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "high_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_8_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_8_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_exp_run_high_conceptual_novelty_2++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_high_conceptual_novelty_2 == 6) {
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
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #2 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_high_conceptual_novelty_2_procedure = {
    timeline: [exp_run_high_conceptual_novelty_2],
    timeline_variables: high_conceptual_novelty_2,
    };





//---------------------------------------------//
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #3
//----------------------------------------------//
var exp_run_high_conceptual_novelty_3 = {
  data: {
          trial_id: "exp_run_high_conceptual_novelty_3",

          conceptual_novelty_level: "high",
          
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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "high_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_9_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_9_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_high_conceptual_novelty_3++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_high_conceptual_novelty_3 == 6) {
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
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #3 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_high_conceptual_novelty_3_procedure = {
    timeline: [exp_run_high_conceptual_novelty_3],
    timeline_variables: high_conceptual_novelty_3,
    };



//---------------------------------------------//
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #4
//----------------------------------------------//
var exp_run_high_conceptual_novelty_4 = {
  data: {
          trial_id: "exp_run_high_conceptual_novelty_4",

          conceptual_novelty_level: "high",
          
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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "high_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_10_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_10_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

      /* Get current trial number within the current timeline*/
      trial_count_exp_run_high_conceptual_novelty_4++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_high_conceptual_novelty_4 == 6) {
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
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #4 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_high_conceptual_novelty_4_procedure = {
    timeline: [exp_run_high_conceptual_novelty_4],
    timeline_variables: high_conceptual_novelty_4,
    };








//---------------------------------------------//
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #5
//----------------------------------------------//
var exp_run_high_conceptual_novelty_5 = {
  data: {
          trial_id: "exp_run_high_conceptual_novelty_5",

          conceptual_novelty_level: "high",
          
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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "high_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_11_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_11_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_high_conceptual_novelty_5++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_high_conceptual_novelty_5 == 6) {
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
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #5 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_high_conceptual_novelty_5_procedure = {
    timeline: [exp_run_high_conceptual_novelty_5],
    timeline_variables: high_conceptual_novelty_5,
    };





//---------------------------------------------//
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #6
//----------------------------------------------//
var exp_run_high_conceptual_novelty_6 = {
  data: {
          trial_id: "exp_run_high_conceptual_novelty_6",

          conceptual_novelty_level: "high",
          
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

          length_grouping: function () {
            return `${jsPsych.evaluateTimelineVariable('length_grouping')}`
          },

          video_feed_id: function () {
            const length_group = jsPsych.evaluateTimelineVariable('length_grouping');
            return "high_" + length_group;
          },

      },
   on_start: function(data) {
   
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    /*Set background image to cover the entire screen*/
    document.body.style.backgroundImage = `url(${algorithm_12_icon.icon_repeated_pathway})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    current_algorithm_icon = algorithm_12_icon.icon_pathway

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }


      /* Get current trial number within the current timeline*/
      trial_count_exp_run_high_conceptual_novelty_6++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_exp_run_high_conceptual_novelty_6 == 6) {
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
// EXP RUN -- HIGH CONCEPTUAL NOVELTY #6 -- PROCEDURE
//---------------------------------------------------------//
var exp_run_high_conceptual_novelty_6_procedure = {
    timeline: [exp_run_high_conceptual_novelty_6],
    timeline_variables: high_conceptual_novelty_6,
    };













                                                      //------------------------------------//
                                                      // NEXT UP: ALGORITHM [X]
                                                      //------------------------------------//
//---------------------------------------------//
// EXP RUN PRACTICE ONE -- NEXT UP ALGORITHM
//---------------------------------------------//
var exp_run_practice_one_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_practice_one_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_0_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`
    
    },
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






//------------------------------------------------------------//
// EXP RUN --- LOW CONCEPTUAL NOVELTY #1 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_low_conceptual_novelty_1_algorithm = {
  on_start: function() {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_low_conceptual_novelty_1_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
    return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_1_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- LOW CONCEPTUAL NOVELTY #1 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_low_conceptual_novelty_1_algorithm_conditional = {
    timeline: [exp_run_low_conceptual_novelty_1_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }





//------------------------------------------------------------//
// EXP RUN --- LOW CONCEPTUAL NOVELTY #2 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_low_conceptual_novelty_2_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_low_conceptual_novelty_2_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_2_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- LOW CONCEPTUAL NOVELTY #2 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_low_conceptual_novelty_2_algorithm_conditional = {
    timeline: [exp_run_low_conceptual_novelty_2_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }






//------------------------------------------------------------//
// EXP RUN --- LOW CONCEPTUAL NOVELTY #3 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_low_conceptual_novelty_3_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_low_conceptual_novelty_3_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_3_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- LOW CONCEPTUAL NOVELTY #3 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_low_conceptual_novelty_3_algorithm_conditional = {
    timeline: [exp_run_low_conceptual_novelty_3_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }







//------------------------------------------------------------//
// EXP RUN --- LOW CONCEPTUAL NOVELTY #4 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_low_conceptual_novelty_4_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_low_conceptual_novelty_4_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_4_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- LOW CONCEPTUAL NOVELTY #4 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_low_conceptual_novelty_4_algorithm_conditional = {
    timeline: [exp_run_low_conceptual_novelty_4_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }







//------------------------------------------------------------//
// EXP RUN --- LOW CONCEPTUAL NOVELTY #5 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_low_conceptual_novelty_5_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_low_conceptual_novelty_5_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_5_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- LOW CONCEPTUAL NOVELTY #5 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_low_conceptual_novelty_5_algorithm_conditional = {
    timeline: [exp_run_low_conceptual_novelty_5_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }






//------------------------------------------------------------//
// EXP RUN --- LOW CONCEPTUAL NOVELTY #6 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_low_conceptual_novelty_6_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_low_conceptual_novelty_6_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_6_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- LOW CONCEPTUAL NOVELTY #6 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_low_conceptual_novelty_6_algorithm_conditional = {
    timeline: [exp_run_low_conceptual_novelty_6_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }












//------------------------------------------------------------//
// EXP RUN --- HIGH CONCEPTUAL NOVELTY #1 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_high_conceptual_novelty_1_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_high_conceptual_novelty_1_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_7_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- HIGH CONCEPTUAL NOVELTY #1 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_high_conceptual_novelty_1_algorithm_conditional = {
    timeline: [exp_run_high_conceptual_novelty_1_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }





//------------------------------------------------------------//
// EXP RUN --- HIGH CONCEPTUAL NOVELTY #2 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_high_conceptual_novelty_2_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_high_conceptual_novelty_2_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_8_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- HIGH CONCEPTUAL NOVELTY #2 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_high_conceptual_novelty_2_algorithm_conditional = {
    timeline: [exp_run_high_conceptual_novelty_2_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }






//------------------------------------------------------------//
// EXP RUN --- HIGH CONCEPTUAL NOVELTY #3 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_high_conceptual_novelty_3_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_high_conceptual_novelty_3_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_9_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- HIGH CONCEPTUAL NOVELTY #3 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_high_conceptual_novelty_3_algorithm_conditional = {
    timeline: [exp_run_high_conceptual_novelty_3_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }







//------------------------------------------------------------//
// EXP RUN --- HIGH CONCEPTUAL NOVELTY #4 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_high_conceptual_novelty_4_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_high_conceptual_novelty_4_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_10_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- HIGH CONCEPTUAL NOVELTY #4 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_high_conceptual_novelty_4_algorithm_conditional = {
    timeline: [exp_run_high_conceptual_novelty_4_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }







//------------------------------------------------------------//
// EXP RUN --- HIGH CONCEPTUAL NOVELTY #5 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_high_conceptual_novelty_5_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_high_conceptual_novelty_5_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_11_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- HIGH CONCEPTUAL NOVELTY #5 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_high_conceptual_novelty_5_algorithm_conditional = {
    timeline: [exp_run_high_conceptual_novelty_5_algorithm],
    conditional_function: function() {
      if (next_up === true) {
        return true;
      } else {
        return false;
      }
    }
  }






//------------------------------------------------------------//
// EXP RUN --- HIGH CONCEPTUAL NOVELTY #6 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var exp_run_high_conceptual_novelty_6_algorithm = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
    trial_id: "exp_run_high_conceptual_novelty_6_algorithm",
},
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
     return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_12_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`

  },
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
// CONDITIONAL FOR EXP RUN --- HIGH CONCEPTUAL NOVELTY #6 -- NEXT UP ALGORITHM
//---------------------------------------------------------------------------//
var exp_run_high_conceptual_novelty_6_algorithm_conditional = {
    timeline: [exp_run_high_conceptual_novelty_6_algorithm],
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
// Loading bar -- exp_run_low_conceptual_novelty_1 -- Algorithm 1
//-----------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_1_algorithm1 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_low_conceptual_novelty_1_algorithm1"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_1_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_low_conceptual_novelty_1 -- Algorithm 1
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_1_algorithm1_conditional = {
    timeline: [loading_bar_exp_run_low_conceptual_novelty_1_algorithm1],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- exp_run_low_conceptual_novelty_2 -- Algorithm 2
//-----------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_2_algorithm2 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_low_conceptual_novelty_2_algorithm2"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_2_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_low_conceptual_novelty_2 -- Algorithm 2
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_2_algorithm2_conditional = {
    timeline: [loading_bar_exp_run_low_conceptual_novelty_2_algorithm2],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- exp_run_low_conceptual_novelty_3 -- Algorithm 3
//-----------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_3_algorithm3 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_low_conceptual_novelty_3_algorithm3"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_3_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_low_conceptual_novelty_3 -- Algorithm 3
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_3_algorithm3_conditional = {
    timeline: [loading_bar_exp_run_low_conceptual_novelty_3_algorithm3],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- exp_run_low_conceptual_novelty_4 -- Algorithm 4
//-----------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_4_algorithm4 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_low_conceptual_novelty_4_algorithm4"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_4_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_low_conceptual_novelty_4 -- Algorithm 4
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_4_algorithm4_conditional = {
    timeline: [loading_bar_exp_run_low_conceptual_novelty_4_algorithm4],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- exp_run_low_conceptual_novelty_5 -- Algorithm 5
//-----------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_5_algorithm5 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_low_conceptual_novelty_5_algorithm5"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_5_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_low_conceptual_novelty_5 -- Algorithm 5
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_5_algorithm5_conditional = {
    timeline: [loading_bar_exp_run_low_conceptual_novelty_5_algorithm5],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- exp_run_low_conceptual_novelty_6 -- Algorithm 6
//-----------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_6_algorithm6 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_low_conceptual_novelty_6_algorithm6"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_6_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_low_conceptual_novelty_6 -- Algorithm 6
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_low_conceptual_novelty_6_algorithm6_conditional = {
    timeline: [loading_bar_exp_run_low_conceptual_novelty_6_algorithm6],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }














//-----------------------------------------------------------------------//
// Loading bar -- exp_run_high_conceptual_novelty_1 -- Algorithm 7
//-----------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_1_algorithm7 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_high_conceptual_novelty_1_algorithm7"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_7_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_high_conceptual_novelty_1 -- Algorithm 7
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_1_algorithm7_conditional = {
    timeline: [loading_bar_exp_run_high_conceptual_novelty_1_algorithm7],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- exp_run_high_conceptual_novelty_2 -- Algorithm 8
//-----------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_2_algorithm8 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_high_conceptual_novelty_2_algorithm8"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_8_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_high_conceptual_novelty_2 -- Algorithm 9
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_2_algorithm8_conditional = {
    timeline: [loading_bar_exp_run_high_conceptual_novelty_2_algorithm8],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- exp_run_high_conceptual_novelty_3 -- Algorithm 9
//-----------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_3_algorithm9 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_high_conceptual_novelty_3_algorithm9"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_9_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_high_conceptual_novelty_3 -- Algorithm 9
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_3_algorithm9_conditional = {
    timeline: [loading_bar_exp_run_high_conceptual_novelty_3_algorithm9],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- exp_run_high_conceptual_novelty_4 -- Algorithm 10
//-----------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_4_algorithm10 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_high_conceptual_novelty_4_algorithm10"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_10_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_high_conceptual_novelty_4 -- Algorithm 10
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_4_algorithm10_conditional = {
    timeline: [loading_bar_exp_run_high_conceptual_novelty_4_algorithm10],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- exp_run_high_conceptual_novelty_5 -- Algorithm 11
//-----------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_5_algorithm11 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_high_conceptual_novelty_5_algorithm11"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_11_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
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
// Conditional for Loading bar -- exp_run_high_conceptual_novelty_5 -- Algorithm 11
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_5_algorithm11_conditional = {
    timeline: [loading_bar_exp_run_high_conceptual_novelty_5_algorithm11],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- exp_run_high_conceptual_novelty_6 -- Algorithm 12
//-----------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_6_algorithm12 = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_exp_run_high_conceptual_novelty_6_algorithm12"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
              <p style='color: #FFFFFF; line-height: 1.55; font-size:5vw; text-align: center; margin: 0 0 30px 0; padding: 0 10vw;'><b>Exiting the <img src='${current_algorithm_icon}' style='height: 1.2em; vertical-align: middle;'> algorithm and switching to the <img src='${algorithm_12_icon.icon_pathway}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></p>            
            <div class="progress-container" style="height: 70px; width: 650px; background-color: #222; border-radius: 10px; box-shadow: 0 0 20px rgba(200, 200, 200, 0.3); margin: 60px auto 0 auto;">
            <div id="progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #D3D3D3, #F5F5F5); box-shadow: 0 0 10px rgba(220, 220, 220, 0.6); border-radius: 8px; transition: width 30s linear;">
            </div>`;
        return html;
      },
  choices: "NO_KEYS",  // No keyboard responses allowed
  trial_duration: 30000, // 30 seconds to match the progress bar duration
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
// Conditional for Loading bar -- exp_run_high_conceptual_novelty_6 -- Algorithm 12
//------------------------------------------------------------------------------------------//
var loading_bar_exp_run_high_conceptual_novelty_6_algorithm12_conditional = {
    timeline: [loading_bar_exp_run_high_conceptual_novelty_6_algorithm12],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }









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


// ----------------------------------------------------
// 2. CONSTRAINT CHECK FUNCTION
// ----------------------------------------------------
function checkConstraint(array, maxConsecutive = 3) {
    if (array.length === 0) return true;
    
    let consecutiveCount = 0;
    let lastType = null;
    
    // Helper to extract the type, relying on the { type: 'lan'/'han', run: ... } structure
    const getRunType = (runObject) => runObject.type;
    
    for (let i = 0; i < array.length; i++) {
        const currentType = getRunType(array[i]);
        
        if (currentType === lastType) {
            consecutiveCount++;
        } else {
            // New type encountered, reset count
            consecutiveCount = 1;
            lastType = currentType;
        }
        
        // If the count exceeds the maximum, the constraint is violated
        if (consecutiveCount > maxConsecutive) {
            return false; // Invalid shuffle
        }
    }
    
    return true; // Valid shuffle
}

// ----------------------------------------------------
// 3. MAIN CONSTRAINED SHUFFLE FUNCTION (Uses your shuffleArray)
// ----------------------------------------------------
/**
 * Uses the Fisher-Yates (shuffleArray) method and re-shuffles 
 * until a valid sequence (max N consecutive repeats) is found.
 */
function shuffleArrayConstrainedFY(array, maxConsecutive = 3) {
    let shuffled_repeats;
    let isValid;
    let attempts = 0;
    
    // Shuffle the array until the constraint is met
    do {
        // Step 1: Perform a pure Fisher-Yates shuffle using your function
        shuffled_repeats = shuffleArray(array);
        
        // Step 2: Check if the resulting permutation is valid
        isValid = checkConstraint(shuffled_repeats, maxConsecutive);
        
        attempts++;
        // Highly unlikely to hit the safety break with a 6/6 split, but good practice
        if (attempts > 10000) { 
            console.error("Failed to find a valid sequence after 10,000 shuffles. Returning the last attempted shuffle.");
            break; 
        }

    } while (!isValid); // Step 3: Reject and repeat if invalid

    // Step 4: Log the number of attempts after the valid sequence is found
    console.log(`Constrained shuffle successful after ${attempts} attempts.`);
    
    return shuffled_repeats;
}



/*Combine "Next up" array with corresponding experimental trial*/
var exp_run_lcn_1 = [exp_run_low_conceptual_novelty_1_algorithm_conditional, loading_bar_exp_run_low_conceptual_novelty_1_algorithm1_conditional, exp_run_low_conceptual_novelty_1_procedure]
var exp_run_lcn_2 = [exp_run_low_conceptual_novelty_2_algorithm_conditional, loading_bar_exp_run_low_conceptual_novelty_2_algorithm2_conditional, exp_run_low_conceptual_novelty_2_procedure]
var exp_run_lcn_3 = [exp_run_low_conceptual_novelty_3_algorithm_conditional, loading_bar_exp_run_low_conceptual_novelty_3_algorithm3_conditional, exp_run_low_conceptual_novelty_3_procedure]
var exp_run_lcn_4 = [exp_run_low_conceptual_novelty_4_algorithm_conditional, loading_bar_exp_run_low_conceptual_novelty_4_algorithm4_conditional, exp_run_low_conceptual_novelty_4_procedure]
var exp_run_lcn_5 = [exp_run_low_conceptual_novelty_5_algorithm_conditional, loading_bar_exp_run_low_conceptual_novelty_5_algorithm5_conditional, exp_run_low_conceptual_novelty_5_procedure]
var exp_run_lcn_6 = [exp_run_low_conceptual_novelty_6_algorithm_conditional, loading_bar_exp_run_low_conceptual_novelty_6_algorithm6_conditional, exp_run_low_conceptual_novelty_6_procedure]

var exp_run_hcn_1 = [exp_run_high_conceptual_novelty_1_algorithm_conditional, loading_bar_exp_run_high_conceptual_novelty_1_algorithm7_conditional, exp_run_high_conceptual_novelty_1_procedure]
var exp_run_hcn_2 = [exp_run_high_conceptual_novelty_2_algorithm_conditional, loading_bar_exp_run_high_conceptual_novelty_2_algorithm8_conditional, exp_run_high_conceptual_novelty_2_procedure]
var exp_run_hcn_3 = [exp_run_high_conceptual_novelty_3_algorithm_conditional, loading_bar_exp_run_high_conceptual_novelty_3_algorithm9_conditional, exp_run_high_conceptual_novelty_3_procedure]
var exp_run_hcn_4 = [exp_run_high_conceptual_novelty_4_algorithm_conditional, loading_bar_exp_run_high_conceptual_novelty_4_algorithm10_conditional, exp_run_high_conceptual_novelty_4_procedure]
var exp_run_hcn_5 = [exp_run_high_conceptual_novelty_5_algorithm_conditional, loading_bar_exp_run_high_conceptual_novelty_5_algorithm11_conditional, exp_run_high_conceptual_novelty_5_procedure]
var exp_run_hcn_6 = [exp_run_high_conceptual_novelty_6_algorithm_conditional, loading_bar_exp_run_high_conceptual_novelty_6_algorithm12_conditional, exp_run_high_conceptual_novelty_6_procedure]



/* Define the new structured array for input */
var all_runs_structured = [
    { type: 'lcn', run: exp_run_lcn_1 },
    { type: 'lcn', run: exp_run_lcn_2 },
    { type: 'lcn', run: exp_run_lcn_3 },
    { type: 'lcn', run: exp_run_lcn_4 },
    { type: 'lcn', run: exp_run_lcn_5 },
    { type: 'lcn', run: exp_run_lcn_6 },
    { type: 'hcn', run: exp_run_hcn_1 },
    { type: 'hcn', run: exp_run_hcn_2 },
    { type: 'hcn', run: exp_run_hcn_3 },
    { type: 'hcn', run: exp_run_hcn_4 },
    { type: 'hcn', run: exp_run_hcn_5 },
    { type: 'hcn', run: exp_run_hcn_6 }
];


// 1. Constrained shuffle the structured array
var all_runs_randomized_constrained_structured = shuffleArrayConstrainedFY(all_runs_structured, 3);

// 2. Extract ONLY the run arrays (the original jsPsych timeline components)
var all_runs_randomized = all_runs_randomized_constrained_structured.map(item => item.run);



//-------------------------------------------//
// Array Destructuring + Split into 2 runs
//------------------------------------------//
var [run_1, run_2, run_3, run_4, run_5, run_6, run_7, run_8, run_9, run_10, run_11, run_12] = all_runs_randomized;


/*First run*/
var [run_1_algorithm, run_1_loading_bar, run_1_trials] = run_1
var [run_2_algorithm, run_2_loading_bar, run_2_trials] = run_2
var [run_3_algorithm, run_3_loading_bar, run_3_trials] = run_3
var [run_4_algorithm, run_4_loading_bar, run_4_trials] = run_4
var [run_5_algorithm, run_5_loading_bar, run_5_trials] = run_5
var [run_6_algorithm, run_6_loading_bar, run_6_trials] = run_6


//------------------------------------//
// Round 1 is finished
//------------------------------------//
var round_1_finished = {
  on_start: function() {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#FFFFFF'
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




/*Second run*/
var [run_7_algorithm, run_7_loading_bar, run_7_trials] = run_7
var [run_8_algorithm, run_8_loading_bar, run_8_trials] = run_8
var [run_9_algorithm, run_9_loading_bar, run_9_trials] = run_9
var [run_10_algorithm, run_10_loading_bar, run_10_trials] = run_10
var [run_11_algorithm, run_11_loading_bar, run_11_trials] = run_11
var [run_12_algorithm, run_12_loading_bar, run_12_trials] = run_12




//-------------------------------------------------------------------------------------------------------//
// DUPLICATE RUN 1 ALGORITHM AND MAKE IT UNCONDITIONAL USING THE SAME ALGORITHM ICON AND TRIAL ID
//-------------------------------------------------------------------------------------------------------//
const run_1_original_conditional_node = run_1_algorithm;
const run_1_original_trial_object = run_1_original_conditional_node.timeline[0];

// 1. EXTRACT TRIAL_ID
let run_1_original_trial_id = null;
if (run_1_original_trial_object && run_1_original_trial_object.data && run_1_original_trial_object.data.trial_id) {
    run_1_original_trial_id = run_1_original_trial_object.data.trial_id;
    // Log the extracted trial ID
    console.log(run_1_original_trial_id);
}


// 2. EXTRACT IMAGE PATH (Requires executing the stimulus function and parsing HTML)
let run_1_image_path = null;
if (run_1_original_trial_object && typeof run_1_original_trial_object.stimulus === 'function') {
    
    // Execute the stimulus function to get the raw HTML string
    const run_1_original_stimulus_html = run_1_original_trial_object.stimulus();
    
    // Log the full HTML string to verify the image tag is present
    console.log(run_1_original_stimulus_html);
    
    // Define the RegEx pattern
    const regex = /<img\s+src='([^']+)'/; // Matches the src value inside single quotes
    
    // Attempt to match the pattern
    const match = run_1_original_stimulus_html.match(regex);
    
    if (match && match[1]) {
        run_1_image_path = match[1];
        // Log the final extracted image path
        console.log(run_1_image_path);
    }
}



// 1. Define your new replacement trial object
var run_1_algorithm_repeated = {
    on_start: function() {
      
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();
    
    document.body.style.backgroundColor = '#000000'
  },
    data: {
        // trial_id: `${run_1_original_trial_id}_repeated`,
        trial_id: run_1_original_trial_id,
        image_src: run_1_image_path // Save the path for data logging
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        // Use the extracted image_path variable in your new stimulus
        return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${run_1_image_path}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`
    },
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
};





//-------------------------------------------------------------------------------------------------------//
// DUPLICATE RUN 7 ALGORITHM AND MAKE IT UNCONDITIONAL USING THE SAME ALGORITHM ICON AND TRIAL ID
//-------------------------------------------------------------------------------------------------------//
const run_7_original_conditional_node = run_7_algorithm;
const run_7_original_trial_object = run_7_original_conditional_node.timeline[0];

// 1. EXTRACT TRIAL_ID
let run_7_original_trial_id = null;
if (run_7_original_trial_object && run_7_original_trial_object.data && run_7_original_trial_object.data.trial_id) {
    run_7_original_trial_id = run_7_original_trial_object.data.trial_id;
    // Log the extracted trial ID
    console.log(run_7_original_trial_id);
}


// 2. EXTRACT IMAGE PATH (Requires executing the stimulus function and parsing HTML)
let run_7_image_path = null;
if (run_7_original_trial_object && typeof run_7_original_trial_object.stimulus === 'function') {
    
    // Execute the stimulus function to get the raw HTML string
    const run_7_original_stimulus_html = run_7_original_trial_object.stimulus();
    
    // Log the full HTML string to verify the image tag is present
    console.log(run_7_original_stimulus_html);
    
    // Define the RegEx pattern
    const regex = /<img\s+src='([^']+)'/; // Matches the src value inside single quotes
    
    // Attempt to match the pattern
    const match = run_7_original_stimulus_html.match(regex);
    
    if (match && match[1]) {
        run_7_image_path = match[1];
        // Log the final extracted image path
        console.log(run_7_image_path);
    }
}



// 1. Define your new replacement trial object
var run_7_algorithm_repeated = {
    on_start: function() {
      
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();
    
    document.body.style.backgroundColor = '#000000'
  },
    data: {
        // trial_id: `${run_7_original_trial_id}_REPLACED`,
        trial_id: run_7_original_trial_id,
        image_src: run_7_image_path // Save the path for data logging
    },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        // Use the extracted image_path variable in your new stimulus
        return `<p><div style ='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${run_7_image_path}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`
    },
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
};





//---------------------------------------------//
// Organize exp_run_1, exp_run_2, exp_run_3
//--------------------------------------------//
exp_run_1 = [exp_run_practice_one_algorithm, exp_run_practice_one_procedure, run_1_loading_bar, run_1_algorithm]
exp_run_2 = [run_1_algorithm_repeated, run_1_trials, run_2_algorithm, run_2_loading_bar, run_2_trials, run_3_algorithm, run_3_loading_bar, run_3_trials, run_4_algorithm, run_4_loading_bar, run_4_trials, run_5_algorithm, run_5_loading_bar, run_5_trials, run_6_algorithm, run_6_loading_bar, run_6_trials, run_7_loading_bar, round_1_finished]
exp_run_3 = [run_7_algorithm_repeated, run_7_trials, run_8_algorithm, run_8_loading_bar, run_8_trials, run_9_algorithm, run_9_loading_bar, run_9_trials, run_10_algorithm, run_10_loading_bar, run_10_trials, run_11_algorithm, run_11_loading_bar, run_11_trials, run_12_algorithm, run_12_loading_bar, run_12_trials]






//------------------------------------//
// Scan is complete!
//------------------------------------//
var task_conclusion = {
  on_start: function() {
      
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#F0F0F0'
    
  },
    data: {
      trial_id: "task_conclusion"
  },
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p><div style='line-height: 1.25; font-size: 3vw; margin-bottom: 4vh;'>All done!</div></p>",
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






//------------------------------------//
// Organize conceptual Novelty Task
//------------------------------------//
var conceptual_novelty_task = {
    timeline: [wait_for_trigger, first_fixation_cross, exp_instructions_reminder, in_scan_practice, exp_run_1, in_scan_practice_complete, launch_platform, video_platform_loading, exp_run_2, exp_run_3, task_conclusion]
};