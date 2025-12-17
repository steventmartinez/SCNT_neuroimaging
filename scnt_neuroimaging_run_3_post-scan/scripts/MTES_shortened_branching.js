//------------------------------------//
// MTES Intro
//------------------------------------//
var MTES_intro = {
  data: {
    trial_id: "MTES_intro",
},
    type: jsPsychInstructions,
    pages: function(){
      pageOne =  "<p><div style ='line-height: 1.25; font-size:2.5vw;'>Next, we will ask you questions about your smartphone and social media habits.</div></p>" +
      "<p><div style ='font-size:2.5vw; line-height: 1.25;'>Press <b>Next</b> to begin the survey.</div></p>"
     return [pageOne]
  },
  show_clickable_nav: true,
  css_classes: ['custom_padding'],
}

//------------------------------------//
// PhoneChecking questions
//------------------------------------//
var MTES_PhoneChecking = {
  data: {
    trial_id: "MTES_PhoneChecking"
},
    type: jsPsychSurvey,
    survey_json: {
    showQuestionNumbers: false,
    title: "Please answer the following questions.",
    completeText: 'Next',
    elements:
      [
        {
          type: 'radiogroup',
          title: "Overall, how many times a day do you check your smartphone?", 
          name: 'PhoneChecking_overall', 
          choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'], 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "How often do you find yourself checking your phone when you have a few moments to spare (waiting in line, for an elevator, at a stoplight, etc.)?", 
          name: 'PhoneChecking_timetospare', 
          choices: ['Never', 'Rarely', 'Sometimes; I wish I did it less', "Sometimes; it's not a big deal", 'Most of the time; I wish I did it less', "Most of the time; it's not a big deal"], 
          isRequired: true,
        }, 
        {
          type: 'radiogroup',
          title: "How often do you find yourself checking your phone during conversations or when hanging around with friends?", 
          name: 'PhoneChecking_friends', 
          choices: ['Never', 'Rarely', 'Sometimes; I wish I did it less', "Sometimes; it's not a big deal", 'Most of the time; I wish I did it less', "Most of the time; it's not a big deal"], 
          isRequired: true,
        }, 
      ]
    }
  };





