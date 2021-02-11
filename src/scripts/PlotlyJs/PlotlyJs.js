import init from './init';
import { createAppendData, createDropData } from './wrapper';

const graphEl = document.getElementById('app');

init(graphEl);
export const appendData = createAppendData(graphEl, 0);
export const dropData = createDropData(graphEl, 0);
