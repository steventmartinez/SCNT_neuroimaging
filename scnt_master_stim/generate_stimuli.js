const fs = require('fs');
const path = require('path');

// IMPORTANT: Your tiktok_stim.js file should end with this line:
// if (typeof module !== 'undefined' && module.exports) { module.exports = tiktok_stim; }

//------------------------------------//
// Utility Functions
//------------------------------------//

function shuffle(array) {
    let shuffled = [...array];
    let currentIndex = shuffled.length, randomIndex;
    
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex], shuffled[currentIndex]];
    }
    
    return shuffled;
}

function shuffleArray(array) {
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

function sampleWithoutReplacement(data, k) {
    const n = data.length;
    
    if (k <= 0) return { sampled: [], remaining: [...data] };
    if (k >= n) return { sampled: [...data], remaining: [] };

    let indices = Array.from({ length: n }, (_, i) => i);

    for (let i = 0; i < k; i++) {
        const j = i + Math.floor(Math.random() * (n - i));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const sampleIndices = indices.slice(0, k);
    const remainingIndices = indices.slice(k);

    const sampled = sampleIndices.map(index => data[index]);
    const remaining = remainingIndices.map(index => data[index]);

    return { sampled, remaining };
}

function checkConstraint(array, maxConsecutive = 3) {
    if (array.length === 0) return true;
    
    let consecutiveCount = 0;
    let lastType = null;
    
    const getRunType = (runObject) => runObject.conceptual_novelty_level;
    
    for (let i = 0; i < array.length; i++) {
        const currentType = getRunType(array[i]);
        
        if (currentType === lastType) {
            consecutiveCount++;
        } else {
            consecutiveCount = 1;
            lastType = currentType;
        }
        
        if (consecutiveCount > maxConsecutive) {
            return false;
        }
    }
    
    return true;
}

function shuffleArrayConstrainedFY(array, maxConsecutive = 3) {
    let shuffled_repeats;
    let isValid;
    let attempts = 0;
    
    do {
        shuffled_repeats = shuffleArray(array);
        isValid = checkConstraint(shuffled_repeats, maxConsecutive);
        attempts++;
        
        if (attempts > 10000) { 
            console.error("Failed to find a valid sequence after 10,000 shuffles.");
            break; 
        }
    } while (!isValid);

    console.log(`Constrained shuffle successful after ${attempts} attempts.`);
    
    return shuffled_repeats;
}

//------------------------------------//
// Algorithm Icons Data
//------------------------------------//

const all_icons = [
    {
        "icon_pathway": "algorithm_icons/icon_1.png",
        "icon_repeated_pathway": "algorithm_icons/icon_1_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_2.png",
        "icon_repeated_pathway": "algorithm_icons/icon_2_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_3.png",
        "icon_repeated_pathway": "algorithm_icons/icon_3_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_4.png",
        "icon_repeated_pathway": "algorithm_icons/icon_4_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_5.png",
        "icon_repeated_pathway": "algorithm_icons/icon_5_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_6.png",
        "icon_repeated_pathway": "algorithm_icons/icon_6_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_7.png",
        "icon_repeated_pathway": "algorithm_icons/icon_7_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_8.png",
        "icon_repeated_pathway": "algorithm_icons/icon_8_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_9.png",
        "icon_repeated_pathway": "algorithm_icons/icon_9_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_10.png",
        "icon_repeated_pathway": "algorithm_icons/icon_10_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_11.png",
        "icon_repeated_pathway": "algorithm_icons/icon_11_repeated.png",
    },
    {
        "icon_pathway": "algorithm_icons/icon_12.png",
        "icon_repeated_pathway": "algorithm_icons/icon_12_repeated.png",
    }
];

//------------------------------------//
// Main Randomization Function
//------------------------------------//

function generateStimuliForParticipant(tiktok_stim, participantID) {
    console.log(`\n=== Generating stimuli for Participant ${participantID} ===`);
    
    // Randomize algorithm icons for this participant
    const all_icons_randomized = shuffle([...all_icons]);
    const [algorithm_1_icon, algorithm_2_icon, algorithm_3_icon, algorithm_4_icon, 
           algorithm_5_icon, algorithm_6_icon, algorithm_7_icon, algorithm_8_icon, 
           algorithm_9_icon, algorithm_10_icon, algorithm_11_icon, algorithm_12_icon] = all_icons_randomized;
    
    // Organize stim based on categories
    const art = tiktok_stim.filter(x => x.category === 'art');
    const beauty_contouring = tiktok_stim.filter(x => x.category === 'beauty_contouring');
    const ceramics = tiktok_stim.filter(x => x.category === 'ceramics');
    const coffee_art = tiktok_stim.filter(x => x.category === 'coffee_art');
    const cookie_recipes = tiktok_stim.filter(x => x.category === 'cookie_recipes');
    const dance = tiktok_stim.filter(x => x.category === 'dance');
    const diy_bracelets = tiktok_stim.filter(x => x.category === 'diy_bracelets');
    const dogs = tiktok_stim.filter(x => x.category === 'dogs');
    const kitchen_renovations = tiktok_stim.filter(x => x.category === 'kitchen_renovations');
    const ootd = tiktok_stim.filter(x => x.category === 'ootd');
    const piano = tiktok_stim.filter(x => x.category === 'piano');
    const rock_climbing = tiktok_stim.filter(x => x.category === 'rock_climbing');
    const skateboarding = tiktok_stim.filter(x => x.category === 'skateboarding');
    const soccer_juggling = tiktok_stim.filter(x => x.category === 'soccer_juggling');
    const travel = tiktok_stim.filter(x => x.category === 'travel');
    const unboxing = tiktok_stim.filter(x => x.category === 'unboxing');
    const workout = tiktok_stim.filter(x => x.category === 'workout');

    // Randomize category arrays
    const dance_randomized = shuffle(dance);
    const art_randomized = shuffle(art);
    const beauty_contouring_randomized = shuffle(beauty_contouring);
    const ceramics_randomized = shuffle(ceramics);
    const coffee_art_randomized = shuffle(coffee_art);
    const cookie_recipes_randomized = shuffle(cookie_recipes);
    const diy_bracelets_randomized = shuffle(diy_bracelets);
    const dogs_randomized = shuffle(dogs);
    const kitchen_renovations_randomized = shuffle(kitchen_renovations);
    const ootd_randomized = shuffle(ootd);
    const piano_randomized = shuffle(piano);
    const rock_climbing_randomized = shuffle(rock_climbing);
    const skateboarding_randomized = shuffle(skateboarding);
    const soccer_juggling_randomized = shuffle(soccer_juggling);
    const travel_randomized = shuffle(travel);
    const unboxing_randomized = shuffle(unboxing);
    const workout_randomized = shuffle(workout);

    // Low conceptual novelty organization
    const all_cats = [
        kitchen_renovations_randomized, soccer_juggling_randomized, 
        unboxing_randomized, beauty_contouring_randomized, art_randomized, 
        skateboarding_randomized, dogs_randomized, coffee_art_randomized, 
        ceramics_randomized, cookie_recipes_randomized, travel_randomized, 
        rock_climbing_randomized, diy_bracelets_randomized, piano_randomized, 
        workout_randomized
    ];

    const { sampled: six_low, remaining: high_arrays } = sampleWithoutReplacement(all_cats, 6);
    const six_low_randomized = shuffle(six_low);

    const low_conceptual_novelty_1 = six_low_randomized[0].slice(0, 6);
    const low_conceptual_novelty_2 = six_low_randomized[1].slice(0, 6);
    const low_conceptual_novelty_3 = six_low_randomized[2].slice(0, 6);
    const low_conceptual_novelty_4 = six_low_randomized[3].slice(0, 6);
    const low_conceptual_novelty_5 = six_low_randomized[4].slice(0, 6);
    const low_conceptual_novelty_6 = six_low_randomized[5].slice(0, 6);

    // High conceptual novelty organization
    const all_sampled_videos = [];

    for (let cycle = 0; cycle < 6; cycle++) {
        const high_arrays_randomized = shuffle(high_arrays);
        const high_conceptual_novelty_subsets = high_arrays_randomized.slice(0, 6);
        const sampled_videos_in_cycle = [];

        for (let i = 0; i < high_conceptual_novelty_subsets.length; i++) {
            let video_array = high_conceptual_novelty_subsets[i];

            if (video_array.length > 0) {
                let randomized_video_array = shuffle(video_array);
                let sampled_video = randomized_video_array.splice(0, 1)[0];
                sampled_videos_in_cycle.push(sampled_video);

                let original_index = high_arrays.findIndex(arr => arr === video_array);
                if (original_index !== -1) {
                    high_arrays[original_index] = randomized_video_array;
                }
                high_conceptual_novelty_subsets[i] = randomized_video_array;
            }
        }

        all_sampled_videos.push(sampled_videos_in_cycle);
    }

    const [high_conceptual_novelty_1, high_conceptual_novelty_2, 
           high_conceptual_novelty_3, high_conceptual_novelty_4, 
           high_conceptual_novelty_5, high_conceptual_novelty_6] = all_sampled_videos;

    // Combine all runs with constraint
    const all_twelve_runs = [
        { algorithm_icon: algorithm_1_icon, conceptual_novelty_level: 'low', run: low_conceptual_novelty_1 },
        { algorithm_icon: algorithm_2_icon, conceptual_novelty_level: 'low', run: low_conceptual_novelty_2 },
        { algorithm_icon: algorithm_3_icon, conceptual_novelty_level: 'low', run: low_conceptual_novelty_3 },
        { algorithm_icon: algorithm_4_icon, conceptual_novelty_level: 'low', run: low_conceptual_novelty_4 },
        { algorithm_icon: algorithm_5_icon, conceptual_novelty_level: 'low', run: low_conceptual_novelty_5 },
        { algorithm_icon: algorithm_6_icon, conceptual_novelty_level: 'low', run: low_conceptual_novelty_6 },
        { algorithm_icon: algorithm_7_icon, conceptual_novelty_level: 'high', run: high_conceptual_novelty_1 },
        { algorithm_icon: algorithm_8_icon, conceptual_novelty_level: 'high', run: high_conceptual_novelty_2 },
        { algorithm_icon: algorithm_9_icon, conceptual_novelty_level: 'high', run: high_conceptual_novelty_3 },
        { algorithm_icon: algorithm_10_icon, conceptual_novelty_level: 'high', run: high_conceptual_novelty_4 },
        { algorithm_icon: algorithm_11_icon, conceptual_novelty_level: 'high', run: high_conceptual_novelty_5 },
        { algorithm_icon: algorithm_12_icon, conceptual_novelty_level: 'high', run: high_conceptual_novelty_6 }
    ];

    const all_twelve_runs_randomized = shuffleArrayConstrainedFY(all_twelve_runs, 3);
    const run1_stim = all_twelve_runs_randomized.slice(0, 7);
    const run2_stim = all_twelve_runs_randomized.slice(6, 12);

    return {
        participantID,
        run1_stim,
        run2_stim
    };
}

//------------------------------------//
// File Generation Functions
//------------------------------------//

function writeRunFile(runData, participantID, runNumber, outputDir) {
    const fileName = `participant_${participantID}_run${runNumber}.js`;
    const filePath = path.join(outputDir, fileName);
    
    const fileContent = `// Participant ${participantID} - Run ${runNumber}
// Generated: ${new Date().toISOString()}

var run${runNumber}_stim = ${JSON.stringify(runData, null, 2)};

// Export for Node.js (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = run${runNumber}_stim;
}
`;

    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`✓ Created: ${fileName}`);
    
    return fileName;
}

function generateAllParticipants(tiktok_stim, numParticipants = 10, outputDir = './generated_stimuli') {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const participantIndex = [];

    for (let i = 1; i <= numParticipants; i++) {
        const participantID = String(i).padStart(2, '0');
        
        // Generate stimuli for this participant
        const stimuli = generateStimuliForParticipant(tiktok_stim, participantID);
        
        // Write run files
        const run1File = writeRunFile(stimuli.run1_stim, participantID, 1, outputDir);
        const run2File = writeRunFile(stimuli.run2_stim, participantID, 2, outputDir);
        
        // Add to index
        participantIndex.push({
            participant_ID: participantID,
            run_1: `./${run1File}`,
            run_2: `./${run2File}`
        });
    }

    // Write master index file
    const indexPath = path.join(outputDir, 'participant_index.js');
    const indexContent = `// Master Participant Index
// Generated: ${new Date().toISOString()}

var participant_index = ${JSON.stringify(participantIndex, null, 2)};

// Export for Node.js (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = participant_index;
}
`;

    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log(`\n✓ Created master index: participant_index.js`);
    console.log(`\n=== Generation Complete ===`);
    console.log(`Total participants: ${numParticipants}`);
    console.log(`Total files created: ${numParticipants * 2 + 1}`);
    console.log(`Output directory: ${outputDir}`);
}

//------------------------------------//
// Main Execution
//------------------------------------//

// USAGE:
// 1. Make sure you have your tiktok_stim data loaded
// 2. Run: node generate_stimuli.js

// Example (uncomment and modify as needed):
/*
const tiktok_stim = require('./tiktok_stim.js');
generateAllParticipants(tiktok_stim, 10, './generated_stimuli');
*/

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateStimuliForParticipant,
        generateAllParticipants,
        writeRunFile
    };
}