//------------------------------------//
// MTES Social Media Use Platforms
//------------------------------------//
var MTES_SocialMediaUse_Platforms_procedure = {
  data: {
    trial_id: "MTES_SocialMediaUse_Platforms_procedure"
},
  type: jsPsychSurvey,
  survey_json: {
    showQuestionNumbers: false,
    showNavigationButtons: true,
    completeText: 'Next',
    pages: [{
      name: 'MTES_SocialMediaUse_Platforms_procedure',
      elements: [
      {
        type: 'html',
        html: "<p style='margin-top: 12vh; text-align: center; font-size: 2.7vw; line-height: 1.5em;'>We will now ask you about your usage of social media platforms.<br><br>Some of these questions may seem similar to you, but they are different to us in important ways.<br><br>Please respond to each question as carefully as possible.</p>",
        name: 'MTES_SocialMediaUse_Platform_instructions',
      },
      ]
    }, {
        elements: [
          {
            type: 'html',
            html: "<p style='text-align: center; font-size: 2.7vw; line-height: 1.5em;'><b>Which of the following social media platforms do you use?</b></p>",
            name: 'MTES_SocialMediaUse_Platform_title_question',
          },
          {
            type: 'radiogroup',
            title: "Instagram", 
            name: 'MTES_SocialMediaUse_Platform_instagram', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          }, 
          {
            type: 'radiogroup',
            title: "X (formerly Twitter)", 
            name: 'MTES_SocialMediaUse_Platform_x', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Facebook", 
            name: 'MTES_SocialMediaUse_Platform_facebook', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },  
          {
            type: 'radiogroup',
            title: "Snapchat", 
            name: 'MTES_SocialMediaUse_Platform_snapchat', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          }, 
          {
            type: 'radiogroup',
            title: "TikTok", 
            name: 'MTES_SocialMediaUse_Platform_tiktok', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },  
          {
            type: 'radiogroup',
            title: "YouTube", 
            name: 'MTES_SocialMediaUse_Platform_youtube', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'],
            colCount: 0, 
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Reddit", 
            name: 'MTES_SocialMediaUse_Platform_reddit', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Tumblr", 
            name: 'MTES_SocialMediaUse_Platform_tumblr', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },   
          {
            type: 'radiogroup',
            title: "Pinterest", 
            name: 'MTES_SocialMediaUse_Platform_pinterest', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },  
          {
            type: 'radiogroup',
            title: "WhatsApp", 
            name: 'MTES_SocialMediaUse_Platform_whatsapp', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          }, 
          {
            type: 'radiogroup',
            title: "BeReal", 
            name: 'MTES_SocialMediaUse_Platform_bereal', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "Other social media apps", 
            name: 'MTES_SocialMediaUse_Platform_other_apps_endorsement', 
            choices: ['Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
            colCount: 0,
            isRequired: true,
          },  
      ]
    },
    {
      name: 'MTES_other_apps_followup',
      elements: [
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_other_apps_1_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'radiogroup',
          title: "Other social media app #1", 
          name: 'MTES_SocialMediaUse_other_apps_1_usage', 
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_other_apps_2_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'radiogroup',
          title: "Other social media app #2", 
          name: 'MTES_SocialMediaUse_other_apps_2_usage', 
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_other_apps_3_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'radiogroup',
          title: "Other social media app #3", 
          name: 'MTES_SocialMediaUse_other_apps_3_usage', 
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'text',
          title: "Please indicate what other social media app you use in the space provided (if you do not use any other social media apps, please write N/A).", 
          name: 'MTES_SocialMediaUse_other_apps_4_name',
          placeholder: "Name of other social media app", 
          size: 30, 
          isRequired: true,
        },
        {
          visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it')",
          type: 'radiogroup',
          title: "Other social media app #4", 
          name: 'MTES_SocialMediaUse_other_apps_4_usage',
          choices: ['N/A', 'Never use it', 'Mostly on smartphone', 'Mostly on tablet', 'Mostly on computer'], 
          colCount: 0,
          isRequired: true,
        },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Instagram_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_instagram} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Instagram_TimeOnApp',
            title: "How much time do you think you spend using Instagram each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Instagram_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_instagram} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Instagram_CheckingApp',
            title: "How often do you check Instagram each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
          },
    {
      name: 'MTES_SocialMediaUse_X_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_x} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_X_TimeOnApp',
            title: "How much time do you think you spend using X (formerly Twitter) each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_X_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_x} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_X_CheckingApp',
            title: "How often do you check X (formerly Twitter) each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Facebook_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_facebook} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Facebook_TimeOnApp',
            title: "How much time do you think you spend using Facebook each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Facebook_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_facebook} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Facebook_CheckingApp',
            title: "How often do you check Facebook each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
        ]
     },
    {
      name: 'MTES_SocialMediaUse_Snapchat_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_snapchat} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Snapchat_TimeOnApp',
            title: "How much time do you think you spend using Snapchat each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Snapchat_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_snapchat} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Snapchat_CheckingApp',
            title: "How often do you check Snapchat each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
                  ]
     },
    {
      name: 'MTES_SocialMediaUse_TikTok_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_tiktok} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_TikTok_TimeOnApp',
            title: "How much time do you think you spend using TikTok each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_TikTok_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_tiktok} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_TikTok_CheckingApp',
            title: "How often do you check TikTok each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_YouTube_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_youtube} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_YouTube_TimeOnApp',
            title: "How much time do you think you spend using YouTube each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_YouTube_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_youtube} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_YouTube_CheckingApp',
            title: "How often do you check YouTube each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Reddit_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_reddit} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Reddit_TimeOnApp',
            title: "How much time do you think you spend using Reddit each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Reddit_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_reddit} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Reddit_CheckingApp',
            title: "How often do you check Reddit each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Tumblr_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_tumblr} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Tumblr_TimeOnApp',
            title: "How much time do you think you spend using Tumblr each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Tumblr_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_tumblr} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Tumblr_CheckingApp',
            title: "How often do you check Tumblr each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Pinterest_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_pinterest} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Pinterest_TimeOnApp',
            title: "How much time do you think you spend using Pinterest each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_Pinterest_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_pinterest} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_Pinterest_CheckingApp',
            title: "How often do you check Pinterest each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_WhatsApp_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_whatsapp} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_WhatsApp_TimeOnApp',
            title: "How much time do you think you spend using WhatsApp each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_WhatsApp_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_whatsapp} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_WhatsApp_CheckingApp',
            title: "How often do you check WhatsApp each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_other_apps_1_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_1_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_1_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_1_TimeOnApp',
            title: "How much time do you think you spend using {MTES_SocialMediaUse_other_apps_1_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_other_apps_1_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_1_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_1_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_1_CheckingApp',
            title: "How often do you check {MTES_SocialMediaUse_other_apps_1_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_other_apps_2_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_2_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_2_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_2_TimeOnApp',
            title: "How much time do you think you spend using {MTES_SocialMediaUse_other_apps_2_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_other_apps_2_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_2_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_2_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_2_CheckingApp',
            title: "How often do you check {MTES_SocialMediaUse_other_apps_2_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_other_apps_3_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_3_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_3_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_3_TimeOnApp',
            title: "How much time do you think you spend using {MTES_SocialMediaUse_other_apps_3_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_other_apps_3_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_3_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_3_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_3_CheckingApp',
            title: "How often do you check {MTES_SocialMediaUse_other_apps_3_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
          },
    {
      name: 'MTES_SocialMediaUse_other_apps_4_TimeOnApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_4_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_4_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_4_TimeOnApp',
            title: "How much time do you think you spend using {MTES_SocialMediaUse_other_apps_4_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Rarely ever used', '5-10 minutes', '10-20 minutes', '20-40 minutes', '40-60 minutes', '1-2 hours', '2-3 hours', '3-5 hours', 'Over 5 hours'],
          },
      ]
    },
    {
      name: 'MTES_SocialMediaUse_other_apps_4_CheckingApp_page',
      elements: [
          {
            visibleIf: "{MTES_SocialMediaUse_Platform_other_apps_endorsement} != ('Never use it') && {MTES_SocialMediaUse_other_apps_4_usage} != ('N/A') && {MTES_SocialMediaUse_other_apps_4_usage} != ('Never use it')",
            type: 'radiogroup',
            name: 'MTES_SocialMediaUse_other_apps_4_CheckingApp',
            title: "How often do you check {MTES_SocialMediaUse_other_apps_4_name} each day?", 
            isRequired: true,
            colCount: 1,
            choices: ['Never', 'Once per day', '2-4 times per day', '5-10 times per day', 'Once per hour', 'About every 30 minutes', 'About every 15 minutes', 'About every 10 minutes', 'About every 5 minutes', 'About every 1-2 minutes'],
          },
      ]
    }]
  }
}







