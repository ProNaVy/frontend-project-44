#!/usr/bin/env node

import { brainPrime } from '../src/games/brainPrime.js';
import greetings from '../src/cli.js';


const name = greetings();
brainPrime(name);
