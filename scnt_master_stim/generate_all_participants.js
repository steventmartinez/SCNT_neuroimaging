// generate_all_participants.js
const tiktok_stim = require('./tiktok_stim.js');
const { generateAllParticipants } = require('./generate_stimuli.js');

// Generate stimuli for 40 participants
generateAllParticipants(tiktok_stim, 40, './generated_stimuli');

console.log('\n All participant files generated!');