//------------------------------------//
// MTES Public Updates
//------------------------------------//
var MTES_PublicUpdates = {
  data: {
    trial_id: "MTES_PublicUpdates"
},
      type: jsPsychSurvey,
      survey_json: {
      showQuestionNumbers: false,
      completeText: 'Next',
      elements:
      [
        {
          type: 'radiogroup',
          title: "How often do you *post something new about yourself* on a social media platform (Tweet, Instagram post, Facebook status update, etc.)", 
          choices: ['Never', 'I rarely post personal updates', 'A few times a month', 'A few times a week', '1-3 times per day', '3-5 times per day', '5-10 times per day', 'More than 10 times per day'],
          name: 'MTES_PublicUpdates_NewPosts', 
          isRequired: true,
       },
       {
          type: 'radiogroup',
          title: "How often do you *share or repost something* you encountered on a social media platform (e.g., repost, reTweet, reGram, Facebook share, etc.)", 
          choices: ['Never', 'I rarely post personal updates', 'A few times a month', 'A few times a week', '1-3 times per day', '3-5 times per day', '5-10 times per day', 'More than 10 times per day'],
          name: 'MTES_PublicUpdates_Reposts', 
          isRequired: true,
       }
    ]
}
};



//------------------------------------//
// Smartphone Addiction Subscale
//------------------------------------//
var MTES_SAS = {
  data: {
    trial_id: "MTES_SAS"
},
  type: jsPsychSurvey,
  survey_json: {
  showQuestionNumbers: false,
  title: "Thinking about your smartphone use, please indicate the degree to which you agree with each of the following statements.",
  completeText: 'Next',
  elements:
    [
      {
        type: 'radiogroup',
        title: "I have missed planned work due to smartphone use", 
        name: 'MTES_SAS_MissedPlans', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      }, 
      {
        type: 'radiogroup',
        title: "I have a hard time concentrating in class, while doing assignments, or while working due to smartphone use", 
        name: 'MTES_SAS_Concentrating', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I feel pain in my wrists or at the back of my neck while using a smartphone", 
        name: 'MTES_SAS_Pain', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I can't stand not having my smartphone", 
        name: 'MTES_SAS_Separation', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I feel impatient and unsettled when I am not holding my smartphone", 
        name: 'MTES_SAS_Impatient', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I have my smartphone in my mind even when I am not using it", 
        name: 'MTES_SAS_Thoughts', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I will never give up using my smartphone, even when my daily life is already greatly affected by it", 
        name: 'MTES_SAS_Addiction', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I constantly check my smartphone so as not to miss messages or something posted on social media", 
        name: 'MTES_SAS_FOMO', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "I use my smartphone for longer priods than I intend", 
        name: 'MTES_SAS_Time', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "The people around me tell me that I use my smartphone too much", 
        name: 'MTES_SAS_Social', 
        choices: ['Strongly Disagree', 'Disagree', 'Weakly Disagree', 'Weakly Agree', 'Agree', 'Strongly Agree'], 
        isRequired: true,
        colCount: 0
      },
  ],
},
};



