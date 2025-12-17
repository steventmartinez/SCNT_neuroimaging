var study_aesthetics = ["study_design_aesthetics/exit_door_person_button_instructions.png", "study_design_aesthetics/exp_buttons.png", "study_design_aesthetics/skip_button_instructions.png", "study_design_aesthetics/social_media_logo.png", "study_design_aesthetics/video_platform_example_skip_exit.png"]

var algorithm_icons_original = ["study_design_aesthetics/algorithm_icons/icon_1_repeated.png", "study_design_aesthetics/algorithm_icons/icon_2_repeated.png", "study_design_aesthetics/algorithm_icons/icon_3_repeated.png", "study_design_aesthetics/algorithm_icons/icon_4_repeated.png", "study_design_aesthetics/algorithm_icons/icon_5_repeated.png", "study_design_aesthetics/algorithm_icons/icon_6_repeated.png", "study_design_aesthetics/algorithm_icons/icon_7_repeated.png"]

var intro_sound = ["study_design_aesthetics/intro_sound.mp3"]

var preload_aesthetics = {
    data: {
        trial_id: 'preload_aesthetics'
      },
    type: jsPsychPreload,
    images: study_aesthetics,
}

var preload_algorithm_icons = {
    data: {
        trial_id: 'preload_algorithm_icons'
      },
    type: jsPsychPreload,
    images: algorithm_icons_original,
}


var preload_intro_sound = {
    data: {
        trial_id: 'preload_intro_sound'
      },
    type: jsPsychPreload,
    audio: intro_sound,
}