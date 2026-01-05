var study_aesthetics = ["study_design_aesthetics/exit_door_person_button_instructions.png", "study_design_aesthetics/exp_buttons.png", "study_design_aesthetics/skip_button_instructions.png", "study_design_aesthetics/social_media_logo.png", "study_design_aesthetics/video_platform_example_skip_exit.png"]

var intro_sound = ["study_design_aesthetics/intro_sound.mp3"]

var audio_test = ["study_design_aesthetics/audio_waveform_veed.mp4"]

var preload_aesthetics = {
    data: {
        trial_id: 'preload_aesthetics'
      },
    type: jsPsychPreload,
    images: study_aesthetics,
}

var preload_intro_sound = {
    data: {
        trial_id: 'preload_intro_sound'
      },
    type: jsPsychPreload,
    audio: intro_sound,
}

var preload_audio_test = {
    data: {
        trial_id: 'preload_audio_test'
      },
    type: jsPsychPreload,
    video: audio_test,
}