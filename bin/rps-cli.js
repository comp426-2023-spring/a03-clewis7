#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from '../lib/rpsls.js';

const argv = minimist(process.argv.slice(2));

if (argv.h || argv.help) {
   console.log(
    `Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)

        -h, --help      display this help message and exit
        -r, --rules     display the rules and exit

    Examples:
        node-rps        Return JSON with single player RPS result.
                        e.g. {"player":"rock"}
        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    process.exit(0);
}

const rules = 
`Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`;

if (argv.r || argv.rules) {
    console.log(rules);
    process.exit(0);
}

var game_result;
if (argv._[0]) {
	game_result = rps(argv._[0]);
} else {
	game_result = rps();
}

if (game_result === undefined) {
	console.error(`${argv._[0]} is out of range. Please choose rock, paper, or scissors.`);
    console.log(rules);
} else {
	console.log(JSON.stringify(game_result));
}

