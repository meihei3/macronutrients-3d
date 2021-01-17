import init from './init';
import { createAppendData } from './wrapper';

const graphEl = document.getElementById('app');

init(graphEl);
export const appendData = createAppendData(graphEl, 0);
