var EES = {
  data: {
    trial_id: "EES"
},
  type: jsPsychSurvey,
  survey_json: {
    showQuestionNumbers: false,
    showNavigationButtons: true,
    completeText: 'Next',
    pages: [{
      name: 'EES_survey',
      elements: [
      {
        type: 'html',
        html: "<p style='text-align: center; font-size: 2.5vw; line-height: 1.5em;'><b>For the following statements, please select a single choice that best describes your level of agreement.</b></p>",
        name: 'EES_instructions',
      },
      {
            type: 'radiogroup',
            title: "If I were on social media right now, I would be constantly exploring videos of different topics/users.", 
            name: 'EES_exploration.constantly_exploring', 
            choices: ['Strongly Disagree', 'Disagree', 'Undecided', 'Agree', 'Strongly Agree'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "If I were on social media right now, I would be looking for something completely new.", 
            name: 'EES_exploration.new', 
            choices: ['Strongly Disagree', 'Disagree', 'Undecided', 'Agree', 'Strongly Agree'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "If I were on social media right now, I would be spending time exploring different topics/users that I have not seen before.", 
            name: 'EES_exploration.not_seen_before', 
            choices: ['Strongly Disagree', 'Disagree', 'Undecided', 'Agree', 'Strongly Agree'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "If I were on social media right now, I would be watching videos only from a few topics/users.", 
            name: 'EES_exploitation.few_topics', 
            choices: ['Strongly Disagree', 'Disagree', 'Undecided', 'Agree', 'Strongly Agree'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "If I were on social media right now, I would want to only see videos from my favorite topics/users.", 
            name: 'EES_exploitation.favorite_topics', 
            choices: ['Strongly Disagree', 'Disagree', 'Undecided', 'Agree', 'Strongly Agree'], 
            colCount: 0,
            isRequired: true,
          },
          {
            type: 'radiogroup',
            title: "If I were on social media right now, I would be concentrating on watching only videos from a few topics/users.", 
            name: 'EES_exploitation.concentrating', 
            choices: ['Strongly Disagree', 'Disagree', 'Undecided', 'Agree', 'Strongly Agree'], 
            colCount: 0,
            isRequired: true,
          },
      ]
    },

    {
        elements: [
          {
            type: 'html',
            html: "<p style='text-align: center; font-size: 2.7vw; line-height: 1.5em;'><b>You can search for new things to watch or do (exploration) and/or things you already know you enjoy (exploitation).</b></p>",
            name: 'MTES_SocialMediaUse_Platform_title_question',
          },
          {
            type: 'radiogroup',
            title: "Currently, which mood are you more in, exploration or exploitation?", 
            name: 'EES_continuum', 
            choices: ['Only exploitation', 'Mostly exploitation', 'Bit of both', 'Mostly exploration', 'Only exploration'], 
            colCount: 0,
            isRequired: true,
          }, 
    ]
    },
]
  }
}


//------------------------------------//
// EES Timeline
//------------------------------------//
var EES_procedure = {
      timeline: [EES]
};