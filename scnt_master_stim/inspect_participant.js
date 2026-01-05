// inspect_participant.js
const participantID = '01'; // Change this to inspect different participants
const runNumber = 'both'; // Options: 1, 2, or 'both'

// Determine which runs to load
const runsToInspect = runNumber === 'both' ? [1, 2] : [runNumber];

runsToInspect.forEach(currentRun => {
    const runData = require(`./generated_stimuli/participant_${participantID}_run${currentRun}.js`);
    
    console.log(`\n📊 Participant ${participantID} - Run ${currentRun}:`);
    console.log(`Total blocks: ${runData.length}`);
    
    runData.forEach((runObj, index) => {
        // Get unique categories in this video feed
        const categories = [...new Set(runObj.run.map(v => v.category))];
        
        console.log(`\nVideo Feed ${index + 1}:`);
        console.log(`  Type: ${runObj.conceptual_novelty_level}`);
        console.log(`  Algorithm Icon: ${runObj.algorithm_icon.icon_pathway}`);
        console.log(`  Icon (Repeated): ${runObj.algorithm_icon.icon_repeated_pathway}`);
        console.log(`  Number of videos: ${runObj.run.length}`);
        console.log(`  Categories (${categories.length}): ${categories.join(', ')}`);
        console.log(`  Video names: ${runObj.run.map(v => v.video_name_count).join(', ')}`);
    });
    
    console.log(''); // Extra line break between runs
});