//------------------------------------//
// MTES SMU questions
//------------------------------------//
var MTES_SMU = {
    data: {
    trial_id: "MTES_SMU"
},
  type: jsPsychSurvey,
  survey_json: {
    completeText: 'Next',
    pages: [
      {
        name: 'MTES_SMU',
        elements: [
          {
            type: "html",
            name: "MTES_SMU_title",
            html: "<p style='text-align: center; font-size: 2vw; line-height: 1.15;'><b>When using social media, how much of your time do you spend...</b></p>" +
            "<p style='text-align: center; font-size: 1.5vw; line-height: 1.15;'><i><b>*</b>Indicate your responses as percentage of time (must add up to 100%)</i></p>"
          },
          {
            type: 'text',
            title: 'Consuming content (scrolling, lurking, streaming)', 
            name: 'MTES_SMU_consuming_content', 
            placeholder: "Enter % of time",
            isRequired: true,
            inputType: 'number',
            min: 0,
            max: 100,
          },
          {
            type: 'text',
            title: 'Responding to other people\'s content (share, "like", comment)', 
            name: 'MTES_SMU_responding', 
            placeholder: "Enter % of time",
            isRequired: true,
            inputType: 'number',
            min: 0,
            max: 100,
          },
          {
            type: 'text',
            title: 'Posting your own content', 
            name: 'MTES_SMU_posting', 
            placeholder: "Enter % of time",
            isRequired: true,
            inputType: 'number',
            min: 0,
            max: 100,
          },
          {
            type: "expression",
            name: "MTES_SMU_total_expression",
            title: "Total (percentages should add up to 100%) *",
            expression: "{MTES_SMU_consuming_content} + {MTES_SMU_responding} + {MTES_SMU_posting}"
          }
        ]
      },
      {
        name: 'MTES_SMU_corrected',
        elements: [
          {
            visibleIf: "{MTES_SMU_total_expression} != 100",
            type: "html",
            name: "MTES_SMU_title_corrected",
            html: "<p style='text-align: center; font-size: 2vw; line-height: 1.35;'><b>The percentages in the previous page did not add up to 100%. Please re-enter the percentages and confirm that the total is equal to 100%.</b></p>" +
            "<p style='text-align: center; font-size: 2vw; line-height: 1.35;'><b>When using social media, how much of your time do you spend...</b></p>" +
            "<p style='text-align: center; font-size: 1.5vw; line-height: 1.15;'><i><b>*</b>Indicate your responses as percentage of time (must add up to 100%)</i></p>"
          },
          {
            visibleIf: "{MTES_SMU_total_expression} != 100",
            type: 'text',
            title: 'Consuming content (scrolling, lurking, streaming)', 
            name: 'MTES_SMU_consuming_content_corrected', 
            placeholder: "Enter % of time",
            isRequired: true,
            inputType: 'number',
            min: 0,
            max: 100,
          },
          {
            visibleIf: "{MTES_SMU_total_expression} != 100",
            type: 'text',
            title: 'Responding to other people\'s content (share, "like", comment)', 
            name: 'MTES_SMU_responding_corrected', 
            placeholder: "Enter % of time",
            isRequired: true,
            inputType: 'number',
            min: 0,
            max: 100,
          },
          {
            visibleIf: "{MTES_SMU_total_expression} != 100",
            type: 'text',
            title: 'Posting your own content', 
            name: 'MTES_SMU_posting_corrected',
            placeholder: "Enter % of time",
            isRequired: true,
            inputType: 'number',
            min: 0,
            max: 100,
          },
          {
            visibleIf: "{MTES_SMU_total_expression} != 100",
            type: "expression",
            name: "MTES_SMU_total_expression_corrected",
            title: "Total (percentages should add up to 100%) *",
            expression: "{MTES_SMU_consuming_content_corrected} + {MTES_SMU_responding_corrected} + {MTES_SMU_posting_corrected}"
          }
        ]
      }
    ]
  }
};
    





//------------------------------------//
// Wanting/Liking -- SCROLLING
//------------------------------------//
var wanting_liking_scrolling = {
  data: {
    trial_id: "wanting_liking_scrolling"
},
  type: jsPsychSurvey,
  survey_json: {
  showQuestionNumbers: false,
  title: "The following questions will ask about your experiences when scrolling on social media.",
  completeText: 'Next',
  elements:
    [
      {
        type: 'radiogroup',
        title: "How much do you enjoy scrolling on social media?", 
        name: 'self_enjoy_scrolling', 
        choices: ['Strongly do not enjoy', 'Do not enjoy', 'Somewhat enjoy', 'Enjoy', 'Strongly enjoy'], 
        isRequired: true,
        colCount: 0
      }, 
      {
        type: 'radiogroup',
        title: "How much do you think the average person enjoys scrolling on social media?", 
        name: 'others_enjoy_scrolling', 
        choices: ['Strongly do not enjoy', 'Do not enjoy', 'Somewhat enjoy', 'Enjoy', 'Strongly enjoy'], 
        isRequired: true,
        colCount: 0
      }, 
      {
        type: 'radiogroup',
        title: "How much do you feel the urge to scroll on social media?", 
        name: 'self_urge_scrolling', 
        choices: ['Not at all', 'Weakly', 'Somewhat', 'Moderately', 'Strongly'], 
        isRequired: true,
        colCount: 0
      },
      {
        type: 'radiogroup',
        title: "How much do you think the average person feels the urge to scroll on social media?", 
        name: 'others_urge_scrolling', 
        choices: ['Not at all', 'Weakly', 'Somewhat', 'Moderately', 'Strongly'], 
        isRequired: true,
        colCount: 0
      },
  ],
},
};



