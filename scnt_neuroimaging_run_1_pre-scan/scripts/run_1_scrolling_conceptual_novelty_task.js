//------------------------------------//
// Task instructions
//------------------------------------//
var video_platform_instructions = {
  data: {
    trial_id: "video_platform_instructions",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>This experiment will involve watching videos like you normally would on social media.</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>For the purpose of this experiment, we created a video platform that shows you videos and video feeds just like you would see on social media.</div></p>" +
    '<img src="study_design_aesthetics/social_media_logo.png" <div style= "width: 17vw; height: 26vh; margin-bottom: 2vh;"></img>' +
    "<p><div style ='line-height: 1.25; font-size:2.7vw;'>Press <b>Next</b> to learn about how the video platform works.</div></p>"

    let pageTwo = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 4vh;'>Here is an example of what the video platform looks like.</div></p>" +
    `<img src="study_design_aesthetics/video_platform_example.png" <div style= "width: 30vw; height: 58vh; margin-bottom: 2vh;"></img>`

    let pageThree = 
    "<p><div style='line-height: 1.35; font-size: 2.5vw;'>The platform will show you one video at a time as part of a video feed.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.5vw;'>To skip to the next video, you can press the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.5vw; margin-bottom: 3vh;'>To exit the current video feed and switch to a new video feed, you can press the <b>Switch</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    `<img src="study_design_aesthetics/video_platform_example_skip_exit.png" <div style= "width: 42vw; height: 58vh; margin-bottom: 2vh;"></img>`

    let pageFour = 
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 4vh;'>As part of the experiment, we used various algorithms to curate different video feeds for you to watch.</div></p>" +
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 4vh;'>Some algorithms will display multiple videos from only one category, while other algorithms will display a variety of videos from several different categories.</div></p>" +
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 4vh;'>Please watch the videos as you normally would in real life.</div></p>"

    let pageFive = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom:4vh;'>To learn how to use the video platform, we will do <b>two rounds of practice</b>.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom:4vh;'>In this first practice round, you will practice using the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom:4vh;'>Please make sure your volume is turned on and watch the videos as you normally would.</div></p>" +
    "<p><div style ='line-height: 1.35; font-size:2.7vw; margin-bottom:4vh;'>If you want to skip to the next video, press the <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button. The <b>Switch</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button will be disabled in this practice round.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom:4vh;'>The <b>Skip</b> and <b>Switch</b> buttons will appear 5 seconds after each video starts.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom:4vh;'>Press <b>Next</b> when you are ready to start the first round of practice.</div></p>"

    return [pageOne, pageTwo, pageThree, pageFour, pageFive];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
}




//------------------------------------//
// First demo
//------------------------------------//
var first_demo = {
  data: {
          trial_id: "first_demo",

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

      },
   on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'
    
    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

  },
  on_load: function() {

    // Hide buttons immediately after they're created
    var buttons = document.querySelectorAll('.jspsych-btn');
    buttons.forEach(function(button) {
        button.style.visibility = 'hidden';
    });
    
    // Show buttons after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        buttons.forEach(function(button) {
            button.style.visibility = 'visible';
        });
    }, 5000);

    // Get the video element
    const tiktok_video = document.getElementById('stimulus-video');

    /*Feed tiktok video into global_video variable*/
    global_video = tiktok_video

    // Ensure video doesn't autoplay immediately
    tiktok_video.autoplay = false;
    
    // Set a timeout to start playing the video after 5 seconds
    setTimeout(() => {
      tiktok_video.play()
    }, 10); // 10 milliseconds = .01 seconds

  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" disabled style = "position:fixed; left: 69vw; bottom: 0vh; opacity: 0.5; cursor: not-allowed;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      }
  },


    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

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




//------------------------------------//
// First Demo Procedure
//------------------------------------//
var first_demo_procedure = {
    timeline: [first_demo],
    timeline_variables: first_demo_stim,
    };




