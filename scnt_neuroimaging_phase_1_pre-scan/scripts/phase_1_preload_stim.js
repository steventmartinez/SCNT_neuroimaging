var consent_forms = ["consent_forms/Scrolling_informed_consent_inperson_08.04.2025-part-1.png", "consent_forms/Scrolling_informed_consent_inperson_08.04.2025-part-2.png", "consent_forms/Scrolling_informed_consent_inperson_08.04.2025-part-3.png", "consent_forms/Scrolling_informed_consent_inperson_08.04.2025-part-4.png", "consent_forms/Scrolling_informed_consent_inperson_08.04.2025-part-5.png"]

var study_aesthetics = ["study_design_aesthetics/social_media_logo.png", "study_design_aesthetics/video_platform_example.png", "study_design_aesthetics/video_platform_example_skip_exit.png", "study_design_aesthetics/skip_button_instructions.png", "study_design_aesthetics/exit_door_person_button_instructions.png", "study_design_aesthetics/skip_button.png", "study_design_aesthetics/exit_door_person_button.png"]

var audio_test = ["study_design_aesthetics/audio_waveform_veed.mp4"]


var preload_consent_forms = {
    data: {
        trial_id: 'preload_consent_forms'
      },
    type: jsPsychPreload,
    images: consent_forms,
}

var preload_aesthetics = {
    data: {
        trial_id: 'preload_aesthetics'
      },
    type: jsPsychPreload,
    images: study_aesthetics,
}

var preload_audio_test = {
    data: {
        trial_id: 'preload_audio_test'
      },
    type: jsPsychPreload,
    video: audio_test,
}