//------------------------------------//
// SCROLLING -- TIME REPORT
//------------------------------------//
var scrolling_time_report = {
  data: {
    trial_id: "scrolling_time_report"
},
  type: jsPsychSurvey,
  survey_json: {
  title: "The following questions ask about your social media scrolling behavior.",
  showQuestionNumbers: false,
  completeText: 'Next',
  elements:
    [
      {
        type: 'html',
        html: "<p><div style ='font-size:1.5vw; line-height: 1.5em;'><b>In general, how much time do you spend scrolling on social media in a single day?</b></div></p>" +
        "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
        name: 'scrolling_time_estimate_html',
      },
      {
        type: 'text',
        title: "Hours", 
        name: 'scrolling_time_estimate_hours',
        placeholder: "Enter hours in whole numbers only (e.g., 3, 14)", 
        size: 30, 
        isRequired: true,
        inputType: "number",
        min: 0,
      },
            {
        type: 'text',
        title: "Minutes", 
        name: 'scrolling_time_estimate_minutes',
        placeholder: "Enter minutes in whole numbers only (e.g., 3, 14)", 
        size: 30, 
        isRequired: true,
        inputType: "number",
        min: 0,
      },
      {
        type: 'html',
        html: "<p><div style ='font-size:1.5vw; line-height: 1.5em;'><b>In the past month, what is the maximum amount of time you have spent scrolling on social media in a single day?</b></div></p>" +
        "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
        name: 'scrolling_max_time_html',
      },
      {
        type: 'text',
        title: "Hours", 
        name: 'scrolling_max_time_hours',
        placeholder: "Enter hours in whole numbers only (e.g., 3, 14)", 
        size: 30, 
        isRequired: true,
        inputType: "number",
        min: 0,
      },
            {
        type: 'text',
        title: "Minutes", 
        name: 'scrolling_max_time_minutes',
        placeholder: "Enter minutes in whole numbers only (e.g., 3, 14)", 
        size: 30, 
        isRequired: true,
        inputType: "number",
        min: 0,
      },
  ],
},
};


