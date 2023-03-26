#!/usr/bin/env node
import { brainGcd } from '../src/games/brainGcd.js';
import greetings from '../src/cli.js';

const name = greetings();
brainGcd(name);
