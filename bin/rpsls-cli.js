#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

const argv = minimist(process.argv.slice(2));

if (argv.h || argv.help) {
    console.log(
    `Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
        -h, --help        display this help message and exit
        -r, --rules       display the rules and exit
    
    Examples:
        node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
        node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`
    )
    process.exit(0);
}

if (argv.r || argv.rules) {
    console.log(
    `Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`
    );
    process.exit(0);
}

var game_result;
if (argv._[0]) {
	game_result = rpsls(argv._[0]);
} else {
	game_result = rpsls();
}

if (game_result === undefined) {
	console.error(`${argv._[0]} is out of range. Please choose rock, paper, scissors, lizard, or spock.`);
} else {
	console.log(JSON.stringify(game_result));
}