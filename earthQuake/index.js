import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';
import Quake from './Quake.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();