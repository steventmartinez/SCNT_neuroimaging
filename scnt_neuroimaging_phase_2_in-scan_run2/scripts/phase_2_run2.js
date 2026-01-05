//-------------------------------------------//
// Initialize global variables
//------------------------------------------//
var relatedness;
var next_up;
var current_algorithm_icon;


//---------------------------------------------//
// Initialize global variables for trial count
//---------------------------------------------//
var trial_count_run2_trial_1 = 0;
var trial_count_run2_trial_2 = 0;
var trial_count_run2_trial_3 = 0;
var trial_count_run2_trial_4 = 0;
var trial_count_run2_trial_5 = 0;
var trial_count_run2_trial_6 = 0;





//-----------------------------------------//
// DEFINE PRELOADING TRIALS FOR ALGORITHMS
//----------------------------------------//

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
      var icon = run2_stim[0].algorithm_icon;
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
      var icon = run2_stim[1].algorithm_icon;
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
      var icon = run2_stim[2].algorithm_icon;
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
      var icon = run2_stim[3].algorithm_icon;
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
      var icon = run2_stim[4].algorithm_icon;
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
      var icon = run2_stim[5].algorithm_icon;
      trial.images = [icon.icon_pathway, icon.icon_repeated_pathway];
      
      // console.log('Preloading algorithm icons for Block 6:', trial.images);
    }
};



var preload_all_algorithm_icons = {
  timeline: [preload_algorithm_icon_1, preload_algorithm_icon_2, preload_algorithm_icon_3, preload_algorithm_icon_4, preload_algorithm_icon_5, preload_algorithm_icon_6]
}




//------------------------------------//
// DEFINE PRELOADING TRIALS FOR VIDEOS
//------------------------------------//

/*preload for run2_trial_1*/
var preload_run2_trial_1 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run2_trial_1'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run2_stim[0].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 1');
    }
};


/*preload for run2_trial_2*/
var preload_run2_trial_2 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run2_trial_2'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run2_stim[1].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 2');
    }
};


/*preload for run2_trial_3*/
var preload_run2_trial_3 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run2_trial_3'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run2_stim[2].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 3');
    }
};


/*preload for run2_trial_4*/
var preload_run2_trial_4 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run2_trial_4'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run2_stim[3].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 4');
    }
};


/*preload for run2_trial_5*/
var preload_run2_trial_5 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run2_trial_5'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run2_stim[4].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 5');
    }
};


/*preload for run2_trial_6*/
var preload_run2_trial_6 = {
    type: jsPsychPreload,
    video: [],
    max_load_time: 60000,
    show_detailed_errors: true,
    data: {
        trial_id: 'preload_run2_trial_6'
    },
    on_start: function() {
        // Dynamically populate video array from loaded stimuli
        this.video = run2_stim[5].run.map(function(item) {
            return item.video_pathway;
        });
        // console.log('Preloading', this.video.length, 'videos for Block 6');
    }
};



//------------------------------------//
// PRELOAD BATCH ONE
//------------------------------------//
var preload_batch_one = {
  timeline: [preload_run2_trial_1, preload_run2_trial_2]
}

//------------------------------------//
// PRELOAD BATCH TWO
//------------------------------------//
var preload_batch_two = {
  timeline: [preload_run2_trial_3, preload_run2_trial_4]
}


//------------------------------------//
// PRELOAD BATCH THREE
//------------------------------------//
var preload_batch_three = {
  timeline: [preload_run2_trial_5, preload_run2_trial_6]
}