//------------------------------------//
// Wanting/Liking -- DOOMSCROLLING
//------------------------------------//
var wanting_liking_doomscrolling = {
  data: {
    trial_id: "wanting_liking_doomscrolling"
  },
  type: jsPsychSurvey,
  survey_json: {
    showQuestionNumbers: false,
    title: 'The following questions will ask about doomscrolling. We define doomscrolling as "persistent consumption of timely negative information at the expense of well-being and mental health". Please keep this definition in mind while completing the following questions',
    completeText: 'Next',
    pages: [

      // --- Page 1: Endorsement and Time Distribution Slider ---
      {
        name: "doomscrolling_endorsement_and_distribution_page1",
        elements:
          [
            /*Doomscrolling frequency question*/
            {
              type: 'radiogroup',
              title: "How often do you engage in doomscrolling?",
              name: 'doomscrolling_frequency',
              choices: ['Never (I have never engaged in doomscrolling)', 'Rarely (A few times a year or less)', 'Occasionally (Multiple times per month)', 'Often (Multiple times per week)', 'Daily (At least once per day)', 'Very often (Multiple times per day)'],
              isRequired: true,
              colCount: 1
            },
          ]
        },
 

      // --- Page 2: Urge/Enjoy Questions ---
      {
        name: "doomscrolling_urge_enjoy_page2",
        elements: [
            /*Urge/enjoy questions if participants Did endorse Doomscrolling*/
            {
              visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "How much do you enjoy doomscrolling on social media?",
              name: 'self_enjoy_doomscrolling.yes',
              choices: ['Strongly do not enjoy', 'Do not enjoy', 'Somewhat enjoy', 'Enjoy', 'Strongly enjoy'],
              isRequired: true,
              colCount: 0
            },
            {
              visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "How much do you think the average person enjoys doomscrolling on social media?",
              name: 'others_enjoy_doomscrolling.yes',
              choices: ['Strongly do not enjoy', 'Do not enjoy', 'Somewhat enjoy', 'Enjoy', 'Strongly enjoy'],
              isRequired: true,
              colCount: 0
            },
            {
              visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "How much do you feel the urge to doomscroll on social media?",
              name: 'self_urge_doomscrolling.yes',
              choices: ['Not at all', 'Weakly', 'Somewhat', 'Moderately', 'Strongly'],
              isRequired: true,
              colCount: 0
            },
            {
              visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "How much do you think the average person feels the urge to doomscroll on social media?",
              name: 'others_urge_doomscrolling.yes',
              choices: ['Not at all', 'Weakly', 'Somewhat', 'Moderately', 'Strongly'],
              isRequired: true,
              colCount: 0
            },


            /*Urge/enjoy questions if participants did NOT endorse Doomscrolling*/
            {
              visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "Even though you never doomscroll, please provide an estimate of how much you think you would enjoy doomscrolling on social media.",
              name: 'self_enjoy_doomscrolling.no',
              choices: ['Strongly do not enjoy', 'Do not enjoy', 'Somewhat enjoy', 'Enjoy', 'Strongly enjoy'],
              isRequired: true,
              colCount: 0
            },
            {
              visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "Even though you never doomscroll, please provide an estimate of how much you think the average person enjoys doomscrolling on social media.",
              name: 'others_enjoy_doomscrolling.no',
              choices: ['Strongly do not enjoy', 'Do not enjoy', 'Somewhat enjoy', 'Enjoy', 'Strongly enjoy'],
              isRequired: true,
              colCount: 0
            },
            {
              visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "Even though you never doomscroll, please provide an estimate of how much you think you would feel the urge to doomscroll on social media.",
              name: 'self_urge_doomscrolling.no',
              choices: ['Not at all', 'Weakly', 'Somewhat', 'Moderately', 'Strongly'],
              isRequired: true,
              colCount: 0
            },
            {
              visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
              type: 'radiogroup',
              title: "Even though you never doomscroll, please provide an estimate of how much you think the average person feels the urge to doomscroll on social media.",
              name: 'others_urge_doomscrolling.no',
              choices: ['Not at all', 'Weakly', 'Somewhat', 'Moderately', 'Strongly'],
              isRequired: true,
              colCount: 0
            }
        ]
      },


      // --- Page 3: Time Questions ---
      {
        name: "doomscrolling_time_estimates_page3",
        elements: [
          /*Time questions if participants DID endorse Doomscrolling*/
          {
            visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
            type: 'html',
            html: "<p><div style ='font-size:1.5vw; line-height: 1.5em;'><b>In general, how much time do you spend doomscrolling on social media in a single day?</b></div></p>" +
                  "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
            name: 'doomscrolling_time_estimate_header_yes',
          },
          {
            visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Hours",
            name: 'doomscrolling_time_estimate_hours.yes',
            placeholder: "Enter hours in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },
          {
            visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Minutes",
            name: 'doomscrolling_time_estimate_minutes.yes',
            placeholder: "Enter minutes in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },
          {
            visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
            type: 'html',
            html: "<p><div style ='font-size:1.5vw; line-height: 1.5em;'><b>In the past month, what is the maximum amount of time you have spent doomscrolling on social media in a single day?</b></div></p>" +
                  "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
            name: 'doomscrolling_max_time_header.yes',
          },
          {
            visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Hours",
            name: 'doomscrolling_max_time_hours.yes',
            placeholder: "Enter hours in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },
          {
            visibleIf: "{doomscrolling_frequency} != ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Minutes",
            name: 'doomscrolling_max_time_minutes.yes',
            placeholder: "Enter minutes in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },


          /* Time questions if participants did NOT endorse Doomscrolling*/
          {
            visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
            type: 'html',
            html: "<p><div style ='font-size:1.5vw; line-height: 1.5em;'><b>Even though you never doomscroll, please provide an estimate of how much time you think you would spend doomscrolling on social media in a single day in general.</b></div></p>" +
                  "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
            name: 'doomscrolling_time_estimate_header.no',
          },
          {
            visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Hours",
            name: 'doomscrolling_time_estimate_hours.no',
            placeholder: "Enter hours in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },
          {
            visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Minutes",
            name: 'doomscrolling_time_estimate_minutes.no',
            placeholder: "Enter minutes in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },
          {
            visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
            type: 'html',
            html: "<p><div style ='font-size:1.5vw; line-height: 1.5em;'><b>Even though you never doomscroll, please provide an estimate of the maximum amount of time you think you would spend doomscrolling on social media in a single day in the past month.</b></div></p>" +
                  "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
            name: 'doomscrolling_max_time_header.no',
          },
          {
            visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Hours",
            name: 'doomscrolling_max_time_hours.no',
            placeholder: "Enter hours in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },
          {
            visibleIf: "{doomscrolling_frequency} == ('Never (I have never engaged in doomscrolling)')",
            type: 'text',
            title: "Minutes",
            name: 'doomscrolling_max_time_minutes.no',
            placeholder: "Enter minutes in whole numbers only (e.g., 3, 14)",
            size: 30,
            isRequired: true,
            inputType: "number",
            min: 0,
          },
        ]
      }
    ]
  }
}





                                                  //------------------------------------//
                                                  // Objective Measures
                                                  //------------------------------------//
var OBJ_MTES = {
  data: {
    trial_id: "OBJ_MTES"
},
  type: jsPsychSurvey,
  survey_json: {
    showQuestionNumbers: false,
    showNavigationButtons: true,
    completeText: 'Next',
    pages: [{
      name: 'OBJ_MTES_questions',
        elements: [
          {
            type: 'radiogroup',
            title: "Do you have your own smartphone?", 
            name: 'OBJ_pre_instructions_own_smartphone', 
            choices: ['Yes', 'No'], 
            colCount: 0,
            isRequired: true,
          } 
      ]
    }, 
    {
        elements: [
          {
            visibleIf: "{OBJ_pre_instructions_own_smartphone} == ('Yes')",
            type: 'radiogroup',
            title: "Do you currently have your phone with you?", 
            name: 'OBJ_pre_instructions_have_smartphone', 
            choices: ['Yes', 'No'],
            colCount: 0,
            isRequired: true,
          } 
      ]
    },
    {
        elements: [
          {
            visibleIf: "{OBJ_pre_instructions_own_smartphone} == ('Yes') && {OBJ_pre_instructions_have_smartphone} == ('Yes')",
            type: 'radiogroup',
            title: "What kind of operating system does your phone use?", 
            name: 'OBJ_operatingsystem', 
            choices: ['iOS (iPhone)', 'Android (Samsung, Google, etc.)', 'Other'],
            colCount: 0,
            isRequired: true,
          } 
      ]
    },
    /***** IPHONE *****/
        {
        elements: [
          {
            visibleIf: "{OBJ_operatingsystem} == ('iOS (iPhone)')",
            type: 'html',
            name: 'OBJ_instructions_iphone', 
            html: "<p style='text-align: center; font-size: 2vw; line-height: 1.5em;'>For the next set of questions, we would like you to take out your smartphone and follow along with the instructions.<br><br><b>1)</b> Open the <b>Screentime App</b> on your iPhone.<br><b>2)</b> Click on <b>See All App & Website Activity</b><br><b>3)</b> <u><b>Swipe right</u></b> over the section showing your <b>Daily Average</b> to get to <b>Last Week's Average</b><br></p><div style='display: flex; width: 70%: justify-content: center;'><img src='mtes_images_2025/OBJ_instructions_2025.png' style='height:40.5vh; width: 93%;'></div>"
        } 
      ]
    },
    {
        elements: [
          {
            visibleIf: "{OBJ_operatingsystem} == ('iOS (iPhone)')",
            type: 'html',
            name: 'OBJ_iphone_last_week_reminder', 
            html: "<p style='text-align: center; font-size: 2vw; line-height: 1.5em;'>Please make sure that you are filling out the survey for <b>Last Week's Average Screen Time</b>, not this week's screen time.</p>"
        } 
      ]
    },
    {
        elements: [
            {
            visibleIf: "{OBJ_operatingsystem} == ('iOS (iPhone)')",
            type: 'html',
            name: 'OBJ_iphone_screen_time_html', 
            html: "<p style='text-align: center; font-size: 2vw; line-height: 1.5em;'><b>It might be the case that your screen time hasn't been turned on.<br>Can you see your screen time data?</b></p>"
          },
          {
            visibleIf: "{OBJ_operatingsystem} == ('iOS (iPhone)')",
            type: 'radiogroup',
            name: 'OBJ_iphone_screen_time',
            titleLocation: 'hidden', 
            choices: ['Yes', 'No'],
            colCount: 0,
            isRequired: true,
          } 
      ]
    },
        {
        elements: [
          {
            visibleIf: "{OBJ_iphone_screen_time} == 'Yes'",
            type: 'html',
            name: 'OBJ_iphone_DailyAverage_html', 
            html: "<img src='mtes_images_2025/OBJ_lastweekaverage_screentime_2025.png'  style='height: 45vh; display: block; margin: auto;'><br><p style= 'text-align: center; font-size: 2vw; line-height: 1.5em;'>Enter the value shown for daily average screen time from <b>Last Week's Average</b>.</p>" +
            "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
          },
          {
            visibleIf: "{OBJ_iphone_screen_time} == 'Yes'",
            type: 'text',
            title: 'Hours', 
            placeholder: 'Enter hours in whole numbers only (e.g., 3, 14)',
            name: 'OBJ_iphone_Usage_Hours', 
            size: 45,
            isRequired: true,
          }, 
          {
            visibleIf: "{OBJ_iphone_screen_time} == 'Yes'",
            type: 'text',
            title: 'Minutes', 
            placeholder: 'Enter minutes in whole numbers only (e.g., 3, 14)',
            name: 'OBJ_iphone_Usage_Minutes', 
            size: 45,
            isRequired: true,
          }, 
      ]
    },
    {
        elements: [
          {
            visibleIf: "{OBJ_iphone_screen_time} == 'Yes'",
            type: 'html',
            name: 'OBJ_iphone_AvgPickups_instructions', 
            html: "<img src='mtes_images_2025/OBJ_lastweekaverage_pickups_2025.png' style='height: 45vh; display: block; margin: auto;'><br><p style= 'text-align: center; font-size: 2vw; line-height: 1.5em;'>Now, scroll down to where the report shows '<b>Pickups</b>' (just below the categories), and make sure it's showing <b>'Last Week's Average'</b> number of pickups. If not, touch the green <b>'avg'</b> word on the right side of the graph.</p>"
          },
          {
            visibleIf: "{OBJ_iphone_screen_time} == 'Yes'",
            type: 'text',
            title: "What is the value shown for the 'Last Week's Average' number of pickups?",
            placeholder: 'Number of pickups',
            name: 'OBJ_iphone_AvgPickups', 
            size: 35,
            isRequired: true,
          }, 
      ]
    },
    {
        elements: [
          {
            visibleIf: "{OBJ_iphone_screen_time} == 'Yes'",
            type: 'html',
            name: 'OBJ_iphone_AvgNotifs_instructions', 
            html: "<img src='mtes_images_2025/OBJ_lastweekaverage_notifications_2025.png' style='height: 45vh; display: block; margin: auto;'><br><p style= 'text-align: center; font-size: 2vw; line-height: 1.5em;'>Now, scroll down to where the report shows '<b>Notifications</b>' (just below the categories), and make sure it's showing <b>'Last Week's Average'</b> number of notifications. If not, touch the green <b>'avg'</b> word on the right side of the graph.</p>"
          },
          {
            visibleIf: "{OBJ_iphone_screen_time} == 'Yes'",
            type: 'text',
            title: "What is the count shown for the 'Last Week's Average' number of notifications?", 
            placeholder: 'Number of notifications',
            name: 'OBJ_iphone_AvgNotifs', 
            size: 35,
            isRequired: true,
          }, 
      ]
    },
    /***** ANDROID *****/
    {
        elements: [
          {
            visibleIf: "{OBJ_operatingsystem} == ('Android (Samsung, Google, etc.)')",
            type: 'html',
            name: 'OBJ_instructions_android', 
            html: "<p style='text-align: center; font-size: 2vw; line-height: 1.5em;'>For the next set of questions, we would like you to take out your smartphone and follow along with the instructions.<br><br><b>1)</b> Open the <b>Digital Wellbeing</b> App on your Android device<br><b>2)</b> Click on the four-lined graph (located in the top right-hand corner).<br><b>3)</b> Please refer to your <b>Weekly Report</b><br></p>"
        } 
      ]
    },
    {
        elements: [
            {
            visibleIf: "{OBJ_operatingsystem} == ('Android (Samsung, Google, etc.)')",
            type: 'html',
            name: 'OBJ_android_screen_time_html', 
            html: "<p style='text-align: center; font-size: 2vw; line-height: 1.5em;'><b>It might be the case that your screen time hasn't been turned on.<br>Can you see your screen time data?</b></p>"
          },
          {
            visibleIf: "{OBJ_operatingsystem} == ('Android (Samsung, Google, etc.)')",
            type: 'radiogroup',
            name: 'OBJ_android_screen_time',
            titleLocation: 'hidden', 
            choices: ['Yes', 'No'],
            colCount: 0,
            isRequired: true,
          } 
      ]
    },
    {
        elements: [
          {
            visibleIf: "{OBJ_android_screen_time} == 'Yes'",
            type: 'html',
            name: 'OBJ_android_DailyAverage_html', 
            html: "<p style= 'text-align: center; font-size: 2vw; line-height: 1.5em;'>Enter the value shown for <b>Daily Average Screen Time</b> in the <b>Weekly Report</b>.</p>" +
            "<p><div style ='font-size:1.5vw; line-height: 1.5em;'>Example: __ hours and __ minutes</div></p>",
          },
          {
            visibleIf: "{OBJ_android_screen_time} == 'Yes'",
            type: 'text',
            title: 'Hours', 
            placeholder: 'Enter hours in whole numbers only (e.g., 3, 14)',
            name: 'OBJ_android_Usage_Hours', 
            size: 45,
            isRequired: true,
          }, 
          {
            visibleIf: "{OBJ_android_screen_time} == 'Yes'",
            type: 'text',
            title: 'Minutes', 
            placeholder: 'Enter minutes in whole numbers only (e.g., 3, 14)',
            name: 'OBJ_android_Usage_Minutes', 
            size: 45,
            isRequired: true,
          }, 
      ]
    },
  ]
}
}





//------------------------------------//
// MTES Timeline
//------------------------------------//
var MTES_survey = {
      timeline: [MTES_intro, MTES_PhoneChecking, MTES_SocialMediaUse_Platforms_procedure, MTES_PublicUpdates, MTES_SAS, MTES_SMU, wanting_liking_scrolling, scrolling_time_report, wanting_liking_doomscrolling, OBJ_MTES]
};