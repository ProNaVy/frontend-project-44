#!/usr/bin/env node
import greetings from '../src/cli.js';
import { brainEven } from './brain-even.js';
import { brainCalc } from './brain-calc.js';
import brainGcd from './brain-gcd.js';
import { brainProgression } from './brain-progression.js';
import { brainPrime } from './brain-prime.js';

const name = greetings();
brainEven(name);
brainCalc(name);
brainGcd(name);
brainProgression(name);
brainPrime(name);
