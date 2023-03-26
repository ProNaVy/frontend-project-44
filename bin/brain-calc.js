#!/usr/bin/env node

import brainCalc from '../src/games/brainCalc.js';
import greetings from '../src/cli.js';

const name = greetings();
brainCalc(name);