//----------------------------------------//
// Instructions for Second Demo
//----------------------------------------//
var instructions_second_demo = {
    on_start: function() {

    document.body.style.backgroundColor = '#FFFFFF'
},
  data: {
    trial_id: "instructions_second_demo",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>In this next practice round, you will practice using the <b>Switch</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>Importantly, if you switch to a new video feed, there will be a delay and then the next video feed will start.</div></p>" +
    "<p><div style ='line-height: 1.45; font-size:2.7vw; margin-bottom: 4vh;'>Please watch the videos as you normally would and if you want to exit the current video feed and switch to a new video feed, press the <b>Switch</b> <img src='study_design_aesthetics/exit_door_person_button_instructions.png' style='height: 1em; vertical-align: middle;'> button.</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>The <b>Skip</b> <img src='study_design_aesthetics/skip_button_instructions.png' style='height: 1em; vertical-align: middle;'> button will be disabled for the first few videos.</div></p>" +
    "<p><div style='line-height: 1.45; font-size: 2.7vw; margin-bottom: 4vh;'>Press <b>Next</b> when you are ready to start the second round of practice.</div></p>"

    return [pageOne];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
}


//------------------------------------//
// Second Demo Run One
//------------------------------------//
var second_demo_run_one = {
  data: {
          trial_id: "second_demo_run_one",

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
          
      },
   on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

  },
  on_load: function() {

        // Hide buttons immediately after they're created
        var buttons = document.querySelectorAll('.jspsych-btn');
        buttons.forEach(function(button) {
            button.style.visibility = 'hidden';
        });
        
        // Show buttons after 5 seconds (5000 milliseconds)
        setTimeout(function() {
            buttons.forEach(function(button) {
                button.style.visibility = 'visible';
            });
        }, 5000);

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
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" disabled style = "position:fixed; left: 69vw; bottom: 12vh; opacity: 0.5; cursor: not-allowed;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

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
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
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



//------------------------------------//
// Second Demo Run One -- Procedure
//------------------------------------//
var second_demo_run_one_procedure = {
    timeline: [second_demo_run_one],
    timeline_variables: second_demo_run_one_stim,
    };





//------------------------------------//
// 30-second Loading Bar -- DEMO
//------------------------------------//
var loading_bar_demo = {
  on_start: function() {

    document.body.style.backgroundColor = '#000000'
  },
  data: {
      trial_id: "loading_bar_demo"
  },
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function() {
        var html = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;">
            <p style="color: #FFFFFF; font-size: 4vw; text-align: center; margin: 0 0 30px 0;"><b>Loading...</b></p>
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
}


//----------------------------------------------//
// Conditional for 30-second Loading Bar -- DEMO
//----------------------------------------------//
var loading_bar_demo_procedure = {
    timeline: [loading_bar_demo],
    conditional_function: function() {
      if (opportunity_cost === true) {
        return true;
      } else {
        return false;
      }
    }
  }




//------------------------------------//
// Second Demo Run Two
//------------------------------------//
var second_demo_run_two = {
  data: {
          trial_id: "second_demo_run_two",

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
          
      },
   on_start: function(data) {
   
  /*Make page background color 'white'*/
    document.body.style.backgroundColor = '#000000'

    /*Gather information from past trial and compare it to current trial*/
    last_trial_category = jsPsych.data.getLastTrialData().values()[0].category;
    current_trial_category = jsPsych.evaluateTimelineVariable('category')

      if (last_trial_category == current_trial_category) {
        relatedness = "related"
      } else {
        relatedness = "unrelated"
      }

  },
  on_load: function() {

        // Hide buttons immediately after they're created
        var buttons = document.querySelectorAll('.jspsych-btn');
        buttons.forEach(function(button) {
            button.style.visibility = 'hidden';
        });
        
        // Show buttons after 5 seconds (5000 milliseconds)
        setTimeout(function() {
            buttons.forEach(function(button) {
                button.style.visibility = 'visible';
            });
        }, 5000);

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
  },
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
                var html = 
                '<video disableRemotePlayback autoplay id="stimulus-video" src="'+jsPsych.evaluateTimelineVariable('video_pathway')+'" <div class = "video-container"></video>' 
                return html;
            },       
    choices: ["study_design_aesthetics/skip_button.png", 'study_design_aesthetics/exit_door_person_button.png'],
    button_html: (choice) => {
      if(choice == "study_design_aesthetics/skip_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 12vh;"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      }

      if(choice == "study_design_aesthetics/exit_door_person_button.png") {
      return `<button class = "jspsych-btn" style = "position:fixed; left: 69vw; bottom: 0vh"><img id="${choice}" src="${choice}" style="width: 4.6vw; height: 7.3vh; display: block; margin: 0 auto;"></button>`
      }
  },
    trial_duration: function() {
    return jsPsych.evaluateTimelineVariable('MediaInfo_video_length_milliseconds');
    },
    on_finish: function (data) {

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
      if (data.response == 0) {
        opportunity_cost = false
        choice = "skipped"
      }

      /*If they press the 'Exit' button, end the timeline*/
      if (data.response == 1) {
        opportunity_cost = true
        choice = "exited"
        jsPsych.abortCurrentTimeline();
      }

      /*If they did not press any button*/
      if (data.response != 0 && data.response != 1) {
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



//------------------------------------//
// Second Demo Run Two -- Procedure
//------------------------------------//
var second_demo_run_two_procedure = {
    timeline: [second_demo_run_two],
    timeline_variables: second_demo_run_two_stim,
    };




//------------------------------------//
// Demo Conclusion
//------------------------------------//
var demo_conclusion = {
  on_start: function() {

    document.body.style.backgroundColor = '#FFFFFF'
  },
  data: {
      trial_id: "demo_conclusion"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 2.5; font-size: 2.5vw;'>The practice rounds are now complete.</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
}





//---------------------------------------------//
// **** FULL DEMO PROCEDURE ****
//--------------------------------------------//
var demo_procedure = {
      timeline: [first_demo_procedure, instructions_second_demo, second_demo_run_one_procedure, loading_bar_demo_procedure, second_demo_run_two_procedure, demo_conclusion],
  };






                                            //---------------------------------------------//
                                            // **** Experiment Instructions Preview ****
                                            //--------------------------------------------//


 var exp_instructions_preview = {
  data: {
    trial_id: "exp_instructions_preview",
},
    type: jsPsychInstructions,
    pages: function(){
    let pageOne = 
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 5vh;'>During the MRI, you will watch multiple video feeds curated by different algorithms.</div></p>" +
    "<p><div style='line-height: 1.55; font-size: 2.7vw; margin-bottom: 5vh;'>Some algorithms will display multiple videos from only one category, while other algorithms will display a variety of videos from several different categories.</div></p>" +
    "<p><div style='line-height: 1.55; font-size:2.7vw; margin-bottom: 5vh;'>Each algorithm will be represented by a unique icon that you will see before each video feed starts.</div></p>"

    let pageTwo = 
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>As a reminder, you can either watch a video in its entirety, skip a video to watch the next video in the current video feed, or exit the current video feed and switch to a new video feed.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>If you finish all of the videos in the current video feed, the next video feed will automatically start without a delay.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>If you press the exit button and switch to a new video feed, there will be a delay and then the next video feed will start.</div></p>" +
    "<p><div style='line-height: 1.35; font-size: 2.7vw; margin-bottom: 5vh;'>Your decisions about whether to watch videos in their entirety, skip videos, or exit and switch video feeds, will have no effect on the overall duration of the experiment.</div></p>"

    return [pageOne, pageTwo];
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
}





//------------------------------------//
// Exit demo
//------------------------------------//
var exit_demo = {
  on_start: function() {

    document.body.style.backgroundColor = '#FFFFFF'
  },
  data: {
      trial_id: "exit_demo"
  },
  type: jsPsychInstructions,
    pages: function(){
    pageOne = "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>This phase of the experiment is now complete.</div></p>" +
    "<p><div style='line-height: 1.25; font-size: 2.5vw; margin-bottom: 4vh;'>Press <b>Next</b> to exit.</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
}







//-------------------------------------------//
// Organize Demo Conceptual Novelty Task
//-------------------------------------------//
var demo_conceptual_novelty_task = {
      // timeline: [demo_procedure, exp_instructions_preview, exit_demo]
    timeline: [video_platform_instructions, demo_procedure, exp_instructions_preview, exit_demo]
};