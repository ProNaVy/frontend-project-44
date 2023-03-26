#!/usr/bin/env node

import brainEven from '../src/games/brainEven.js';
import greetings from '../src/cli.js';

const name = greetings();
brainEven(name);