//------------------------------------//
// Begin Round 2
//------------------------------------//
var begin_round_2 = {
  on_start: function() {

    document.body.style.backgroundColor = '#F0F0F0'

  },
    data: {
      trial_id: "begin_round_2"
  },
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p><div style ='font-size:4vw; line-height: 1.8em'>Round 2 will now begin.</div></p>",
  choices: "NO_KEYS",
  trial_duration: 12000,
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
var run2_trial_1 = {
  data: {
          trial_id: "run2_trial_1",

          conceptual_novelty_level: function () {
            return run2_stim[0].conceptual_novelty_level
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
    algorithm_icon_1 = run2_stim[0].algorithm_icon.icon_pathway;
    algorithm_icon_1_wallpaper = run2_stim[0].algorithm_icon.icon_repeated_pathway;

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
      trial_count_run2_trial_1++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run2_trial_1 == 6) {
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
var run2_trial_1_procedure = {
    timeline: [{
        timeline: [run2_trial_1],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 1
        this.timeline[0].timeline_variables = run2_stim[0].run;
    }
};





//---------------------------------------------//
// EXP RUN -- TRIAL #2
//----------------------------------------------//
var run2_trial_2 = {
  data: {
          trial_id: "run2_trial_2",

          conceptual_novelty_level: function () {
            return run2_stim[1].conceptual_novelty_level
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
    algorithm_icon_2 = run2_stim[1].algorithm_icon.icon_pathway;
    algorithm_icon_2_wallpaper = run2_stim[1].algorithm_icon.icon_repeated_pathway;

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
      trial_count_run2_trial_2++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run2_trial_2 == 6) {
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
var run2_trial_2_procedure = {
    timeline: [{
        timeline: [run2_trial_2],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 2
        this.timeline[0].timeline_variables = run2_stim[1].run;
    }
};




//---------------------------------------------//
// EXP RUN -- TRIAL #3
//----------------------------------------------//
var run2_trial_3 = {
  data: {
          trial_id: "run2_trial_3",

          conceptual_novelty_level: function () {
            return run2_stim[2].conceptual_novelty_level
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
    algorithm_icon_3 = run2_stim[2].algorithm_icon.icon_pathway;
    algorithm_icon_3_wallpaper = run2_stim[2].algorithm_icon.icon_repeated_pathway;

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
      trial_count_run2_trial_3++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run2_trial_3 == 6) {
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
var run2_trial_3_procedure = {
    timeline: [{
        timeline: [run2_trial_3],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 3
        this.timeline[0].timeline_variables = run2_stim[2].run;
    }
};



//---------------------------------------------//
// EXP RUN -- TRIAL #4
//----------------------------------------------//
var run2_trial_4 = {
  data: {
          trial_id: "run2_trial_4",

          conceptual_novelty_level: function () {
            return run2_stim[3].conceptual_novelty_level
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
    algorithm_icon_4 = run2_stim[3].algorithm_icon.icon_pathway;
    algorithm_icon_4_wallpaper = run2_stim[3].algorithm_icon.icon_repeated_pathway;

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
      trial_count_run2_trial_4++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run2_trial_4 == 6) {
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
var run2_trial_4_procedure = {
    timeline: [{
        timeline: [run2_trial_4],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 4
        this.timeline[0].timeline_variables = run2_stim[3].run;
    }
};







//---------------------------------------------//
// EXP RUN -- TRIAL #5
//----------------------------------------------//
var run2_trial_5 = {
  data: {
          trial_id: "run2_trial_5",

          conceptual_novelty_level: function () {
            return run2_stim[4].conceptual_novelty_level
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
    algorithm_icon_5 = run2_stim[4].algorithm_icon.icon_pathway;
    algorithm_icon_5_wallpaper = run2_stim[4].algorithm_icon.icon_repeated_pathway;

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
      trial_count_run2_trial_5++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run2_trial_5 == 6) {
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
var run2_trial_5_procedure = {
    timeline: [{
        timeline: [run2_trial_5],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 5
        this.timeline[0].timeline_variables = run2_stim[4].run;
    }
};





//---------------------------------------------//
// EXP RUN -- TRIAL #6
//----------------------------------------------//
var run2_trial_6 = {
  data: {
          trial_id: "run2_trial_6",

          conceptual_novelty_level: function () {
            return run2_stim[5].conceptual_novelty_level
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
    algorithm_icon_6 = run2_stim[5].algorithm_icon.icon_pathway;
    algorithm_icon_6_wallpaper = run2_stim[5].algorithm_icon.icon_repeated_pathway;

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
      trial_count_run2_trial_6++;

      /*If trial count == 6, assign next_up as true*/
      if (trial_count_run2_trial_6 == 6) {
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
var run2_trial_6_procedure = {
    timeline: [{
        timeline: [run2_trial_6],
        timeline_variables: []
    }],
    on_timeline_start: function() {
        // Dynamically set the timeline_variables for block 6
        this.timeline[0].timeline_variables = run2_stim[5].run;
    }
};




                                                      //------------------------------------//
                                                      // NEXT UP: ALGORITHM [X]
                                                      //------------------------------------//

//------------------------------------------------------------//
// EXP RUN --- TRIAL #1 -- NEXT UP ALGORITHM (UNCONDITIONAL)
//------------------------------------------------------------//
var run2_trial_1_algorithm_unconditional = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_1 = run2_stim[0].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_1}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run2_trial_1_algorithm",
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



//------------------------------------------------------------//
// EXP RUN --- TRIAL #2 -- NEXT UP ALGORITHM
//------------------------------------------------------------//
var run2_trial_2_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_2 = run2_stim[1].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_2}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run2_trial_2_algorithm",
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
var run2_trial_2_algorithm_conditional = {
    timeline: [run2_trial_2_algorithm],
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
var run2_trial_3_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_3 = run2_stim[2].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_3}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run2_trial_3_algorithm",
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
var run2_trial_3_algorithm_conditional = {
    timeline: [run2_trial_3_algorithm],
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
var run2_trial_4_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_4 = run2_stim[3].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_4}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run2_trial_4_algorithm",
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
var run2_trial_4_algorithm_conditional = {
    timeline: [run2_trial_4_algorithm],
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
var run2_trial_5_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_5 = run2_stim[4].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_5}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run2_trial_5_algorithm",
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
var run2_trial_5_algorithm_conditional = {
    timeline: [run2_trial_5_algorithm],
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
var run2_trial_6_algorithm = {
  on_start: function(trial) {
        
    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    var algorithm_icon_6 = run2_stim[5].algorithm_icon.icon_pathway;
    trial.stimulus = `<p><div style='color: white; line-height: 1.35; font-size:5vw; margin-bottom: 3vh;'><b>Next up: the <img src='${algorithm_icon_6}' style='height: 1.2em; vertical-align: middle;'> algorithm</b></div></p>`;

  },
  data: {
    trial_id: "run2_trial_6_algorithm",
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
var run2_trial_6_algorithm_conditional = {
    timeline: [run2_trial_6_algorithm],
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
// Loading bar -- run2_trial_1 -- Algorithm 1
//-----------------------------------------------------------------------//
var loading_bar_run2_trial_1_algorithm1 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

      /* Get current and next algorithm icons */
      var current_icon = practice_algorithm.icon_pathway;
      var next_icon = run2_stim[0].algorithm_icon.icon_pathway;
      
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
      trial_id: "loading_bar_run2_trial_1_algorithm1"
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
// Conditional for Loading bar -- run2_trial_1 -- Algorithm 1
//------------------------------------------------------------------------------------------//
var loading_bar_run2_trial_1_algorithm1_conditional = {
    timeline: [loading_bar_run2_trial_1_algorithm1],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- run2_trial_2 -- Algorithm 2
//-----------------------------------------------------------------------//
var loading_bar_run2_trial_2_algorithm2 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run2_stim[0].algorithm_icon.icon_pathway;
    var next_icon = run2_stim[1].algorithm_icon.icon_pathway;
    
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
      trial_id: "loading_bar_run2_trial_2_algorithm2"
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
// Conditional for Loading bar -- run2_trial_2 -- Algorithm 2
//------------------------------------------------------------------------------------------//
var loading_bar_run2_trial_2_algorithm2_conditional = {
    timeline: [loading_bar_run2_trial_2_algorithm2],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- run2_trial_3 -- Algorithm 3
//-----------------------------------------------------------------------//
var loading_bar_run2_trial_3_algorithm3 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run2_stim[1].algorithm_icon.icon_pathway;
    var next_icon = run2_stim[2].algorithm_icon.icon_pathway;
    
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
      trial_id: "loading_bar_run2_trial_3_algorithm3"
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
// Conditional for Loading bar -- run2_trial_3 -- Algorithm 3
//------------------------------------------------------------------------------------------//
var loading_bar_run2_trial_3_algorithm3_conditional = {
    timeline: [loading_bar_run2_trial_3_algorithm3],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- run2_trial_4 -- Algorithm 4
//-----------------------------------------------------------------------//
var loading_bar_run2_trial_4_algorithm4 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run2_stim[2].algorithm_icon.icon_pathway;
    var next_icon = run2_stim[3].algorithm_icon.icon_pathway;
    
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
      trial_id: "loading_bar_run2_trial_4_algorithm4"
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
// Conditional for Loading bar -- run2_trial_4 -- Algorithm 4
//------------------------------------------------------------------------------------------//
var loading_bar_run2_trial_4_algorithm4_conditional = {
    timeline: [loading_bar_run2_trial_4_algorithm4],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//-----------------------------------------------------------------------//
// Loading bar -- run2_trial_5 -- Algorithm 5
//-----------------------------------------------------------------------//
var loading_bar_run2_trial_5_algorithm5 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run2_stim[3].algorithm_icon.icon_pathway;
    var next_icon = run2_stim[4].algorithm_icon.icon_pathway;
    
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
      trial_id: "loading_bar_run2_trial_5_algorithm5"
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
// Conditional for Loading bar -- run2_trial_5 -- Algorithm 5
//------------------------------------------------------------------------------------------//
var loading_bar_run2_trial_5_algorithm5_conditional = {
    timeline: [loading_bar_run2_trial_5_algorithm5],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }



//-----------------------------------------------------------------------//
// Loading bar -- run2_trial_6 -- Algorithm 6
//-----------------------------------------------------------------------//
var loading_bar_run2_trial_6_algorithm6 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run2_stim[4].algorithm_icon.icon_pathway;
    var next_icon = run2_stim[5].algorithm_icon.icon_pathway;
    
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
      trial_id: "loading_bar_run2_trial_6_algorithm6"
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
// Conditional for Loading bar -- run2_trial_6 -- Algorithm 6
//------------------------------------------------------------------------------------------//
var loading_bar_run2_trial_6_algorithm6_conditional = {
    timeline: [loading_bar_run2_trial_6_algorithm6],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }





//-----------------------------------------------------------------------//
// Loading bar -- run2_trial_7 -- Algorithm 7
//-----------------------------------------------------------------------//
var loading_bar_run2_trial_7_algorithm7 = {
  on_start: function(trial) {

    /*Initialize trial clock AND record trial onset time (one call does both!)*/
    trial_onset_time_milliseconds = startTrialTiming();

    document.body.style.backgroundColor = '#000000'

    /* Get current and next algorithm icons */
    var current_icon = run2_stim[5].algorithm_icon.icon_pathway;
    var next_icon = run2_stim[6].algorithm_icon.icon_pathway;
    
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
      trial_id: "loading_bar_run2_trial_7_algorithm7"
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
// Conditional for Loading bar -- run2_trial_7 -- Algorithm 7
//------------------------------------------------------------------------------------------//
var loading_bar_run2_trial_7_algorithm7_conditional = {
    timeline: [loading_bar_run2_trial_7_algorithm7],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




/*Combine "Next up" array with corresponding experimental trial*/
var run1_all = [run2_trial_1_algorithm_unconditional, loading_bar_run2_trial_1_algorithm1_conditional, run2_trial_1_procedure]
var run2_all = [run2_trial_2_algorithm_conditional, loading_bar_run2_trial_2_algorithm2_conditional, run2_trial_2_procedure]
var run3_all = [run2_trial_3_algorithm_conditional, loading_bar_run2_trial_3_algorithm3_conditional, run2_trial_3_procedure]
var run4_all = [run2_trial_4_algorithm_conditional, loading_bar_run2_trial_4_algorithm4_conditional, run2_trial_4_procedure]
var run5_all = [run2_trial_5_algorithm_conditional, loading_bar_run2_trial_5_algorithm5_conditional, run2_trial_5_procedure]
var run6_all = [run2_trial_6_algorithm_conditional, loading_bar_run2_trial_6_algorithm6_conditional, run2_trial_6_procedure]


/*First run*/
var [run2_feed_1_algorithm, run2_feed_1_loading_bar, run2_feed_1_trials] = run1_all
var [run2_feed_2_algorithm, run2_feed_2_loading_bar, run2_feed_2_trials] = run2_all
var [run2_feed_3_algorithm, run2_feed_3_loading_bar, run2_feed_3_trials] = run3_all
var [run2_feed_4_algorithm, run2_feed_4_loading_bar, run2_feed_4_trials] = run4_all
var [run2_feed_5_algorithm, run2_feed_5_loading_bar, run2_feed_5_trials] = run5_all
var [run2_feed_6_algorithm, run2_feed_6_loading_bar, run2_feed_6_trials] = run6_all



//---------------------------------------------//
// Organize exp_run2
//--------------------------------------------//
exp_run2 = [run2_feed_1_algorithm, run2_feed_1_trials, run2_feed_2_algorithm, run2_feed_2_loading_bar, run2_feed_2_trials, run2_feed_3_algorithm, run2_feed_3_loading_bar, run2_feed_3_trials, run2_feed_4_algorithm, run2_feed_4_loading_bar, run2_feed_4_trials, run2_feed_5_algorithm, run2_feed_5_loading_bar, run2_feed_5_trials, run2_feed_6_algorithm, run2_feed_6_loading_bar, run2_feed_6_trials]




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



//--------------------------------------------//
// Organize conceptual Novelty Task -- RUN 2
//--------------------------------------------//
var conceptual_novelty_task_run2 = {
    timeline: [begin_round_2, wait_for_trigger, exp_run2, task_conclusion]
};