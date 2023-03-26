#!/usr/bin/env node

import brainProgression from '../src/games/brainProgression.js';
import greetings from '../src/cli.js';

const name = greetings();
brainProgression(name);
