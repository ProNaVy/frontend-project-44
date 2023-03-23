#!/usr/bin/env node
import greetings from '../src/cli.js';
import { brainEven } from './brain-even.js';
import { brainCalc } from './brain-calc.js';
import { brainGcd } from './brain-gcd.js';
import { brainProgression } from './brain-progression.js';
import { brainPrime } from './brain-prime.js';

greetings();
brainEven();
brainCalc();
brainGcd();
brainProgression();
brainPrime();
